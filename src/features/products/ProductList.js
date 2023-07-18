import { Link } from "react-router-dom";
import "./_productList.scss";
import { useState } from "react";

const ProductList = (props) => {
  const [imageHover, setImageHover] = useState([
    props?.img[0],
    { display: "none" },
  ]);

  const onHoverHandler = () => {
    // console.log("hovering");
    setImageHover([props?.img[1], { display: "flex" }]);
  };

  const onHoverOutHandler = () => {
    // console.log("Moust out!");
    setImageHover([props?.img[0], { display: "none" }]);
  };

  const addToCartHandler = () => {
    console.log("Quick Add + Clicked!");
  };

  return (
    <div className="products-list-card">
      <div
        className="product-img"
        onMouseOver={onHoverHandler}
        onMouseLeave={onHoverOutHandler}
      >
        {props?.img?.length > 1 ? (
          <Link to="/test">
            <img src={imageHover[0]} alt={props?.name} />
          </Link>
        ) : (
          <Link to="/test">
            <img src={props?.img[0]} alt={props?.name} />
          </Link>
        )}
        <div
          onClick={addToCartHandler}
          style={imageHover[1]}
          className="quick-add"
        >
          quick add +
        </div>
      </div>
      <div className="product-details">
        <Link>{props?.name}</Link>
        <p>${props?.price}</p>
      </div>
    </div>
  );
};

export default ProductList;
