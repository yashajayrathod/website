import SectionTitle from "../Common/SectionTitle";
import SingleSolution from "./SingleSolution";
import ProductData from "./productdata";


const Products = () => {
  return (
    <>
      <section id="products" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="SERVICES"
            paragraph="Embark on a journey of innovation. Let’s collaborate and turn
            your vision into cutting-edge reality. Your success begins here."
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {ProductData.map((feature) => (
              <SingleSolution key={feature.id} product={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
