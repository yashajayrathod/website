import React from "react";
import Image from "next/image";

function ReDriverApp() {
  return (
    <div className="m-10  grid grid-cols-1 justify-center gap-4 sm:grid-cols-3">
      {/* Card 1 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            src="/images/rental/maintenance.jpg"
            alt="Location Icon"
            width={30}
            height={30}
            className="mr-2"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Vehicle Maintenance Alerts
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Receive notifications and reminders for scheduled maintenance tasks,
          inspections or repairs, ensuring vehicle reliability, safety and
          compliance with rental standards.
        </p>
      </div>
      {/* Card 2 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            src="/images/rental/roadside.jpg"
            alt="Location Icon"
            width={30}
            height={30}
            className="mr-2"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Roadside Assistance Services{" "}
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Provide roadside assistance services, such as towing, battery
          jump-start or flat tire repair, to drivers in case of emergencies or
          vehicle breakdowns during the rental period.{" "}
        </p>
      </div>
      {/* Card 3 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            src="/images/rental/damage.jpg"
            alt="Location Icon"
            width={30}
            height={30}
            className="mr-2"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Damage Assessment and Reporting{" "}
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Streamline the process of assessing and reporting vehicle damages,
          enabling drivers to document and report any damages promptly to avoid
          disputes or liabilities.
        </p>
      </div>
      {/* Card 4 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            src="/images/rental/trip.jpg"
            alt="Location Icon"
            width={30}
            height={30}
            className="mr-2"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Trip Feedback and Ratings{" "}
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Collect feedback and ratings from drivers on their rental experience,
          helping to improve service quality, address issues and enhance overall
          customer satisfaction.
        </p>
      </div>
    </div>
  );
}

export default ReDriverApp;
