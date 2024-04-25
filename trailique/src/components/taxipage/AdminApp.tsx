import React from "react";
import Image from "next/image";

function AdminApp() {
  return (
    <div className="m-10  grid grid-cols-1 justify-center gap-4 sm:grid-cols-3">
      {/* Card 1 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            src="/images/taxi/Drivericon.png"
            alt="Location Icon"
            width={30}
            height={30}
            className="mr-2 dark:bg-white"
          />

          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Driver Management{" "}
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Manage driver profiles, documents and performance metrics.
        </p>
      </div>
      {/* Card 2 */}
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
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Passenger Management
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Handle passenger accounts, bookings and feedback.{" "}
        </p>
      </div>
      {/* Card 3 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            src="/images/taxi/payment.png"
            alt="Location Icon"
            width={30}
            height={30}
            className="mr-2 dark:bg-white"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Payment Management
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Monitor transactions, manage payment gateways and handle disputes.
        </p>
      </div>
      {/* Card 4 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            src="/images/taxi/commission.png"
            alt="Location Icon"
            width={30}
            height={30}
            className="mr-2 dark:bg-white"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Commission Tracking
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Track commissions earned from rides.
        </p>
      </div>
      {/* Card 5 */}
      <div className="rounded-md border p-4 dark:text-white">
        <div className="mb-2 flex items-center">
          <Image
            src="/images/taxi/feedback.png"
            alt="Location Icon"
            width={30}
            height={30}
            className="mr-2 dark:bg-white"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Feedback Analysis
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Analyze passenger and driver feedback for service improvement.{" "}
        </p>
      </div>
      {/* Card 6 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            src="/images/taxi/report.png"
            alt="Location Icon"
            width={30}
            height={30}
            className="mr-2 dark:bg-white"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Reporting and Analytics{" "}
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Generate reports and analytics for business insights.
        </p>
      </div>
      {/* Card 7 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            src="/images/taxi/booking.png"
            alt="Location Icon"
            width={30}
            height={30}
            className="mr-2 dark:bg-white"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Booking Management
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Handle ride bookings and allocations efficiently.
        </p>
      </div>
      {/* Card 8 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            src="/images/taxi/promo.png"
            alt="Location Icon"
            width={30}
            height={30}
            className="mr-2 dark:bg-white"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Promo Code Management
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Create and manage promotional campaigns and discount codes.
        </p>
      </div>

      {/* Card 10 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            src="/images/taxi/fleet.png"
            alt="Location Icon"
            width={30}
            height={30}
            className="mr-2 dark: bg-white"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Fleet Management
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Monitor vehicle fleet and maintenance schedules.
        </p>
      </div>
      {/* Card 11 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            src="/images/taxi/support.png"
            alt="Location Icon"
            width={30}
            height={30}
            className="mr-2 dark:bg-white"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Customer Support{" "}
          </h3>
        </div>
        <p className="text-sm text-gray-600  dark:text-white">
          Provide assistance and support to passengers and drivers.
        </p>
      </div>
    </div>
  );
}

export default AdminApp;
