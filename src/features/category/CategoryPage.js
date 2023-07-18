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

  const sortedForCategory = Object.values(
    productsByCategory?.reduce((accum, currVal) => {
      if (accum.hasOwnProperty(currVal.subCategory)) {
        accum[currVal.subCategory].productDetails.push(currVal);
        if (!accum[currVal.subCategory].tags.includes(currVal.tags)) {
          accum[currVal.subCategory].tags.push(currVal.tags);
        }
      } else
        accum[currVal.subCategory] = {
          subCategory: currVal.subCategory,
          tags: [currVal.tags],
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
    // if (categoryType === "apparel") {
    content = sortedForCategory.map((subCategory, index) => (
      <>
        {subCategory.subCategory ? (
          <div className="subCategory-header">
            <h1>{subCategory.subCategory}</h1>
          </div>
        ) : null}
        <div className={`${categoryType}-content`} key={index}>
          {subCategory.tags.map((tag, index) => (
            <>
              <div className="tags-header" key={index}>
                <h3>{tag}</h3>
              </div>
              <div className="tags-content">
                {subCategory.productDetails.map((product) => {
                  if (tag === product.tags) {
                    return (
                      <ProductList
                        key={product.key}
                        id={product.id}
                        name={product.name}
                        img={product.imgs}
                        price={product.price}
                      />
                    );
                  }
                  return null;
                })}
              </div>
            </>
          ))}
        </div>
      </>
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
