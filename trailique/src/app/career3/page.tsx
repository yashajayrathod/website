import SharePost from "@/components/Career/SharePost";
import TagButton from "@/components/Career/TagButton";
import Image from "next/image";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers",
  description: "This is Carrer",
  // other metadata
};

const CareerDetailsPage = () => {
  return (
    <>
      <section className="pb-[120px] pt-[150px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                <h1 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                  Business Development Executive <span className='block'> (Europe, Middle East, APAC)</span>
                </h1>
                <h4 className="mb-8 text-2xl font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight">
                  Job Description
                </h4>
                <div className="px-12">
                  <ul className="list-disc">
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      Prior and Relevant Work Experience : 1-2 years
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      IT Sales Background : Strongly Preferred
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      Familiarity with the CRM and Sales tools : A must
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      Open Position : 1
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      Shift timing : 9:30 to 18:30 IST (Work from Pune Office)
                      (Hinjewadi-Wakad, Phase 1)
                    </li>

                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      Requirement: Immediate
                    </li>
                  </ul>
                </div>

                <h2 className="mb-8 mt-7 text-2xl font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight">
                  Detail Job Description
                </h2>
                <p className="mb-10 px-7 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                  As a Business Development Executive, you will play a crucial
                  role in expanding our market reach and driving revenue growth
                  through selling IT products and services. Your primary focus
                  will be on developing new business opportunities in the EMEA
                  and APAC regions. This is a day shift position, offering you a
                  perfect work-life balance.
                </p>

                <h2 className="mb-8 mt-10 text-2xl font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight">
                  Responsiblities
                </h2>
                <ol className="list-inside list-decimal px-7">
                  <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                    Identify potential clients and key decision-makers to
                    develop and nurture business relationships
                  </li>
                  <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                    Drive sales of IT products and services by understanding
                    client needs and proposing suitable solutions
                  </li>
                  <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                    Lead negotiations, prepare proposals and close deals to
                    meet or exceed sales targets
                  </li>
                  <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                    Collaborate with the sales team to strategize on market
                    penetration and enhance customer satisfaction
                  </li>
                  <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                    Maintain a strong understanding of industry trends,
                    competitors and market conditions
                  </li>
                  <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                    Provide regular reports on sales activities, pipeline
                    status and forecasts
                  </li>
                </ol>

                <h2 className="mb-8 mt-10 text-2xl font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight">
                Requirements
                </h2>
                <ol className="list-inside list-decimal px-7">
                  <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                    Prior experience in IT sales or business development roles
                    targeting EMEA/APAC regions
                  </li>
                  <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                    Demonstrated success in meeting or exceeding sales targets
                    consistently
                  </li>
                  <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                    Excellent communication and negotiation skills{" "}
                  </li>
                  <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                    Ability to work independently as well as part of a team in a
                    fast-paced environment
                  </li>
                  <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                    Familiarity with CRM software for managing customer
                    relationships, a must-have
                  </li>
                  <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                    Willingness to travel occasionally for client meetings or
                    industry events
                  </li>
                  <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                    A proactive attitude with a passion for driving business
                    growth through innovative solutions
                  </li>
                  <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                    Should not need micro-management and should be
                    self-disciplined along with effective time management skills
                  </li>
                  <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                    Participate in giving demos
                  </li>
                </ol>

                <h2 className="mb-8 mt-7 text-2xl font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight">
                  Perks
                </h2>
                <ol className="list-inside list-decimal px-7">
                  <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                    % on every sales closure
                  </li>
                  <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                    Onsite Travel (US, Canada and UAE)
                  </li>
                  <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                    If you are driven, ambitious and eager to make an impact in
                    the IT industry, this is the perfect role for you! Join us
                    in shaping the future of technology solutions across Europe,
                    the Middle East and APAC. Apply now and let's embark on this
                    exciting journey together!
                  </li>

                  {/* <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                    Monitor and analyze campaign performance data
                  </li>
                  <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                    Assist in managing email marketing campaigns
                  </li>
                  <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                    Collaborate with team members on various projects
                  </li>
                  <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                    Stay up-to-date with the latest trends in digital marketing
                  </li> */}
                </ol>

                {/* <h2 className=" mb-8 mt-7 text-2xl font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight">
                  Work Schedule
                </h2>
                <ol className="list-inside list-decimal px-7">
                  <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                    Work from office
                  </li>
                  <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                    Monday to Friday - 9:30 am to 6:30 pm IST{" "}
                  </li>
                  <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                    Saturday and Sunday off
                  </li>
                </ol>
                <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                  <br />
                  Get ready to dive into the dynamic world of digital marketing
                  as a valued member of our team! Your fresh perspectives and
                  enthusiasm will make a real impact. Apply now for this
                  exciting internship opportunity! 🚀🌟
                </p> */}
                <div>
                  <h2 className="mt-4 mb-8 text-2xl font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight">
                    How to apply?
                  </h2>

                  <div>
                  <p className="mb-10 px-7 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                        Send your updated CV along with your cover letter to <a href="mailto:careers@trailique.com" className="text-base text-blue-500 duration-300 hover:text-primary dark:text-blue-500 dark:hover:text-primary">careers@trailique.com. </a>
                </p>
            </div >
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CareerDetailsPage;
