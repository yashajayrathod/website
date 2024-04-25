import React from "react";
import Image from "next/image";

function DriverApp() {
  return (
    <div className="m-10  grid grid-cols-1 justify-center gap-4 sm:grid-cols-3">
      {/* Card 1 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            
            src="/images/digital/Medication Dispensing Alerts.jpeg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">Medication Dispensing Alerts</h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Receive alerts for medication dispensing tasks, including refill requests, prescription modificationsand medication synchronization services, to optimize pharmacy workflow efficiency.
        </p>
      </div>
      {/* Card 2 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
              width={30}
              height={30}
            
            src="/images/digital/Clinical Decision Support Tools.jpeg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
          Clinical Decision Support Tools
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Access clinical decision support tools, drug databasesand evidence-based guidelines to assist with medication selection, dosing adjustments, therapeutic substitutionsand patient counseling.
        </p>
      </div>
      {/* Card 3 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
          width={30}
          height={30}

            className="mr-2"
            src="/images/digital/Medication Therapy outcomes Reporting.jpeg"
            alt="Location Icon"
            
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
          Medication Therapy Monitoring
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Monitor patients' medication adherence, therapy outcomesand clinical parameters through medication therapy monitoring services, offering proactive interventions and treatment adjustments as needed.
        </p>
      </div>
      {/* Card 4 */}
      
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
          width={30}
          height={30}

            
            src="/images/digital/Compounding and Specialty.jpeg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">Compounding and Specialty Services</h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Provide compounding services and specialty medication consultations for patients with unique medication needs or complex medical conditions, ensuring personalized pharmaceutical care.
        </p>
      </div>
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
          width={30}
          height={30}

            
            src="/images/digital/Clinical Monitoring Services.jpeg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">Clinical Monitoring Services</h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Offer remote clinical monitoring services, including medication therapy management (MTM) follow-ups, lab result reviewsand symptom tracking, to support patients with chronic conditions or complex medication regimens.
        </p>
      </div>
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
          width={30}
          height={30}

            
            src="/images/digital/Specialty Medication Management.jpeg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">Specialty Medication Management</h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Provide comprehensive specialty medication management services, including prior authorization assistance, financial assistance programsand ongoing patient support for specialty drug therapies.
        </p>
      </div>
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
          width={30}
          height={30}

            
            src="/images/digital/Medication Adherence Program.jpeg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">Medication Adherence Programs</h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Implement targeted medication adherence programs, including reminder services, refill synchronizationand adherence coaching sessions, to support patients in adhering to prescribed treatment regimens.
        </p>
      </div>
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
          width={30}
          height={30}

            
            src="/images/digital/Medication Therapy outcomes Reporting.jpeg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">Medication Therapy Outcomes Reporting</h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Generate medication therapy outcomes reports summarizing patients' therapeutic responses, adverse drug reactionsand clinical outcomes, facilitating collaborative care coordination and treatment optimization.
        </p>
      </div>
    </div>
  );
}

export default DriverApp;
