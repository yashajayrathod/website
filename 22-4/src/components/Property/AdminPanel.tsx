// DriverPanel.tsx
import React, { useState, useEffect } from "react";
import Image from "next/image";
function AdminPanel() {
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
              <h2 className="mb-4 text-center md:text-left text-xl md:text-3xl lg:text-4xl font-bold">
                Comprehensive Admin panel to manage complex property management
                operations
              </h2>
              {/* Content */}
              <p className="text-sm md:text-base lg:text-lg text-center md:text-left">
                Efficiently Manage Your Properties with Ease: Dispute
                Resolution, Tenant Management, Listing, Payment Scheduling,
                Sales/Purchases and Renovation Options
              </p>

              {/* Sliders */}
              <div className="mt-6 grid grid-cols-1 justify-center gap-4 sm:grid-cols-2">
                <div className="rounded-md border p-4">
                  <h3 className="mb-2 dark:text-white text-center text-lg font-medium text-gray-800 lg:text-left">
                    User Management:
                  </h3>
                  <p className="dark:text-white text-center text-sm text-gray-600 lg:text-left">
                    Manage user accounts, roles and permissions within the
                    system.
                  </p>
                </div>
                <div className="rounded-md  border p-4">
                  <h3 className="mb-2 dark:text-white text-center text-lg font-medium text-gray-800 lg:text-left">
                    Data Analytics
                  </h3>
                  <p className="text-center dark:text-white text-sm text-gray-600 lg:text-left">
                    Access comprehensive analytics and reports for informed
                    decision-making.
                  </p>
                </div>

                {/* Other sliders */}
                <div className="rounded-md border p-4">
                  <h3 className="mb-2 dark:text-white text-center text-lg font-medium text-gray-800 lg:text-left">
                    Security Measures
                  </h3>
                  <p className="text-center dark:text-white text-sm text-gray-600 lg:text-left">
                    Implement security measures and protocols to safeguard
                    sensitive data.
                  </p>
                </div>

                <div className="rounded-md border p-4">
                  <h3 className="mb-2 dark:text-white text-center text-lg font-medium text-gray-800 lg:text-left">
                    Inventory Tracking
                  </h3>
                  <p className="text-center dark:text-white text-sm text-gray-600 lg:text-left">
                    Monitor maintenance supplies and equipment inventory with
                    restocking alerts.
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
                src="/images/property/admin.png"
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

export default AdminPanel;
