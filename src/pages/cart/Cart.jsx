import React from "react";
import { cartInfo } from "../../data/cart";
import "./cart.css";
const Cart = () => {
  return (
    <div className="cart">
      <h2 className="cart-title">Our Shopping Cart </h2>
      <div className="cart-wrapper">
        <div className="cart-items">
          {cartInfo.map((item) => (
            <div key={cartInfo.id} className="cart-item">
              <img
                src={`/books/${item.image}`}
                alt={item.title}
                className="cart-item-img"
              />
              <div className="cat-item-info">
                <div>
                  <div className="cart-item-book-title">
                    <b>Title: </b> {item.title}
                  </div>
                  <div className="cart-item-author">
                    <b>Author: </b> {item.author}
                  </div>
                </div>
              </div>
              <div className="cart-qun-container">
                <div className="cart-item-quantity">
                  <button>
                    <i className="bi bi-plus-lg"></i>
                  </button>
                  <b>{item.quantity}</b>
                  <button>
                    <i className="bi bi-dash-lg"></i>
                  </button>
                </div>
                <div className="cart-item-price">
                  ${item.price * item.quantity}
                </div>
                <i className="bi bi-trash-fill"></i>
              </div>
            </div>
          ))}
        </div>
        <div className="cart-order-summary">
          <h2 className="cart-order-summary-title">Order Summary </h2>
          <div className="cart-order-summary-item">
            <span>Subtotal</span>
            <span>
              ${cartInfo.reduce((acc,cur) =>acc + cur.price * cur.quantity , 0 )}
            </span>
          </div>
          <div className="cart-order-summary-item">
            <span>Shopping Cost</span>
            <span>
              0
            </span>
          </div>
          <div className="cart-order-summary-item">
            <span>Discount</span>
            <span>
              0
            </span>
          </div>
          <div className="cart-order-summary-item">
            <span>Total</span>
            <span>
            ${cartInfo.reduce((acc,cur) =>acc + cur.price * cur.quantity , 0 )}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
