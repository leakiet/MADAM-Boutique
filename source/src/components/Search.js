function Search({value, onSearch }){
    return(
        <div>
            <input placeholder="Enter product name" value={value} onChange={(e) => onSearch(e.target.value)} />
        </div>
    );
}

export default Search;