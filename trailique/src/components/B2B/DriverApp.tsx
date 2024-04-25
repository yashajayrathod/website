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
            
            src="/images/b2b/ProductRecommendations.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
          Product Recommendations
            </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Provide personalized product recommendations based on past purchases and browsing history.        </p>
      </div>
      {/* Card 2 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
              width={30}
              height={30}
            
            src="/images/b2b/MarketingandPromotionTools.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
          Marketing and Promotion Tools
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Create and manage promotional campaigns, discount codes and special offers to attract buyers.        </p>
      </div>
      {/* Card 3 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
          width={30}
          height={30}

            className="mr-2"
            src="/images/b2b/CustomerFeedbackManagement.jpg"
            alt="Location Icon"
            
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
          Customer Feedback Management
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Gather and analyze customer feedback to improve product offerings and enhance customer satisfaction.        </p>
      </div>
      {/* Card 4 */}
      
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
          width={30}
          height={30}

            
            src="/images/b2b/seller.png"
            alt="Location Icon"
            className="mr-2 h-6 w-6 dark:bg-white"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
          Multi-channel Selling
              </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Expand reach by selling products across multiple channels, including online marketplaces and social media platforms.
        </p>
        </div>

      
    </div>
  );
}

export default DriverApp;
