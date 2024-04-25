// DriverPanel.tsx
import React, { useState, useEffect } from "react";
import Image from "next/image";
function AdminPanel() {
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
              Streamline Complete Administration: Simplify Operational Tasks
              </h2>
              {/* Content */}
              <p className="text-center lg:text-left">
              Unlock the full potential of your e-Pharmacy platform with our intuitive browser-based panel, empowering you with comprehensive and seamless integrations to optimize operations.
              </p>
              {/* Sliders */}
              <div className="mt-6 grid grid-cols-1 justify-center gap-4 sm:grid-cols-2">
                <div className="rounded-md border p-4">
                  <h3 className="mb-2 text-center text-lg font-medium text-gray-800 lg:text-left">
                  Order Fulfillment Management
                  </h3>
                  <p className="text-center text-sm text-gray-600 lg:text-left">
                  Monitor and manage medication order fulfillment processes, including inventory tracking, dispensing workflowsand delivery logistics, to ensure timely and accurate order processing.
                  </p>
                </div>
                <div className="rounded-md border p-4">
                  <h3 className="mb-2 text-center text-lg font-medium text-gray-800 lg:text-left">
                  Regulatory Compliance
                  </h3>
                  <p className="text-center text-sm text-gray-600 lg:text-left">
                  Ensure compliance with pharmacy regulations, data privacy lawsand medication safety standards, implementing robust security measures and audit trails for data protection and regulatory adherence.
                  </p>
                </div>
                
                {/* Other sliders */}
                <div className="rounded-md border p-4">
                  <h3 className="mb-2 text-center text-lg font-medium text-gray-800 lg:text-left">
                  Analytics and Reporting
                  </h3>
                  <p className="text-center text-sm text-gray-600 lg:text-left">
                  Utilize comprehensive analytics and reporting tools to track key performance indicators (KPIs), monitor medication dispensing trends, patient satisfactionand adherence ratesand inform strategic decision-making and quality improvement initiatives.

                  </p>
                </div>

                <div className="rounded-md border p-4">
                  <h3 className="mb-2 text-center text-lg font-medium text-gray-800 lg:text-left">
                  Integration Capabilities
                  </h3>
                  <p className="text-center text-sm text-gray-600 lg:text-left">
                  Integrate with electronic health record (EHR) systems, pharmacy management softwareand telehealth platforms to facilitate seamless data exchange, interoperabilityand collaborative care delivery.

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
                src="/images/digital/pharmacy-ADMIN.png"
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
