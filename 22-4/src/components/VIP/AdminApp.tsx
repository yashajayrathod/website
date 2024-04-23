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
            
            src="/images/vip/DataAnalytics.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
          Data Analytics          </h3>
          </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Generate reports and analytics on transportation metrics such as trip volume, vehicle utilization  and passenger demographics, providing insights for strategic planning and decision-making.
        </p>
      </div>
      {/* Card 2 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            
            src="/images/vip/CustomizationOptions.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
          Customization Options          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Customize the app interface and features to align with branding guidelines and specific requirements, ensuring a cohesive and personalized user experience for passengers, drivers  and administrators.    
        </p>
          </div>
     
      {/* Card 3 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            
            src="/images/vip/DocumentManagement.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
          Document Management          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Manage digital documents and records related to vehicle registration, insurance, permits  and driver credentials, ensuring compliance with regulatory requirements and audit standards.
        </p>
      </div>
      {/* Card 4 */}

      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            
            src="/images/vip/Geofencing.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
          Geofencing
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Set up geofences and virtual boundaries to define operational areas, restricted zones  and designated pickup/drop-off points, enhancing security, efficiency  and route optimization.
        </p>
      </div>

      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            
            src="/images/vip/IntegrationwithExternalSystems.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
          Integration with External Systems
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Integrate transportation management software with external systems such as school databases, employee directories  and third-party services for seamless data exchange and workflow automation.
        </p>
      </div>
    </div>
  );
}

export default AdminApp;
