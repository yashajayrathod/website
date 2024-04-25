import React from "react";
import Image from "next/image";

function DriverApp() {
  return (
    <div className="m-10  grid grid-cols-1 justify-center gap-4 sm:grid-cols-3">
      {/* Card 1 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            src="/images/taxi/passengericon.png"
            alt="Location Icon"
            width={30}
            height={30}
            className="mr-2 dark:bg-white"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">Driver Profile</h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Maintain detailed driver profiles for enhanced service provision.
        </p>
      </div>
      {/* Card 2 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            src="/images/taxi/trip.png"
            alt="Location Icon"
            width={30}
            height={30}
            className="mr-2 dark:bg-white"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Trip Notifications
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Receive alerts and updates on upcoming trips.
        </p>
      </div>
      {/* Card 3 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            src="/images/taxi/earning.png"
            alt="Location Icon"
            width={30}
            height={30}
            className="mr-2 dark:bg-white"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Earnings Tracking
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Monitor daily earnings and pending payments.
        </p>
      </div>
      {/* Card 4 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            src="/images/taxi/navigation.png"
            alt="Location Icon"
            width={30}
            height={30}
            className="mr-2 dark:bg-white"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Navigation Assistance
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Utilize built-in navigation tools for efficient route planning.{" "}
        </p>
      </div>
      {/* Card 5 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            src="/images/taxi/sos.png"
            alt="Location Icon"
            width={30}
            height={30}
            className="mr-2 dark:bg-white"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">SOS Alerts</h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Access emergency assistance with the click of a button.
        </p>
      </div>
      {/* Card 6 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            src="/images/taxi/document.png"
            alt="Location Icon"
            width={30}
            height={30}
            className="mr-2 dark:bg-white"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Document Uploads{" "}
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Submit necessary documents for verification.
        </p>
      </div>
      {/* Card 7 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            src="/images/taxi/vehicle.png"
            alt="Location Icon"
            width={30}
            height={30}
            className="mr-2 dark:bg-white"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Vehicle Management
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Manage vehicle details and maintenance records.
        </p>
      </div>
      {/* Card 8 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            src="/images/taxi/performance.png"
            alt="Location Icon"
            width={30}
            height={30}
            className="mr-2 dark:bg-white"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Performance Insights
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Gain insights into driving performance and ratings.
        </p>
      </div>
      {/* Card 9 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            src="/images/taxi/availability.png"
            alt="Location Icon"
            width={30}
            height={30}
            className="mr-2 dark:bg-white"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Availability Settings
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Set availability preferences for work hours.
        </p>
      </div>
      {/* Card 10 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            src="/images/taxi/trip.png"
            alt="Location Icon"
            width={30}
            height={30}
            className="mr-2 dark:bg-white"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">Trip History</h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Access records of past trips for reference.{" "}
        </p>
      </div>
    </div>
  );
}

export default DriverApp;
