import React from "react";
import Image from "next/image";

function BuPassengerApp() {
  return (
    <div className="m-10  grid grid-cols-1 justify-center gap-4 sm:grid-cols-3">
      {/* Card 6 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            src="/images/business/bulk.jpg"
            alt="Location Icon"
            width={30}
            height={30}
            className="mr-2"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">Bulk Discounts </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Special discounts and pricing structures for bulk orders, encouraging
          larger purchases.
        </p>
      </div>
      {/* Card 7 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            src="/images/business/custom.jpg"
            alt="Location Icon"
            width={30}
            height={30}
            className="mr-2"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">Custom Catalogs</h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Ability to create customized catalogs tailored to specific business
          needs or customer segments.
        </p>
      </div>
      {/* Card 8 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            src="/images/business/account.jpg"
            alt="Location Icon"
            width={30}
            height={30}
            className="mr-2"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Account Management
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Tools for managing multiple user accounts, permissions and access
          levels within the organization.
        </p>
      </div>
      {/* Card 9 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            src="/images/business/erp.jpg"
            alt="Location Icon"
            width={30}
            height={30}
            className="mr-2"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Integration with ERP Systems
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Seamless integration with enterprise resource planning (ERP) systems
          for streamlined operations.
        </p>
      </div>
    </div>
  );
}

export default BuPassengerApp;
