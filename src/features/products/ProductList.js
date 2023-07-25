import { Link } from "react-router-dom";
import "./_productList.scss";
import { useState } from "react";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../cart/cartSlice";

const ProductList = (props) => {
  const dispatch = useDispatch();

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

  const addToCartHandler = (item) => {
    // console.log("Quick Add + Clicked!");
    console.log(item);
    dispatch(addItemToCart(item));
  };

  // try to experiment on the onLoad in img and create a skeleton for it before it loads

  return (
    <div className="products-list-card">
      <div
        className="product-img"
        onMouseOver={onHoverHandler}
        onMouseLeave={onHoverOutHandler}
      >
        {props?.img?.length > 1 ? (
          <Link to={`/product/${props?.id.replace(/\s+/g, "-").toLowerCase()}`}>
            <LazyLoadImage
              effect="blur"
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
          <Link to={`/product/${props?.id.replace(/\s+/g, "-").toLowerCase()}`}>
            <LazyLoadImage
              effect="blur"
              src={props?.img[0]}
              alt={props?.name}
            />
          </Link>
        )}
        {props?.outOfStock ? (
          <Link
            to={`/product/${props?.id.replace(/\s+/g, "-").toLowerCase()}`}
            style={onHoverImageHover}
            className="view-details"
          >
            view details
          </Link>
        ) : (
          <div
            onClick={addToCartHandler.bind(null, {
              productId: props?.id,
              productName: props?.name,
              productImg: props?.img,
              productPrice: props?.price,
            })}
            style={onHoverImageHover}
            className="quick-add"
          >
            quick add +
          </div>
        )}
      </div>
      <div className="product-details">
        <Link to={`/product/${props?.id.replace(/\s+/g, "-").toLowerCase()}`}>
          {props?.name}
        </Link>
        {isNaN(props?.price) ? <p>{props?.price}</p> : <p>${props?.price}</p>}
      </div>
    </div>
  );
};

export default ProductList;
