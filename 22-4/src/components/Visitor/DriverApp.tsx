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
            
            src="/images/visitor/VIPGuestManagement.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
          VIP Guest Management
            </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Specialized management features for handling VIP guests, including priority treatment and enhanced services.
        </p>
        </div>
      {/* Card 2 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
             width={30}
             height={30}
            
            src="/images/visitor/VisitorAuthentication.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
          Visitor Authentication
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Authentication mechanisms for verifying visitor identities and ensuring security.
        </p>
        </div>
      {/* Card 3 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
          width={30}
          height={30}

            className="mr-2"
            src="/images/visitor/VisitorTracking.jpg"
            alt="Location Icon"
            
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
          Visitor Tracking
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Real-time tracking of visitor movements within the premises for enhanced security and accountability.
        </p>
        </div>
      {/* Card 4 */}
      
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
          width={30}
          height={30}

            
            src="/images/visitor/VisitorFeedback.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
          Visitor Feedback
              </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Collection of visitor feedback to gather insights and improve visitor experience and service quality.
        </p>
        </div>

      
    </div>
  );
}

export default DriverApp;
