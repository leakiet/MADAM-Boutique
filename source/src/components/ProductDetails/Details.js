import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import './Details.css';

import star from '../Assets/star_icon.jpg';
import star_haft from '../Assets/star_haft.png';
import RelatedProducts from "../RelatedProduct/RelatedProducts";
import Comparation from "../Comparation/Comparation";


function Details({ addCart }) {
  const { id } = useParams();
  const [product, setProduct] = useState('');
  const [selectedImage, setSelectedImage] = useState('');
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [compareProducts, setCompareProducts] = useState([]);
  const [selectedComparison, setSelectedComparison] = useState([]);
  const [compare3 , setCompare3] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Read the JSON file
        const dataJsons = await fetch('../json_file/product.json');
        const data = await dataJsons.json();

        const selectedProduct = data.find((item) => item.id == id);
        setProduct(selectedProduct);

        const relatedProductsData = data.filter((item) => item.brand === selectedProduct.brand);
        setRelatedProducts(relatedProductsData);

        const compareData = data.filter((item) => item.brand !== selectedProduct.brand && item.category === selectedProduct.category);
        setCompareProducts(compareData)

        setSelectedImage(selectedProduct.image[0]);
      } catch (error) {
        console.log('error reading json', error);
      }
    };
    fetchData();
  }, [id]);
  if (!product) { return (<div className="loadingPage"></div>) }

  const handleImageClick = (image) => { setSelectedImage(image) }

  const handleCompare = () => {
    window.scrollTo({top:2500})
    // Add the current product to the list of selected products for comparison
    setSelectedComparison((prevProducts) => {
      const isProductInList = prevProducts.some((prevProduct) => prevProduct.id === product.id);
  
      if (prevProducts.length < 3 && !isProductInList) {
        // If there is space, add the new product to the end of the list
        return [...prevProducts, product];
      } else if (isProductInList) {
        // If the product is already in the list, do nothing
        return prevProducts;
      } else {
        // If the limit is reached, replace the first product with the new one
        setCompare3(true)
        const newComparisonList = [...prevProducts];
        newComparisonList.shift(); // Remove the first product
        newComparisonList.push(product); // Add the new product to the end
        return newComparisonList;
      }
    });
  };


  return (
    <div>
      <div className="paths">
        <Link to='/'>HOME </Link> / <span><Link to='/allCollections'>ALL Collections</Link>/</span> {product.name}
      </div>

      <div className="details">
        <div className="details-left">
          <div className="details-img-list">
            {product.image.map((i,index) => (
              <img key={index} src={i} alt="" onClick={() => handleImageClick(i)} />))}
          </div>
          <div className="details-img">
            <img className="details-main-img" src={selectedImage} alt="Product" />
          </div>
        </div>

        <div className="details-right">
          <h1>{product.name}</h1>
          <div className="details-right-star">
            <img className="star" src={star} alt="star" />
            <img className="star" src={star} alt="star" />
            <img className="star" src={star} alt="star" />
            <img className="star" src={star} alt="star" />
            <img className="star" src={star_haft} alt="star" />
            <p>(98)</p>
          </div>
          <div className="details-right-price">
            <div className="details-right-price-old">{product.price_old}</div>
            <div className="details-right-price-new">${product.price}</div>
          </div>
          <div className="details-right-description">
            {product.detail}
          </div>
          <button onClick={() => addCart(product)}>ADD TO CART</button>
          <button onClick={handleCompare}>ADD TO COMPARE</button>
          {compare3 && (
            <p className="notice3">Maximum 3 items for comparing</p>
          )}
          <p className="details-right-category"><span>Category: </span>{product.category}</p>
          <p className="details-right-category"><span>Type: </span>{product.tags}</p>
          <p className="details-right-category"><span>Brand: </span>{product.brand}</p>
          <p className="details-right-category"><span>Designer: </span>{product.designer}</p>
        </div>
      </div>

      <RelatedProducts relatedProducts={relatedProducts} addCart={addCart}/>
      <Comparation compareProducts={compareProducts} addCart={addCart}/>

      <div className='relatedproducts'>
        <h1>Compare Products</h1>
        <hr/>
        <div className="compare-items-container">
          <div className="compare-right-items">
            {selectedComparison.map((p, index) => (
              <div key={index} className="compare-items">
                <p><img src={p.image[0]} alt={p.name} width='300px'/></p>
                <h4>{p.name}</h4>
                <p>Price: <span className="item-price-old">{p.price_old}</span> ${p.price}</p>
                <p>Brand: {p.brand}</p>
                <p>Designer: {p.designer}</p>
                <p>Type: {p.tags}</p>
                {/* Add more details or styling as needed */}
              </div>
            ))}
          </div>
          </div>
      </div> 
    </div>
  );
}

export default Details;