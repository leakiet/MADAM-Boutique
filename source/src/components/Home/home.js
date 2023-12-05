import { useNavigate } from "react-router-dom";
import ProductItem from "../Product/ProductItem";
import './home.css';
import Newsletter from "../Newsletter/Newsletter";

import PrevArrows from "../Assets/arrow-left-square.svg";
import NextArrows from "../Assets/arrow-right-square.svg";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Home ({dataAccessory , dataClothing, addCart}){
    const navigate = useNavigate();

    const CustomPrevArrow = (props) => (
        <div {...props} className="custom-arrow custom-prev-arrow" >
          <img src={PrevArrows} alt="Previous" className="arrow-size"/>
        </div>
      );
    
      const CustomNextArrow = (props) => (
        <div {...props} className="custom-arrow custom-next-arrow">
          <img src={NextArrows} alt="Next" className="arrow-size"/>
        </div>
      );

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <CustomPrevArrow/>,
        nextArrow: <CustomNextArrow/>,
      };

    return(
        <div>
            <Slider {...settings} className="slider">
                <div>
                    <img src={require('../Assets/Banner1.jpg')} alt="Banner 1" width="100%"/>
                </div>
                <div>
                    <img src={require('../Assets/Banner2.webp')} alt="Banner 2" width="100%" />
                </div>
            </Slider>
            <div className="home">
                <h1>FEATURE ITEMS</h1>
                <hr/>
                <div className="home-item-container">
                    <div className="home-item">
                        {dataClothing.map(p => (
                            <ProductItem key={p.code} product={p} addCart={addCart}/>
                        ))}
                    </div>
                </div>

                <h1>ACCESSORY</h1>
                <hr/>
                <div className="home-item">
                    {dataAccessory.map(p => (
                        <ProductItem key={p.code} product={p} addCart={addCart}/>
                    ))}
                </div>
                <Newsletter/>
            </div>
        </div>
    );
}
export default Home;