import { useNavigate } from "react-router-dom";
import './ProductItem.css';
import X_icon from '../Assets/x-lg.svg'

function ProductItem({ product, addCart }) {
    const navigate = useNavigate();
    const handleProductClick = (id) => {
        // Navigate to the product page using the code
        navigate(`/collections/${id}`);
        // Reload the page after navigation
        window.location.reload();
        // Scroll to the top of the page after navigation
        window.scrollTo(0,0);
    }
    return (
        <div className="item">
            <img src={product.image[0]} alt="image" width="80%" onClick={() => handleProductClick(product.id)} />
            <div>
                <p className="item-name">{product.name}</p>
                <p className="item-price">${product.price}</p>    
                <button onClick={() => addCart(product)}>Add Cart</button>
                <button onClick={() => handleProductClick(product.id)} >View Details</button>
            </div>
        </div>
    );
}
export default ProductItem;