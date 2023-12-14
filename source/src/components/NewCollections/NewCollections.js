import { useNavigate } from "react-router-dom";
import ProductItem from "../Product/ProductItem";
import './NewCollections.css';


function NewCollections ({dataNew , addCart}){
    return(
        <div>
            <img className='banner' src={require('../Assets/Banner1.jpg')} alt="Banner 1" width="100%"/>

            <div className="path">
                <span>HOME / </span><span>New Collection</span>
            </div>
            
            <div className="new">
                <h1>New Collections</h1>
                <hr/>
                <div className="new-item-container">
                    <div className="new-item">
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