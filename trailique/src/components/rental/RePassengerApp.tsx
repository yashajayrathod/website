import React from "react";
import Image from "next/image";

function RePassengerApp() {
  return (
    <div className="m-10  grid grid-cols-1 justify-center gap-4 sm:grid-cols-3">
      {/* Card 1 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            src="/images/rental/vehicle.jpg"
            alt="Location Icon"
            width={30}
            height={30}
            className="mr-2"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Vehicle Customization{" "}
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white ">
          Customize rental vehicles with optional features or accessories, such
          as GPS navigation systems, child seats or bike racks, to meet specific
          needs and preferences.
        </p>
      </div>
      {/* Card 2 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            src="/images/rental/loyalty.jpg"
            alt="Location Icon"
            width={30}
            height={30}
            className="mr-2"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Loyalty Rewards Program
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Implement a loyalty rewards program for repeat customers, offering
          discounts, perks or special privileges based on rental frequency or
          cumulative spending.{" "}
        </p>
      </div>
      {/* Card 3 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            src="/images/rental/delivery.jpg"
            alt="Location Icon"
            width={30}
            height={30}
            className="mr-2"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Vehicle Delivery Service
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Provide door-to-door delivery and pickup service for rental vehicles,
          offering convenience and flexibility to customers, especially in urban
          areas or high-demand locations.{" "}
        </p>
      </div>
      {/* Card 4 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            src="/images/rental/rental.jpg"
            alt="Location Icon"
            width={30}
            height={30}
            className="mr-2"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Rental Insurance Options
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Offer optional rental insurance coverage to customers, providing peace
          of mind and protection against potential damages or liabilities during
          the rental period.
        </p>
      </div>
    </div>
  );
}

export default RePassengerApp;
