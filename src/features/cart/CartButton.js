import { BiCartAlt } from "react-icons/bi";
import "./_cartButton.scss";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartItemsQuantity = useSelector((state) => state.cart.totalQuantity);

  console.log(cartItemsQuantity);

  return (
    <NavLink
      to="/cart"
      className={(navData) =>
        navData.isActive ? "cartButton-active" : "cartButton"
      }
    >
      <BiCartAlt />
      <span
        className="cartQuantity"
        style={
          cartItemsQuantity === 0 ? { display: "none" } : { display: "flex" }
        }
      >
        {cartItemsQuantity}
      </span>
    </NavLink>
  );
};

export default Cart;
