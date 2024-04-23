import React from "react";
import Image from "next/image";

function DePassengerApp() {
  return (
    <div className="m-10  grid grid-cols-1 justify-center gap-4 sm:grid-cols-3">
      {/* Card 1 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            src="/images/delivery/Delivery.jpeg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Delivery Preferences
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Specify delivery instructions or preferences (e.g., contactless
          delivery).
        </p>
      </div>
      {/* Card 2 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            src="/images/delivery/Rating.jpeg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Rating and Feedback
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Provide feedback and rate delivery experience.
        </p>
      </div>
      {/* Card 3 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            src="/images/delivery/Promotions.jpeg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Promotions and Discounts
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Receive notifications for promotions and discounts on deliveries.
        </p>
      </div>
      {/* Card 4 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            src="/images/delivery/Support.jpeg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Support and Help Center
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Access customer support and FAQs for assistance.
        </p>
      </div>
      {/* Card 5 */}
    </div>
  );
}

export default DePassengerApp;
