import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <div className="custom  tq-t-20 tq-h-600 relative  left-0 top-0 mt-0 px-0 pt-0 sm:top-0 sm:py-0  md:py-0 lg:py-0 ">
        <div className="relative h-full w-full">
          <Image
            src="/images/about/value1.webp"
            alt="taxi"
            layout="responsive"
            width={1920}
            height={400}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-80"></div>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-center text-white">
            <h1 className="w-screen pb-4 text-4xl font-bold">
              VALUE STATEMENT
            </h1>
            <p className="mx-10 text-2xl">
              Empowering our clients success is at the heart of Trailique. With
              unwavering transparency from day one, we pave the path for growth,
              ensuring businesses thrive in a collaborative and trustworthy
              partnership.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
