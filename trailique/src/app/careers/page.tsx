import SharePost from "@/components/Career/SharePost";
import TagButton from "@/components/Career/TagButton";
import Image from "next/image";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers",
  description: "This is Carrer",
  // other metadata
};

const BlogDetailsPage = () => {
  return (
    <>
      <section className="pb-[35px] pt-[150px]">
        <div className="container-fluid">
          <div className=" flex flex-none justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <div>
              <h1 className="text-center mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">CAREERS</h1>

                <div>
                  <p className="text-center mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    At Trailique, we believe in fostering a positive and
                    inclusive work culture where every individual is empowered
                    to thrive and contribute their best. Our values and ethics
                    serve as the foundation of everything we do, guiding our
                    actions and decisions as we strive for excellence in the IT
                    industry. Join us in our journey to make a difference
                    through technology and innovation.
                  </p>
                  <div className="mb-10 w-full overflow-hidden rounded">
                    <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                      <Image
                        src="/images/blog/career.webp"
                        alt="image"
                        fill
                        className="object-cover object-center"
                      />
                    </div>
                  </div>
                  <h3 className="font-xl mb-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                    Our Values
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <div className="dark:bg-black dark:text-white dark:border border-gray-400  shadow-md rounded-lg p-6">
    <div className="flex items-center mb-4">
      <Image src="/images/career/INTEGRITY.png" width={90} height={90} alt="Integrity Icon" className="w-7 h-7 mr-2" />
      <b className="mr-2">Integrity</b>
    </div>
    <p>
      We uphold the highest ethical standards in all aspects of our work. Transparency, honesty and accountability are at the core of our operations.
    </p>
  </div>

  <div className="dark:bg-black dark:text-white dark:border border-gray-400  shadow-md rounded-lg p-6">
    <div className="flex items-center mb-4">
      <Image src="/images/career/innovation.png" width={90} height={90} alt="Innovation Icon" className="w-7 h-7 mr-2" />
      <b className="mr-1">Innovation</b>
    </div>
    <p>
      We embrace creativity and encourage thinking outside the box. Constantly pushing boundaries, we strive to find innovative solutions to complex problems.
    </p>
  </div>

  <div className="dark:bg-black dark:text-white dark:border border-gray-400   shadow-md rounded-lg p-6">
    <div className="flex items-center mb-4">
      <Image src="/images/career/COLLABORATION.png" width={90} height={90} alt="Collaboration Icon" className="w-7 h-7 mr-2" />
      <b className="mr-2">Collaboration</b>
    </div>
    <p>
      We believe in the power of teamwork. By fostering a collaborative environment, we leverage diverse perspectives to achieve collective success.
    </p>
  </div>

  <div className="dark:bg-black dark:text-white dark:border border-gray-400  shadow-md rounded-lg p-6">
    <div className="flex items-center mb-4">
      <Image src="/images/career/LEARNING.png" width={90} height={90} alt="Learning Icon" className="w-7 h-7 mr-2" />
      <b className="mr-2">Continuous Learning</b>
    </div>
    <p>
      Learning never stops at Trailique Infotech. We promote a culture of continuous improvement, providing opportunities for personal and professional growth.
    </p>
  </div>

  <div className="dark:bg-black dark:text-white dark:border border-gray-400  shadow-md rounded-lg p-6">
    <div className="flex items-center mb-4">
      <Image src="/images/career/CUSTOMR_CENTRICITY.png" width={90} height={90} alt="Customer Centricity Icon" className="w-7 h-7 mr-2" />
      <b className="mr-2">Customer Centricity</b>
    </div>
    <p>
      Our customers are at the heart of everything we do. We are dedicated to understanding their needs and delivering exceptional experiences.
    </p>
  </div>
</div>



                  
                  <h3 className="font-xl mb-10 mt-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                    Why Join Us?
                  </h3>

 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <div className="dark:bg-black dark:text-white dark:border border-gray-400  shadow-md rounded-lg p-6">
    <div className="flex items-center mb-4">
      <Image src="/images/career/POSITIVE_WORK_ENVIRONMENT.png" width={90} height={90} alt="Positive Work Environment Icon" className="w-7 h-7 mr-2" />
      <b>Positive Work Environment</b>
    </div>
    <p>
      We prioritize creating a supportive and inclusive workplace where every individual feels valued and respected.
    </p>
  </div>

  <div className="dark:bg-black dark:text-white dark:border border-gray-400  shadow-md rounded-lg p-6">
    <div className="flex items-center mb-4">
      <Image src="/images/career/CAREER_DEVELOPMENT.png" width={90} height={90} alt="Career Development Icon" className="w-7 h-7 mr-2" />
      <b>Career Development</b>
    </div>
    <p>
      At Trailique Infotech, we invest in our employees' growth and development. From senior mentorship programs to training opportunities, we provide the resources you need to excel in your career.
    </p>
  </div>

  <div className="dark:bg-black dark:text-white dark:border border-gray-400  shadow-md rounded-lg p-6">
    <div className="flex items-center mb-4">
      <Image src="/images/career/TECHNOLOGY.png" width={90} height={90} alt="Cutting-Edge Technology Icon" className="w-7 h-7 mr-2" />
      <b>Cutting-Edge Technology</b>
    </div>
    <p>
      As a leading IT company, we are at the forefront of technological innovation. Join us and be part of exciting projects that push the boundaries of what's possible.
    </p>
  </div>

  <div className="dark:bg-black dark:text-white dark:border border-gray-400  shadow-md rounded-lg p-6">
    <div className="flex items-center mb-4">
      <Image src="/images/career/IMPACTFUL_WORK.png" width={90} height={90} alt="Impactful Work Icon" className="w-7 h-7 mr-2" />
      <b>Impactful Work</b>
    </div>
    <p>
      Make a difference with your work. Whether it's developing software solutions or implementing IT infrastructure, you'll have the opportunity to contribute to projects that have a real-world impact.
    </p>
  </div>

  <div className="dark:bg-black dark:text-white dark:border border-gray-400   shadow-md rounded-lg p-6 ">
    <div className="flex items-center mb-4">
      <Image src="/images/career/WORK_LIFE_BALANCE.png" width={90} height={90} alt="Work-Life Balance Icon" className="w-7 h-7 mr-2" />
      <b>Work-Life Balance</b>
    </div>
    <p>
      We understand the importance of maintaining a healthy work-life balance. With flexible work arrangements and a supportive culture, we strive to help you achieve harmony between your professional and personal life.
    </p>
  </div>
</div>


                  
                  
                  
                  
                  
                  
                  
                  
                  <h3 className="font-xl mb-10 mt-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                    Current Opportunities
                  </h3>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Explore our current job openings below and take the next
                    step in your career journey with Trailique Infotech.
                  </p>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
  
  
                    {/* card 1 */}
  {/* card 1 */}
<div className="max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow dark:border-gray-700 dark:bg-gray-800 flex flex-col justify-between">
  <div>
    <a href="/career1">
    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
        Digital Marketing Intern
      </h5>
      <p>
        <br />
        <br />
      </p>
    </a>
  </div>
  <a
    href="/career1"
    className="flex justify-center items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
  >
    Read more
    <svg
      className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 14 10"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M1 5h12m0 0L9 1m4 4L9 9"
      />
    </svg>
  </a>
</div>

{/* card 2 */}
<div className="max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow dark:border-gray-700 dark:bg-gray-800 flex flex-col justify-between">
  <div>
    <a href="/career2">
      <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
        Business Development Executive (North America)
      </h5>
    </a>
  </div>
  <a
    href="/career2"
    className="flex justify-center items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
  >
    Read more
    <svg
      className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 14 10"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M1 5h12m0 0L9 1m4 4L9 9"
      />
    </svg>
  </a>
</div>

{/* card 3 */}
<div className="max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow dark:border-gray-700 dark:bg-gray-800 flex flex-col justify-between">
  <div>
    <a href="/career3">
      <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
Business Development Executive (Europe, Middle East,APAC)      </h5>
    </a>
  </div>
  <a
    href="/career3"
    className="flex justify-center items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
  >
    Read more
    <svg
      className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 14 10"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M1 5h12m0 0L9 1m4 4L9 9"
      />
    </svg>
  </a>
</div>

{/* card 4 */}
<div className="max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow dark:border-gray-700 dark:bg-gray-800 flex flex-col justify-between">
  <div>
    <a href="/career4">
      <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
        HR Intern
      </h5>
    </a>
  </div>
  <a
    href="/career4"
    className="flex justify-center items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
  >
   Read more
    <svg
      className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 14 10"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M1 5h12m0 0L9 1m4 4L9 9"
      />
    </svg>
  </a>
</div>

{/* card 5 */}


{/* card 5 */}
<div className="max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow dark:border-gray-700 dark:bg-gray-800 flex flex-col justify-between">
  <div>
    <a href="/career5">
      <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
        Full-Stack Developer
      </h5>
    </a>
  </div>
  <a
    href="/career5"
    className="flex justify-center items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
  >
    Read more
    <svg
      className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 14 10"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M1 5h12m0 0L9 1m4 4L9 9"
      />
    </svg>
  </a>
</div>

{/* card 6*/}
<div className="max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow dark:border-gray-700 dark:bg-gray-800 flex flex-col justify-between">
  <div>
    <a href="/career7">
      <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
        Android Developer
      </h5>
    </a>
  </div>
  <a
    href="/career7"
    className="flex justify-center items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
  >
    Read more
    <svg
      className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 14 10"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M1 5h12m0 0L9 1m4 4L9 9"
      />
    </svg>
  </a>
</div>

{/* card 7 */}
<div className="max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow dark:border-gray-700 dark:bg-gray-800 flex flex-col justify-between">
  <div>
    <a href="/career8">
      <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
        iOS Developer
      </h5>
    </a>
  </div>
  <a
    href="/career8"
    className="flex justify-center items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
  >
    Read more
    <svg
      className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 14 10"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M1 5h12m0 0L9 1m4 4L9 9"
      />
    </svg>
  </a>
</div>

                    
                  </div>
                  <p className="mb-10 mt-7 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    If you're passionate about technology and share our
                    commitment to excellence, we'd love to hear from you. Join
                    us in shaping the future of IT at Trailique Infotech.
                  </p>

                  {/* <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Semper auctor neque vitae tempus quam pellentesque nec.
                    <span className="text-primary underline dark:text-white">
                      Amet dictum sit amet justo
                    </span>
                    donec enim diam. Varius sit amet mattis vulputate enim nulla
                    aliquet porttitor. Odio pellentesque diam volutpat commodo
                    sed.
                  </p> */}
                  {/* <h3 className="font-xl mb-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                    How to Apply
                  </h3>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    To apply for any of the above positions or to express your
                    interest in joining our team, please send your resume and
                    cover letter to careers@trailique.com. Be sure to include
                    the position title in the subject line of your email.
                  </p> */}

                  {/* <ul className="mb-10 list-inside list-disc text-body-color">
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      Consectetur adipiscing elit in voluptate velit.
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      Mattis vulputate cupidatat.
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      Vulputate enim nulla aliquet porttitor odio pellentesque
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      Ligula ullamcorper malesuada proin
                    </li>
                  </ul> */}
                  <div className="relative z-10 mb-10 overflow-hidden rounded-md bg-primary bg-opacity-10 p-8 md:p-9 lg:p-8 xl:p-9">
                    <h3 className="font-xl mb-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                      How to Apply?
                    </h3>
                    <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                      To apply for any of the above positions or to express your
                      interest in joining our team, please send your resume and
                      cover letter to{" "}
                      <a
                        href="mailto:careers@trailique.com"
                        className="text-base text-blue-500 dark:text-blue-500 duration-300 hover:text-primary dark:hover:text-primary"
                      >
                        careers@trailique.com.
                      </a>{" "}
                      Be sure to include the position title in the subject line
                      of your email.
                    </p>
                    <span className="absolute left-0 top-0 z-[-1]">
                      <svg
                        width="132"
                        height="109"
                        viewBox="0 0 132 109"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.5"
                          d="M33.0354 90.11C19.9851 102.723 -3.75916 101.834 -14 99.8125V-15H132C131.456 -12.4396 127.759 -2.95278 117.318 14.5117C104.268 36.3422 78.7114 31.8952 63.2141 41.1934C47.7169 50.4916 49.3482 74.3435 33.0354 90.11Z"
                          fill="url(#paint0_linear_111:606)"
                        />
                        <path
                          opacity="0.5"
                          d="M33.3654 85.0768C24.1476 98.7862 1.19876 106.079 -9.12343 108.011L-38.876 22.9988L100.816 -25.8905C100.959 -23.8126 99.8798 -15.5499 94.4164 0.87754C87.5871 21.4119 61.9822 26.677 49.5641 38.7512C37.146 50.8253 44.8877 67.9401 33.3654 85.0768Z"
                          fill="url(#paint1_linear_111:606)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_111:606"
                            x1="94.7523"
                            y1="82.0246"
                            x2="8.40951"
                            y2="52.0609"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="white" stopOpacity="0.06" />
                            <stop
                              offset="1"
                              stopColor="white"
                              stopOpacity="0"
                            />
                          </linearGradient>
                          <linearGradient
                            id="paint1_linear_111:606"
                            x1="90.3206"
                            y1="58.4236"
                            x2="1.16149"
                            y2="50.8365"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="white" stopOpacity="0.06" />
                            <stop
                              offset="1"
                              stopColor="white"
                              stopOpacity="0"
                            />
                          </linearGradient>
                        </defs>
                      </svg>
                    </span>
                    <span className="absolute bottom-0 right-0 z-[-1]">
                      <svg
                        width="53"
                        height="30"
                        viewBox="0 0 53 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          opacity="0.8"
                          cx="37.5"
                          cy="37.5"
                          r="37.5"
                          fill="#4A6CF7"
                        />
                        <mask
                          id="mask0_111:596"
                          style={{ maskType: "alpha" }}
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="75"
                          height="75"
                        >
                          <circle
                            opacity="0.8"
                            cx="37.5"
                            cy="37.5"
                            r="37.5"
                            fill="#4A6CF7"
                          />
                        </mask>
                        <g mask="url(#mask0_111:596)">
                          <circle
                            opacity="0.8"
                            cx="37.5"
                            cy="37.5"
                            r="37.5"
                            fill="url(#paint0_radial_111:596)"
                          />
                          <g opacity="0.8" filter="url(#filter0_f_111:596)">
                            <circle
                              cx="40.8089"
                              cy="19.853"
                              r="15.4412"
                              fill="white"
                            />
                          </g>
                        </g>
                        <defs>
                          <filter
                            id="filter0_f_111:596"
                            x="4.36768"
                            y="-16.5881"
                            width="72.8823"
                            height="72.8823"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                          >
                            <feFlood
                              floodOpacity="0"
                              result="BackgroundImageFix"
                            />
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="BackgroundImageFix"
                              result="shape"
                            />
                            <feGaussianBlur
                              stdDeviation="10.5"
                              result="effect1_foregroundBlur_111:596"
                            />
                          </filter>
                          <radialGradient
                            id="paint0_radial_111:596"
                            cx="0"
                            cy="0"
                            r="1"
                            gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(37.5 37.5) rotate(90) scale(40.2574)"
                          >
                            <stop stopOpacity="0.47" />
                            <stop offset="1" stopOpacity="0" />
                          </radialGradient>
                        </defs>
                      </svg>
                    </span>
                  </div>
                  <p className="mb-0 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Thank you for considering a career with Trailique Infotech.
                    We look forward to welcoming you to our team!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetailsPage;
