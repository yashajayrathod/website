import SectionTitle from "@/components/Common/SectionTitle";
import SingleProduct from "@/components/Management/SingleSolution";
import ProductData from "@/components/Management/productdata";
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
      <section id="product" className="py-16 md:py-20 mt-6 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Management-Trail"
            paragraph="Elevate your business operations with our comprehensive suite of solutions. Streamline your processes seamlessly. Boost efficiency and organization with Management Trail today!            "
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {ProductData.map((product) => (
              <SingleProduct key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-6ZB1SSZHDM"
      ></Script>

      <Script id="google-analytics" strategy="afterInteractive">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-6ZB1SSZHDM');
    `}
      </Script>
    </>
  );
};

export default Transportation;
