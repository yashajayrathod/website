import React from "react";
import Image from "next/image";

function EvAdminApp() {
  return (
    <div className="m-10  grid grid-cols-1 justify-center gap-4 sm:grid-cols-3">
      {/* Card 1 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            src="/images/evtransport/station.jpg"
            alt="Location Icon"
            width={30}
            height={30}
            className="mr-2 dark:bg-white"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Station Management{" "}
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Manage charging station information, including locations and
          availability, for efficient fleet operation.
        </p>
      </div>
      {/* Card 2 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            src="/images/evtransport/vehicle.jpg"
            alt="Location Icon"
            width={30}
            height={30}
            className="mr-2 dark:bg-white"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Vehicle Allocation{" "}
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Allocate electric vehicles to drivers based on demand and availability
          to ensure efficient service provision.
        </p>
      </div>
      {/* Card 3 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            src="/images/evtransport/maintenance.jpg"
            alt="Location Icon"
            width={30}
            height={30}
            className="mr-2 dark:bg-white"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Maintenance Scheduling{" "}
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Schedule vehicle maintenance tasks to optimize fleet performance and
          minimize downtime.
        </p>
      </div>
      {/* Card 4 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            src="/images/evtransport/sustainability.jpg"
            alt="Location Icon"
            width={30}
            height={30}
            className="mr-2 dark:bg-white"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Sustainability Reporting{" "}
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Generate reports on carbon footprint reduction and eco-conscious
          practices for transparency and accountability.
        </p>
      </div>
    </div>
  );
}

export default EvAdminApp;
