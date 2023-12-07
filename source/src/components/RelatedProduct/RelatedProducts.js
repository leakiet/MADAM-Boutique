import './RelatedProducts.css'
import PrevArrows from "../Assets/arrow-left.svg";
import NextArrows from "../Assets/arrow-right.svg";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useNavigate } from 'react-router-dom';
import ProductItem from '../Product/ProductItem';

function RelatedProducts({ relatedProducts, addCart }) {
  if (!relatedProducts) return null;

  // const CustomPrevArrow = (props) => (
  //   <div {...props} className="custom-arrows custom-prev-arrows" >
  //     <img src={PrevArrows} alt="Previous" className="arrow-size"/>
  //   </div>
  // );

  // const CustomNextArrow = (props) => (
  //   <div {...props} className="custom-arrows custom-next-arrows">
  //     <img src={NextArrows} alt="Next" className="arrow-size"/>
  //   </div>
  // );

const settings = {
    infinite: true,
    dots: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    // prevArrow: <CustomPrevArrow/>,
    // nextArrow: <CustomNextArrow/>,
  };

  return (
    <div>
      <div className='relatedproducts'>
        <h1>Related Items</h1>
        <hr/>
      </div>
      <div className='relatedproducts-items-container'>
      <Slider {...settings} className='relatedproducts-items'>
        {relatedProducts.map(p => (
          <ProductItem key={p.id} product={p} addCart={addCart}/>
        ))}
      </Slider>
      </div>
    </div>
  )
}

export default RelatedProducts;