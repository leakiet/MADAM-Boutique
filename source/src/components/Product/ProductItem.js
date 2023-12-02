import { useNavigate } from "react-router-dom";
import './ProductItem.css';

function ProductItem({ product, addCart}){
    const navigate = useNavigate();
    return (
        <div className="item">
            <img src={product.image[0]} alt="image" width="100%" height="500px" onClick={() => navigate(`/collections/${product.code}`)} />
            <div>
                <p className="item-name">{product.name}</p>
                <p className="item-price">${product.price}</p>    
                <button onClick={() => addCart(product)}>Buy now</button>
                <button onClick={() => navigate(`/collections/${product.code}`)}>View Details</button>
            </div>
        </div>
    );
}
export default ProductItem;