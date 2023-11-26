import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Details(){
    const {code} = useParams();
    const [product, setProduct] = useState(null);
    
    useEffect(() => {
        const fetchData = async () => {
          try{
            //đọc file json
            const dataJson = await fetch('../json_file/product.json');
            const data = await dataJson.json();
            //lay product dua vao ID
            const selectedProduct = data.find ((item) => item.code == code);
            setProduct(selectedProduct);
          }catch (error){
            console.log('error reading json');
          }
        };
        fetchData();
      }, []);
    console.log(product);
    if(!product){
        return <h1>Loading</h1>
    }
    return(
        <div className="detailsPage">
            <h1>Product Details</h1>
            <div>
                <p>{product.image.map(i => (
                    <img src={i} alt="image" width="250px" height="350px"/>))}</p>
                <h2>{product.name}</h2>
                <p>Product Code: {product.code}</p>
                <p>Price: ${product.price}</p>
                <p>Brand: {product.brand}</p>
                <p>Designer: {product.designer}</p>
                <p>Category: {product.category} - {product.type}</p>
                <p>Details: {product.detail}</p>
                <button>Buy now</button>
            </div>
        </div>
    );
}

export default Details;