import { useSelector } from "react-redux";
import { selectProductsByCategory } from "./productsSlice";
import { useParams } from "react-router-dom";

const ProductList = () => {
  const { categoryType } = useParams();

  console.log(categoryType);

  const products = useSelector((state) =>
    selectProductsByCategory(state, categoryType)
  );
  console.log(products);

  return <div>Product List Page</div>;
};

export default ProductList;
