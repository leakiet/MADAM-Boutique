import './CartItem.css'
import X_icon from '../Assets/x-lg.svg'

function CartItem({ product, deleteCart, onQuantityChange }){
    return (
        <div className="cartItem-format cartlist-main">
            <img src={product.image[0]} alt="" className="cartItem-product-icon"/>
                <p>{product.name}</p>
                <p>${product.price}</p>
                <div className="cartItem-quantity">
                <button onClick={() => onQuantityChange('decrement', product.id)}>-</button>
                <button >{product.quantity}</button>
                <button onClick={() => onQuantityChange('increment', product.id)}>+</button>
                </div>
                <p>{product.price*product.quantity}</p>               
                <img src={X_icon} alt="x_icon" className='cartItem-remove-icon' onClick={()=>{deleteCart(product.id)}}/>
        </div>
    )
} export default CartItem;