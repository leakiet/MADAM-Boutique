import { useNavigate } from "react-router-dom";
import { useState } from "react";
import './RelatedItem.css';
import cart_icon from "../Assets/cart-svgrepo-com.svg";

function RelatedItem({ product, addCart }) {
    const [showIcon, setShowIcon] = useState(false);
    const [showCart, setShowCart] = useState(false);
    const navigate = useNavigate();
    
    const handleProductClick = (id) => {
        navigate(`/collections/${id}`);
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
            <img src={product.image[0]} alt={product.name} onClick={() => handleProductClick(product.id)} width='90%'/>
            {showIcon && (
                <div className="related-icon-overlay">
                    <img src={cart_icon} alt="carticon" onClick={() =>{toggleAddCart() ; addCart(product)}}/>
                    <span>Add to Cart</span>
                </div>
            )}
            {showCart && (
                <div className="related-carts-overlay">Item added to Cart</div>
            )}
            </div>
            

            <div>
                <p className="item-name">{product.name}</p>
                <p className="item-price"><span className="item-price-old">{product.price_old} </span>${product.price}</p>
            </div>
            
        </div>
    );
}
export default RelatedItem;