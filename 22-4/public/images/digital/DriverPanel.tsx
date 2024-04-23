// DriverPanel.tsx
import React, { useState, useEffect } from "react";
import Image from "next/image";
function DriverPanel() {
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
              Pharmacy Management Made Easy: Boost Productivity
              </h2>
              {/* Content */}
              <p className="text-center lg:text-left">
              Enable your Pharmacists to efficiently handle prescriptions, inventoriesand orders tailored to your specific needs.
              </p>
              {/* Sliders */}
              <div className="mt-6 grid grid-cols-1 justify-center gap-4 sm:grid-cols-2">
                <div className="rounded-md border p-4">
                  <h3 className="mb-2 text-center text-lg font-medium text-gray-800 lg:text-left">
                  Prescription Verification
                  </h3>
                  <p className="text-center text-sm text-gray-600 lg:text-left">
                  Verify and process prescription orders received from patients, ensuring accuracy, legalityand appropriateness of prescribed medications and dosages.
                  </p>
                </div>
                {/* Other sliders */}
                <div className="rounded-md border p-4">
                  <h3 className="mb-2 text-center text-lg font-medium text-gray-800 lg:text-left">
                  Patient Counseling
                  </h3>
                  <p className="text-center text-sm text-gray-600 lg:text-left">
                  Provide virtual medication counseling and patient education services to address medication-related inquiries, drug interactions, side effectsand proper medication usage.

                  </p>
                </div>
                <div className="rounded-md border p-4">
                  <h3 className="mb-2 text-center text-lg font-medium text-gray-800 lg:text-left">
                  Medication Therapy Management
                  </h3>
                  <p className="text-center text-sm text-gray-600 lg:text-left">
                  Conduct medication therapy management (MTM) services, including medication reviews, adherence assessmentsand therapy optimization, to enhance patient safety and treatment outcomes.
                  </p>
                </div>
                <div className="rounded-md border p-4">
                  <h3 className="mb-2 text-center text-lg font-medium text-gray-800 lg:text-left">
                  Drug Interaction Alerts
                  </h3>
                  <p className="text-center text-sm text-gray-600 lg:text-left">
                  Receive real-time alerts for potential drug interactions or contraindications based on patients' medication profiles and medical history, facilitating proactive intervention and risk mitigation.
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
                src="/images/digital/telephar2-dashboard.png"
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
