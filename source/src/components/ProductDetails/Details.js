import { useState, useEffect } from "react";
import { Route, Routes, useNavigate, useParams } from "react-router-dom";
import './Details.css';
import star from '../Assets/star_icon.jpg';
import star_haft from '../Assets/star_haft.png';
import RelatedProducts from "../RelatedProduct/RelatedProducts";


function Details({ addCart}){
    const {id} = useParams();
    const [product, setProduct] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);
    const [relatedProducts, setRelatedProducts] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
          try{
            //đọc file json
            const dataJsons = await fetch('../json_file/product.json');
            const data = await dataJsons.json();
            //lay product dua vao code
            const selectedProduct = data.find ((item) => item.id == id);
            setProduct(selectedProduct);
            // Fetch related products data
            const relatedProductsData = data.filter((item) => item.brand === selectedProduct.brand);
            setRelatedProducts(relatedProductsData);
            // Set the default selected image as the first image
            setSelectedImage(selectedProduct.image[0]);
          }catch (error){
            console.log('error reading json');
          } 
        };
        fetchData();
      }, []);
    if(!product){return(<div className="loadingPage"></div>)}


    const handleImageClick = (image) => { setSelectedImage(image) }

    return(
        <div>
          <div className="paths">
            <span>HOME / </span> <span>All Collections / </span> {product.name}
          </div>

          <div className="details">
            <div className="details-left">
              <div className="details-img-list">
                {product.image.map(i => (
                  <img key={i} src={i} alt="" onClick={()=>handleImageClick(i)}/>))} 
              </div>
              <div className="details-img">
                <img className="details-main-img" src={selectedImage} alt="Product"/>
              </div>
            </div>
            
            <div className="details-right">
              <h1>{product.name}</h1>
              <div className="details-right-star">
                <img className="star" src={star} alt="star"/>
                <img className="star" src={star} alt="star"/>
                <img className="star" src={star} alt="star"/>
                <img className="star" src={star} alt="star"/>
                <img className="star" src={star_haft} alt="star"/>
                <p>(98)</p>
              </div>
              <div className="details-right-price">
                <div className="details-right-price-old">{product.price_old}</div>
                <div className="details-right-price-new">${product.price}</div>
              </div>
              <div className="details-right-description">
                {product.detail}
              </div>
              <div className="details-right-size">
                <h1>Select Size</h1>
                <div className="details-right-sizes">
                  <div>S</div>
                  <div>M</div>
                  <div>L</div>
                </div>
              </div>
              <button onClick={() => addCart(product)}>ADD TO CART</button>
              <p className="details-right-category"><span>Category: </span>{product.category}</p>
              <p className="details-right-category"><span>Brand: </span>{product.brand}</p>
              <p className="details-right-category"><span>Designer: </span>{product.designer}</p>
            </div>
          </div>
          <RelatedProducts relatedProducts={relatedProducts} addCart={addCart}/>
        </div>
    );
}

export default Details;