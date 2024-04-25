import React from "react";
import Image from "next/image";

function BBAdminApp() {
  return (
    <div className="m-10  grid grid-cols-1 justify-center gap-4 sm:grid-cols-3">
      {/* Card 1 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            src="/images/b2c/Compliance.jpeg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Compliance and Security Management
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Ensure regulatory compliance and implement robust security measures to
          protect sensitive data.
        </p>
      </div>
      {/* Card 2 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            src="/images/b2c/Third.jpeg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Third-party Integration
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Integrate with third-party tools and services for payment processing,
          shipping logisticsand marketing automation.
        </p>
      </div>
      {/* Card 3 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            src="/images/b2c/Content.jpeg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Content Moderation
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Monitor user-generated content, reviewsand product listings to
          maintain quality and brand reputation.
        </p>
      </div>
      {/* Card 4 */}

      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            src="/images/b2c/Customization.jpeg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Customization and Branding
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Customize the platform's appearance, branding elementsand user
          interface to align with the company's brand identity.
        </p>
      </div>
    </div>
  );
}

export default BBAdminApp;
