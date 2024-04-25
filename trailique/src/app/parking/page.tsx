import SectionTitle from "@/components/Common/SectionTitle";
import SingleProduct from "@/components/Parking/SingleSolution";
import ProductData from "@/components/Parking/productdata";
import Script from "next/script";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Parking-Trail",
  description: "This is Trail-Transportation Page for Trailique",
  // other metadata
};
const Parking = () => {
  return (
    <>
      <section id="product" className="items-center py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Parking-Trail"
            paragraph="Revolutionize your parking operations with our cutting-edge solutions. Our smart parking systems and real-time analytics guarantee frictionless parking experiences. Discover how we can optimize efficiency and enhance customer satisfaction today."
            center
            
          />
<center>
          <div className="mx-auto ">
            {ProductData.map((product) => (
              <SingleProduct  key={product.id} product={product} />
            ))}
          </div>
          </center>
        </div>
      </section>
     
    </>
  );
};

export default Parking;
