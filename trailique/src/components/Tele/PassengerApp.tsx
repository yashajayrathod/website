import React from "react";
import Image from "next/image";

function PassengerApp() {
  return (
    <div className="m-10  grid grid-cols-1 justify-center gap-4 sm:grid-cols-3">
      {/* Card 1 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            src="/images/tele/RemoteMonitoringDevices.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Remote Monitoring Devices
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Connect and sync remote monitoring devices such as wearable fitness
          trackers or medical sensors for real-time health data tracking.
        </p>
      </div>
      {/* Card 2 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            src="/images/tele/HealthEducationResources.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Health Education Resources
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Access educational resources, articles and videos on various health
          topics to promote self-care and informed decision-making.
        </p>{" "}
      </div>
      {/* Card 3 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            src="/images/tele/FollowupAppointments.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Follow-up Appointments
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Schedule follow-up appointments with healthcare providers and receive
          reminders for upcoming consultations or tests.
        </p>
      </div>
      {/* Card 4 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            src="/images/tele/EmergencyAssistance.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Emergency Assistance
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Access emergency assistance features such as virtual urgent care or
          emergency contact information for immediate medical attention.
        </p>
      </div>
      {/* Card 5 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            src="/images/tele/TeleconsultationHistory.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Teleconsultation History
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Access and review past teleconsultation records including diagnoses
          treatment plans and follow-up instructions for continuity of care and
          medical history tracking.
        </p>
      </div>

      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            src="/images/tele/PrescriptionRefills.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Prescription Refills
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Request prescription refills electronically within the telemedicine
          platform allowing for convenient medication management and refill
          authorization by healthcare providers.
        </p>
      </div>

      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            src="/images/tele/HealthMonitoringIntegration.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Health Monitoring Integration{" "}
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Integrate wearable devices or health monitoring tools with the
          telemedicine platform to transmit real-time health data such as heart
          rate, blood pressure or glucose levels for remote monitoring and trend
          analysis.
        </p>
      </div>

      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            src="/images/tele/VirtualSupportGroups.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Virtual Support Groups
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Participate in virtual support groups or peer-to-peer networks within
          the telemedicine platform to connect with individuals facing similar
          health challenges share experiences and receive emotional support.{" "}
        </p>
      </div>
    </div>
  );
}

export default PassengerApp;
