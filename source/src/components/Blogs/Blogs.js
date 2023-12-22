import React from 'react'
import { Link } from 'react-router-dom'
import MinimalChic from '../Assets/MinimalChic.webp'
import WearShirt from '../Assets/WearAShirt.webp'
import LadySuit from '../Assets/LadyonSuit.webp'

function Blogs() {
    return (
        <div className='Blogs'>
            <div className="path">
                <Link to='/'>HOME /</Link><span>BLOG</span>
            </div>
            <hr />
        <div className="home">
            <h1>MADAM BOUTIQUE 'S BLOG</h1>
            <hr />
            <div className="home-item-container">
                <div className="home-blogs">
                    <Link to='/blog/MinimalChic' onClick={() => window.scrollTo(0, 0)}>
                        <img src={MinimalChic} alt="Minimal Chic" width="600px" />
                        <h4>MINIMAL CHIC</h4>
                    </Link>
                    <Link to='/blog/ThreeWays' onClick={() => window.scrollTo(0, 0)}>
                        <img src={WearShirt} alt="Wear a Shirt" width="600px" />
                        <h4>3 WAYS TO WEAR BEAUTIFUL SHIRT PROPERLY</h4>
                    </Link>
                    <Link to='/blog/LadyOnSuit' onClick={() => window.scrollTo(0, 0)}>
                        <img src={LadySuit} alt="Lady on Suit" width="600px" />
                        <h4>SUIT - FASHION TREND FOR POWERFUL LADIES</h4>
                    </Link>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Blogs
