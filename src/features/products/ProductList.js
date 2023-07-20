import { Link } from "react-router-dom";
import "./_productList.scss";
import { useState } from "react";

const ProductList = (props) => {
  const [defaultImageHover, setDefaultImageHover] = useState({
    display: "flex",
  });
  const [onHoverImageHover, setOnHoverImageHover] = useState({
    display: "none",
  });

  const onHoverHandler = () => {
    // console.log("hovering");
    setOnHoverImageHover({ display: "flex" });
    setDefaultImageHover({ display: "none" });
  };

  const onHoverOutHandler = () => {
    // console.log("Moust out!");
    setOnHoverImageHover({ display: "none" });
    setDefaultImageHover({ display: "flex" });
  };

  const addToCartHandler = (e) => {
    // console.log("Quick Add + Clicked!");
    console.log(e);
  };

  return (
    <div className="products-list-card">
      <div
        className="product-img"
        onMouseOver={onHoverHandler}
        onMouseLeave={onHoverOutHandler}
      >
        {props?.img?.length > 1 ? (
          <Link to="#">
            <img
              style={defaultImageHover}
              src={props?.img[0]}
              alt={props?.name}
            />
            <img
              style={onHoverImageHover}
              src={props?.img[1]}
              alt={props?.name}
            />
            {props?.outOfStock && (
              <span className="out-of-stock">out of stock</span>
            )}
          </Link>
        ) : (
          <Link to="#">
            <img
              src={props?.img[0]}
              alt={props?.name}
            />
          </Link>
        )}
        {props?.outOfStock ? (
          <Link to="#" style={onHoverImageHover} className="view-details">
            view details
          </Link>
        ) : (
          <div
            onClick={addToCartHandler.bind(null, props?.id)}
            style={onHoverImageHover}
            className="quick-add"
          >
            quick add +
          </div>
        )}
      </div>
      <div className="product-details">
        <Link>{props?.name}</Link>
        {isNaN(props?.price) ? <p>{props?.price}</p> : <p>${props?.price}</p>}
      </div>
    </div>
  );
};

export default ProductList;
