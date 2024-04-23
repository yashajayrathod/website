import React from "react";
import Image from "next/image";

function BBPassengerApp() {
  return (
    <div className="m-10  grid grid-cols-1 justify-center gap-4 sm:grid-cols-3">
      {/* Card 1 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            src="/images/b2c/Wishlist.jpeg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Wishlist and Favorites
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Save products for later purchase and easily access favorite items for
          quick shopping.
        </p>
      </div>
      {/* Card 2 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            src="/images/b2c/Loyalty.jpeg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">Loyalty Program</h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Earn rewards, discountsand exclusive offers based on purchase activity
          and loyalty tier.
        </p>
      </div>
      {/* Card 3 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            src="/images/b2c/Social.jpeg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">Social Sharing</h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Share product links and reviews on social media platforms to engage
          with friends and followers.
        </p>
      </div>
      {/* Card 4 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            src="/images/b2c/Product.jpeg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Product Reviews and Ratings
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Provide feedback and ratings on purchased products to help other
          shoppers make informed decisions.
        </p>
      </div>
      {/* Card 5 */}
    </div>
  );
}

export default BBPassengerApp;
