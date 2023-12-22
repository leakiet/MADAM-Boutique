import React from 'react'
import ProductItem from '../Product/ProductItem';
import BannerParsian from '../Assets/banner_Parisian.webp'
import { Link } from 'react-router-dom';


function ParisianLady({collection2 , addCart}) {
  return (
    <div>
        <img className='banner' src={BannerParsian} alt='PARISIAN LADY' width="100%"/>
        <div className="path">
            <Link to='/'>HOME /</Link><span>PARISIAN LADY</span>
        </div>
        <div className="product">
            <h1>PARISIAN LADY</h1> 
            <hr/>
        </div>

        <div className="product">
            <div className="product-item">
                {collection2.map(p => (
                    <ProductItem key={p.id} product={p} addCart={addCart}/>
                ))}
            </div>
        </div>
    </div>
    );
}

export default ParisianLady;
