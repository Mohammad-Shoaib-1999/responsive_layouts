import { products } from "../constants";
import ProductCard from "../components/Product/ProductCard";
const PopularProducts = () => {
  return (
    <section className="  ">
      <div className="flex justify-center items-center flex-col gap-5 h-[90px]">
      <h1 className="text-4xl capitalize lg:max-w-lg font-bold">
          Popular Products
        </h1>
        <p className="mt-4 lg:max-w-lg info-text">
          Ensuring premium confort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with inmatched
          quality
          </p>
      </div>
      <div className="mt-16 mb-5  grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
        {products.map((product) => (
          <ProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
