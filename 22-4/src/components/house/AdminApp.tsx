import React from "react";
import Image from "next/image";

function HoAdminApp() {
  return (
    <div className="m-10  grid grid-cols-1 justify-center gap-4 sm:grid-cols-3">
      {/* Card 1 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            src="/images/house/area.jpg"
            alt="Location Icon"
            width={30}
            height={30}
            className="mr-2"
          />

          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Service Area Management{" "}
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Define and manage service areas, including geographic boundaries and
          coverage zones for efficient job assignment and service allocation.
        </p>
      </div>
      {/* Card 2 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            src="/images/house/performance.jpg"
            alt="Location Icon"
            width={30}
            height={30}
            className="mr-2"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Performance Analytics{" "}
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Generate reports and analytics on key performance indicators, such as
          job completion rates, customer satisfaction scores and revenue growth.
        </p>
      </div>
      {/* Card 3 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            src="/images/house/promotional.jpg"
            alt="Location Icon"
            width={30}
            height={30}
            className="mr-2"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Promotional Campaigns{" "}
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Create and launch promotional campaigns and offers to attract new
          clients, retain existing ones and drive business growth.{" "}
        </p>
      </div>
      {/* Card 4 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            src="/images/house/legal.jpg"
            alt="Location Icon"
            width={30}
            height={30}
            className="mr-2"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Legal and Compliance Support{" "}
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Ensure compliance with local regulations and industry standards
          through legal guidance, documentation and updates.
        </p>
      </div>
      {/* Card 5 */}
    </div>
  );
}

export default HoAdminApp;
