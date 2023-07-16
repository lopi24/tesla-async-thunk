import "./_shop.scss";
import Hero from "./Hero";
import BestSellers from "./BestSellers";
import Categories from "./Categories";

const Shop = () => {
  return (
    <div className="shop-section">
      <Hero />
      <BestSellers />
      <Categories />
    </div>
  );
};

export default Shop;
