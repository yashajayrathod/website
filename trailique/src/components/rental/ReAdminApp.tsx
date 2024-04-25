import React from "react";
import Image from "next/image";

function ReAdminApp() {
  return (
    <div className="m-10  grid grid-cols-1 justify-center gap-4 sm:grid-cols-3">
      {/* Card 1 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            src="/images/rental/in.jpg"
            alt="Location Icon"
            width={30}
            height={30}
            className="mr-2"
          />

          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Inventory Forecasting and Planning{" "}
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Forecast rental demand, track inventory turnover rates and plan
          vehicle acquisitions or retirements to optimize inventory levels and
          meet customer demand effectively.
        </p>
      </div>
      {/* Card 2 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            src="/images/rental/regulatory.jpg"
            alt="Location Icon"
            width={30}
            height={30}
            className="mr-2"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Regulatory Compliance Management{" "}
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Stay compliant with local regulations, licensing requirements and
          safety standards governing rental operations, ensuring legal
          compliance and minimizing risks of fines or penalties.
        </p>
      </div>
      {/* Card 3 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            src="/images/rental/customer.jpg"
            alt="Location Icon"
            width={30}
            height={30}
            className="mr-2"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Customer Support Ticketing System{" "}
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Implement a customer support ticketing system to manage and track
          customer inquiries, complaints or service requests efficiently,
          ensuring timely resolution and customer satisfaction.{" "}
        </p>
      </div>
      {/* Card 4 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            src="/images/rental/integration.jpg"
            alt="Location Icon"
            width={30}
            height={30}
            className="mr-2"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Integration with Third-Party Platforms{" "}
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Integrate with third-party platforms, such as rental aggregators,
          booking channels or payment gateways, to expand market reach, increase
          bookings and streamline operations.
        </p>
      </div>
    </div>
  );
}

export default ReAdminApp;
