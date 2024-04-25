import React from "react";
import Image from "next/image";

function NePassengerApp() {
  return (
    <div className="m-10  grid grid-cols-1 justify-center gap-4 sm:grid-cols-3">
      {/* Card 1 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            src="/images/nemt/medication.jpg"
            alt="Location Icon"
            width={30}
            height={30}
            className="mr-2"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Medication Reminders
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Receive reminders for medication schedules and appointments, helping
          passengers manage their healthcare routines effectively.
        </p>
      </div>
      {/* Card 2 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            src="/images/nemt/companion.jpg"
            alt="Location Icon"
            width={30}
            height={30}
            className="mr-2"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Companion Accommodation
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Allow passengers to request additional companions or caregivers to
          accompany them during transportation, ensuring emotional support and
          assistance.
        </p>
      </div>
      {/* Card 3 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            src="/images/nemt/language.jpg"
            alt="Location Icon"
            width={30}
            height={30}
            className="mr-2"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Language Interpretation
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Provide language interpretation services for passengers with limited
          English proficiency, facilitating clear communication and
          understanding.
        </p>
      </div>
      {/* Card 4 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            src="/images/nemt/door.jpg"
            alt="Location Icon"
            width={30}
            height={30}
            className="mr-2"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Door-to-Door Service
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Offer door-to-door pickup and drop-off services for passengers with
          mobility issues or transportation challenges, ensuring convenience and
          accessibility.{" "}
        </p>
      </div>
    </div>
  );
}

export default NePassengerApp;
