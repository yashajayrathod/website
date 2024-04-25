import React from "react";
import Image from "next/image";

function PaPassengerApp() {
  return (
    <div className="m-10  grid grid-cols-1 justify-center gap-4 sm:grid-cols-3">
      {/* Card 1 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            src="/images/patrolling/mobile.jpg"
            alt="Location Icon"
            width={30}
            height={30}
            className="mr-2"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Mobile Patrol Apps{" "}
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Mobile applications for security guards to access patrol routes,
          report incidents and communicate with supervisors.
        </p>
      </div>
      {/* Card 2 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            src="/images/patrolling/training.jpg"
            alt="Location Icon"
            width={30}
            height={30}
            className="mr-2"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Training Resources
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Access to training resources and materials to enhance security guard
          skills and knowledge.
        </p>
      </div>
      {/* Card 3 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            src="/images/patrolling/emergency.jpg"
            alt="Location Icon"
            width={30}
            height={30}
            className="mr-2"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Emergency Response Training
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Training programs and simulations for emergency response procedures to
          handle various security scenarios effectively.{" "}
        </p>
      </div>
      {/* Card 4 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            src="/images/patrolling/equipment.jpg"
            alt="Location Icon"
            width={30}
            height={30}
            className="mr-2"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Equipment Management
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Management of security equipment such as radios, cameras and alarms
          to ensure proper functioning and maintenance.
        </p>
      </div>
    </div>
  );
}

export default PaPassengerApp;
