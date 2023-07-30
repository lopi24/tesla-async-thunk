import "./_productListSkeleton.scss";

const ProductListSkeleton = (props) => {
  return (
    <div className="products-list-card-skeleton" key={props.key}>
      <div className="product-img-skeleton"></div>
      <div className="product-details-skeleton">
        <div className="name-skeleton"></div>
        <div className="price-skeleton"></div>
      </div>
    </div>
  );
};

export default ProductListSkeleton;
