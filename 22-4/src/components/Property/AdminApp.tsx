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
            src="/images/property/1.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg dark:text-white font-medium text-gray-800 ">
            Integration Management
          </h3>
        </div>
        <p className="text-sm dark:text-white text-gray-600">
          Seamlessly integrate third-party tools or services to enhance system
          functionality.{" "}
        </p>
      </div>
      {/* Card 2 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            src="/images/property/2.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg dark:text-white font-medium text-gray-800">
            Notification Customization
          </h3>
        </div>
        <p className="text-sm dark:text-white text-gray-600">
          Customize notifications and alerts for specific events or user
          actions.
        </p>
      </div>

      {/* Card 3 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            src="/images/property/3.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg dark:text-white font-medium text-gray-800">
            Document Management
          </h3>
        </div>
        <p className="text-sm dark:text-white text-gray-600">
          Store and organize important documents such as contracts, agreements,
          and policies.
        </p>
      </div>
      {/* Card 4 */}

      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            src="/images/property/4.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium dark:text-white text-gray-800">Task Assignment</h3>
        </div>
        <p className="text-sm dark:text-white text-gray-600">
          Assign tasks to property managers or maintenance staff and track their
          completion.
        </p>
      </div>

      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            src="/images/property/5.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg dark:text-white font-medium text-gray-800">
            Tenant Feedback Analysis
          </h3>
        </div>
        <p className="text-sm dark:text-white text-gray-600">
          Analyze feedback from tenants to identify areas for improvement in
          property management.
        </p>
      </div>

      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            src="/images/property/6.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg dark:text-white font-medium text-gray-800">
            Vacancy Management
          </h3>
        </div>
        <p className="text-sm dark:text-white text-gray-600">
          Monitor and manage vacant properties, including advertising vacancies
          and scheduling viewings.{" "}
        </p>
      </div>

      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            src="/images/property/7.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg dark:text-white font-medium text-gray-800">
            Financial Forecasting
          </h3>
        </div>
        <p className="text-sm dark:text-white text-gray-600">
          Utilize data analytics to forecast rental income, expenses, and cash
          flow for better financial planning.{" "}
        </p>
      </div>

      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            src="/images/property/8.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg dark:text-white font-medium text-gray-800">
            Security Enhancements
          </h3>
        </div>
        <p className="text-sm dark:text-white text-gray-600">
          Implement additional security measures such as two-factor
          authentication or IP restrictions.
        </p>
      </div>

      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            src="/images/property/9.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg dark:text-white font-medium text-gray-800">
            Training and Support
          </h3>
        </div>
        <p className="text-sm dark:text-white text-gray-600">
          Provide training resources and support materials for property managers
          and staff.
        </p>
      </div>

      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            src="/images/property/10.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg dark:text-white font-medium text-gray-800">
            Property Portfolio Management
          </h3>
        </div>
        <p className="text-sm dark:text-white text-gray-600">
          Manage multiple properties efficiently, with features for grouping,
          filtering, and analyzing data across portfolios.
        </p>
      </div>
    </div>
  );
}

export default AdminApp;
