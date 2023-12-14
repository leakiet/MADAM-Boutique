import './RelatedProducts.css'
import PrevArrows from "../Assets/arrow-left.svg";
import NextArrows from "../Assets/arrow-right.svg";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ProductItem from '../Product/ProductItem';

function RelatedProducts({ relatedProducts, addCart, addCompare }) {

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
        {relatedProducts.map((p,i) => (
          <ProductItem key={i} product={p} addCart={addCart} addCompare={addCompare}/>
        ))}
      </Slider>
      </div>
    </div>
  )
}

export default RelatedProducts;