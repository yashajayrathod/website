import SectionTitle from "@/components/Common/SectionTitle";
import SingleProduct from "@/components/Commerce/SingleSolution";
import ProductData from "@/components/Commerce/productdata";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "E-Commerece-Trail",
  description: "This is Commerce-Trail Page for Trailique",
  // other metadata
};
const Commerece = () => {
  return (
    <>
      <section id="product" className="py-16 mt-9 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="E-Commerce-trail"
            paragraph="Revolutionize online retail with our comprehensive suite of solutions. From customizable websites to AI-powered chatbots, our innovative tools are designed to enhance your customers' shopping experience and drive sales. Discover how we can help you take your e-commerce business to the next level."
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {ProductData.map((product) => (
              <SingleProduct  key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
      
    </>
  );
};

export default Commerece;
