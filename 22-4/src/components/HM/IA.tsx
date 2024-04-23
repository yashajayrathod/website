// DriverPanel.tsx
import React, { useState, useEffect } from "react";
import Image from "next/image";
function IA() {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    setImageLoaded(true);
  }, []);

  return (
     <section className="ml-4 md:ml-12 lg:ml-28 mt-5 px-4 sm:px-10 md:px-20 py-8 md:py-10 lg:py-16">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="order-2 m-0 pt-0 lg:order-1 lg:w-1/2">
            <div className="mb-6">
              {/* Title */}
              <h2 className="mb-4 dark:text-white text-center md:text-left text-xl md:text-3xl lg:text-4xl font-bold">
              Expert Insurance Agent: Seamless Insurance Solutions for Millions of Patients
              </h2>
              {/* Content */}
              <p className="text-sm dark:text-white md:text-base lg:text-lg text-center md:text-left">
              Discover seamless insurance solutions tailored for countless patients by an expert insurance agent. Get comprehensive coverage and personalized service for your insurance needs.
{" "}
              </p>
              {/* Sliders */}
              <div className="mt-6 grid grid-cols-1 justify-center gap-4 sm:grid-cols-2">
                <div className="rounded-md border p-4">
                  <h3 className="mb-2 dark:text-white text-center text-lg font-medium text-gray-800 lg:text-left">
                  Insurance Verification
                  </h3>
                  <p className="text-center dark:text-white text-sm text-gray-600 lg:text-left">
                  Verify patient insurance coverage, eligibility and benefits.

                  </p>
                </div>
                {/* Other sliders */}

                <div className="rounded-md border p-4">
                  <h3 className="mb-2 text-center dark:text-white text-lg font-medium text-gray-800 lg:text-left">
                  Claims Processing
                  </h3>
                  <p className="text-center text-sm dark:text-white text-gray-600 lg:text-left">
                  Assist patients with submitting insurance claims and resolving
                   claim-related issues.

                  </p>
                </div>

                <div className="rounded-md border p-4">
                  <h3 className="mb-2 text-center text-lg dark:text-white font-medium text-gray-800 lg:text-left">
                  Coverage Details
                  </h3>
                  <p className="text-center text-sm dark:text-white text-gray-600 lg:text-left">
                  Provide patients with information about their insurance coverage, including deductibles, copayments and limitations.
                  </p>
                </div>
                <div className="rounded-md border p-4">
                  <h3 className="mb-2 text-center text-lg dark:text-white font-medium text-gray-800 lg:text-left">
                  Assistance with Preauthorizations
                  </h3>
                  <p className="text-center text-sm dark:text-white text-gray-600 lg:text-left">
                  Help patients obtain preauthorizations for medical procedures and services.
                  </p>
                </div>
              </div>
              {/* View Full Features Link */}
              {/* <div className="mt-6 flex justify-center">
                <a
                  href="/FeatureMain"
                  className="flex items-center text-blue-600 hover:text-blue-700"
                >
                  View Full Features
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-1 h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.219 4.469a.75.75 0 1 0-1.061 1.062L12.938 10l-4.78 4.469a.75.75 0 0 0 1.06 1.062l5.25-4.907a.75.75 0 0 0 0-1.062l-5.25-4.907z"
                    />
                  </svg>
                </a>
              </div> */}
            </div>
          </div>
          <div className="order-1 w-full px-4 text-right lg:order-2 lg:w-1/2">
            {" "}
            {/* Add or replace text-center with text-right for right alignment */}
            <div
              className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              style={{
                opacity: imageLoaded ? 1 : 0,
                transform: imageLoaded ? "translateY(0)" : "translateY(-20px)",
                transition:
                  "opacity 0.9s ease-in-out, transform 0.9s ease-in-out",
              }}
            >
              <Image
                src="/images/property/prop2.png"
                alt="Passenger"
                width={555}
                height={506}
                onLoad={() => setImageLoaded(true)}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default IA;
