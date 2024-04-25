import SectionTitle from "@/components/Common/SectionTitle";
import SingleProduct from "@/components/Health/SingleSolution";
import ProductData from "@/components/Health/productdata";
import Script from "next/script";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Health-Trail",
  description: "This is Trail-Transportation Page for Trailique",
  // other metadata
};
const Health = () => {
  return (
    <>
      <section id="product" className="py-16 mt-9 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Health-Trail"
            paragraph="Experience a new era in healthcare management with our cutting-edge digital solutions. From telemedicine to elderly care, we provide comprehensive patient care for individuals of all ages. Let us redefine healthcare together, ensuring a healthier future for all."
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

export default Health;
