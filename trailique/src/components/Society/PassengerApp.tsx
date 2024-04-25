import React from "react";
import Image from "next/image";

function PassengerApp() {
  return (
    <div className="m-10  grid grid-cols-1 justify-center gap-4 sm:grid-cols-3">
      {/* Card 1 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            src="/images/society/CommunityForums.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg dark:text-white font-medium text-gray-800">
            Community Forums
          </h3>
        </div>
        <p className="text-sm dark:text-white text-gray-600">
          Engage in discussions and share information with fellow residents
          through online forums or chat groups.
        </p>
      </div>
      {/* Card 2 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            src="/images/society/PaymentGatewayIntegration.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg dark:text-white font-medium text-gray-800">
            Payment Gateway Integration
          </h3>
        </div>
        <p className="text-sm dark:text-white text-gray-600">
          Make maintenance fee payments securely online through integrated
          payment gateways.
        </p>
      </div>
      {/* Card 3 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            src="/images/society/PackageTracking.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg dark:text-white font-medium text-gray-800">
            Package Tracking
          </h3>
        </div>
        <p className="text-sm dark:text-white text-gray-600">
          Receive notifications and track the status of package deliveries
          within the community premises.
        </p>
      </div>
      {/* Card 4 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            src="/images/society/EventManagement.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg dark:text-white font-medium text-gray-800">
            Event Management
          </h3>
        </div>
        <p className="text-sm dark:text-white text-gray-600">
          Organize and RSVP for community events, parties, or meetings through
          the application.
        </p>
      </div>
    </div>
  );
}

export default PassengerApp;
