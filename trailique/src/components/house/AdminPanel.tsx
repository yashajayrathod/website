// DriverPanel.tsx
import React, { useState, useEffect } from "react";
import Image from "next/image";
function HoAdminPanel() {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    setImageLoaded(true);
  }, []);

  return (
    <section className="ml-4 mt-5 px-4 py-8 sm:px-10 md:ml-12 md:px-20 md:py-10 lg:ml-28 lg:py-16">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="order-2 m-0 pt-0 lg:order-1 lg:w-1/2">
            <div className="mb-6">
              {/* Title */}
              <h2 className="mb-4 text-center text-xl font-bold md:text-left md:text-3xl lg:text-4xl">
                Streamline your housekeeping operations with our centralized
                stakeholders administration and reporting solution.
              </h2>
              {/* Content */}
              <p className="text-center text-sm md:text-left md:text-base lg:text-lg">
                Easily manage tasks, track progress and generate detailed
                reports all in one place. Say goodbye to scattered data and
                hello to efficiency!
              </p>
              {/* Sliders */}
              <div className="mt-6 grid grid-cols-1 justify-center gap-4 sm:grid-cols-2">
                <div className="rounded-md border p-4">
                  <h3 className="mb-2 text-center text-lg font-medium text-gray-800 lg:text-left dark:text-white">
                    User Management{" "}
                  </h3>
                  <p className="text-center text-sm text-gray-600 lg:text-left dark:text-white">
                    Manage user accounts, including clients and housekeepers,
                    overseeing registration, verification and approval
                    processes.
                  </p>
                </div>
                {/* Other sliders */}
                <div className="rounded-md border p-4">
                  <h3 className="mb-2 text-center text-lg font-medium text-gray-800 lg:text-left dark:text-white">
                    Job Assignment{" "}
                  </h3>
                  <p className="text-center text-sm text-gray-600 lg:text-left dark:text-white">
                    Assign housekeeping jobs to available housekeepers based on
                    skills, location, availability and client preferences for
                    efficient service delivery.
                  </p>
                </div>
                <div className="rounded-md border p-4">
                  <h3 className="mb-2 text-center text-lg font-medium text-gray-800 lg:text-left dark:text-white ">
                    Payment Processing{" "}
                  </h3>
                  <p className="text-center text-sm text-gray-600 lg:text-left dark:text-white">
                    Handle payment transactions securely, ensuring accuracy,
                    transparency and timely disbursement to housekeepers.
                  </p>
                </div>
                <div className="rounded-md border p-4">
                  <h3 className="mb-2 text-center text-lg font-medium text-gray-800 lg:text-left dark:text-white">
                    Feedback Analysis{" "}
                  </h3>
                  <p className="text-center text-sm text-gray-600 lg:text-left dark:text-white">
                    Analyze client feedback and ratings to identify areas for
                    improvement, address any issues and maintain high service
                    standards.
                  </p>
                </div>
              </div>
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
                src="/images/house/ssadmin.png"
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

export default HoAdminPanel;
