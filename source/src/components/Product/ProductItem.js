import { useNavigate } from "react-router-dom";
import './ProductItem.css';
import { useState } from "react";
import cart_icon from "../Assets/cart-plus.svg"

function ProductItem({ product, addCart }) {
    const [showIcon, setShowIcon] = useState(false);
    const [showCart, setShowCart] = useState(false);
    const navigate = useNavigate();
    
    const handleProductClick = (id) => {
        navigate(`/collections/${id}`);
        // window.location.reload();
        window.scrollTo({top: 0});
    }

    const toggleAddCart = () => {
        setShowCart(true)
    }


    return (
        <div className="item">
            <div className="container-item"
              onMouseEnter={() => setShowIcon(true)}
              onMouseLeave={() => setShowIcon(false)}
            >
            <img src={product.image[0]} alt={product.name} width="100%" onClick={() => handleProductClick(product.id)}/>
            {showIcon && (
                <div className="icon-overlay">
                    <img src={cart_icon} alt="carticon" onClick={() =>{toggleAddCart() ; addCart(product)}}/>
                </div>
            )}
            {showCart && (
                <div className="carts-overlay">Item added to Cart</div>
            )}
            </div>

            <div>
                <p className="item-name">{product.name}</p>
                <p className="item-price"><span className="item-price-old">{product.price_old} </span>${product.price}</p>
            </div>
            
        </div>
    );
}
export default ProductItem;