import React from "react";
import Image from "next/image";

function HoDriverApp() {
  return (
    <div className="m-10  grid grid-cols-1 justify-center gap-4 sm:grid-cols-3">
      {/* Card 1 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            src="/images/house/task.jpg"
            alt="Location Icon"
            width={30}
            height={30}
            className="mr-2"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">Task Checklist</h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Access a comprehensive checklist of tasks to be completed for each
          housekeeping job, ensuring thoroughness and consistency.{" "}
        </p>
      </div>
      {/* Card 2 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            src="/images/house/travel.jpg"
            alt="Location Icon"
            width={30}
            height={30}
            className="mr-2"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Travel Route Optimization{" "}
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Optimize travel routes to minimize travel time and maximize the number
          of appointments completed within a given time frame.
        </p>
      </div>
      {/* Card 3 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            src="/images/house/equipment.jpg"
            alt="Location Icon"
            width={30}
            height={30}
            className="mr-2"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Equipment Maintenance Alerts{" "}
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Receive alerts and reminders for equipment maintenance tasks to ensure
          equipment reliability and performance.
        </p>
      </div>
      {/* Card 4 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            src="/images/house/client.jpg"
            alt="Location Icon"
            width={30}
            height={30}
            className="mr-2"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Client Preferences History{" "}
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Access a history of client preferences and special instructions to
          personalize service delivery and enhance customer satisfaction.
        </p>
      </div>
    </div>
  );
}

export default HoDriverApp;
