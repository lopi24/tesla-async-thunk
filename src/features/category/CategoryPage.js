import { useSelector } from "react-redux";
import {
  getProductsError,
  getProductsStatus,
  selectProductsByCategory,
} from "../products/productsSlice";
import "./_categoryPage.scss";
import { useParams } from "react-router-dom";
import ProductList from "../products/ProductList";

const CategoryPage = () => {
  const { categoryType } = useParams();

  const productsByCategory = useSelector((state) =>
    selectProductsByCategory(state, categoryType)
  );

  console.log(productsByCategory);

  const productsStatus = useSelector(getProductsStatus);
  const productsError = useSelector(getProductsError);

  let content;
  if (productsStatus === "loading") {
    content = <p>"Loading..."</p>;
  } else if (productsStatus === "succeeded") {
    // if (categoryType === "apparel") {
    content = productsByCategory.map((data, index) => (
      <div className="content-section" key={index}>
        {data.subCategory ? (
          <div className="subCategory-header">
            <h1>{data.subCategory}</h1>
          </div>
        ) : null}
        {data.tags.map((tag, index) => (
          <div className={`${categoryType}-content`} key={index}>
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

  return (
    <section className="category-page">
      {categoryType !== "apparel" && (
        <div className="category-header">
          <h1>{categoryType}</h1>
        </div>
      )}
      {content}
    </section>
  );
};

export default CategoryPage;
