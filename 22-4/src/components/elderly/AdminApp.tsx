import React from "react";
import Image from "next/image";

function ElAdminApp() {
  return (
    <div className="m-10  grid grid-cols-1 justify-center gap-4 sm:grid-cols-3">
      {/* Card 1 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            src="/images/elderly/client.jpg"
            alt="Location Icon"
            width={30}
            height={30}
            className="mr-2"
          />

          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Client Satisfaction Surveys{" "}
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Conduct client satisfaction surveys, feedback sessions and focus
          groups to gather insights identify service gaps and enhance client
          experience and satisfaction.
        </p>
      </div>
      {/* Card 2 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            src="/images/elderly/community.jpg"
            alt="Location Icon"
            width={30}
            height={30}
            className="mr-2"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Community Resource Referrals{" "}
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Provide community resource referrals and linkages to social services,
          support groups, senior centers and local resources to address social
          determinants of health and promote holistic well-being.
        </p>
      </div>
      {/* Card 3 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            src="/images/elderly/caregiver.jpg"
            alt="Location Icon"
            width={30}
            height={30}
            className="mr-2"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Caregiver Training Programs{" "}
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Offer caregiver training programs continuing education courses and
          professional development opportunities to enhance caregiver skills,
          knowledge and competencies.
        </p>
      </div>
      {/* Card 4 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            src="/images/elderly/telehealth.jpg"
            alt="Location Icon"
            width={30}
            height={30}
            className="mr-2"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Telehealth Partnerships{" "}
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Forge partnerships with telehealth providers, remote monitoring
          platforms and virtual care networks to expand access to telehealth
          services and facilitate remote care delivery.{" "}
        </p>
      </div>
    </div>
  );
}

export default ElAdminApp;
