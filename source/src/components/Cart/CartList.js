import { useEffect, useState } from "react";
import CartItem from "./CartItem";
import './CartItem.css'

function CartList({ carts, deleteCart, onQuantityChange }) {

    const calculateTotalPrice = (carts) => {
        let totalPrice = 0;
        for (const product of carts) {
          totalPrice += product.price * product.quantity;
        }
        return totalPrice;
      };

    return (
            <div className="cartlist">
                <div className="cartlist-main">
                    <p>Products</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>
                <hr />
                {carts.map(c => (
                <CartItem key={c.code} product={c} deleteCart={deleteCart} onQuantityChange={onQuantityChange} />
                ))}

                <div className="cartlist-down">
                    <div className="cartlist-total">
                        <h1>Cart Total</h1>
                        <div>
                            <div className="cartlist-total-item">
                                <p>Subtotal</p>
                                <p>${calculateTotalPrice(carts)}</p>
                            </div>
                            <hr/>
                            <div className="cartlist-total-item">
                                <p>Shipping Fee</p>
                                <p>Free</p>
                            </div>
                            <hr/>
                            <div className="cartlist-total-item">
                                <h3>Total</h3>
                                <h3>${calculateTotalPrice(carts)}</h3>
                            </div>
                        </div>
                        <button>PROCEED TO CHECKOUT</button>
                    </div>
                    <div className="cartlist-promocode">
                        <p>If you haave a promo code, Enter it here</p>
                        <div className="cartlist-promobox">
                            <input type="text" placeholder="Promo Code" />
                            <button>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default CartList;