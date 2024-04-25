import React from "react";
import Image from "next/image";

function PaDriverApp() {
  return (
    <div className="m-10  grid grid-cols-1 justify-center gap-4 sm:grid-cols-3">
      {/* Card 1 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            src="/images/patrolling/visitor.jpg"
            alt="Location Icon"
            width={30}
            height={30}
            className="mr-2"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Visitor Pre-registration
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Pre-registration of visitors through an online portal or app to
          streamline the check-in process and enhance security.
        </p>
      </div>
      {/* Card 2 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            src="/images/patrolling/customized.jpg"
            alt="Location Icon"
            width={30}
            height={30}
            className="mr-2"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Customized Reports{" "}
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Generation of customized reports on security incidents, patrol
          activities and access control events for analysis and review.
        </p>
      </div>
      {/* Card 3 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            src="/images/patrolling/task.jpg"
            alt="Location Icon"
            width={30}
            height={30}
            className="mr-2"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Task Management{" "}
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Assignment and tracking of security-related tasks and follow-up
          actions for improved accountability and efficiency.
        </p>
      </div>
      {/* Card 4 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            src="/images/patrolling/hr.jpg"
            alt="Location Icon"
            width={30}
            height={30}
            className="mr-2"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Integration with HR Systems{" "}
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Integration with human resources systems for seamless management of
          security guard assignments and payroll.
        </p>
      </div>
    </div>
  );
}

export default PaDriverApp;
