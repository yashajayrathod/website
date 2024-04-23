import React from "react";
import Image from "next/image";

function NeAdminApp() {
  return (
    <div className="m-10  grid grid-cols-1 justify-center gap-4 sm:grid-cols-3">
      {/* Card 1 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            src="/images/nemt/electronic.jpg"
            alt="Location Icon"
            width={30}
            height={30}
            className="mr-2"
          />

          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Electronic Health Records (EHR) Integration{" "}
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Integrate with electronic health record systems to access patient
          information securely and facilitate seamless coordination with
          healthcare providers.
        </p>
      </div>
      {/* Card 2 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            src="/images/nemt/incident.jpg"
            alt="Location Icon"
            width={30}
            height={30}
            className="mr-2"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Incident Management System{" "}
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Implement an incident reporting and management system for
          administrators to address and resolve service-related incidents
          promptly and effectively.
        </p>
      </div>
      {/* Card 3 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            src="/images/nemt/feedback.jpg"
            alt="Location Icon"
            width={30}
            height={30}
            className="mr-2"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Feedback and Survey Tools{" "}
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Collect feedback and satisfaction surveys from passengers to evaluate
          service quality, identify areas for improvement and enhance overall
          customer experience.
        </p>
      </div>
      {/* Card 4 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            src="/images/nemt/performance.jpg"
            alt="Location Icon"
            width={30}
            height={30}
            className="mr-2"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Performance Analytics{" "}
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Generate performance analytics reports and dashboards to track key
          performance indicators, monitor service trends and make data-driven
          decisions for service optimization and improvement.
        </p>
      </div>
    </div>
  );
}

export default NeAdminApp;
