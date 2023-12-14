import { useNavigate } from "react-router-dom";
import ProductItem from "../Product/ProductItem";
import './Sale.css';
import BannerSale from '../Assets/Banner2.webp';


function Sale ({dataSale , addCart}){
    return(
        <div>
            <img className='banner' src={BannerSale} alt="Banner 3" width="100%"/>

            <div className="path">
                <span>HOME / </span><span>Christmas Sale</span>
            </div>
            
            <div className="home">
                <h1>Christmas Sale</h1>
                <hr/>
                <div className="home-item-container">
                    <div className="home-item">
                        {dataSale.map(p => (
                            <ProductItem key={p.id} product={p} addCart={addCart}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Sale;