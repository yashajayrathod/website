import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <div className="custom  tq-t-20 tq-h-600 relative  left-0 top-0 px-0 py-0 pt-16 sm:top-4 sm:pt-10  md:pt-10 lg:pt-12 ">
        <div className="relative h-full w-full">
          <Image
            src="/images/about/vision3.webp"
            alt="taxi"
            layout="responsive"
            width={1920}
            height={400}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-80"></div>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-center text-white">
            <h1 className="w-screen pb-4 text-4xl font-bold">
              VISION
            </h1>
            <p className="mx-10 text-2xl">
            Our vision at Trailique is to lead the IT industry by prioritizing
              innovation and delivering user-centric solutions. We aim to be the
              trailblazers shaping the digital future, helping businesses start
              and grow successfully.

            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
