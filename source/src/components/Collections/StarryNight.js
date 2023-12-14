import React from 'react'
import ProductItem from '../Product/ProductItem';
import BannerStarry from '../Assets/banner_StarryN.webp'

function StarryNight({collection3 , addCart}) {
  return (
    <div>
        <img className='banner' src={BannerStarry} alt='STARRY NIGHT' width="100%"/>
        <div className="path">
            <span>HOME / </span><span>STARRY NIGHT</span>
        </div>
        <div className="product">
            <h1>STARRY NIGHT</h1> 
            <hr/>
        </div>

        <div className="product">
            <div className="product-item">
                {collection3.map(p => (
                    <ProductItem key={p.id} product={p} addCart={addCart}/>
                ))}
            </div>
        </div>
    </div>
    );
}

export default StarryNight;
