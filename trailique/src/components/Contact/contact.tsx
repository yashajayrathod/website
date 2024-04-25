"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios"; // Import Axios for making HTTP requests
import sendMail from "../../helpers/sendMail";
import { contactFormTemplate } from "../../templates/contactFormTemplate";
import { emailSubjects } from "../../templates/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

interface FormData {
  firstName?: string;
  lastName?: string;
  email?: string;
  countryCode?: string;
  phone?: string;
  message?: string;
  companyName?: string;
  companySize?: string;
  otherOption?: string;
  category?: string;
  subcategory?: string;
  option?: string;
}

const schema = yup.object().shape({
  firstName: yup
    .string()
    .required("First name is required")
    .min(3, "First name must be at least 3 characters")
    .max(50, "First name cannot exceed 50 characters"),
  lastName: yup
    .string()
    .required("Last name is required")
    .min(3, "Last name must be at least 3 characters")
    .max(50, "Last name cannot exceed 50 characters"),
  email: yup
    .string()
    .email("Invalid email")
    .required(
      "Please check and provide your correct email. We only use it to update you about your 1:1 meeting with us",
    ),
  countryCode: yup.string().required("Country code is required"),
  phone: yup
    .string()
    .matches(
      /^[0-9]+$/,
      "Please re-check your number and key in again. We need this to book a 1:1 call with you, also kindly enter only numbers for the phone number",
    )
    .min(9, "Phone number must be at least 9 characters long")
    .max(15, "Phone number cannot exceed 15 characters")
    .required(
      "Please re-check your number and key in again. We need this to book a 1:1 call with you.",
    ),

  companyName: yup.string().required("Company name is required"),
  companySize: yup.string().required("Company size is required"),
  category: yup.string().required("Please select a category"),
  subcategory: yup.string().when("category", {
    is: (val) => val === "Product" || val === "Service",
    then: () => yup.string().required("Please select a sub-category"),
    otherwise: () => yup.string().notRequired(), // Allow empty string for other categories
  }),
  otherOption: yup.string().when("category", {
    is: (val) => val === "Other",
    then: () => yup.string().required("Please select an idea option"),
    otherwise: () => yup.string().notRequired(), // Allow empty string for other categories
  }),
  message: yup.string().when("category", {
    is: "Other",
    then: () =>
      yup
        .string()
        .required("Please share your thoughts to book a 1:1 session with you")
        .test(
          "wordCount",
          "Please share your thoughts with at least 4 words.",
          (value) => {
            if (!value) return false; // Return false if value is empty
            const words = value.trim().split(/\s+/);
            return words.length >= 4; // Check if there are at least 4 words
          },
        ),
    otherwise: () => yup.string(), // Allow empty string for other categories
  }),
  option: yup.string().required("Please select a role option"),
});

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const [subcategory, setSubcategory] = useState("");
  const [error, setError] = useState([]);
  const [success, setSuccess] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  // const brevoApiKey = process.env.brevoKey;

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const categoryValue = e.target.value;
    setCategory(categoryValue);
    setSelectedCategory(e.target.value);
    setSubcategory("");
    // Manually trigger validation for the category field
    setValue("category", categoryValue, { shouldValidate: true });
    setValue("subcategory", "", { shouldValidate: true });
  };

  const onSubmit = async (data: FormData) => {
    try {
      // console.log('Form data:', data);
      // Make API call to submit form data
      const response = await axios.post("/api/contact", data);

      // Check if the API call was successful
      if (response.data.success) {
        // If successful, set success state to true
        setSuccess(true);
        console.log(response);

        const htmlContent = contactFormTemplate
          .replace(/{{ fullname }}/g, data.firstName + " " + data.lastName)
          .replace(/{{ email }}/g, data.email)
          .replace(/{{ phone }}/g, data.countryCode + " " + data.phone)
          .replace(/{{ companyname }}/g, data.companyName)
          .replace(/{{ companysize }}/g, data.companySize)
          .replace(/{{ role }}/g, data.option)
          .replace(/{{ category }}/g, data.category)
          .replace(
            /{{ subcategory }}/g,
            data.category === "Other" ? data.otherOption : data.subcategory,
          )
          .replace(/{{ message }}/g, data.message ? data.message : "");

        const emailResponse = await sendMail(
          process.env.toEmail,
          process.env.toName,
          data.email,
          data.firstName,
          emailSubjects["contactForm"],
          htmlContent,
          axios,
        );

        if (emailResponse.status === 201) {
          console.log("Email sent successfully!");
          window.scrollTo(0, 0);
          setFormSubmitted(true);
        } else {
          console.error("Error sending email:", emailResponse.data);
        }
        //console.log(emailResponse);
      } else {
        // Handle the case where the API call was not successful
        console.error("Error submitting form:", response.data.msg);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      <section
        id="contact"
        className="mt-9 overflow-hidden py-16 md:py-20 lg:py-28"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
              {!formSubmitted ? (
                <div className="mb-12 rounded-md bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
                  <h2 className="mb-4 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                    We would be thrilled to speak with you shortly!
                  </h2>
                  <p className="mb-4 text-base font-medium text-body-color">
                    Book a meeting with us by sparing a couple of minutes
                  </p>
                  <label className="mb-2 block text-lg font-bold text-blue-500 dark:text-blue-400">
                    About you
                  </label>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="-mx-4 flex flex-wrap">
                      <div className="w-full px-4 md:w-1/2">
                        <div className="mb-4">
                          <label
                            htmlFor="firstname"
                            className="mb-1 block text-sm font-medium text-dark dark:text-white"
                          >
                            First Name
                          </label>
                          <input
                            {...register("firstName")}
                            type="text"
                            id="firstname"
                            placeholder=" John"
                            className="border-stroke w-full rounded-md border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                            autoFocus
                          />
                          {errors.firstName && (
                            <div className="text-red-500">
                              {errors.firstName.message}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="w-full px-4 md:w-1/2">
                        <div className="mb-4">
                          <label
                            htmlFor="lastname"
                            className="mb-1 block text-sm font-medium text-dark dark:text-white"
                          >
                            Last Name
                          </label>
                          <input
                            {...register("lastName")}
                            type="text"
                            id="lastname"
                            placeholder=" Doe"
                            className="border-stroke w-full rounded-md border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                          />
                          {errors.lastName && (
                            <div className="text-red-500">
                              {errors.lastName.message}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="w-full px-4">
                        <div className="mb-4">
                          <label
                            htmlFor="email"
                            className="mb-1 block text-sm font-medium text-dark dark:text-white"
                          >
                            Business Email
                          </label>
                          <input
                            {...register("email")}
                            type="email"
                            id="email"
                            placeholder="youremail@domain.com"
                            className="border-stroke w-full rounded-md border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                          />
                          {errors.email && (
                            <div className="text-red-500">
                              {errors.email.message}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="w-full px-4">
                        <div className="mb-4">
                          <label
                            htmlFor="phone"
                            className="mb-1 block text-sm font-medium text-dark dark:text-white"
                          >
                            Phone Number
                          </label>
                          <div className="flex">
                            <select
                              {...register("countryCode")}
                              id="countryCode"
                              style={{ width: "25%" }}
                              className="border-stroke w-full rounded-md border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                              defaultValue="+91" // Set the default selected value to +91
                            >
                              <option value="+93">+93 Afghanistan</option>
                              <option value="+355">+355 Albania</option>
                              <option value="+213">+213 Algeria</option>
                              <option value="+1684">+1684 AmericanSamoa</option>
                              <option value="+376">+376 Andorra</option>
                              <option value="+244">+244 Angola</option>
                              <option value="+1264">+1264 Anguilla</option>
                              <option value="+672">+672 Antarctica</option>
                              <option value="+1268">
                                +1268 Antigua and Barbuda
                              </option>
                              <option value="+54">+54 Argentina</option>
                              <option value="+374">+374 Armenia</option>
                              <option value="+297">+297 Aruba</option>
                              <option value="+61">+61 Australia</option>
                              <option value="+43">+43 Austria</option>
                              <option value="+994">+994 Azerbaijan</option>
                              <option value="+1242">+1242 Bahamas</option>
                              <option value="+973">+973 Bahrain</option>
                              <option value="+880">+880 Bangladesh</option>
                              <option value="+1246">+1246 Barbados</option>
                              <option value="+375">+375 Belarus</option>
                              <option value="+32">+32 Belgium</option>
                              <option value="+501">+501 Belize</option>
                              <option value="+229">+229 Benin</option>
                              <option value="+1441">+1441 Bermuda</option>
                              <option value="+975">+975 Bhutan</option>
                              <option value="+387">
                                +387 Bosnia and Herzegovina
                              </option>
                              <option value="+267">+267 Botswana</option>
                              <option value="+55">+55 Brazil</option>
                              <option value="+246">
                                +246 British Indian Ocean Territory
                              </option>
                              <option value="+673">
                                +673 Brunei Darussalam
                              </option>
                              <option value="+359">+359 Bulgaria</option>
                              <option value="+226">+226 Burkina Faso</option>
                              <option value="+257">+257 Burundi</option>
                              <option value="+855">+855 Cambodia</option>
                              <option value="+237">+237 Cameroon</option>
                              <option value="+1">+1 Canada</option>
                              <option value="+238">+238 Cape Verde</option>
                              <option value="+1345">
                                +1345 Cayman Islands
                              </option>
                              <option value="+236">
                                +236 Central African Republic
                              </option>
                              <option value="+235">+235 Chad</option>
                              <option value="+56">+56 Chile</option>
                              <option value="+86">+86 China</option>
                              <option value="+61">+61 Christmas Island</option>
                              <option value="+61">
                                +61 Cocos (Keeling) Islands
                              </option>
                              <option value="+57">+57 Colombia</option>
                              <option value="+269">+269 Comoros</option>
                              <option value="+242">+242 Congo</option>
                              <option value="+682">+682 Cook Islands</option>
                              <option value="+506">+506 Costa Rica</option>
                              <option value="+225">+225 Cote d'Ivoire</option>
                              <option value="+385">+385 Croatia</option>
                              <option value="+53">+53 Cuba</option>
                              <option value="+357">+357 Cyprus</option>
                              <option value="+420">+420 Czech Republic</option>
                              <option value="+45">+45 Denmark</option>
                              <option value="+253">+253 Djibouti</option>
                              <option value="+1767">+1767 Dominica</option>
                              <option value="+1809">
                                +1809 Dominican Republic
                              </option>
                              <option value="+593">+593 Ecuador</option>
                              <option value="+20">+20 Egypt</option>
                              <option value="+503">+503 El Salvador</option>
                              <option value="+240">
                                +240 Equatorial Guinea
                              </option>
                              <option value="+291">+291 Eritrea</option>
                              <option value="+372">+372 Estonia</option>
                              <option value="+251">+251 Ethiopia</option>
                              <option value="+500">
                                +500 Falkland Islands (Malvinas)
                              </option>
                              <option value="+298">+298 Faroe Islands</option>
                              <option value="+679">+679 Fiji</option>
                              <option value="+358">+358 Finland</option>
                              <option value="+33">+33 France</option>
                              <option value="+594">+594 French Guiana</option>
                              <option value="+689">
                                +689 French Polynesia
                              </option>
                              <option value="+241">+241 Gabon</option>
                              <option value="+220">+220 Gambia</option>
                              <option value="+995">+995 Georgia</option>
                              <option value="+49">+49 Germany</option>
                              <option value="+233">+233 Ghana</option>
                              <option value="+350">+350 Gibraltar</option>
                              <option value="+30">+30 Greece</option>
                              <option value="+299">+299 Greenland</option>
                              <option value="+1473">+1473 Grenada</option>
                              <option value="+590">+590 Guadeloupe</option>
                              <option value="+1671">+1671 Guam</option>
                              <option value="+502">+502 Guatemala</option>
                              <option value="+44">+44 Guernsey</option>
                              <option value="+224">+224 Guinea</option>
                              <option value="+245">+245 Guinea-Bissau</option>
                              <option value="+592">+592 Guyana</option>
                              <option value="+509">+509 Haiti</option>
                              <option value="+379">
                                +379 Holy See (Vatican City State)
                              </option>
                              <option value="+504">+504 Honduras</option>
                              <option value="+852">+852 Hong Kong</option>
                              <option value="+36">+36 Hungary</option>
                              <option value="+354">+354 Iceland</option>
                              <option value="+91">+91 India</option>
                              <option value="+62">+62 Indonesia</option>
                              <option value="+98">
                                +98 Iran, Islamic Republic of
                              </option>
                              <option value="+964">+964 Iraq</option>
                              <option value="+353">+353 Ireland</option>
                              <option value="+44">+44 Isle of Man</option>
                              <option value="+972">+972 Israel</option>
                              <option value="+39">+39 Italy</option>
                              <option value="+1876">+1876 Jamaica</option>
                              <option value="+81">+81 Japan</option>
                              <option value="+44">+44 Jersey</option>
                              <option value="+962">+962 Jordan</option>
                              <option value="+7">+7 Kazakhstan</option>
                              <option value="+254">+254 Kenya</option>
                              <option value="+686">+686 Kiribati</option>
                              <option value="+850">
                                +850 Korea, Democratic People's Republic of
                              </option>
                              <option value="+82">
                                +82 Korea, Republic of
                              </option>
                              <option value="+965">+965 Kuwait</option>
                              <option value="+996">+996 Kyrgyzstan</option>
                              <option value="+856">
                                +856 Lao People's Democratic Republic
                              </option>
                              <option value="+371">+371 Latvia</option>
                              <option value="+961">+961 Lebanon</option>
                              <option value="+266">+266 Lesotho</option>
                              <option value="+231">+231 Liberia</option>
                              <option value="+218">
                                +218 Libyan Arab Jamahiriya
                              </option>
                              <option value="+423">+423 Liechtenstein</option>
                              <option value="+370">+370 Lithuania</option>
                              <option value="+352">+352 Luxembourg</option>
                              <option value="+853">+853 Macao</option>
                              <option value="+389">
                                +389 Macedonia, The Former Yugoslav Republic of
                              </option>
                              <option value="+261">+261 Madagascar</option>
                              <option value="+265">+265 Malawi</option>
                              <option value="+60">+60 Malaysia</option>
                              <option value="+960">+960 Maldives</option>
                              <option value="+223">+223 Mali</option>
                              <option value="+356">+356 Malta</option>
                              <option value="+692">
                                +692 Marshall Islands
                              </option>
                              <option value="+596">+596 Martinique</option>
                              <option value="+222">+222 Mauritania</option>
                              <option value="+230">+230 Mauritius</option>
                              <option value="+262">+262 Mayotte</option>
                              <option value="+52">+52 Mexico</option>
                              <option value="+691">
                                +691 Micronesia, Federated States of
                              </option>
                              <option value="+373">
                                +373 Moldova, Republic of
                              </option>
                              <option value="+377">+377 Monaco</option>
                              <option value="+976">+976 Mongolia</option>
                              <option value="+382">+382 Montenegro</option>
                              <option value="+1664">+1664 Montserrat</option>
                              <option value="+212">+212 Morocco</option>
                              <option value="+258">+258 Mozambique</option>
                              <option value="+95">+95 Myanmar</option>
                              <option value="+264">+264 Namibia</option>
                              <option value="+674">+674 Nauru</option>
                              <option value="+977">+977 Nepal</option>
                              <option value="+31">+31 Netherlands</option>
                              <option value="+599">
                                +599 Netherlands Antilles
                              </option>
                              <option value="+687">+687 New Caledonia</option>
                              <option value="+64">+64 New Zealand</option>
                              <option value="+505">+505 Nicaragua</option>
                              <option value="+227">+227 Niger</option>
                              <option value="+234">+234 Nigeria</option>
                              <option value="+683">+683 Niue</option>
                              <option value="+672">+672 Norfolk Island</option>
                              <option value="+1670">
                                +1670 Northern Mariana Islands
                              </option>
                              <option value="+47">+47 Norway</option>
                              <option value="+968">+968 Oman</option>
                              <option value="+92">+92 Pakistan</option>
                              <option value="+680">+680 Palau</option>
                              <option value="+970">
                                +970 Palestinian Territory, Occupied
                              </option>
                              <option value="+507">+507 Panama</option>
                              <option value="+675">
                                +675 Papua New Guinea
                              </option>
                              <option value="+595">+595 Paraguay</option>
                              <option value="+51">+51 Peru</option>
                              <option value="+63">+63 Philippines</option>
                              <option value="+64">+64 Pitcairn</option>
                              <option value="+48">+48 Poland</option>
                              <option value="+351">+351 Portugal</option>
                              <option value="+1939">+1939 Puerto Rico</option>
                              <option value="+974">+974 Qatar</option>
                              <option value="+40">+40 Romania</option>
                              <option value="+7">+7 Russia</option>
                              <option value="+250">+250 Rwanda</option>
                              <option value="+262">+262 Reunion</option>
                              <option value="+290">+290 Saint Helena</option>
                              <option value="+1869">
                                +1869 Saint Kitts and Nevis
                              </option>
                              <option value="+1758">+1758 Saint Lucia</option>
                              <option value="+508">
                                +508 Saint Pierre and Miquelon
                              </option>
                              <option value="+1784">
                                +1784 Saint Vincent and the Grenadines
                              </option>
                              <option value="+684">+684 Samoa</option>
                              <option value="+378">+378 San Marino</option>
                              <option value="+239">
                                +239 Sao Tome and Principe
                              </option>
                              <option value="+966">+966 Saudi Arabia</option>
                              <option value="+221">+221 Senegal</option>
                              <option value="+381">+381 Serbia</option>
                              <option value="+248">+248 Seychelles</option>
                              <option value="+232">+232 Sierra Leone</option>
                              <option value="+65">+65 Singapore</option>
                              <option value="+421">+421 Slovakia</option>
                              <option value="+386">+386 Slovenia</option>
                              <option value="+677">+677 Solomon Islands</option>
                              <option value="+252">+252 Somalia</option>
                              <option value="+27">+27 South Africa</option>
                              <option value="+211">+211 South Sudan</option>
                              <option value="+500">
                                +500 South Georgia and the South Sandwich
                                Islands
                              </option>
                              <option value="+34">+34 Spain</option>
                              <option value="+94">+94 Sri Lanka</option>
                              <option value="+249">+249 Sudan</option>
                              <option value="+597">+597 Suriname</option>
                              <option value="+47">
                                +47 Svalbard and Jan Mayen
                              </option>
                              <option value="+268">+268 Swaziland</option>
                              <option value="+46">+46 Sweden</option>
                              <option value="+41">+41 Switzerland</option>
                              <option value="+963">
                                +963 Syrian Arab Republic
                              </option>
                              <option value="+886">+886 Taiwan</option>
                              <option value="+992">+992 Tajikistan</option>
                              <option value="+255">
                                +255 Tanzania, United Republic of
                              </option>
                              <option value="+66">+66 Thailand</option>
                              <option value="+670">+670 Timor-Leste</option>
                              <option value="+228">+228 Togo</option>
                              <option value="+690">+690 Tokelau</option>
                              <option value="+676">+676 Tonga</option>
                              <option value="+1868">
                                +1868 Trinidad and Tobago
                              </option>
                              <option value="+216">+216 Tunisia</option>
                              <option value="+90">+90 Turkey</option>
                              <option value="+993">+993 Turkmenistan</option>
                              <option value="+1649">
                                +1649 Turks and Caicos Islands
                              </option>
                              <option value="+688">+688 Tuvalu</option>
                              <option value="+256">+256 Uganda</option>
                              <option value="+380">+380 Ukraine</option>
                              <option value="+971">
                                +971 United Arab Emirates
                              </option>
                              <option value="+44">+44 United Kingdom</option>
                              <option value="+1">+1 United States</option>
                              <option value="+598">+598 Uruguay</option>
                              <option value="+998">+998 Uzbekistan</option>
                              <option value="+678">+678 Vanuatu</option>
                              <option value="+58">
                                +58 Venezuela, Bolivarian Republic of
                              </option>
                              <option value="+84">+84 Viet Nam</option>
                              <option value="+1284">
                                +1284 Virgin Islands, British
                              </option>
                              <option value="+1340">
                                +1340 Virgin Islands, U.S.
                              </option>
                              <option value="+681">
                                +681 Wallis and Futuna
                              </option>
                              <option value="+967">+967 Yemen</option>
                              <option value="+260">+260 Zambia</option>
                              <option value="+263">+263 Zimbabwe</option>
                            </select>

                            <input
                              {...register("phone")}
                              type="tel"
                              id="phone"
                              placeholder="1234567890"
                              style={{ width: "75%" }}
                              className="border-stroke w-full rounded-md border bg-[#f8f8f8] px-3 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                            />
                          </div>
                          {errors.countryCode && (
                            <div className="text-red-500">
                              {errors.countryCode.message}
                            </div>
                          )}
                          {errors.phone && (
                            <div className="text-red-500">
                              {errors.phone.message}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="w-full px-4">
                        <div className="mb-2">
                          <label className="mb-2 block text-lg font-bold text-blue-500 dark:text-blue-400">
                            About your company
                          </label>
                        </div>
                      </div>
                      <div className="w-full px-4 md:w-1/2">
                        <div className="mb-4">
                          <label
                            htmlFor="companyName"
                            className="mb-1 block text-sm font-medium text-dark dark:text-white"
                          >
                            Company (or project) name
                          </label>
                          <input
                            {...register("companyName")}
                            type="text"
                            id="companyName"
                            placeholder=" Trailique Inc."
                            className="border-stroke w-full rounded-md border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                          />
                          {errors.companyName && (
                            <div className="text-red-500">
                              {errors.companyName.message}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="w-full px-4 md:w-1/2">
                        <div className="mb-4">
                          <label
                            htmlFor="companySize"
                            className="mb-1 block text-sm font-medium text-dark dark:text-white"
                          >
                            Company Size
                          </label>
                          <select
                            {...register("companySize")}
                            id="companySize"
                            className="border-stroke w-full rounded-md border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                          >
                            <option value="">Select Company Size</option>
                            <option value="1-10">1-10</option>
                            <option value="11-50">11-50</option>
                            <option value="51-200">51-200</option>
                            <option value="201-500">201-500</option>
                            <option value="501-1000">501-1000</option>
                            <option value="1000+"></option>
                            {/* Add more options as needed */}
                          </select>
                          {errors.companySize && (
                            <div className="text-red-500">
                              {errors.companySize.message}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="mb-4 w-full px-4">
                        <label className="mb-1 block text-sm font-medium text-dark dark:text-white">
                          Role
                        </label>
                        <div className="flex flex-wrap">
                          <div className="w-full md:w-1/2 lg:w-1/4">
                            {["Entreprenuer", "Manager"].map((option) => (
                              <div key={option} className="mb-1">
                                <input
                                  type="radio"
                                  id={option}
                                  name="option"
                                  value={option}
                                  {...register("option")}
                                />
                                <label htmlFor={option} className="ml-2">
                                  {option}
                                </label>
                              </div>
                            ))}
                          </div>
                          <div className="w-full md:w-1/2 lg:w-1/4">
                            {["Director", "C-Suite"].map((option) => (
                              <div key={option} className="mb-1">
                                <input
                                  type="radio"
                                  id={option}
                                  name="option"
                                  value={option}
                                  {...register("option")}
                                />
                                <label htmlFor={option} className="ml-2">
                                  {option}
                                </label>
                              </div>
                            ))}
                          </div>
                          <div className="w-full md:w-1/2 lg:w-1/4">
                            {["Executive", "Student"].map((option) => (
                              <div key={option} className="mb-1">
                                <input
                                  type="radio"
                                  id={option}
                                  name="option"
                                  value={option}
                                  {...register("option")}
                                />
                                <label htmlFor={option} className="ml-2">
                                  {option}
                                </label>
                              </div>
                            ))}
                          </div>
                          <div className="w-full md:w-1/2 lg:w-1/4">
                            {["Consultant", "Other"].map((option) => (
                              <div key={option} className="mb-1">
                                <input
                                  type="radio"
                                  id={option}
                                  name="option"
                                  value={option}
                                  {...register("option")}
                                />
                                <label htmlFor={option} className="ml-2">
                                  {option}
                                </label>
                              </div>
                            ))}
                          </div>
                        </div>
                        {errors.option && (
                          <div className="text-red-500">
                            {errors.option.message}
                          </div>
                        )}
                      </div>

                      <div className="w-full px-4 md:w-1/2">
                        <div className="mb-4">
                          <label
                            htmlFor="category"
                            className="mb-1 block text-sm font-medium text-dark dark:text-white"
                          >
                            I am interested in
                          </label>
                          <select
                            {...register("category")}
                            onChange={handleCategoryChange}
                            id="category"
                            className="border-stroke w-full rounded-md border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                          >
                            <option value="">-- Please Select --</option>
                            <option value="Product">Products</option>
                            <option value="Service">Services</option>
                            <option value="Other">Other</option>
                          </select>
                          {errors.category && (
                            <div className="text-red-500">
                              {errors.category.message}
                            </div>
                          )}
                        </div>
                      </div>
                      {(category === "Service" || category === "Product") && (
                        <div className="w-full px-4 md:w-1/2">
                          <div className="mb-4">
                            <label
                              htmlFor="subcategory"
                              className="mb-1 block text-sm font-medium text-dark dark:text-white"
                            >
                              {category === "Service" ? (
                                <span>Choose a service</span>
                              ) : (
                                <span>Choose a product</span>
                              )}
                            </label>
                            <select
                              {...register("subcategory")}
                              id="subcategory"
                              className="border-stroke w-full rounded-md border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                            >
                              {category === "Product" && (
                                <>
                                  <option value="">-- Please Select --</option>
                                  <option value="Babysitter">Babysitter</option>
                                  <option value="B2B E-Commerce">
                                    B2B E-Commerce
                                  </option>
                                  <option value="B2B2C E-Commerce">
                                    B2B2C E-Commerce
                                  </option>
                                  <option value="B2C E-Commerce">
                                    B2C E-Commerce
                                  </option>
                                  <option value="Car Wash">Car Wash</option>
                                  <option value="Carpool">Carpool</option>
                                  <option value="Child Care">Child Care</option>
                                  <option value="Cook">Cook</option>
                                  <option value="Crew Transportation">
                                    Crew Transportation
                                  </option>
                                  <option value="Delivery">Delivery</option>
                                  <option value="Digital Pharmacy">
                                    Digital Pharmacy
                                  </option>
                                  <option value="Elderly Care">
                                    Elderly Care
                                  </option>
                                  <option value="Employee Transportation">
                                    Employee Transportation
                                  </option>
                                  <option value="Event Transportation">
                                    Event Transportation
                                  </option>
                                  <option value="EV Transportation">
                                    EV Transportation
                                  </option>
                                  <option value="Field Sales Management">
                                    Field Sales Management
                                  </option>
                                  <option value="Handyman">Handyman</option>
                                  <option value="Housekeeping">
                                    Housekeeping
                                  </option>
                                  <option value="Parking Management System">
                                    Parking Management System
                                  </option>
                                  <option value="Property Management System">
                                    Property Management System
                                  </option>
                                  <option value="Rental">Rental</option>
                                  <option value="School Transportation">
                                    School Transportation
                                  </option>
                                  <option value="Security Guard (Patrolling) Management System">
                                    Security Guard (Patrolling) Management
                                    System
                                  </option>
                                  <option value="Society Management System">
                                    Society Management System
                                  </option>
                                  <option value="Taxi">Taxi</option>
                                  <option value="Telemedicine">
                                    Telemedicine
                                  </option>
                                  <option value="Truck">Truck</option>
                                  <option value="VIP Transportation">
                                    VIP Transportation
                                  </option>
                                  <option value="Visitor Management System">
                                    Visitor Management System
                                  </option>
                                  <option value="Warehouse Management System">
                                    Warehouse Management System
                                  </option>
                                  <option value="Other">Other</option>
                                </>
                              )}
                              {category === "Service" && (
                                <>
                                  <option value="">-- Please Select --</option>
                                  <option value="Discovery and Prototype">
                                    Discovery and Prototype
                                  </option>
                                  <option value="Consulting">Consulting</option>
                                  <option value="Digital Transformation">
                                    Digital Transformation
                                  </option>
                                  <option value="Mobile App Development">
                                    Mobile App Development
                                  </option>
                                  <option value="Artificial Intelligence and Machine Learning (AI, ML)">
                                    Artificial Intelligence and Machine Learning
                                    (AI, ML)
                                  </option>
                                  <option value="Site Audit">Site Audit</option>
                                  <option value="SEO Services">
                                    SEO Services
                                  </option>
                                  <option value="Global Staffing">
                                    Global Staffing
                                  </option>
                                  <option value="Product Development">
                                    Product Development
                                  </option>
                                  <option value="Enhancement and Integration">
                                    Enhancement and Integration
                                  </option>
                                  <option value="Quality Assurance/ Testing">
                                    Quality Assurance/ Testing
                                  </option>
                                  <option value="Maintenance and Support">
                                    Maintenance and Support
                                  </option>
                                  <option value="Internet of Things (IoT)">
                                    Internet of Things (IoT)
                                  </option>
                                  <option value="Blockchain">Blockchain</option>
                                  <option value="Website Development">
                                    Website Development
                                  </option>
                                  <option value="Other">Other</option>
                                </>
                              )}
                            </select>
                            {errors.subcategory && (
                              <div className="text-red-500">
                                {errors.subcategory.message}
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                      {selectedCategory === "Other" && (
                        <div className="w-full px-4">
                          <div className="mb-2">
                            <label className="mb-2 block text-lg font-bold text-blue-500 dark:text-blue-400">
                              About your idea
                            </label>
                          </div>
                          <div className="mb-3 flex flex-col">
                            <div className="mb-2">
                              <input
                                type="radio"
                                id="noIdea"
                                name="otherOption"
                                value="I don't yet have an idea"
                                {...register("otherOption")}
                              />
                              <label htmlFor="noIdea" className="ml-2">
                                I don't have an idea
                              </label>
                            </div>
                            <div className="mb-2">
                              <input
                                type="radio"
                                id="justBrowsing"
                                name="otherOption"
                                value="Just browsing and need more time or information"
                                {...register("otherOption")}
                              />
                              <label htmlFor="justBrowsing" className="ml-2">
                                Just browsing and need more time or information
                              </label>
                            </div>
                            <div className="mb-2">
                              <input
                                type="radio"
                                id="ideaButUnsure"
                                name="otherOption"
                                value="I have an idea, however, I'm unsure where to start"
                                {...register("otherOption")}
                              />
                              <label htmlFor="ideaButUnsure" className="ml-2">
                                I have an idea, however, I'm unsure where to
                                start
                              </label>
                            </div>
                            <div className="mb-1">
                              <input
                                type="radio"
                                id="readyToBuild"
                                name="otherOption"
                                value="I'm ready to build my idea now into a business"
                                {...register("otherOption")}
                              />
                              <label htmlFor="readyToBuild" className="ml-2">
                                I'm ready to build my idea now into a business
                              </label>
                            </div>
                            {errors.otherOption && (
                              <div className="text-red-500">
                                {errors.otherOption.message}
                              </div>
                            )}
                          </div>

                          <div className="mb-4">
                            <label
                              htmlFor="message"
                              className="mb-1 block text-sm font-medium text-dark dark:text-white"
                            >
                              Any message for us?
                            </label>
                            <textarea
                              {...register("message")}
                              rows={5}
                              placeholder="I want to build a product like..."
                              className="border-stroke resizec-none w-full rounded-md border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                            ></textarea>
                            {errors.message && (
                              <div className="text-red-500">
                                {errors.message.message}
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                      <div className="w-full px-4">
                        <p className="mb-4 text-lg text-dark dark:text-white">
                          By proceeding you agree to Trailique Infotech's
                          <a
                            href="/privacy"
                            className="text-primary hover:underline"
                          >
                            {" "}
                            privacy policy
                          </a>{" "}
                          and
                          <a
                            href="/terms"
                            className="text-primary hover:underline"
                          >
                            {" "}
                            terms and conditions
                          </a>
                          .
                        </p>
                        <button
                          className="rounded-md bg-blue-500 px-10 py-3 text-base font-medium text-white shadow-submit duration-300 hover:bg-blue-600 dark:shadow-submit-dark"
                          type="submit"
                          disabled={success} // Disable submit button on success
                        >
                          {success ? "Message Sent" : "Proceed"}
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              ) : (
                success && (
                  <div className="mt-4 text-green-500">
                    <p>
                      "Thank you for sharing the information! We're excited to
                      speak with you soon!"
                    </p>
                    <br />
                    <p>
                      Feel free to contact us at info@trailique.com or call us
                      on +1 (408)-493-2090, (+91) 842-1152-910 for any concerns
                      or questions.
                    </p>
                  </div>
                )
              )}
            </div>
            <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
              <div className="rounded-sm bg-white p-8 shadow-three dark:bg-gray-dark">
                <h1 className="mb-4 text-xl font-semibold text-black dark:text-white">
                  OUR ADDRESS
                </h1>

                <ul>
                  <li>
                    <h2>
                      <b>INDIA</b>
                    </h2>
                  </li>
                  <li className="mb-4 ml-6 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary">
                    <a href="https://maps.app.goo.gl/EkstZ5uSAAXWmTw69">
                      <FontAwesomeIcon
                        icon={faLocationDot}
                        className="mr-1 mt-3 text-blue-500"
                        style={{ color: "#2f75ee" }}
                      />
                      Suratwala Mark Plazzo
                      <br></br>
                      5th floor, Office no. 517, Hinjewadi phase 1, Pune-411057.
                    </a>
                  </li>

                  <li className="mb-4 ml-6 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary">
                    <a
                      href="tel:+1 (408)-493-2090"
                      className="text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      <FontAwesomeIcon
                        icon={faPhoneAlt}
                        className="mr-1 text-blue-500"
                        flip="horizontal"
                      />{" "}
                      {/* Flipping the icon */}1 (408)-493-2090
                    </a>
                    <br></br>
                    <a
                      href="tel:+1 (408)-493-2090"
                      className="text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      <FontAwesomeIcon
                        icon={faPhoneAlt}
                        className="mr-1 text-blue-500"
                        flip="horizontal"
                      />{" "}
                      {/* Flipping the icon */}
                      (+91) 842-115-2910
                    </a>
                  </li>

                  <li>
                    <h2>
                      <b>CANADA</b>
                    </h2>
                  </li>
                  <li className="mb-4 mt-3 ml-6 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary">
                    <a href="https://maps.app.goo.gl/XRstFG3Kokk1qPYU7">
                      <FontAwesomeIcon
                        icon={faLocationDot}
                        className="mr-1 text-blue-500"
                        style={{ color: "#2f75ee" }}
                      />
                      17 heatherglen drive, Brampton, ON, L6Y 0W8.
                    </a>
                  </li>

                  <li className="mb-4 ml-6 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary">
                    <a
                      href="tel:+1-365-779-2877"
                      className="text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      <FontAwesomeIcon
                        icon={faPhoneAlt}
                        className="mr-1 text-blue-500"
                        flip="horizontal"
                      />{" "}
                      {/* Flipping the icon */}
                      +1-365-779-2877
                    </a>
                  </li>

                  <li className="mb-4 text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary">
                    <h2>
                      <span className="mr-1" role="img" aria-label="email-icon">
                        📧
                      </span>
                      <a
                        href="mailto:info@trailique.com"
                        className="text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                      >
                        <b>info@trailique.com</b>
                      </a>
                    </h2>
                  </li>
                </ul>

                <div className="mt-9 transform transition-transform duration-500 hover:-translate-y-2">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.648211832768!2d73.74557675998382!3d18.589892116981726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b960040a8f1d%3A0x442ddcbba499eb66!2sSuratwala%20Mark%20Plaza%2C%20Hinjawadi%20Village%2C%20Hinjawadi%2C%20Pimpri-Chinchwad%2C%20Maharashtra%20411057!5e0!3m2!1sen!2sin!4v1710484214258!5m2!1sen!2sin"
                    width="300"
                    height="300"
                    style={{ border: 0 }}
                    title="Google Maps"
                    // loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
