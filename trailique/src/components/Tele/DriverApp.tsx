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
            src="/images/tele/TelemedicineTraining.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Telemedicine Training
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Access training modules and resources on telemedicine best practices
          communication skills and patient engagement strategies.
        </p>
      </div>
      {/* Card 2 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            src="/images/tele/SpecialtyConsultations.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Specialty Consultations
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Collaborate with specialists through telemedicine platforms for
          multidisciplinary consultations and second opinions.
        </p>
      </div>
      {/* Card 3 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            className="mr-2"
            src="/images/tele/RemotePrescriptionRefills.jpg"
            alt="Location Icon"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Remote Prescription Refills
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Review and approve prescription refill requests from patients,
          ensuring continuity of care and medication access.
        </p>
      </div>
      {/* Card 4 */}

      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            src="/images/tele/TelemedicineRounds.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Telemedicine Rounds
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Conduct virtual rounds with hospital patients review progress and
          communicate with care teams for coordinated patient management.
        </p>{" "}
      </div>

      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            src="/images/tele/ClinicalDecisionSupport.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Clinical Decision Support
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Access clinical decision support tools embedded within the
          telemedicine platform, offering evidence-based guidelines, treatment
          protocols and diagnostic algorithms to enhance diagnostic accuracy and
          treatment efficacy.
        </p>
      </div>

      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            src="/images/tele/ContinuingMedicalEducation.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Continuing Medical Education
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Access online courses, webinars or medical conferences within the
          telemedicine platform to fulfill continuing medical education (CME)
          requirements, stay updated on medical advancements and enhance
          clinical skills and knowledge.
        </p>
      </div>

      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            src="/images/tele/SpecialistConsultations.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Specialist Consultations
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Facilitate virtual specialist consultations or referrals within the
          telemedicine platform, connecting patients with subspecialists or
          multidisciplinary care teams for complex medical conditions or second
          opinions.
        </p>
      </div>

      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            src="/images/tele/RemoteProcedureGuidance.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Remote Procedure Guidance
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Provide remote procedural guidance or surgical consultations through
          live video sessions within the telemedicine platform enabling
          specialists to assist with diagnostic procedures, wound assessments,
          or postoperative care remotely.
        </p>
      </div>
    </div>
  );
}

export default DriverApp;
