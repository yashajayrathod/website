import React from "react";
import Image from "next/image";

function HoPassengerApp() {
  return (
    <div className="m-10  grid grid-cols-1 justify-center gap-4 sm:grid-cols-3">
      {/* Card 1 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            src="/images/house/appointment.jpg"
            alt="Location Icon"
            width={30}
            height={30}
            className="mr-2"
          />{" "}
          {/* Use your icon or image here */}
                    Monitor performance metrics, such as job completion time,
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Appointment Reminders{" "}
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Receive reminders and notifications for upcoming housekeeping
          appointments to ensure timely preparation.
        </p>
      </div>
      {/* Card 2 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            src="/images/house/special.jpg"
            alt="Location Icon"
            width={30}
            height={30}
            className="mr-2"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Special Requests
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Submit special requests or instructions for specific cleaning tasks or
          areas requiring special attention.
        </p>
      </div>
      {/* Card 3 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            src="/images/house/recurring.jpg"
            alt="Location Icon"
            width={30}
            height={30}
            className="mr-2"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Recurring Bookings
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Schedule recurring housekeeping appointments based on preferred
          frequencies, such as weekly, bi-weekly or monthly.
        </p>
      </div>
      {/* Card 4 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            src="/images/house/real.jpg"
            alt="Location Icon"
            width={30}
            height={30}
            className="mr-2"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Real-time Tracking
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Track the real-time status and progress of housekeeping appointments,
          including estimated arrival times and job completion updates.
        </p>
      </div>
    </div>
  );
}

export default HoPassengerApp;
