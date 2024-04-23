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
            
            src="/images/Trucking/9.jpeg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
          HOS Compliance
            </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Ensure compliance with Hours of Service (HOS) regulations.
        </p>
        </div>
      {/* Card 2 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
              width={30}
              height={30}
            
            src="/images/Trucking/10.jpeg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
          Vehicle Inspection Checklist
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Complete pre-trip and post-trip inspection checklists electronically.
        </p>
        </div>
      {/* Card 3 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
          width={30}
          height={30}

            className="mr-2"
            src="/images/Trucking/11.jpeg"
            alt="Location Icon"
            
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
          Document Upload
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Upload and manage required documents such as licenses and permits.
        </p>
        </div>
        <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
          width={30}
          height={30}

            className="mr-2"
            src="/images/Trucking/12.jpeg"
            alt="Location Icon"
            
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
          Customer Communication
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Communicate with customers regarding load pickups and deliveries.
        </p>
        </div>
      {/* Card 4 */}
      
      

      
    </div>
  );
}

export default DriverApp;
