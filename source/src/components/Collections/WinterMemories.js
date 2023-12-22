import React from 'react'
import ProductItem from '../Product/ProductItem';
import BannerWinter from '../Assets/banner_WinterM.webp'
import { Link } from 'react-router-dom';


function WinterMemories({collection1 , addCart}) {
  return (
    <div>
        <img className='banner' src={BannerWinter} alt='Winter Memories' width="100%"/>
        <div className="path">
            <Link to='/'>HOME /</Link><span>WINTER MEMORIES</span>
        </div>
        <div className="product">
            <h1>WINTER MEMORIES</h1> 
            <hr/>
        </div>
    
        <div className="product">
            <div className="product-item">
                {collection1.map(p => (
                    <ProductItem key={p.id} product={p} addCart={addCart}/>
                ))}
            </div>
        </div>
    </div>
    );
}

export default WinterMemories;
