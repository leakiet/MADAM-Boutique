import { useNavigate } from "react-router-dom";
import './ProductItem.css';

function ProductItem({ product, addCart}) {
    const navigate = useNavigate();
    const handleProductClick = (code) => {
        // Navigate to the product page using the code
        navigate(`/collections/${code}`);
        // Reload the page after navigation
        window.location.reload();
        // Scroll to the top of the page after navigation
        window.scrollTo({ top: 0, behavior: 'auto' });
    }
    return (
        <div className="item">
            <img src={product.image[0]} alt="image" width="100%" height="500px" onClick={() => handleProductClick(product.code)} />
            <div>
                <p className="item-name">{product.name}</p>
                <p className="item-price">${product.price}</p>    
                <button onClick={() => addCart(product)}>Buy now</button>
                <button onClick={() => handleProductClick(product.code)} >View Details</button>
            </div>
        </div>
    );
}
export default ProductItem;