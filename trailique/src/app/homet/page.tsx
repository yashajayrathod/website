import SectionTitle from "@/components/Common/SectionTitle";
import SingleProduct from "@/components/HomeT/SingleSolution";
import ProductData from "@/components/HomeT/productdata";
import Script from "next/script";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home-Trail",
  description: "This is Trail-Transportation Page for Trailique",
  // other metadata
};
const HomeT = () => {
  return (
    <>
      <section id="product" className="mt-10 py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Home-Trail"
            paragraph="Effortlessly streamline domestic tasks with our comprehensive range of digital offerings, providing convenience and reassurance for all aspects of home management. Find peace of mind with our innovative solutions."
            center
          />

          <div className="mx-auto grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {ProductData.map((product) => (
              <SingleProduct key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeT;
