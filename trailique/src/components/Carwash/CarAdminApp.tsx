import React from "react";
import Image from "next/image";

function CarAdminApp() {
  return (
    <div className="m-10  grid grid-cols-1 justify-center gap-4 sm:grid-cols-3">
      {/* Card 1 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image 
          width={90}
          height={90}
            src="/images/carwash/Marketing Campaign Management.jpeg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
          Marketing Campaign Management{" "}
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Plan, executeand track marketing campaigns, including email newsletters, SMS promotionsand social media advertising, to attract and retain customers.
        </p>
      </div>
      {/* Card 2 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image 
          width={90}
          height={90}
            src="/images/carwash/Data Security Measures.jpeg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
          Data Security Measures
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Implement robust data security protocols, encryption methodsand access controls to safeguard sensitive customer and business information.{" "}
        </p>
      </div>
      {/* Card 3 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image 
          width={90}
          height={90}
            src="/images/carwash/Integration with CRM System.jpeg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
          Integration with CRM Systems
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Integrate with customer relationship management (CRM) systems to streamline customer interactions, track communication historyand personalize marketing efforts.
        </p>
      </div>
      {/* Card 4 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image 
          width={90}
          height={90}
            src="/images/carwash/Expansion Planning Tools.jpeg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
          Expansion Planning Tools
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Utilize market analysis tools and demographic data to identify new market opportunities and plan expansion strategies effectively.
        </p>
      </div>
      {/* Card 5 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image 
          width={90}
          height={90}
            src="/images/carwash/Franchise Management.jpeg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
          Franchise Management
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Manage multiple franchise locations, including centralized control over branding, pricingand service standards, while allowing for localized adaptations.
        {" "}
        </p>
      </div>
      {/* Card 6 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image 
          width={90}
          height={90}
            src="/images/carwash/Competitor Analysis.jpeg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
          Competitor Analysis{" "}
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Conduct competitor analysis and benchmarking to stay informed about industry trends, competitor offeringsand potential market gaps.
        </p>
      </div>
      {/* Card 7 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image 
          width={90}
          height={90}
            src="/images/carwash/Environmental Sustainability Initiatives.jpeg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
          Environmental Sustainability Initiatives
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Implement eco-friendly practices, such as water recycling systems, biodegradable cleaning productsand energy-efficient equipment, to promote environmental sustainability.
        </p>
      </div>
      {/* Card 8 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image 
          width={90}
          height={90}
            src="/images/carwash/Patnership Programs.jpeg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
          Partnership Programs
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Establish partnerships with car dealerships, rental agencies, or corporate fleets to offer exclusive discounts and incentives for mutual business growth.
        </p>
      </div>
    </div>
  );
}

export default CarAdminApp;
