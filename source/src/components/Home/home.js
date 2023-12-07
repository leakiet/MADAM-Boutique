import { useNavigate } from "react-router-dom";
import ProductItem from "../Product/ProductItem";
import './home.css';
import Newsletter from "../Newsletter/Newsletter";

import prevarrows from "../Assets/arrow-left.svg";
import nextarrows from "../Assets/arrow-right.svg";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Home ({dataAccessory , dataClothing, addCart}){

    // const CustomPrevArrow = (props) => (
    //     <div {...props} className="custom-arrow custom-prev-arrow" >
    //       <img src={prevarrows} alt="Previous" className="arrow-size"/>
    //     </div>
    //   );
    
    //   const CustomNextArrow = (props) => (
    //     <div {...props} className="custom-arrow custom-next-arrow">
    //       <img src={nextarrows} alt="Next" className="arrow-size"/>
    //     </div>
    //   );

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidestoShow: 1,
        slidestoScroll: 1,
        // prevarrow: <CustomPrevArrow/>,
        // nextarrow: <CustomNextArrow/>,
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
                <div>
                    <img src={require('../Assets/Banner_AoDai.webp')} alt="Banner 3" width="100%" />
                </div>
            </Slider>
            <div className="home">
                <h1>FEATURE ITEMS</h1>
                <hr/>
                <div className="home-item-container">
                    <div className="home-item">
                        {dataClothing.map(p => (
                            <ProductItem key={p.id} product={p} addCart={addCart}/>
                        ))}
                    </div>
                </div>

                <h1>ACCESSORY</h1>
                <hr/>
                <div className="home-item">
                    {dataAccessory.map(p => (
                        <ProductItem key={p.id} product={p} addCart={addCart}/>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default Home;