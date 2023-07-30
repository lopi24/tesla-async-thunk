import { useLocation } from "react-router-dom";
import "./_searchPage.scss";
import { useSelector } from "react-redux";
import {
  getProductsError,
  getProductsStatus,
  selectProductsBySearch,
} from "../products/productsSlice";
import ProductList from "../products/ProductList";

const SearchPage = () => {
  const location = useLocation();
  // console.log(location);

  const searchedProducts = useSelector((state) =>
    selectProductsBySearch(state, location.state.inputRefValue)
  );

  const productsStatus = useSelector(getProductsStatus);
  // console.log(productsStatus);
  const productsError = useSelector(getProductsError);

  // console.log(searchedProducts);

  let content;

  if (productsStatus === "loading") {
    content = <p>Loading...</p>;
  } else if (productsStatus === "succeeded") {
    content = searchedProducts.map((data, index) => (
      <div className="content-section" key={index}>
        {data.subCategory ? (
          <div className="subCategory-header">
            <h1>{data.subCategory}</h1>
          </div>
        ) : (
          <div className="category-header">
            <h1>{data.category}</h1>
          </div>
        )}
        {data.tags.map((tag, index) => (
          <div className="category-content" key={index}>
            <div className="tags-header" key={index}>
              <h3>{tag}</h3>
            </div>
            <div className="tags-content">
              {data.productDetails.map((product) => {
                if (tag === product.tags) {
                  return (
                    <ProductList
                      key={product.key}
                      id={product.productId}
                      name={product.name}
                      img={product.imgs}
                      price={product.price}
                      outOfStock={product.outOfStock}
                    />
                  );
                }
                return null;
              })}
            </div>
          </div>
        ))}
      </div>
    ));
  } else if (productsStatus === "failed") {
    content = <p>{productsError}</p>;
  }

  return <section className="search-page-section">{content}</section>;
};

export default SearchPage;
