import React from "react";
import Image from "next/image";

function EvDriverApp() {
  return (
    <div className="m-10  grid grid-cols-1 justify-center gap-4 sm:grid-cols-3">
      {/* Card 1 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            src="/images/evtransport/status.jpg"
            alt="Location Icon"
            width={30}
            height={30}
            className="mr-2"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            EV Status Tracking
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Monitor electric vehicle status, including battery charge and range
          prediction, for efficient service provision.{" "}
        </p>
      </div>
      {/* Card 2 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            src="/images/evtransport/charging.jpg"
            alt="Location Icon"
            width={30}
            height={30}
            className="mr-2"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Charging Station Navigation{" "}
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Navigate to nearby charging stations to ensure vehicle readiness for
          service.
        </p>
      </div>
      {/* Card 3 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            src="/images/evtransport/vehicle.jpg"
            alt="Location Icon"
            width={30}
            height={30}
            className="mr-2"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Vehicle Maintenance Alerts{" "}
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Receive alerts for vehicle maintenance to ensure the fleet's
          operational efficiency.
        </p>
      </div>
      {/* Card 4 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            src="/images/evtransport/eco.jpg"
            alt="Location Icon"
            width={30}
            height={30}
            className="mr-2"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Eco-friendly Driving Tips{" "}
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Provide drivers with tips for eco-conscious driving, promoting
          sustainable practices.
        </p>
      </div>
    </div>
  );
}

export default EvDriverApp;
