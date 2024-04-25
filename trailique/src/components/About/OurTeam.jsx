import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const OurTeam = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-8 lg:px-8">
        <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
          <h1 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">OUR TEAM</h1>
          <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">We are dedicated to transforming the IT landscape and delivering exceptional results for our clients.</p>
        </div>
        <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 justify-items-center ">
          {/* Team Member 1 */}
          <div className="text-center text-gray-500 dark:text-gray-400">
            <Image className="mx-auto mb-4 w-44 h-36 rounded-lg" src="/images/about/swapnil.jpg" alt="Swapnil" width={500} height={500}/>
            <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <a href="https://www.linkedin.com/in/swapnilghone/?trk=universal-search-cluster">Swapnil Ghone</a>
             
            </h3>
            <strong>CEO</strong>
            <p className="text-center">
            With two decades of the experience spanning customer service, training, project management and business development. A proven leader, Swapnil's strategic vision drives Trailique to new heights, emphasizing client satisfaction and innovation.
            </p>
              <a href="https://www.linkedin.com/in/swapnilghone/?trk=universal-search-cluster" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faLinkedin} className="w-9 h-9 mt-5 ml-1 inline-block" style={{ borderRadius: '20px', fill: '#0077B5' }} />
    </a>
          </div>

          {/* Team Member 2 */}
          <div className="text-center text-gray-500 dark:text-gray-400">
            <Image className="mx-auto mb-4 w-44 h-36 rounded-lg" src="/images/about/tarik.png" alt="Tarik" width={500} height={500}/>
            <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <a href="https://www.linkedin.com/in/tarik-klair/?trk=universal-search-cluster">Tarik Klair</a>
             
            </h3>
            <strong>CTO</strong>
            <p className="text-center">
            Brings over two decades of diverse tech expertise, renowned for his global client focus, relationship-building skills and exceptional solution delivery. He leads with vision and deep insights into emerging tech, driving our company's innovation and success.
            </p>
              <a href="https://www.linkedin.com/in/tarik-klair/?trk=universal-search-cluster" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faLinkedin} className="w-9 h-9 mt-5 ml-1 inline-block" style={{ borderRadius: '20px', fill: '#0077B5' }} />
    </a>
          </div>
          {/* Landscape Image */}
          {/* <div className="custom  tq-t-20 tq-h-600 relative  left-0 top-0 px-0 py-0 pt-16 sm:top-4 sm:pt-10  md:pt-10 lg:pt-12 ">
            <div className="relative h-full w-full"> */}
           {/* Landscape Image */}
              {/* <div className="mx-auto -mt-4">
                 <div className="relative h-full w-full  ">
                    <Image src="/images/about/collage.png" alt="Landscape" width={1200} height={533} className="ml-72 mb-20 border border-gray-500" />
                  </div>
                </div>
              </div>
          </div> */}

        </div>
      </div>
    </section>
  );
};

export default OurTeam;
