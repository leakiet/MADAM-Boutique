import { Link, useNavigate } from "react-router-dom";
import ProductItem from "../Product/ProductItem";
import './NewCollections.css';


function NewCollections ({dataNew , addCart}){
    return(
        <div>
            <img className='banner' src={require('../Assets/Banner1.jpg')} alt="Banner 1" width="100%"/>

            <div className="path">
                <span><Link to='/'>HOME /</Link></span><span>New Collection</span>
            </div>
            
            <div className="home">
                <h1>New Collections</h1>
                <hr/>
                <div className="home-item-container">
                    <div className="home-item">
                        {dataNew.map(p => (
                            <ProductItem key={p.id} product={p} addCart={addCart}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default NewCollections;