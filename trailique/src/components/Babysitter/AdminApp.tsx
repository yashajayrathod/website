import React from "react";
import Image from "next/image";

function AdminApp() {
  return (
    <div className="m-10  grid grid-cols-1 justify-center gap-4 sm:grid-cols-3">
      {/* Card 1 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            src="/images/babysitter/Reporting and Analytics.jpeg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Reporting and Analytics
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Generate reports and analytics on user activity, booking trends and
          revenue performance to inform strategic decisions and business growth
          strategies.
        </p>
      </div>
      {/* Card 2 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            src="/images/babysitter/Promotional Campaigns.jpeg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Promotional Campaigns
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Create and manage promotional campaigns, discounts and referral
          programs to attract new users and retain existing ones.{" "}
        </p>
      </div>
      {/* Card 3 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            src="/images/babysitter/Legal Compliance.jpeg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white ">
            Legal Compliance
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Ensure compliance with local regulations and child care laws including
          licensing requirements and background check protocols.
        </p>
      </div>
      {/* Card 4 */}

      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            src="/images/babysitter/Feedback Mechanism.jpeg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Feedback Mechanism
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Implement a feedback mechanism to gather insights and suggestions from
          users for continuous platform improvement and optimization.
        </p>
      </div>
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            src="/images/babysitter/Credential Verification.jpeg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Credential Verification
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Verify babysitter credentials and certifications through a streamlined
          verification process to ensure compliance with safety standards.
        </p>
      </div>
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            src="/images/babysitter/Premium Membership.jpeg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Premium Membership
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Offer premium membership options for parents and babysitters providing
          access to additional features and benefits.
        </p>
      </div>
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            src="/images/babysitter/Patnership Programs.jpeg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Partnership Programs
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Establish partnerships with local businesses or organizations to offer
          exclusive discounts or benefits to platform users.
        </p>
      </div>
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            src="/images/babysitter/Localized Support.jpeg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Localized Support
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Provide multilingual and localized customer support to accommodate
          users from diverse backgrounds and regions.
        </p>
      </div>
    </div>
  );
}

export default AdminApp;
