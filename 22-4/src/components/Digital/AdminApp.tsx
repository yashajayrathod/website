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
            
            src="/images/digital/Medication.jpeg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
          Medication Inventory Management
          </h3>
          </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Track medication inventory levels, expiration datesand stock replenishment needs, with automated inventory alerts and reorder functionalities to prevent stockouts and minimize wastage.
        </p>
      </div>
      {/* Card 2 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            
            src="/images/digital/Patient Engagement.jpeg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
          Patient Engagement Initiatives
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Implement patient engagement initiatives, such as medication adherence programs, medication therapy reviewsand wellness campaigns, to promote patient loyalty, satisfactionand health outcomes.
</p>
      </div>
      {/* Card 3 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            
            src="/images/digital/Telepharmacy Support.jpeg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
          Telepharmacy Support
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Offer telepharmacy services, including virtual consultations, medication counselingand prescription dispensing, to expand access to pharmacy services in underserved or remote communities.
        </p>
      </div>
      {/* Card 4 */}

      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            
            src="/images/digital/Quality Assurance and Audits.jpeg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
          Quality Assurance and Audits
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Conduct regular quality assurance checks, medication safety auditsand performance evaluations to uphold service quality standards, regulatory complianceand patient safety protocols.
        </p>
      </div>
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            
            src="/images/digital/Patient Engagement.jpeg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
          Patient Engagement Platform
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Deploy a patient engagement platform offering interactive health quizzes, medication adherence challenges, wellness incentivesand health education resources to engage and empower patients in their healthcare journey.

        </p>
      </div>
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            
            src="/images/digital/Community Health Initiatives.jpeg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
          Community Health Initiatives
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Launch community health initiatives, such as health screenings, vaccination drivesand health education workshops, to promote preventive care, disease awarenessand public health outreach.
        </p>
      </div>
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            
            src="/images/digital/Patnership Programs.jpeg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
          Partnership Programs
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Establish partnership programs with healthcare providers, insurance companies, employersand community organizations to expand access to pharmacy services, improve care coordinationand enhance patient support networks.

        </p>
      </div>
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            
            src="/images/digital/Integrated Telehealth Services.jpeg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
          Integrated Telehealth Services
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Integrate telehealth services, including virtual doctor visits, remote patient monitoringand telemedicine consultations, to offer comprehensive virtual care solutions and extend the reach of healthcare services to remote or underserved populations.
        </p>
      </div>
    </div>
  );
}

export default AdminApp;
