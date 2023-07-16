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

  const productsStatus = useSelector(getProductsStatus);
  const productsError = useSelector(getProductsError);

  const sortedForCategory = Object.values(
    productsByCategory?.reduce((accum, currVal) => {
      if (accum.hasOwnProperty(currVal.tags))
        accum[currVal.tags].productDetails.push(currVal);
      else
        accum[currVal.tags] = {
          subCategory: currVal.subCategory,
          tags: currVal.tags,
          productDetails: [currVal],
        };
      return accum;
    }, {})
  );

  console.log(sortedForCategory);

  let content;
  if (productsStatus === "loading") {
    content = <p>"Loading..."</p>;
  } else if (productsStatus === "succeeded") {
    if (categoryType === "apparel") {
      content = sortedForCategory.map((subCategory, index) => (
        <div className={`${categoryType}-content`} key={index}>
          <div className="subCategory-header">
            <h1>{subCategory.subCategory}</h1>
          </div>
          <div className="tags-header">
            <h3>{subCategory.tags}</h3>
          </div>
          <div className="tags-content">
            {subCategory.productDetails.map((product) => (
              <ProductList
                key={product.key}
                id={product.id}
                name={product.name}
                img={product.imgs}
                price={`$${product.price}`}
              />
            ))}
          </div>
        </div>
      ));
    } else {
      content = sortedForCategory.map((tag, index) => (
        <div className={`${categoryType}-content`} key={index}>
          <div className="tags-header">
            <h3>{tag.tags}</h3>
          </div>
          <div className="tags-content" key={index}>
            {tag.productDetails.map((product) => (
              <ProductList
                key={product.key}
                id={product.id}
                name={product.name}
                price={`$${product.price}`}
                img={product.imgs}
              />
            ))}
          </div>
        </div>
      ));
    }
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
