import SectionTitle from "@/components/Common/SectionTitle";
import SingleSolution from "@/components/Solutions/SingleSolution";
import SolutionData from "@/components/Solutions/productdata";
import Script from "next/script";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solutions",
  description: "This is Solution Page for Trailique",
  // other metadata
};
const Product = () => {
  return (
    <>
      <section id="product" className="mt-4 py-20 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="OUR AI-POWERED SOLUTIONS " 
            paragraph="Introducing On Demand and Custom Solutions - your ultimate secret weapon for revolutionizing key areas and achieving excellence like never before! Say goodbye to mediocre results and hello to innovation tailored just for you. Let's unlock your potential together and take your endeavors to the next level!"
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {SolutionData.map((product) => (
              <SingleSolution key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
     
    </>
  );
};

export default Product;
