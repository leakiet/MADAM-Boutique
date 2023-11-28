function Search({value, onSearch }){
    return(
        <div>
            <select value={value} onChange={(e) => onSearch(e.target.value)}>
                <option value="">All Products</option>
                <option value="Bag">Bag</option>
                <option value="Jewelry">Jewelry</option>
                <option value="Sunglasses">Sunglasses</option>
                <option value="Long Dress">Ao Dai Viet Nam</option>
                <option value="Casual wear">Casual Wear</option>
                <option value="Occasion wear">Occasion Wear</option>
                <option value="Formal wear">Formal Wear</option>
            </select>
        </div>
    );
}

export default Search;