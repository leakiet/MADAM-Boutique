import React, { useEffect, useState } from 'react'
import './RelatedProducts.css'
import ProductItem from '../Product/ProductItem'

import PrevArrows from "../Assets/arrow-left-square.svg";
import NextArrows from "../Assets/arrow-right-square.svg";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useNavigate } from 'react-router-dom';

function RelatedProducts({productBrand, addCart }) {
  const [relatedProducts, setRelatedProducts] = useState([]);
  const navigate= useNavigate();

  useEffect(() => {
    const fetchRelatedProducts = async () => {
      try {
        const dataJson = await fetch('../json_file/product.json');
        const dataRelated = await dataJson.json();
        const relatedProductsData = dataRelated.filter(item => item.brand === productBrand);
        setRelatedProducts(relatedProductsData);
      } catch (error) {
        console.error('Error fetching related products:', error);
      }
    };
    fetchRelatedProducts();
  }, [productBrand]);

  const CustomPrevArrow = (props) => (
    <div {...props} className="custom-arrows" >
      <img src={PrevArrows} alt="Previous" className="arrow-size"/>
    </div>
  );

  const CustomNextArrow = (props) => (
    <div {...props} className="custom-arrows">
      <img src={NextArrows} alt="Next" className="arrow-size"/>
    </div>
  );

const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow/>,
    nextArrow: <CustomNextArrow/>,
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
          <ProductItem key={p.code} product={p} addCart={addCart}/>
        ))}
      </Slider>
      </div>
    </div>
  )
}

export default RelatedProducts;