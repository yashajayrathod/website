import React from "react";
import Image from "next/image";

function DeAdminApp() {
  return (
    <div className="m-10  grid grid-cols-1 justify-center gap-4 sm:grid-cols-3">
      {/* Card 1 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            src="/images/delivery/Inventory.jpeg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Inventory Management
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Monitor inventory levels and track stock for delivery items.
        </p>
      </div>
      {/* Card 2 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            src="/images/delivery/Dispatch.jpeg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Dispatch Automation
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Implement automation for efficient order dispatching.
        </p>
      </div>
      {/* Card 3 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            src="/images/delivery/Geofencing.jpeg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">Geofencing</h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Set up geofences for delivery zones and route optimization.
        </p>
      </div>
      {/* Card 4 */}

      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            src="/images/delivery/Customizable.jpeg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Customizable Branding
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Customize app branding and user interface according to business needs.
        </p>
      </div>
    </div>
  );
}

export default DeAdminApp;
