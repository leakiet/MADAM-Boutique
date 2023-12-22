import PrevArrows from "../Assets/arrow-left.svg";
import NextArrows from "../Assets/arrow-right.svg";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import RelatedItem from '../RelatedProduct/RelatedItem';
import { useEffect, useState } from "react";

function Comparation({ compareProducts, addCart }) {

  const CustomPrevArrow = (props) => (
    <div {...props} className="custom-arrows1 custom-prev-arrows1" >
      <img src={PrevArrows} alt="Previous" className="arrow-size"/>
    </div>
  );

  const CustomNextArrow = (props) => (
    <div {...props} className="custom-arrows1 custom-next-arrows1">
      <img src={NextArrows} alt="Next" className="arrow-size"/>
    </div>
  );

  const [maxWidth, setMaxWidth] = useState(window.innerWidth);
  const [numberItem, setNumberItem] = useState(window.innerWidth < 600
    ? 1
    : window.innerWidth < 800
    ? 2
    : window.innerWidth < 1090
    ? 3
    : 4)

  useEffect(() => {
    const handleResize = () => {
      setMaxWidth(window.innerWidth);
      // Use the ternary operator to set the number of items based on maxWidth
      setNumberItem(
        maxWidth < 600 ? 1 : ((maxWidth>= 600 && maxWidth < 800) ? 2 : (maxWidth >= 800 && maxWidth < 1090 ? 3 : 4))
      );
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [maxWidth]); // Include maxWidth in the dependency array

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: numberItem,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div>
      <div className='relatedproducts'>
        <h1>Other Brands Items</h1>
        <hr/>
      </div>
      <div className='relatedproducts-items-container'>
      <Slider {...settings} className='relatedproducts-items'>
        {compareProducts.map((p,i) => (
          <div className='relatedproducts-items-show'>
          <RelatedItem key={i} product={p} addCart={addCart}/>
          </div>
        ))}
      </Slider>
      </div>
    </div>
  )
}

export default Comparation;