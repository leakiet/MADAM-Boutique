import { Link, useNavigate } from "react-router-dom";
import ProductItem from "../Product/ProductItem";
import './home.css';

import prevarrows from "../Assets/arrow-left.svg";
import nextarrows from "../Assets/arrow-right.svg";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import MinimalChic from '../Assets/MinimalChic.webp'
import WearShirt from '../Assets/WearAShirt.webp'
import LadySuit from '../Assets/LadyonSuit.webp'

function Home({ dataAccessory, dataClothing, addCart }) {

    const CustomPrevArrow = (props) => (
        <div {...props} className="custom-arrow custom-prev-arrow" >
            <img src={prevarrows} alt="Previous" className="arrow-size" />
        </div>
    );

    const CustomNextArrow = (props) => (
        <div {...props} className="custom-arrow custom-next-arrow">
            <img src={nextarrows} alt="Next" className="arrow-size" />
        </div>
    );

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,  // Show the navigation dots
        appendDots: dots => (
            <div style={{ position: "absolute", bottom: "10px", left: "50%", transform: "translateX(-50%)" }}>
                <ul style={{ margin: "0", padding: "0" }}>{dots}</ul>
            </div>
        ),
    }

    return (
        <div>
            <Slider {...settings} className="slider">
                <div>
                    <Link to='newCollections'><img src={require('../Assets/Banner1.jpg')} alt="Banner 1" width="100%" /></Link>
                </div>
                <div>
                    <Link to='newCollections'><img src={require('../Assets/Banner2.webp')} alt="Banner 2" width="100%" /></Link>
                </div>
                <div>
                    <Link to='AoDai'><img src={require('../Assets/Banner_AoDai.webp')} alt="Banner 3" width="100%" /></Link>
                </div>
            </Slider>
            <div className="home">
                <h1>HIT COLLECTIONS</h1>
                <hr />
                <div className="home-item-container">
                    <div className="home-item">
                        {dataClothing.map(p => (
                            <ProductItem key={p.id} product={p} addCart={addCart} />
                        ))}
                    </div>
                </div>

                <h1>ACCESSORY</h1>
                <hr />
                <div className="home-item">
                    {dataAccessory.map(p => (
                        <ProductItem key={p.id} product={p} addCart={addCart} />
                    ))}
                </div>

                <h1>MADAM BOUTIQUE 'S BLOG</h1>
                <hr />
                <div className="home-item-container">
                    <div className="home-blog">
                        <Link to='/blog/MinimalChic' onClick={() => window.scrollTo(0, 0)}>
                            <img src={MinimalChic} alt="Minimal Chic" width="400px" height='250px' />
                            <h4>MINIMAL CHIC</h4>
                        </Link>
                        <Link to='/blog/ThreeWays' onClick={() => window.scrollTo(0, 0)}>
                            <img src={WearShirt} alt="Wear a Shirt" width="400px" height='250px' />
                            <h4>3 WAYS TO WEAR BEAUTIFUL SHIRT PROPERLY</h4>
                        </Link>
                        <Link to='/blog/LadyOnSuit' onClick={() => window.scrollTo(0, 0)}>
                            <img src={LadySuit} alt="Lady on Suit" width="400px" height='250px' />
                            <h4>SUIT - FASHION TREND FOR POWERFUL LADIES</h4>
                        </Link>
                    </div>
                </div>
            </div>
        </div >
    );
}
export default Home;