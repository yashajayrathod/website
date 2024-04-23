import React from "react";
import Image from "next/image";

function DriverApp() {
  return (
    <div className="m-10  grid grid-cols-1 justify-center gap-4 sm:grid-cols-3">
      {/* Card 1 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            
            src="/images/employee/Performance Incentives.jpeg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">Performance Incentives</h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Offer performance-based incentives and rewards to drivers for maintaining high service standards and customer satisfaction levels.
        </p>
      </div>
      {/* Card 2 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
              width={30}
              height={30}
            
            src="/images/employee/Driver Training Resources.jpeg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
          Driver Training Resources
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white ">
        Access training materials and resources to enhance driving skills, customer service and safety awareness among drivers.
        </p>
      </div>
      {/* Card 3 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
          width={30}
          height={30}

            className="mr-2"
            src="/images/employee/In-App Support.jpeg"
            alt="Location Icon"
            
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
          In-App Support
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Receive real-time support and assistance from administrators or support staff through the driver app, resolving issues promptly and efficiently.</p>
      </div>
      {/* Card 4 */}
      
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
          width={30}
          height={30}

            
            src="/images/employee/Driver Training Resources.jpeg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">Vehicle Inspection Checklist</h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Complete vehicle inspection checklists digitally to ensure compliance with safety standards and regulatory requirements before each trip.

        </p>
      </div>
    </div>
  );
}

export default DriverApp;
