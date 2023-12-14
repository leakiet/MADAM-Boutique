import { useEffect, useState } from "react";
import CartItem from "./CartItem";
import './CartItem.css'
import { useNavigate } from "react-router-dom";

function CartList({ carts, deleteCart, onQuantityChange, checkLoginStatus }) {

    const [discountPrice ,setDiscountPrice] = useState(0);
    const [promotionCode, setPromotionCode] = useState('');

    const calculateTotalPrice = (cartsz) => {
        let totalPrice = 0;
        for (const product of cartsz) {
          totalPrice += product.price * product.quantity;
        }
        return totalPrice;
      };

    const handlePromotion = (e) => {
        e.preventDefault();
        if (promotionCode == "MADAM2023"){
            alert('Promotion code was applied')
            setDiscountPrice(10)
            setPromotionCode('')
        } else if (promotionCode == "XMAS2023"){
            alert('Promotion code was applied')
            setDiscountPrice(50)
            setPromotionCode('')
        } else {
            alert('Invalid Promotion code')
        }
    };

    const finalTotalPrice = () => {
        const subtotal = calculateTotalPrice(carts);
        const discountedTotal = subtotal - discountPrice;
        return discountedTotal >= 0 ? discountedTotal : 0;
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
                <CartItem key={c.id} product={c} deleteCart={deleteCart} onQuantityChange={onQuantityChange} />
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
                                <p>Discount</p>
                                <p className="cartlist-discount">-${discountPrice}</p>
                            </div>
                            <hr/>
                            <div className="cartlist-total-item">
                                <h3>Total</h3>
                                <h3>${finalTotalPrice()}</h3>
                            </div>
                        </div>
                            <button onClick={checkLoginStatus}>PROCEED TO CHECKOUT</button>
                    </div>
                    <div className="cartlist-promocode">
                        <p>If you have a promo code, Enter it here</p>
                        <form className="cartlist-promobox" onSubmit={handlePromotion}>
                            <input id="Promotion" onChange={(e)=>setPromotionCode(e.target.value)} value={promotionCode} type="text" placeholder="Promotion Code" />
                            <button>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
    );
}

export default CartList;