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

            
            src="/images/school/performanceeval.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
          Student Management{" "}
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Easily manage student records, attendance, grades and academic progress from one centralized platform.
        </p>
      </div>
      {/* Card 2 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image 
          width={30}
            height={30}

            
            src="/images/school/staffmanage.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
          Staff Management
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Efficiently handle staff scheduling, payroll and performance evaluations to ensure smooth operations.

{" "}
        </p>
      </div>
      {/* Card 3 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image 
          width={30}
            height={30}

            
            src="/images/school/curriculam.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
          Curriculum Management 
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Organize and update curriculum materials, lesson plans and assessments for effective teaching and learning.

        </p>
      </div>
      {/* Card 4 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image 
          width={30}
            height={30}

            
            src="/images/school/parentcommu.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
          Parent Communication
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Foster better communication with parents through messaging, announcements and access to student information.


        </p>
      </div>
      {/* Card 5 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image 
          width={30}
            height={30}

            
            src="/images/school/resouceall.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
          Resource Allocation
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Manage school resources such as classrooms, equipment and supplies to optimize utilization and budgeting.
{" "}
        </p>
      </div>

      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image 
          width={30}
            height={30}

            
            src="/images/school/timetable.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
          Timetable Management{" "}
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Create and adjust school timetables, class schedules and exam calendars for seamless coordination.

        </p>
      </div>

      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image 
          width={30}
            height={30}

            
            src="/images/school/reportnanalutics.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">Reporting and Analytics 
          {" "}
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Generate detailed reports and analytics on student performance, attendance trends and school operations for informed decision-making.

        </p>
      </div>
    

      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image 
          width={30}
            height={30}

            
            src="/images/school/eventmanage.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white"> Event Management
          {" "}
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Plan and coordinate school events, extracurricular activities and parent-teacher meetings with ease.


        </p>
      </div>

      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image 
          width={30}
            height={30}

            
            src="/images/school/feemanage.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">  Fee Management
          {" "}
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Track and manage fee payments, issue invoices and generate financial reports to ensure smooth financial operations.


        </p>
      </div>


      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image 
          width={30}
            height={30}

            
            src="/images/school/securitynaccess.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">  Security and Access Control
          {" "}
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Implement robust security measures and access controls to safeguard sensitive school data and ensure compliance with regulations.



        </p>
      </div>


    </div>
  );
}

export default AdminApp;
