import { useNavigate } from "react-router-dom";
import ProductItem from "../Product/ProductItem";
import './home.css';
import BannerHome from '../Assets/BannerHome.webp'

function Home ({dataAccessory , dataClothing, addCart}){
    const navigate = useNavigate();
    return(
        <div className="home">
            <img src={BannerHome} alt="BannerHome" width="100%" className="banner"/>
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
    );
}
export default Home;