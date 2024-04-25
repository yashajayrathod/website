import React from "react";
import Image from "next/image";

function AdminApp() {
  return (
    <div className="m-10  grid grid-cols-1 justify-center gap-4 sm:grid-cols-3">
      {/* Card 1 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            
            src="/images/warehouse/9.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
          Data Visualization Tools
          </h3>
          </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Visualization tools for presenting warehouse data in graphical formats for easier analysis and decision-making.
        </p>
      </div>
      {/* Card 2 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            
            src="/images/warehouse/10.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
          Automated Alerts
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Automated alerts and notifications for critical events such as low inventory levels or equipment breakdowns.</p>
      </div>
      {/* Card 3 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            
            src="/images/warehouse/11.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
          Customizable Dashboards
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Customizable dashboards with key performance indicators (KPIs) for monitoring warehouse performance in real-time.
        </p>
      </div>
      {/* Card 4 */}

      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            
            src="/images/warehouse/12.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
          Continuous Improvement Initiatives
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Tools for implementing continuous improvement initiatives such as lean management practices and process optimization.

        </p>
      </div>
    </div>
  );
}

export default AdminApp;
