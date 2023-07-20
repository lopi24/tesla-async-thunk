import { useParams } from "react-router-dom";
import {
  getProductsError,
  getProductsStatus,
  selectProductsBySubCategory,
} from "../products/productsSlice";
import "./_subCategory.scss";
import { useSelector } from "react-redux";
import ProductList from "../products/ProductList";

const SubCategory = () => {
  const { subCategoryType } = useParams();
  //   console.log(subCategoryType);

  const productsBySubCategory = useSelector((state) =>
    selectProductsBySubCategory(state, subCategoryType)
  );
  //   console.log(productsBySubCategory);

  const productsStatus = useSelector(getProductsStatus);
  const productsError = useSelector(getProductsError);

  let content;
  if (productsStatus === "loading") {
    content = <p>"Loading..."</p>;
  } else if (productsStatus === "succeeded") {
    content = productsBySubCategory.map((data, index) => (
      <section className="subCategory-section" key={index}>
        <div className="subCategory-header">
          <h1>{data.subCategory}</h1>
        </div>

        {data.tags.map((tag, index) => (
          <div className={`${subCategoryType}-content`} key={index}>
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
      </section>
    ));
  } else if (productsStatus === "failed") {
    content = <p>{productsError}</p>;
  }

  return <>{content}</>;
};

export default SubCategory;
