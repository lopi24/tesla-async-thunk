import { BiCartAlt } from "react-icons/bi";
import "./_cartButton.scss";
import { NavLink } from "react-router-dom";

const Cart = () => {
  return (
    <NavLink
      to="/cart"
      className={(navData) => (navData.isActive ? "active" : "")}
    >
      <BiCartAlt />
    </NavLink>
  );
};

export default Cart;
