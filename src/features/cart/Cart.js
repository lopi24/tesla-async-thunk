import { Link } from "react-router-dom";
import "./_cart.scss";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { useState } from "react";
import {
  getTotalAmount,
  getTotalQuantity,
  removeItemFromCart,
  updateItemQuantity,
} from "./cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const [opacity, setOpacity] = useState({ opacity: 0 });
  const cart = useSelector((state) => state.cart.items);
  console.log(cart);
  console.log(cart.length);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  const onOpacity = () => {
    setOpacity({ opacity: 1 });
  };

  const offOpacity = () => {
    setOpacity({ opacity: 0 });
    setTimeout(() => setOpacity({ display: "none" }), 500);
  };

  const removeItemFromCartHandler = (productId) => {
    console.log(productId);
    dispatch(removeItemFromCart(productId));
    // get total amoung
    dispatch(getTotalAmount());
    // get total quantity
    dispatch(getTotalQuantity());
  };

  const updateQuantityHandler = (qty, productId) => {
    dispatch(
      updateItemQuantity({
        newQty: parseFloat(qty),
        productId: productId,
      })
    );
    // get total amoung
    dispatch(getTotalAmount());
    // get total quantity
    dispatch(getTotalQuantity());
  };

  let content;
  content = cart.map((item, index) => (
    <li key={index}>
      <div className="image-container">
        <img src={item.productImg[0]} alt={item.productName} />
      </div>
      <div className="details-container">
        <div className="details">
          <p>{item.productName}</p>
          <div className="details-actions">
            <label htmlFor="quantity">Quantity: </label>
            <select
              id="quantity"
              name="quantity"
              value={item.productQuantity}
              onChange={(e) =>
                updateQuantityHandler(e.target.value, item.productId)
              }
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            {/* <p>{`Quantity: ${}`}</p> */}
            <button
              onClick={removeItemFromCartHandler.bind(null, item.productId)}
            >
              Remove
            </button>
          </div>
        </div>
        <div className="price">
          {" "}
          $
          {item.productPrice.toLocaleString(undefined, {
            minimumFractionDigits: 2,
          })}
        </div>
      </div>
    </li>
  ));

  return (
    <section className="cart-section">
      <div className="heading">
        <h1>Cart</h1>
      </div>
      <div
        className="content"
        style={cart.length === 0 ? { display: "block" } : { display: "flex" }}
      >
        {cart.length === 0 ? (
          <>
            <div className="message">
              <p>Your cart is empty.</p>
            </div>
            <div className="actions">
              <Link to="/">continue shopping</Link>
              <Link to="#">sign in</Link>
            </div>
          </>
        ) : (
          <>
            <ul className="content-list">{content}</ul>
            <div className="order-summary">
              <div className="order-summary-header">
                <h1>order summary</h1>
              </div>
              <div className="order-details">
                <div className="shipping">
                  <p>shipping:</p>
                  <p>free</p>
                </div>
                <div className="sales-tax">
                  <p>
                    sales tax{" "}
                    <span>
                      <AiOutlineInfoCircle
                        onMouseOver={onOpacity}
                        onMouseLeave={offOpacity}
                      />
                      <span style={opacity} className="sales-tax-info">
                        Sales tax is calculated with shipping address in
                        checkout
                      </span>
                    </span>
                  </p>
                  <p>calculated at checkout</p>
                </div>
              </div>
              <div className="subtotal">
                <p>subtotal</p>
                <p>
                  $
                  {totalAmount.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                  })}
                </p>
              </div>
              <div className="checkout-btn">
                <button>checkout</button>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Cart;
