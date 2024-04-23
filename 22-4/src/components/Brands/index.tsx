import React from "react";

const Brand = () => {
  return (
    <>
      {/* ====== Brands Section Start */}

      <section className="bg-gray-200 py-8 dark:bg-dark lg:py-[50px] ">
        <div className="container mx-auto">
          <div className="flex flex-wrap -mx-4">
          <div className="mx-auto mb-4 max-w-screen-sm sm:mb-8 lg:mb-8">
          <h1 className="mb-2 text-4xl tracking-tight text-center font-extrabold text-gray-900 dark:text-white">OUR CLIENTS</h1>
          
        </div>
            <div className="w-full px-4">
              <div className="flex flex-wrap items-center justify-center">
              <SingleImage
                  href="https://www.spotlytepark.com/"
                  Alt="Brand Image"
                  imgSrc="/images/brands/lamp.png"
                />

                <SingleImage
                  href="#"
                  Alt="Brand Image"
                  imgSrc="/images/brands/orange.png"
                />
                
                
                <SingleImage
                  href="https://agrownexus.com/"
                  Alt="Brand Image"
                  imgSrc="/images/brands/AgrowNexus-final.png"
                />
                <SingleImage
                  href="https://cybernamix.com.au/"
                  Alt="Brand Image"
                  imgSrc="/images/brands/cybernamix.png"
                />
                <SingleImage
                  href="https://opaxwebit.com/"
                  Alt="Brand Image"
                  imgSrc="/images/brands/opax.png"
                />
                <SingleImage
                  href="https://www.agrowblocktech.com/"
                  Alt="Brand Image"
                  imgSrc="/images/brands/agrow6.png"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ====== Brands Section End */}
    </>
  );
};

export default Brand;

const SingleImage = ({ href, imgSrc, Alt }) => {
  return (
    <>
      <a
        href={href}
        className="mx-4 flex w-[150px] items-center justify-center  2xl:w-[180px]"
      >
        <img src={imgSrc} alt={Alt} className="w-full h-22 py-4" />
      </a>
    </>
  );
};