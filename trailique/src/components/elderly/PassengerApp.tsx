import React from "react";
import Image from "next/image";

function ElPassengerApp() {
  return (
    <div className="m-10  grid grid-cols-1 justify-center gap-4 sm:grid-cols-3">
      {/* Card 1 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            src="/images/elderly/memory.jpg"
            alt="Location Icon"
            width={30}
            height={30}
            className="mr-2"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Memory Support Tools{" "}
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Access memory support tools such as memory games, cognitive exercises
          and brain training apps to improve cognitive function and maintain
          mental acuity
        </p>
      </div>
      {/* Card 2 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            src="/images/elderly/fall.jpg"
            alt="Location Icon"
            width={30}
            height={30}
            className="mr-2"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Fall Detection Systems
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Deploy fall detection systems and wearable devices with automatic fall
          detection capabilities to alert caregivers or emergency services in
          the event of a fall or mobility issue.
        </p>
      </div>
      {/* Card 3 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            src="/images/elderly/health.jpg"
            alt="Location Icon"
            width={30}
            height={30}
            className="mr-2"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Healthcare Appointment Reminders
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Receive healthcare appointment reminders, transportation assistance,
          and support services for attending medical appointments and health
          screenings.
        </p>
      </div>
      {/* Card 4 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            src="/images/elderly/nutrition.jpg"
            alt="Location Icon"
            width={30}
            height={30}
            className="mr-2"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Nutrition Planning
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Receive nutrition planning assistance, meal delivery services and
          dietary counseling to ensure balanced nutrition and healthy eating
          habits.{" "}
        </p>
      </div>
    </div>
  );
}

export default ElPassengerApp;
