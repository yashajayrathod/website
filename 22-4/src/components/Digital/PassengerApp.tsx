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
            src="/images/digital/Medicine Refill Request.jpeg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Medication Refill Requests
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Submit refill requests for ongoing medication prescriptions with
          automated refill reminders and status updates for prescription refills
          and renewals.
        </p>
      </div>
      {/* Card 2 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            src="/images/digital/Medicine Interaction Checker.jpeg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Medication Interaction Checker
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Access a medication interaction checker tool to identify potential
          drug-drug interactions, contraindicationsand adverse effects before
          ordering or taking medications.
        </p>
      </div>
      {/* Card 3 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            src="/images/digital/Health and Wellness Resources.jpeg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Health and Wellness Resources
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Access educational resources, articlesand wellness tips on medication
          safety, disease management, lifestyle modificationsand preventive
          healthcare measures.
        </p>
      </div>
      {/* Card 4 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            src="/images/digital/Health Monitoring Integration.jpeg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Health Monitoring Integration
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Integrate wearable devices or health monitoring apps to track health
          metrics such as blood pressure, blood glucose or activity levelsand
          share data with healthcare providers for remote monitoring and
          management.
        </p>
      </div>
      {/* Card 5 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            src="/images/digital/Medication Delivery Tracking.jpeg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Medication Delivery Tracking
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Track the real-time status of medication deliveries including
          estimated arrival times and delivery confirmation notifications for
          enhanced convenience and transparency.
        </p>
      </div>
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            src="/images/digital/Medication Adherence Reports.jpeg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Medication Adherence Reports
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Receive personalized medication adherence reports summarizing
          medication-taking behavior missed dosesand adherence trends with
          actionable insights for improving adherence and health outcomes.
        </p>
      </div>
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            src="/images/digital/Virtual Consultations.jpeg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Virtual Consultations
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Schedule virtual consultations with pharmacists or healthcare
          providers for medication-related consultations, medication reviewsand
          treatment optimization discussions.
        </p>
      </div>
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            src="/images/digital/Health and Wellness Marketplace.jpeg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Health and Wellness Marketplace
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Access an integrated health and wellness marketplace offering a wide
          range of healthcare products, medical devices, supplements and
          wellness services for holistic health management.
        </p>
      </div>
    </div>
  );
}

export default PassengerApp;
