import React from "react";
import Image from "next/image";

function PassengerApp() {
  return (
    <div className="m-10  grid grid-cols-1 justify-center gap-4 sm:grid-cols-3">
      {/* Card 1 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            
            src="/images/warehouse/1.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
          Forecasting and Demand Planning
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Tools for forecasting inventory demand and planning future inventory levels accordingly.
        </p>
      </div>
      {/* Card 2 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            
            src="/images/warehouse/2.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">Returns Management</h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Streamlined process for handling returns and managing reverse logistics efficiently.</p>
      </div>
      {/* Card 3 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            
            src="/images/warehouse/3.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">Cross-docking Support</h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Support for cross-docking operations to expedite the movement of goods from receiving to shipping.
        </p>
      </div>
      {/* Card 4 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            
            src="/images/warehouse/4.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">Supplier Collaboration</h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Collaboration tools for communicating with suppliers and managing inbound shipments effectively.
        </p>
      </div>
      {/* Card 5 */}
      
      
      
    </div>
  );
}

export default PassengerApp;
