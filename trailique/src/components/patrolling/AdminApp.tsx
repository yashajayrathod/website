import React from "react";
import Image from "next/image";

function PaAdminApp() {
  return (
    <div className="m-10  grid grid-cols-1 justify-center gap-4 sm:grid-cols-3">
      {/* Card 1 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            src="/images/patrolling/dashboard.jpg"
            alt="Location Icon"
            width={30}
            height={30}
            className="mr-2"
          />

          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Centralized Dashboard{" "}
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Centralized dashboard for monitoring security operations, viewing
          real-time alerts and accessing key metrics.
        </p>
      </div>
      {/* Card 2 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            src="/images/patrolling/geo.jpg"
            alt="Location Icon"
            width={30}
            height={30}
            className="mr-2"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">Geofencing </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Implementation of geofencing technology to create virtual boundaries
          and trigger alerts when security guards enter or leave designated
          areas.
        </p>
      </div>
      {/* Card 3 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            src="/images/patrolling/compliance.jpg"
            alt="Location Icon"
            width={30}
            height={30}
            className="mr-2"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Compliance Management{" "}
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Management of compliance requirements and regulatory standards related
          to security operations and data protection.
        </p>
      </div>
      {/* Card 4 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            src="/images/patrolling/regular.jpg"
            alt="Location Icon"
            width={30}
            height={30}
            className="mr-2"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Regular Security Audits{" "}
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Conducting regular security audits and assessments to identify
          vulnerabilities and implement corrective measures.
        </p>
      </div>
    </div>
  );
}

export default PaAdminApp;
