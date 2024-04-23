import Link from "next/link";
import Image from "next/image";
import SliderCard from "@/components/Slider/CardSlider";

const Breadcrumb = ({
  pageName,
  description,
  centre,
}: {
  pageName: string;
  description: string;
  centre?: boolean;
}) => {
  return (
    <section className="ml-4 mt-0 mb-3 px-0 py-8 sm:px-10 md:ml-12 md:px-20 md:py-10 lg:ml-28 lg:py-16">
      <div className="container p-0" style={{marginTop:'-150px',marginBottom:'0px',paddingBottom:'0px'}}>
        <div className="-mx-4 flex flex-wrap mt-0 px-0 items-center">
          <div className="order-2 m-0 pt-0 lg:order-1 lg:w-1/2">
            <div className="mb-6">
              <h2 className="mb-4 text-center text-xl font-bold md:text-left md:text-3xl lg:text-4xl">
                {pageName}
              </h2>
              <p className="text-center text-sm md:text-left md:text-base lg:text-lg">
                {description}
              </p>
            </div>
          </div>
          <div className="order-1 w-10 mt-20 px-4 text-right lg:order-2 lg:w-1/2">
            <div className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0">
              <div className="hidden md:block">
                <SliderCard />
              </div>
            </div>
          </div>
        </div>
        <div className="order-3 w-full px-4 lg:hidden">
          <SliderCard />
        </div>
      </div>
    </section>
  );
};

export default Breadcrumb;










// import Link from "next/link";
// import Image from "next/image";
// import SliderCard from "@/components/Slider/CardSlider";

// const Breadcrumb = ({
//   pageName,
//   description,
//   centre,
// }: {
//   pageName: string;
//   description: string;
//   centre?: boolean;
// }) => {
//   return (
//     <section className="relative z-10 overflow-hidden p-0 lg:pt-[50px]">
//       <div className="flex justify-center ml-5 mr-0 pr-0 items-center h-full">
//         <div className="container">
//           <div className="-mx-1 flex flex-wrap items-center"> {/* Reduced margin here */}
//             <div className="w-full px-1 md:w-8/12 lg:w-7/12"> {/* Reduced padding here */}
//               <div className="mb-8 max-w-[570px] md:mb-0 lg:mb-12">
//                 <h1 className="mb-5 text-2xl font-bold text-black dark:text-white sm:text-3xl">
//                   {pageName}
//                 </h1>
//                 <p className="text-base font-medium leading-relaxed text-body-color">
//                   {description}
//                 </p>
//               </div>
//             </div>
//             <div className="w-full px-1 md:w-4/12 lg:w-5/12"> {/* Reduced padding here */}
//               <div className="text-end">
//                 {/*<ul className="flex items-center md:justify-end">
//                   <li className="flex items-center"
//                     <Link
//                       href="/"
//                       className="pr-1 text-base font-medium text-body-color hover:text-primary"
//                     >
//                       Home
//                     </Link>
//                     <span className="mr-3 block h-2 w-2 rotate-45 border-r-2 border-t-2 border-body-color"></span>
//                   </li>
//                   <li className="text-base font-medium text-primary">
//                     {pageName}
//                   </li>
//                   </ul>*/}
//                 <SliderCard />
//                 {/* <Image src="/images/about/car-about.jpg" alt="About Image" className="w-full h-auto" width={500} height={500}/>  */}
//               </div>
//             </div>
//           </div>
//         </div>

//         <div>
//           <span className="absolute left-0 top-0 z-[-1]">
//             <svg
//               width="287"
//               height="254"
//               viewBox="0 0 287 254"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 opacity="0.1"
//                 d="M286.5 0.5L-14.5 254.5V69.5L286.5 0.5Z"
//                 fill="url(#paint0_linear_111:578)"
//               />
//               <defs>
//                 <linearGradient
//                   id="paint0_linear_111:578"
//                   x1="-40.5"
//                   y1="117"
//                   x2="301.926"
//                   y2="-97.1485"
//                   gradientUnits="userSpaceOnUse"
//                 >
//                   <stop stopColor="#4A6CF7" />
//                   <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
//                 </linearGradient>
//               </defs>
//             </svg>
//           </span>
//           <span className="absolute right-0 top-0 z-[-1]">
//             <svg
//               width="628"
//               height="258"
//               viewBox="0 0 628 258"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 opacity="0.1"
//                 d="M669.125 257.002L345.875 31.9983L524.571 -15.8832L669.125 257.002Z"
//                 fill="url(#paint0_linear_0:1)"
//               />
//               <path
//                 opacity="0.1"
//                 d="M0.0716344 182.78L101.988 -15.0769L142.154 81.4093L0.0716344 182.78Z"
//                 fill="url(#paint1_linear_0:1)"
//               />
//               <defs>
//                 <linearGradient
//                   id="paint0_linear_0:1"
//                   x1="644"
//                   y1="221"
//                   x2="429.946"
//                   y2="37.0429"
//                   gradientUnits="userSpaceOnUse"
//                 >
//                   <stop stopColor="#4A6CF7" />
//                   <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
//                 </linearGradient>
//                 <linearGradient
//                   id="paint1_linear_0:1"
//                   x1="18.3648"
//                   y1="166.016"
//                   x2="105.377"
//                   y2="32.3398"
//                   gradientUnits="userSpaceOnUse"
//                 >
//                   <stop stopColor="#4A6CF7" />
//                   <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
//                 </linearGradient>
//               </defs>
//             </svg>
//           </span>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Breadcrumb;
