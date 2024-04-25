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
                  Android Developer
                </h1>
                <h4 className="mb-8 text-2xl font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight">
                  Job Description
                </h4>
                <div className="px-12">
                  <ul className="list-disc">
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      Prior and Relevant Work Experience : 2 years
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      Open Position : 1
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      Shift timing : 9:30 to 18:30 IST (Work from Pune Office
                      (Hinjewadi-Wakad, Phase 1)
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      Requirement: Before May 31st 2024
                    </li>
                  </ul>
                </div>

                <h2 className="mb-8 mt-7 text-2xl font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight">
                  Detail Job Description
                </h2>
                <p className="mb-10 px-7 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                  Are you ready to take your Android development career to the
                  next level? We are seeking a passionate and experienced
                  Android Developer with 2-3 years of experience to lead our
                  dynamic team.As an Android Developer, you will be at the
                  forefront of creating innovative mobile applications that push
                  the boundaries of technology. Your expertise in the latest
                  Android development tools and frameworks will be crucial in
                  leading our team to success.
                </p>

                <h2 className="mb-8 mt-10 text-2xl font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight">
                  Responsiblities
                </h2>
                <ol className="list-inside list-decimal px-7">
                  <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                    Lead and mentor a team of talented developers
                  </li>
                  <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                    Design and build advanced applications for the Android
                    platform
                  </li>

                  <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                    Collaborate with cross-functional teams to define, design
                    and ship new features
                  </li>
                  <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                    Ensure the best possible performance, quality and
                    responsiveness of the applications
                  </li>
                  <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                    Stay updated on the latest trends and technologies in mobile
                    development
                  </li>
                  <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                    Conduct code reviews and provide feedback to improve code
                    quality
                  </li>
                </ol>

                <h2 className="mb-8 mt-10 text-2xl font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight">
                  Requirements
                </h2>
                <ol className="list-inside list-decimal px-7">
                  <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                    2-3 years of hand-on experience in Android development
                  </li>
                  <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                    Demonstrated expertise in Java and Kotlin programming
                    languages
                  </li>
                  <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                    Strong understanding of Microservices android SDK, Kotlin,
                    different versions of Android and how to deal with
                    different screen sizes{" "}
                  </li>
                  <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                    Experience working with RESTful APIs and third-party
                    libraries
                  </li>
                  <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                    Ability to lead a team effectively and collaborate with
                    other departments
                  </li>
                  <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                    Prior experience in designing and developing complex
                    applications
                  </li>
                  <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                    A passion for innovation and a drive to stay updated on
                    emerging technologies
                  </li>

                  <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                    If you are ready to make an impact in the world of mobile
                    development and lead a team towards success, then we want
                    you on our team! Apply now to join us on this exciting
                    journey.
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

export default CareerDetailsPage;
