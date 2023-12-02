import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './Details.css'
import star from '../Assets/star.svg'

function Details({ addCart }){
    const {code} = useParams();
    const [product, setProduct] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);

    
    useEffect(() => {
        const fetchData = async () => {
          try{
            //đọc file json
            const dataJson = await fetch('../json_file/product.json');
            const data = await dataJson.json();
            //lay product dua vao code
            const selectedProduct = data.find ((item) => item.code == code);
            setProduct(selectedProduct);
            // Set the default selected image as the first image
            setSelectedImage(selectedProduct.image[0]);
          }catch (error){
            console.log('error reading json');
          } 
        };
        fetchData();
      }, []);
    console.log(product);
    if(!product){return}

    const handleImageClick = (image) => {
      setSelectedImage(image);
    };


    return(
        <div>
          <div className="paths">
            <span>HOME / </span> <span>All Collections / </span> {product.name}
          </div>

          <div className="details">
            <div className="details-left">
              <div className="details-img-list">
                {product.image.map(i => (
                  <img src={i} alt='' onClick={()=>handleImageClick(i)}/>))} 
              </div>
              <div className="details-img">
                <img className="details-main-img" src={selectedImage} alt="Product"/>
              </div>
            </div>
            
            <div className="details-right">
              <h1>{product.name}</h1>
              <div className="details-right-star">
                <img className="star" src={star} alt="star"/>
                <img src={star} alt="star"/>
                <img src={star} alt="star"/>
                <img src={star} alt="star"/>
                <img src={star} alt="star"/>
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
        </div>
    );
}

export default Details;