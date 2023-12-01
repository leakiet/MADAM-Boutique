import ProductItem from "./ProductItem";
import './ProductList.css'

function ProductList({ products, addCart }){
    return(
    <div className="product">
        <div className="product-item">
            {products.map(p => (
                <ProductItem key={p.id} product={p} addCart={addCart}/>
            ))}
        </div>
    </div>
    );
}
export default ProductList;