import { Link } from "react-router-dom";
import "./_cart.scss";

const Cart = () => {
  return (
    <section className="cart-section">
      <div className="heading">
        <h1>Cart</h1>
      </div>
      <div className="content">
        {/* if cart is empty */}
        <div className="message">
          <p>Your cart is empty.</p>
        </div>
        <div className="actions">
          <Link to="/">continue shopping</Link>
          <Link to="#">sign in</Link>
        </div>
      </div>
    </section>
  );
};

export default Cart;
