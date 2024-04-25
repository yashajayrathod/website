import SectionTitle from "@/components/Common/SectionTitle";
import SingleProduct from "@/components/Transportation/SingleSolution";
import ProductData from "@/components/Transportation/productdata";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Transportation-Trail",
  description: "This is Trail-Transportation Page for Trailique",
  // other metadata
};
const Transportation = () => {
  return (
    <>
      <section id="product" className="mt-9 py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Transportation-Trail"
            paragraph="Unleash the power of tomorrow today with our groundbreaking transportation IT solutions! Say goodbye to old-school inefficiencies and hello to a seamless, optimized transport system that will leave you speechless."
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {ProductData.map((product) => (
              <SingleProduct key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Transportation;
