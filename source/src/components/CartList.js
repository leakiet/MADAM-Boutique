import CartItem from "./CartItem";

function CartList({ carts, deleteCart }) {
    return (
        <div className="yourCart">
            {carts.length > 0 ? (
            <div>
                <h1>Your Carts</h1>
                <table className="yourCart1">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>quantity</th>
                        <th>action</th>
                    </tr>
                </thead>
                {carts.map(c => (
                <CartItem key={c.code} product={c} deleteCart={deleteCart} />
                ))}
                </table>
            </div>
            ): (<h2>Your cart is empty</h2>)}
        </div>
    );
}

export default CartList;