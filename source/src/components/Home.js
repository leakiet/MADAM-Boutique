import { useNavigate } from "react-router-dom";

function Home ({dataAccessory , dataClothing}){
    const navigate = useNavigate();
    return(
        <div className="homePage">
        <h1>WELCOME HOMEPAGE</h1>
        <h3>Accessory</h3>
        {dataAccessory.map(pro => (
            <img src={pro.image[0]} alt="image" width="200px" onClick={() => navigate(`/collections/${pro.code}`)} />
        ))}
        <h3>Clothing</h3>
        {dataClothing.map(pro => (
            <img src={pro.image[0]} width="200px" onClick={() => navigate(`/collections/${pro.code}`)}/>
        ))}
    </div>
    );
}
export default Home;