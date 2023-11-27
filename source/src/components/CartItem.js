function CartItem({ product, deleteCart }){
    return (
        <tr>
            <td><img src={product.image[0]} height="100px" /></td>
            <td>{product.name}</td>
            <td>${product.price}</td>
            <td>Quantity: {product.quantity || 0}</td>
            <td><button onClick={() => deleteCart(product.id)}>Delete</button></td>
        </tr>
    )
} export default CartItem;