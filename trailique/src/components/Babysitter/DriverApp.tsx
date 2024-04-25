import React from "react";
import Image from "next/image";

function DriverApp() {
  return (
    <div className="m-10  grid grid-cols-1 justify-center gap-4 sm:grid-cols-3">
      {/* Card 1 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            src="/images/babysitter/Certification Tracking.jpeg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Certification Tracking
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Keep track of certifications, training courses and credentials to
          showcase expertise and qualifications to potential clients.
        </p>
      </div>
      {/* Card 2 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            src="/images/babysitter/Availability Calender.jpeg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Availability Calendar
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Maintain an updated availability calendar to inform parents of open
          slots for booking babysitting appointments.
        </p>
      </div>
      {/* Card 3 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            className="mr-2"
            src="/images/babysitter/Additional Services.jpeg"
            alt="Location Icon"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Additional Services
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Offer additional services such as tutoring, meal preparation or light
          housekeeping to cater to diverse parental needs.
        </p>
      </div>
      {/* Card 4 */}

      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            src="/images/babysitter/Client Perferences.jpeg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Client Preferences
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Record and reference client preferences and child care instructions to
          personalize services and enhance customer satisfaction.
        </p>
      </div>
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            src="/images/babysitter/Emergency Training.jpeg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Emergency Training
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Access training materials and resources on emergency procedures,
          CPRand first aid to enhance preparedness for any situation.
        </p>
      </div>
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            src="/images/babysitter/Community Events.jpeg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Community Events
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Participate in community events or workshops organized for babysitters
          to network, share experiencesand gain insights into child care
          practices.
        </p>
      </div>
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            src="/images/babysitter/Availability Alerts.jpeg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Availability Alerts
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Receive alerts for last-minute booking requests or cancellations to
          fill open slots and maximize earning opportunities.
        </p>
      </div>
    </div>
  );
}

export default DriverApp;
