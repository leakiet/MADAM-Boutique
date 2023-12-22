import React from 'react'
import ProductItem from '../Product/ProductItem'
import './SearchPage.css'


function SearchPage({ products, addCart }) {
  return (
    <div>
      <div className="path">
        <span>HOME / </span><span>Search Items</span>
      </div>
      <hr/>
      <div className="product">
        <h1>SEARCH ITEMS</h1>
        <hr />
      </div>
      <div className="product">
        <div className="product-item">
          {products.map(p => (
            <ProductItem key={p.id} product={p} addCart={addCart} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default SearchPage;
