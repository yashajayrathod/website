import SharePost from "@/components/Career/SharePost";
import TagButton from "@/components/Career/TagButton";
import Image from "next/image";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers",
  description: "This is Carrer",
  // other metadata
};

const Career5Page = () => {
  return (
    <>
      <section className="pb-[120px] pt-[150px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                <h1 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                  Full-Stack Developer
                </h1>
                <h4 className="mb-8 text-2xl font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight">
                  Job Description
                </h4>
                <div className="px-12">
                  <ul className="list-disc">
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      Prior and Relevant Work Experience : 2-3 years
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      Open Position : 1
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      Shift timing : 9:30 to 18:30 IST (Work from Pune Office
                      (Hinjewadi-Wakad, Phase 1))
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      Requirement: Immediate to 1 month
                    </li>
                  </ul>
                </div>

                <h2 className="mb-8 mt-7 text-2xl font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight">
                  Detail Job Description
                </h2>
                <p className="mb-10 px-7 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                  The Full Stack Developer with a strong understanding of
                  microservices will take on a leadership role within the team.
                  As a lead, you will be responsible for overseeing the
                  development and implementation of microservices architecture,
                  as well as managing and mentoring other team members. In
                  addition, you will be tasked with preparing RFQs (Request for
                  Quotation) to ensure efficient communication and collaboration
                  with external vendors.
                </p>

                <h2 className="mb-8 mt-10 text-2xl font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight">
                  Responsiblities
                </h2>
                <ol className="list-inside list-decimal px-7">
                  <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                    Lead the development and implementation of microservices
                    architecture.
                  </li>
                  <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                    Mentor and guide team members in adopting best practices for
                    full stack development.
                  </li>
                  <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                    Collaborate with cross-functional teams to define, design,
                    and ship new features.
                  </li>
                  <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                    Work on bug fixing and improving application performance.{" "}
                  </li>
                  <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                    Prepare RFQs to effectively communicate project requirements
                    to external vendors
                  </li>
                  <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                    Stay up-to-date with new technologies and industry trends to
                    ensure the team remains innovative
                  </li>
                  <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                    Contribute to all phases of the development lifecycle
                  </li>
                  <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                    Ensure code quality through code reviews and testing.
                  </li>
                  <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                    Identify bottlenecks and bugs and devise solutions to
                    address these issues.
                  </li>
                </ol>

                <h2 className="mb-8 mt-10 text-2xl font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight">
                  Requirements
                </h2>
                <ol className="list-inside list-decimal px-7">
                  <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                    Proven experience as a Full Stack Developer with expertise
                    in microservices architecture.
                  </li>
                  <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                    Demonstrated ability to lead a team of developers
                    effectively.
                  </li>
                  <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                    Strong understanding of front-end technologies such as HTML,
                    CSS, JavaScript, React, etc.
                  </li>
                  <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                    Familiarity with back-end technologies such as Node.js,
                    Express.js, Python, etc.
                  </li>
                  <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                    Experience in working with databases like MySQL, PostgreSQL,
                    MongoDB, etc.
                  </li>
                  <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                    Excellent communication skills and ability to work
                    collaboratively in a team environment.{" "}
                  </li>
                  <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                    Bachelor’s degree in Computer Science or related field
                    (Master’s degree preferred).
                  </li>
                  <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                    Certifications in relevant technologies would be a plus .
                  </li>
                </ol>

                <div>
                <h2 className="mb-8 mt-10 text-2xl font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight">
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

export default Career5Page;
