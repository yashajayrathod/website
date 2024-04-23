import React from "react";
import Image from "next/image";

function ElDriverApp() {
  return (
    <div className="m-10  grid grid-cols-1 justify-center gap-4 sm:grid-cols-3">
      {/* Card 1 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            src="/images/elderly/respite.jpg"
            alt="Location Icon"
            width={30}
            height={30}
            className="mr-2"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Respite Care Services
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Access respite care services, caregiver support groups and counseling
          sessions to prevent caregiver burnout, manage stress and prioritize
          self-care.
        </p>
      </div>
      {/* Card 2 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            src="/images/elderly/mobility.jpg"
            alt="Location Icon"
            width={30}
            height={30}
            className="mr-2"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Mobility Assistance Devices{" "}
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Utilize mobility assistance devices such as walkers, wheelchairs and
          transfer aids for safe and comfortable mobility support for care
          recipients with mobility challenges.
        </p>
      </div>
      {/* Card 3 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            src="/images/elderly/home.jpg"
            alt="Location Icon"
            width={30}
            height={30}
            className="mr-2"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Home Safety Assessments{" "}
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Conduct home safety assessments, adaptive equipment installations and
          environmental modifications to create a safe and accessible living
          environment for care recipients.
        </p>
      </div>
      {/* Card 4 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            src="/images/elderly/assistive.jpg"
            alt="Location Icon"
            width={30}
            height={30}
            className="mr-2"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Assistive Technology Integration{" "}
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Integrate assistive technology devices such as smart home devices,
          remote monitoring sensors and voice-activated assistants to enhance
          independence and safety for care recipients.
        </p>
      </div>
    </div>
  );
}

export default ElDriverApp;
