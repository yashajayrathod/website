import React from "react";
import Image from "next/image";

function BuDriverApp() {
  return (
    <div className="m-10  grid grid-cols-1 justify-center gap-4 sm:grid-cols-3">
      {/* Card 1 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            src="/images/business/wishlist.jpg"
            alt="Location Icon"
            width={30}
            height={30}
            className="mr-2"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Wishlist and Favorites 
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Option to save products to a wishlist or favorites list for future
          reference or purchase.
        </p>
      </div>
      {/* Card 2 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            src="/images/business/product.jpg"
            alt="Location Icon"
            width={30}
            height={30}
            className="mr-2"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Product Comparison{" "}
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Side-by-side comparison of product features, specifications and prices
          for informed decision-making.
        </p>
      </div>
      {/* Card 3 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            src="/images/business/social.jpg"
            alt="Location Icon"
            width={30}
            height={30}
            className="mr-2"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">Social Sharing </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Integration with social media platforms for sharing product
          recommendations, reviews and purchases.
        </p>
      </div>
      {/* Card 4 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            src="/images/business/subscription.jpg"
            alt="Location Icon"
            width={30}
            height={30}
            className="mr-2"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Subscription Services{" "}
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Subscription-based services for regular delivery of consumable
          products or services.
        </p>
      </div>
    </div>
  );
}

export default BuDriverApp;
