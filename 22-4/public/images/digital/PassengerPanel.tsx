import React, { useState, useEffect } from "react";
import Image from "next/image";

function PassengerPanel() {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    setImageLoaded(true);
  }, []);

  return (
    <section className="ml-28 mt-5 px-20 py-10 ">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="order-2 m-0 pt-0 lg:order-1 lg:w-1/2">
            <div className="mb-9">
              {/* Title */}
              <h2 className="mb-4 text-center text-3xl font-bold lg:text-left">
              Seamless Medicine Ordering: Medicine Access At Your Fingertips.
              </h2>
              {/* Content */}
              <p className="text-center lg:text-left">
              Unlock the potential of your pharmacy services with our cutting-edge digital platform developed solutions.
              </p>
              {/* Sliders */}
              <div className="mt-6 grid grid-cols-1 justify-center gap-4 sm:grid-cols-2">
                <div className="rounded-md border p-4">
                  <h3 className="mb-2 text-center text-lg font-medium text-gray-800 lg:text-left">
                  Medication Ordering
                  </h3>
                  <p className="text-center text-sm text-gray-600 lg:text-left">
                  Easily browse and order prescription medications, over-the-counter drugs and healthcare products from a comprehensive online catalog, with convenient delivery options.
</p>
                </div>
                {/* Other sliders */}
                <div className="rounded-md border p-4">
                  <h3 className="mb-2 text-center text-lg font-medium text-gray-800 lg:text-left">
                  Prescription Upload
                  </h3>
                  <p className="text-center text-sm text-gray-600 lg:text-left">
                  Upload digital prescriptions or request prescription transfers from healthcare providers for seamless medication fulfillment and prescription management.
                  </p>
                </div>
                <div className="rounded-md border p-4">
                  <h3 className="mb-2 text-center text-lg font-medium text-gray-800 lg:text-left">
                  Medication Reminders
                  </h3>
                  <p className="text-center text-sm text-gray-600 lg:text-left">
                  Set personalized medication reminders and dosage alerts to ensure adherence to prescribed treatment regimens, promoting medication compliance and health outcomes.</p>
                </div>
                <div className="rounded-md border p-4">
                  <h3 className="mb-2 text-center text-lg font-medium text-gray-800 lg:text-left">
                  Health Records Access
                  </h3>
                  <p className="text-center text-sm text-gray-600 lg:text-left">
                  Access and manage personal health records, including medication history, allergiesand medical conditions, securely within the digital pharmacy platform.
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
                src="/images/digital/telephar.png"
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
