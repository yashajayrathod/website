import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <div className="custom  tq-t-20 tq-h-600 relative  left-0 top-0 mt-0 px-0 pt-0 sm:top-0 sm:py-0  md:py-0 lg:py-0 ">
        <div className="relative h-full w-full">
          <Image
            src="/images/about/mission1.webp"
            alt="taxi"
            layout="responsive"
            width={1920}
            height={400}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-80"></div>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-center text-white">
            <h1 className="w-screen pb-4 text-4xl font-bold">MISSION</h1>
            <p className="mx-10 text-2xl">
              <span className="text-blue-500">Trail</span>ique aims to redefine
              IT excellence by infusing high{" "}
              <span className="text-blue-500">IQ</span> and a commitment to
              supreme quality into every project, all underpinned by a
              dedication to unparalleled{" "}
              <span className="text-blue-500">U</span>ser{" "}
              <span className="text-blue-500">E</span>xperience.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
