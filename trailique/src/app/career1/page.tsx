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
                  Digital Marketing Intern
                </h1>
                <h4 className="mb-8 text-2xl font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight">
                  Job Description
                </h4>
                <div className="px-12">
                  <ul className="list-disc">
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      Prior and Relevant Work Experience : 0-3 months
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      Marketing Education and/ or Background : Strongly
                      Preferred
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      Familiarity with the Marketing tools : Must
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      Open Positions : 3
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      Work from Pune Office (Hinjewadi-Wakad, Phase 1)
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      Shift timing : 9:30 to 18:30 IST
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
                  Are you ready to kickstart your career in the exciting world
                  of digital marketing? As a Digital Marketing Intern, you'll
                  have the opportunity to gain hands-on experience and learn
                  from seasoned professionals in the industry. You'll be
                  involved in creating and implementing digital marketing
                  campaigns, analyzing performance metrics, conducting market
                  research and contributing fresh ideas to help drive
                  engagement and growth.
                </p>

                <h2 className="mb-8 mt-7 text-2xl font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight">
                Responsiblities
                </h2>
                <ol className="list-inside list-decimal px-7">
                  <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                    Assist in developing and implementing digital marketing
                    strategies.
                  </li>
                  <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                    Create engaging content for social media platforms.
                  </li>
                  <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                    Work on Keyword Strategy, Conduct keyword research and
                    optimize website content for SEO.
                  </li>
                  <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                    Monitor and analyze campaign performance data.
                  </li>
                  <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                    Assist in managing email marketing campaigns.
                  </li>
                  <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                    Collaborate with team members on various projects.
                  </li>
                  <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                    Stay up-to-date with the latest trends in digital marketing.
                  </li>
                </ol>

                <h2 className="mb-8 mt-7 text-2xl font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight">
                  Requirements
                </h2>
                <ol className="list-inside list-decimal px-7">
                  <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                    Completed/ Pursuing a degree in Marketing, Communications
                    or related field.
                  </li>
                  <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                    Passion for digital marketing and eagerness to learn.
                  </li>
                  <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                    Strong communication and organizational skills.{" "}
                  </li>
                  <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                    Familiarity with social media platforms and digital
                    analytics tools is strongly recommended.
                  </li>
                  <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                    Creative thinking and problem-solving abilities.
                  </li>
                  <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                    Ability to work well independently and as part of a team.
                  </li>
                  <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                    Proactive and Positive attitude, willingness to take on new
                    challenges.
                  </li>
                </ol>

                <h2 className=" mb-8 mt-7 text-2xl font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight">
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
                <p className="ml-9 mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                  <br />
                  Get ready to dive into the dynamic world of digital marketing
                  as a valued member of our team! Your fresh perspectives and
                  enthusiasm will make a real impact. Apply now for this
                  exciting internship opportunity! 🚀🌟
                </p>
                <div>
                  <h2 className="mb-8 text-2xl font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight">
                    How to apply?
                  </h2>

               <div>
                  <p className="mb-10 px-7 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                        Send your updated CV along with your cover letter to <a href="mailto:careers@trailique.com" className="text-base dark:text-blue-500 text-blue-500 duration-300 hover:text-primary  dark:hover:text-primary">careers@trailique.com.</a>
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
