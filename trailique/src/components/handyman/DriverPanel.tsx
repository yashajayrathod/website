// DriverPanel.tsx
import React, { useState, useEffect } from "react";
import Image from "next/image";
function DriverPanel() {
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
                Get expert solutions quickly and easily. Streamline your process
                for maximum efficiency.{" "}
              </h2>
              {/* Content */}
              <p className="text-center text-sm md:text-left md:text-base lg:text-lg">
                Enable your technicians to efficiently check-in and check-out,
                handle bookings, guaranteeing speedy and flawless expert
                solutions tailored to your users' needs.
              </p>
              {/* Sliders */}
              <div className="mt-6 grid grid-cols-1 justify-center gap-4 sm:grid-cols-2">
                <div className="rounded-md border p-4">
                  <h3 className="mb-2 text-center text-lg font-medium text-gray-800 lg:text-left dark:text-white">
                    Task Notifications{" "}
                  </h3>
                  <p className="text-center text-sm text-gray-600 lg:text-left dark:text-white">
                    Receive instant notifications for new task requests matching
                    expertise and location.
                  </p>
                </div>
                {/* Other sliders */}
                <div className="rounded-md border p-4">
                  <h3 className="mb-2 text-center text-lg font-medium text-gray-800 lg:text-left dark:text-white">
                    Appointment Management{" "}
                  </h3>
                  <p className="text-center text-sm text-gray-600 lg:text-left dark:text-white">
                    Schedule, reschedule, and manage appointments efficiently to
                    optimize work schedules.
                  </p>
                </div>
                <div className="rounded-md border p-4">
                  <h3 className="mb-2 text-center text-lg font-medium text-gray-800 lg:text-left dark:text-white">
                    In-App Communication
                  </h3>
                  <p className="text-center text-sm text-gray-600 lg:text-left dark:text-white">
                    Communicate with clients to clarify task details, provide
                    updates, and address concerns.
                  </p>
                </div>
                <div className="rounded-md border p-4">
                  <h3 className="mb-2 text-center text-lg font-medium text-gray-800 lg:text-left dark:text-white">
                    Payment Tracking{" "}
                  </h3>
                  <p className="text-center text-sm text-gray-600 lg:text-left dark:text-white">
                    Monitor payment status for completed tasks and access
                    transaction history for financial tracking.
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
                src="/images/handyman/handyprovider.png"
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
export default DriverPanel;
