import React from "react";
import Image from "next/image";

function MaintenanceApp() {
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
          Load Matching
          </h3>
          </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Automatically match available trucks with suitable loads.
                </p>
        </div>
      {/* Card 2 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            
            src="/images/Trucking/5.jpeg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
          Load Board Access
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Access a load board to view and bid on available loads.
        </p>
        </div>
     
      {/* Card 3 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            
            src="/images/Trucking/7.jpeg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
          Load Tracking for Customers
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Provide customers with access to track their shipments in real-time.
        </p>
      </div>
      {/* Card 4 */}

      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            
            src="/images/Trucking/8.jpeg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
          Customer Relationship Management (CRM)
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Manage customer relationships and communications.
    </p>
      </div>

      
    </div>
  );
}

export default MaintenanceApp;
