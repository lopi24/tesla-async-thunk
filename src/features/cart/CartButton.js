import { BiCartAlt } from "react-icons/bi";
import "./_cartButton.scss";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const cartItemsQuantity = useSelector((state) => state.cart.totalQuantity);

  // console.log(cartItemsQuantity);

  return (
    <NavLink
      to="/cart"
      className={(navData) => (navData.isActive ? "active" : "")}
    >
      <BiCartAlt />
      <span className="cartQuantity">{cartItemsQuantity}</span>
    </NavLink>
  );
};

export default Cart;
