import ProductItem from "./ProductItem";

function ProductList({ products }){
    return(
    <div>
        <h1>All Collections</h1>
        <div className="allCollections1">
            {products.map(p => (
                <ProductItem key={p.id} product={p}/>
            ))}
        </div>
    </div>
    );
}
export default ProductList;