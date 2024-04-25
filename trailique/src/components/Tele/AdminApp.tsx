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
            src="/images/tele/TelehealthPolicyDevelopment.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Telehealth Policy Development.
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Develop telehealth policies and procedures to guide healthcare
          providers and staff in delivering telemedicine services effectively.
        </p>{" "}
      </div>
      {/* Card 2 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            src="/images/tele/TechnicalSupport.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Technical Support{" "}
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Provide technical support and troubleshooting assistance to users,
          addressing platform issues, connectivity problems and user inquiries.{" "}
        </p>
      </div>

      {/* Card 3 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            src="/images/tele/QualityAssurance.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Quality Assurance{" "}
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Implement quality assurance measures such as peer reviews, patient
          satisfaction surveys and outcome assessments to monitor and improve
          service quality.
        </p>
      </div>
      {/* Card 4 */}

      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            src="/images/tele/TelemedicineExpansion.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Telemedicine Expansion
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Explore opportunities for telemedicine expansion, including
          partnerships with healthcare organizations, community outreach
          programs and telehealth grants.
        </p>
      </div>

      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            src="/images/tele/TelemedicineAnalytics.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Telemedicine Analytics
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Utilize telemedicine analytics tools and dashboards to track key
          performance indicators (KPIs) monitor service utilization, patient
          satisfaction and clinical outcomes and identify areas for improvement
          or optimization.
        </p>
      </div>

      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            src="/images/tele/ComprehensiveReporting.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Comprehensive Reporting
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Generate comprehensive reports and analytics on telemedicine
          activities, including teleconsultation volume, patient demographics
          service utilization trends and clinical outcomes for internal review,
          quality improvement initiatives and stakeholder reporting.
        </p>
      </div>

      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            src="/images/tele/RegulatoryComplianceAudits.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Regulatory Compliance Audits
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Conduct regular audits and assessments to ensure compliance with
          telemedicine regulations, accreditation standards, data privacy laws
          and licensure requirements, implementing corrective actions as needed
          to mitigate compliance risks.{" "}
        </p>
      </div>

      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            src="/images/tele/TelehealthProgramExpansion.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Telehealth Program Expansion
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Explore opportunities for telehealth program expansion, including new
          service offerings, specialty areas or geographic expansion, leveraging
          market research, patient feedback and industry trends to inform
          strategic growth initiatives.{" "}
        </p>
      </div>
    </div>
  );
}

export default AdminApp;
