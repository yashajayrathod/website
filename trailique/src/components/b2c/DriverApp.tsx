import React from "react";
import Image from "next/image";

function BBDriverApp() {
  return (
    <div className="m-10  grid grid-cols-1 justify-center gap-4 sm:grid-cols-3">
      {/* Card 1 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            src="/images/b2c/Multi.jpeg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Multi-channel Selling
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Expand reach by selling products across multiple channels, including
          online marketplaces and social media platforms.{" "}
        </p>
      </div>
      {/* Card 2 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            src="/images/b2c/Inevtory.jpeg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Inventory Management
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Track inventory levels, receive low stock alertsand manage stock
          replenishment for efficient operations.
        </p>
      </div>
      {/* Card 3 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            className="mr-2"
            src="/images/b2c/Customer.jpeg"
            alt="Location Icon"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Customer Segmentation
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Segment customers based on demographics, purchase historyand
          preferences to target marketing efforts effectively.
        </p>
      </div>
      {/* Card 4 */}

      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            src="/images/b2c/Order.jpeg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Order Tracking and Notifications
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Provide customers with real-time updates on order status and delivery
          progress via email or SMS.
        </p>
      </div>
    </div>
  );
}

export default BBDriverApp;
