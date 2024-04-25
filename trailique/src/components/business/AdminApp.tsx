import React from "react";
import Image from "next/image";

function BuAdminApp() {
  return (
    <div className="m-10  grid grid-cols-1 justify-center gap-4 sm:grid-cols-3">
      {/* Card 1 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            src="/images/business/promotions.jpg"
            alt="Location Icon"
            width={30}
            height={30}
            className="mr-2"
          />

          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Promotions and Discounts{" "}
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Regular promotions, discounts and special offers to attract and retain
          customers.
        </p>
      </div>
      {/* Card 2 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            src="/images/business/order.jpg"
            alt="Location Icon"
            width={30}
            height={30}
            className="mr-2"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Order History and Reordering{" "}
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Access to order history and one-click reordering for convenience and
          efficiency.
        </p>
      </div>
      {/* Card 3 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            src="/images/business/multi.jpg"
            alt="Location Icon"
            width={30}
            height={30}
            className="mr-2"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Multi-language Support{" "}
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Support for multiple languages to cater to a diverse customer base.
        </p>
      </div>
      {/* Card 4 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            src="/images/business/seo.jpg"
            alt="Location Icon"
            width={30}
            height={30}
            className="mr-2"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            SEO Optimization{" "}
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Optimized product listings and content for better search engine
          visibility and ranking.
        </p>
      </div>
    </div>
  );
}

export default BuAdminApp;
