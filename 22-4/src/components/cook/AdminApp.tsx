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
            src="/images/cook/marketingnpro.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Marketing and Promotion{" "}
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Develop and execute marketing campaigns and promotions to attract new
          clients, increase bookings and enhance brand visibility.
        </p>
      </div>
      {/* Card 2 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            src="/images/cook/clientsupport.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">Client Support</h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Provide client support services, including assistance with bookings,
          inquiries and issue resolution to ensure a positive user experience.{" "}
        </p>
      </div>
      {/* Card 3 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            src="/images/cook/cheftraindev.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Chef Training and Development
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Offer training and development programs for chefs, including culinary
          workshops, skill-building sessions and certification opportunities.
        </p>
      </div>
      {/* Card 4 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            src="/images/cook/legalcompliance.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Legal Compliance
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Ensure legal compliance with food safety regulations, licensing
          requirements and industry standards through documentation, training
          and audits.
        </p>
      </div>
    </div>
  );
}

export default AdminApp;
