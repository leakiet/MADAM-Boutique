import ProductItem from "./ProductItem";

function ProductList({ products, addCart }){
    return(
    <div>
        <h1>All Collections</h1>
        <div className="allCollections1">
            {products.map(p => (
                <ProductItem key={p.id} product={p} addCart={addCart}/>
            ))}
        </div>
    </div>
    );
}
export default ProductList;