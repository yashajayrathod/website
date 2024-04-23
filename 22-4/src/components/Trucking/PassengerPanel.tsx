import React, { useState, useEffect } from "react";
import Image from "next/image";

function PassengerPanel() {
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
              The Ultimate Trucking Solution for everyone!
             </h2>
              {/* Content */}
              <p className="text-sm md:text-base lg:text-lg text-center md:text-left">
              FTL, HTL, Credit Note, Shipment Tracking, OTP Load/Offload, Secure Payments & More
              </p>
              {/* Sliders */}
              <div className="mt-6 grid grid-cols-1 justify-center gap-4 sm:grid-cols-2">
                <div className="rounded-md border p-4">
                  <h3 className="mb-2 text-center text-lg font-medium text-gray-800 lg:text-left dark:text-white">
                  Load Booking
                  </h3>
                  <p className="text-center text-sm text-gray-600 lg:text-left dark:text-white">
                  Easily book truckloads for transportation.
                  </p>
                </div>
                {/* Other sliders */}
                
                <div className="rounded-md border p-4">
                  <h3 className="mb-2 text-center text-lg font-medium text-gray-800 lg:text-left dark:text-white">
                  Real-time Tracking   
                               </h3>
                  <p className="text-center text-sm text-gray-600 lg:text-left dark:text-white">
                  Track the status and location of shipments in real-time.
                                    </p>
                  </div>

                <div className="rounded-md border p-4">
                  <h3 className="mb-2 text-center text-lg font-medium text-gray-800 lg:text-left dark:text-white">
                  Document Management
                  </h3>
                  <p className="text-center text-sm text-gray-600 lg:text-left dark:text-white">
                  Manage shipping documents and invoices digitally.
                  </p>
                </div>
                <div className="rounded-md border p-4">
                  <h3 className="mb-2 text-center text-lg font-medium text-gray-800 lg:text-left dark:text-white">
                  Payment Integration
                                    </h3>
                  <p className="text-center text-sm text-gray-600 lg:text-left dark:text-white">
                  Seamlessly pay for transportation services within the app.
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
                src="/images/Trucking/truckshipper.png"
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

export default PassengerPanel;
