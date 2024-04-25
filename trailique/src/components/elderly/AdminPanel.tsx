// DriverPanel.tsx
import React, { useState, useEffect } from "react";
import Image from "next/image";
function ElAdminPanel() {
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
                Organize Elderly Administration with care, simplify Operational
                Tasks
              </h2>
              {/* Content */}
              <p className="text-center text-sm md:text-left md:text-base lg:text-lg">
                Streamline operations, enhance communication and improve
                resident care with ease.
              </p>
              {/* Sliders */}
              <div className="mt-6 grid grid-cols-1 justify-center gap-4 sm:grid-cols-2">
                <div className="rounded-md border p-4">
                  <h3 className="mb-2 text-center text-lg font-medium text-gray-800 lg:text-left dark:text-white">
                    Care Plan Customization{" "}
                  </h3>
                  <p className="text-center text-sm text-gray-600 lg:text-left dark:text-white">
                    Customize care plans based on individual preferences, care
                    needs and health goals, ensuring personalized and
                    comprehensive care delivery for each care recipient.
                  </p>
                </div>
                {/* Other sliders */}
                <div className="rounded-md border p-4">
                  <h3 className="mb-2 text-center text-lg font-medium text-gray-800 lg:text-left dark:text-white">
                    Staff Management System
                  </h3>
                  <p className="text-center text-sm text-gray-600 lg:text-left dark:text-white">
                    Implement a staff management system for scheduling shifts,
                    assigning tasks and tracking caregiver activities,
                    optimizing staffing levels and ensuring efficient resource
                    allocation.
                  </p>
                </div>
                <div className="rounded-md border p-4">
                  <h3 className="mb-2 text-center text-lg font-medium text-gray-800 lg:text-left dark:text-white">
                    Quality Assurance Programs{" "}
                  </h3>
                  <p className="text-center text-sm text-gray-600 lg:text-left dark:text-white">
                    Establish quality assurance programs including caregiver
                    training, performance evaluations and compliance audits to
                    uphold care standards, promote caregiver competency and
                    enhance service quality.
                  </p>
                </div>
                <div className="rounded-md border p-4">
                  <h3 className="mb-2 text-center text-lg font-medium text-gray-800 lg:text-left dark:text-white">
                    Data Analytics and Reporting{" "}
                  </h3>
                  <p className="text-center text-sm text-gray-600 lg:text-left dark:text-white">
                    Leverage data analytics and reporting tools to track key
                    performance metrics monitor care outcomes and identify areas
                    for improvement facilitating evidence-based decision-making
                    and continuous quality improvement.
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
                src="/images/elderly/ssadmin.png"
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

export default ElAdminPanel;
