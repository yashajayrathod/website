import React, { useState, useEffect } from "react";
import Image from "next/image";

function RePassengerPanel() {
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
                Effortless Rental Booking: Quick and Convenient Reservations
              </h2>
              {/* Content */}
              <p className="text-center text-sm md:text-left md:text-base lg:text-lg">
                Experience seamless rental booking for passengers with easy
                inspection and incident reporting.
              </p>
              {/* Sliders */}
              <div className="mt-6 grid grid-cols-1 justify-center gap-4 sm:grid-cols-2">
                <div className="rounded-md border p-4">
                  <h3 className="mb-2 text-center text-lg font-medium text-gray-800 dark:text-white lg:text-left">
                    Vehicle Selection
                  </h3>
                  <p className="text-center text-sm text-gray-600 dark:text-white lg:text-left">
                    Browse and select from a wide range of rental vehicles,
                    including cars, bikes and specialty vehicles, tailored to
                    individual preferences and requirements.
                  </p>
                </div>
                {/* Other sliders */}
                <div className="rounded-md border p-4">
                  <h3 className="mb-2 text-center text-lg font-medium text-gray-800 dark:text-white lg:text-left">
                    Booking Management
                  </h3>
                  <p className="text-center text-sm text-gray-600 dark:text-white lg:text-left">
                    Manage bookings seamlessly, including reservation
                    scheduling, modification and cancellation, providing
                    flexibility and convenience to users.
                  </p>
                </div>
                <div className="rounded-md border p-4">
                  <h3 className="mb-2 text-center text-lg font-medium text-gray-800 dark:text-white lg:text-left">
                    Real-Time Availability{" "}
                  </h3>
                  <p className="text-center text-sm text-gray-600 dark:text-white lg:text-left">
                    View real-time availability of rental vehicles, check
                    vehicle status and receive instant confirmation on booking
                    requests, ensuring reliable and timely service.
                  </p>
                </div>
                <div className="rounded-md border p-4">
                  <h3 className="mb-2 text-center text-lg font-medium text-gray-800 dark:text-white lg:text-left">
                    Secure Payment Processing{" "}
                  </h3>
                  <p className="text-center text-sm text-gray-600 dark:text-white lg:text-left">
                    Process secure online payments for rental bookings, offering
                    multiple payment options and ensuring transaction security
                    and user privacy.
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
                src="/images/rental/rent-passenger.png"
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

export default RePassengerPanel;
