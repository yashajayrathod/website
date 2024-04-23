import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <div className="custom  tq-t-20 tq-h-600 relative  left-0 top-0 px-0 py-0 pt-16 sm:top-4 sm:pt-10 md:pt-10 lg:pt-12 mt-9 mb-5 ">
      <div className="relative h-full w-full">
          <Image
            src="/images/about/homee.webp"
            alt="taxi"
            layout="responsive"
            width={1920}
            height={600}
            className=" h-auto w-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-80"></div>
          <div className="absolute inset-0 mb-44 flex flex-col items-center justify-center text-center text-white">
          <h1 className="mb-3 text-4xl mt-0 pt-0 md:text-5xl lg:text-6xl font-serif" style={{ wordSpacing: '0.2em' }}>
  WELCOME TO TRAILIQUE INFOTECH
</h1>

            <p className="text-lg md:text-xl lg:text-2xl">
              Begin Right. Build Right.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
