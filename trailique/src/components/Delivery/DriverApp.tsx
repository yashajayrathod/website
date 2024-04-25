import React from "react";
import Image from "next/image";

function DeDriverApp() {
  return (
    <div className="m-10  grid grid-cols-1 justify-center gap-4 sm:grid-cols-3">
      {/* Card 1 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            src="/images/delivery/Route.jpeg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Delivery Route Optimization
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Optimize delivery routes for time and fuel efficiency.
        </p>
      </div>
      {/* Card 2 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            src="/images/delivery/Customer Communication.jpeg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Customer Communication
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Communicate with customers regarding delivery updates or issues.
        </p>
      </div>
      {/* Card 3 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            className="mr-2"
            src="/images/delivery/Performance.jpeg"
            alt="Location Icon"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Performance Rewards
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Earn incentives or bonuses based on delivery performance.
        </p>
      </div>
      {/* Card 4 */}

      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            src="/images/delivery/Training.jpeg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Training Materials
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Access training materials or resources for improving delivery skills.
        </p>
      </div>
    </div>
  );
}

export default DeDriverApp;
