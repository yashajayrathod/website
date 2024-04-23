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
            
            src="/images/society/CommunityCalendar.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg dark:text-white font-medium text-gray-800 ">
          Community Calendar
          </h3>
          </div>
        <p className="text-sm dark:text-white text-gray-600">
        Maintain a centralized calendar of community events, meetings  and maintenance schedules for better coordination and planning.
        </p>
        </div>
      {/* Card 2 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            
            src="/images/society/IntegrationwithAccountingSoftware.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg dark:text-white font-medium text-gray-800">
          Integration with Accounting Software
          </h3>
        </div>
        <p className="text-sm dark:text-white text-gray-600">
        Integrate the management system with accounting software for seamless financial data synchronization and streamlined financial management.
        </p>
        </div>
     
      {/* Card 3 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            
            src="/images/society/AutomaticNotifications.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg dark:text-white font-medium text-gray-800">
          Automatic Notifications
          </h3>
        </div>
        <p className="text-sm dark:text-white text-gray-600">
        Set up automated notifications for important events such as overdue payments, upcoming maintenance tasks, or security alerts to keep residents informed.
        </p>
      </div>
      {/* Card 4 */}

      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            
            src="/images/society/VisitorAnalytics.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg dark:text-white font-medium text-gray-800">
          Visitor Analytics
          </h3>
        </div>
        <p className="text-sm dark:text-white text-gray-600">
        Access detailed visitor analytics and reports to track visitor trends, peak visiting hours  and overall visitor traffic within the community.
                </p>
      </div>

      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            
            src="/images/society/EnergyManagement.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg dark:text-white font-medium text-gray-800">
          Energy Management
          </h3>
        </div>
        <p className="text-sm dark:text-white text-gray-600">
        Monitor and optimize energy consumption within the community by integrating energy management systems and tracking usage patterns to identify opportunities for energy conservation and cost savings.
                </p>
      </div>

      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            
            src="/images/society/LegalandComplianceDocumentation.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg dark:text-white font-medium text-gray-800">
          Legal and Compliance Documentation
          </h3>
        </div>
        <p className="text-sm dark:text-white text-gray-600">
        Maintain a repository of legal documents, compliance certificates  and regulatory permits within the system to ensure that the community remains compliant with relevant laws and regulations.
                </p>
      </div>

      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            
            src="/images/society/VendorPerformanceEvaluation.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg dark:text-white font-medium text-gray-800">
          Vendor Performance Evaluation
          </h3>
        </div>
        <p className="text-sm dark:text-white text-gray-600">
        Implement a vendor performance evaluation system within the application to assess the quality of services provided by vendors and make informed decisions about contract renewals or terminations
                        </p>
      </div>

      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            
            src="/images/society/TrainingandCertificationTracking.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg dark:text-white font-medium text-gray-800">
          Training and Certification Tracking
          </h3>
        </div>
        <p className="text-sm dark:text-white text-gray-600">
        Keep track of security personnel training and certification requirements, schedule training sessions  and maintain records of certifications and compliance within the system.                </p>
      </div>

      
    </div>
  );
}

export default AdminApp;
