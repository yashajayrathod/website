import React from "react";
import Image from "next/image";

function NeDriverApp() {
  return (
    <div className="m-10  grid grid-cols-1 justify-center gap-4 sm:grid-cols-3">
      {/* Card 1 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            src="/images/nemt/emergency.jpg"
            alt="Location Icon"
            width={30}
            height={30}
            className="mr-2"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white ">
            Emergency Response Protocol
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Implement emergency response protocols and communication channels for
          drivers to handle medical emergencies and crisis situations
          effectively.
        </p>
      </div>
      {/* Card 2 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            src="/images/nemt/vehicle.jpg"
            alt="Location Icon"
            width={30}
            height={30}
            className="mr-2"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Vehicle Sanitization{" "}
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Maintain strict hygiene and sanitization protocols for vehicles,
          ensuring a safe and hygienic environment for passengers, especially
          during health crises.
        </p>
      </div>
      {/* Card 3 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            src="/images/nemt/passenger.jpg"
            alt="Location Icon"
            width={30}
            height={30}
            className="mr-2"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Passenger Assistance Training{" "}
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Provide drivers with training on assisting passengers with mobility
          aids, transferring techniques and emergency evacuation procedures,
          enhancing passenger safety and comfort.{" "}
        </p>
      </div>
    </div>
  );
}

export default NeDriverApp;
