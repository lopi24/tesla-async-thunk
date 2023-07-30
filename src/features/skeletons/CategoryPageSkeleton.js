import ProductListSkeleton from "./ProductListSkeleton";
import "./_categoryPageSkeleton.scss";

const CategoryPageSkeleton = ({ data, index }) => {
  let content;
  content = (
    <div className="content-section-skeleton" key={index}>
      <div className="subCategory-header-skeleton"></div>
      <div className="category-content-skeleton">
        <div className="tags-header-skeleton"></div>
        <div className="tags-content-skeleton">
          {[...Array(10).keys()].map((index) => {
            return <ProductListSkeleton key={index} />;
          })}
        </div>
      </div>
    </div>
  );
  return <>{content}</>;
};

export default CategoryPageSkeleton;
