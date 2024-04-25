import React from "react";
import Image from "next/image";

function LSApp() {
  return (
    <div className="m-10  grid grid-cols-1 justify-center gap-4 sm:grid-cols-3">
      {/* Card 1 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            
            src="/images/hm/equipmentmaintenance.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg dark:text-white font-medium text-gray-800">
          Equipment Maintenance
          </h3>
        </div>
        <p className="text-sm dark:text-white text-gray-600">
        Schedule and track equipment maintenance tasks to ensure uptime and reliability.
</p>
      </div>
      {/* Card 2 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            
            src="/images/hm/specimenlabelling.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg dark:text-white font-medium text-gray-800">
          Specimen Labeling and Tracking
          </h3>
        </div>
        <p className="text-sm dark:text-white text-gray-600">
        Label specimens accurately and track their movement throughout the testing process.
        </p>
        </div>
      {/* Card 3 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            
            src="/images/hm/testinterpretation.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg dark:text-white font-medium text-gray-800">
          Test Interpretation Assistance
          </h3>
        </div>
        <p className="text-sm dark:text-white text-gray-600">
        Provide guidance on test interpretation and troubleshooting for complex cases.

</p>
      </div>
      {/* Card 4 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            
            src="/images/hm/labtestcatalog.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg dark:text-white font-medium text-gray-800">
          Lab Test Catalog Management
           </h3>
        </div>
        <p className="text-sm dark:text-white text-gray-600">
        Maintain an updated catalog of available tests, including test codes and descriptions.        </p>
      </div>
      
      {/* Card 4 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            
            src="/images/hm/automatedreporting.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg dark:text-white font-medium text-gray-800">
          Automated Reporting
           </h3>
        </div>
        <p className="text-sm dark:text-white text-gray-600">
        Generate and distribute test reports electronically to healthcare providers and patients.
        </p>
        </div>
      
      
      
    </div>
  );
}

export default LSApp;
