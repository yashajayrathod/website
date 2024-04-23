import React from "react";
import Image from "next/image";

function EvPassengerApp() {
  return (
    <div className="m-10  grid grid-cols-1 justify-center gap-4 sm:grid-cols-3">
      {/* Card 1 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            src="/images/evtransport/safety.jpg"
            alt="Location Icon"
            width={30}
            height={30}
            className="mr-2"
          />
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">Safety Features</h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Implement safety measures such as SOS alerts and driver ratings to
          ensure passenger security and peace of mind.
        </p>
      </div>
      {/* Card 2 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            src="/images/evtransport/route.jpg"
            alt="Location Icon"
            width={30}
            height={30}
            className="mr-2"
          />
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Route Optimization
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Optimize routes for efficient electric vehicle travel, reducing travel
          time and energy consumption.
        </p>
      </div>
      {/* Card 3 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            src="/images/evtransport/rental.jpg"
            alt="Location Icon"
            width={30}
            height={30}
            className="mr-2"
          />
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Electric Vehicle Rental{" "}
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Rent electric vehicles for eco-friendly transportation, promoting
          sustainable mobility options.{" "}
        </p>
      </div>
      {/* Card 4 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            src="/images/evtransport/focus.jpg"
            alt="Location Icon"
            width={30}
            height={30}
            className="mr-2"
          />
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Sustainability Focus
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Promote eco-conscious travel options with features aimed at reducing
          carbon footprint.
        </p>
      </div>
    </div>
  );
}

export default EvPassengerApp;
