import React from 'react'
import ProductItem from '../Product/ProductItem';
import BannerAoDai from '../Assets/Banner_AoDai.webp'


function AoDai({ collection4, addCart }) {
    return (
        <div>
            <img className='banner' src={BannerAoDai} alt='Winter Memories' width="100%" />
            <div className="path">
                <span>HOME / </span><span>AO DAI</span>
            </div>
            <div className="product">
                <h1>AO DAI</h1>
                <hr />
            </div>
            <div className="product">
                <div className="product-item">
                    {collection4.map(p => (
                        <ProductItem key={p.id} product={p} addCart={addCart} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default AoDai;
