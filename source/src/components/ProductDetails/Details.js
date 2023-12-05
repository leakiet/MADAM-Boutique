import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './Details.css'
import star from '../Assets/star.svg'
import RelatedProducts from "../RelatedProduct/RelatedProducts";


function Details({ addCart}){
    const {code} = useParams();
    const [productz, setProductz] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);
    
    useEffect(() => {
        const fetchData = async () => {
          try{
            //đọc file json
            const dataJsons = await fetch('../json_file/product.json');
            const data = await dataJsons.json();
            //lay product dua vao code
            const dataDetails = data;
            const selectedProductz = dataDetails.find ((item) => item.code == code);
            setProductz(selectedProductz);
            // Set the default selected image as the first image
            setSelectedImage(selectedProductz.image[0]); 
          }catch (error){
            console.log('error reading json');
          } 
        };
        fetchData();
      }, []);
    if(!productz){return(<div className="loadingPage"></div>)}


    const handleImageClick = (image) => { setSelectedImage(image) }

    return(
        <div>
          <div className="paths">
            <span>HOME / </span> <span>All Collections / </span> {productz.name}
          </div>

          <div className="details">
            <div className="details-left">
              <div className="details-img-list">
                {productz.image.map(i => (
                  <img key={i} src={i} alt="" onClick={()=>handleImageClick(i)}/>))} 
              </div>
              <div className="details-img">
                <img className="details-main-img" src={selectedImage} alt="Product"/>
              </div>
            </div>
            
            <div className="details-right">
              <h1>{productz.name}</h1>
              <div className="details-right-star">
                <img className="star" src={star} alt="star"/>
                <img src={star} alt="star"/>
                <img src={star} alt="star"/>
                <img src={star} alt="star"/>
                <img src={star} alt="star"/>
                <p>(98)</p>
              </div>
              <div className="details-right-price">
                <div className="details-right-price-old">{productz.price_old}</div>
                <div className="details-right-price-new">${productz.price}</div>
              </div>
              <div className="details-right-description">
                {productz.detail}
              </div>
              <div className="details-right-size">
                <h1>Select Size</h1>
                <div className="details-right-sizes">
                  <div>S</div>
                  <div>M</div>
                  <div>L</div>
                </div>
              </div>
              <button onClick={() => addCart(productz)}>ADD TO CART</button>
              <p className="details-right-category"><span>Category: </span>{productz.category}</p>
              <p className="details-right-category"><span>Brand: </span>{productz.brand}</p>
              <p className="details-right-category"><span>Designer: </span>{productz.designer}</p>
            </div>
          </div>
            <RelatedProducts productBrand={productz.brand} addCart={addCart}/>
        </div>
    );
}

export default Details;