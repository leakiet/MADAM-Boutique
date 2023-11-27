import { useNavigate } from "react-router-dom";

function ProductItem({ product, addCart}){
    const navigate=useNavigate();
    return (
        <div>
            <img src={product.image[0]} alt="image" width="250px" height="350px" onClick={() => navigate(`/collections/${product.code}`)} />
            <h4>{product.name}</h4>
            <p>${product.price}</p>    
            <p><button onClick={() => addCart(product)}>Buy now</button>   <button onClick={() => navigate(`/collections/${product.code}`)}>View Details</button></p>
            <br></br>

        </div>
    );
}
export default ProductItem;