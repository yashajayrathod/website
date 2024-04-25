import SharePost from "@/components/Career/SharePost";
import TagButton from "@/components/Career/TagButton";
import Image from "next/image";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers",
  description: "This is Carrer",
  // other metadata
};

const Career4 = () => {
  return (
    <>
      <section className="pb-[120px] pt-[150px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                <h1 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                  HR Intern
                </h1>
                <h4 className="mb-8 text-2xl font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight">
                  Job Description
                </h4>
                <div className="px-12">
                  <ul className="list-disc">
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      Prior and Relevant Work Experience : Not required.
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      HR Degree or Certification: Preferred.
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      Open Position : 1.
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      Shift timing : 9:30 to 18:30 IST (Work from Pune Office
                      (Hinjewadi-Wakad, Phase 1).
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
                  Are you ready to kickstart a dynamic career in HR? Look no
                  further! As an HR Intern focusing on IT recruitment, talent
                  acquisition, employee management and day-to-day HR
                  activities, you'll be at the forefront of shaping the future
                  workforce of our organization.
                </p>

                <h2 className="mb-8 mt-10 text-2xl font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight">
                  Exciting Opportunities Await
                </h2>
                <ul className="list-disc px-7">
                  <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                    Assist in sourcing top IT talent through various channels
                  </li>
                  <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                    Participate in screening and interviewing candidates to find
                    the best fit
                  </li>
                  <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                    Support in onboarding new hires and ensuring a smooth
                    integration process
                  </li>
                  <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                    Contribute to employee management tasks such as performance
                    evaluations, training programs, employee empowerment
                  </li>
                  <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                    Engage in day-to-day HR activities to keep the workplace
                    running smoothly{" "}
                  </li>
                  <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                    Collaborate with a passionate team to drive HR initiatives
                    and foster a positive work environment
                  </li>
                  <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                    Take various initiatives to maintain and build the culture.
                  </li>
                </ul>

                <h2 className="mb-8 mt-10 text-2xl font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight">
                  We're Looking for Someone Who
                </h2>
                <ul className="list-disc px-7">
                  <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                    Is passionate about human resources and eager to learn and
                    grow in the field
                  </li>
                  <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                    Has excellent communication skills and enjoys interacting
                    with people .
                  </li>
                  <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                    Demonstrates strong organizational skills and attention to
                    detail.
                  </li>
                  <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                    Thrives in a fast-paced environment and is able to multitask
                    effectively.
                  </li>
                  <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                    Is a team player with a can-do attitude, ready to take on
                    new challenges.
                  </li>
                </ul>

                <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                  <br />
                  Join us as an HR Intern today and embark on an exciting
                  journey where every day brings new opportunities for growth
                  and development!
                </p>
                <div>
                  <h2 className="mb-8 text-2xl font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight">
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

export default Career4;
