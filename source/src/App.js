import { useState, useEffect } from 'react';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import './css/nav-bar.css';
import './css/allCollections.css';
import './css/homePage.css';
import './css/detailsPage.css';
import ProductList from './components/ProductList';
import Home from './components/home';
import Details from './components/Details';
import Search from './components/Search';

function App() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [filterProduct, setFilterProducts] = useState([]);
  const [value, setValue] = useState('');


  useEffect(() => {
    const fetchData = async () => {
      try{
        const dataJson = await fetch('./json_file/product.json');
        const ProductData = await dataJson.json();
        setProducts(ProductData);
        setFilterProducts(ProductData);
      }catch (error){
        console.log('error reading json');
      }
    };
    fetchData();
  }, []);

  const handleSearch = (value) => {
    setValue(value);
    const searchedProducts = products.filter(d => d.name.includes(value));
    setFilterProducts(searchedProducts);
  }


  return (
    <div className="App">
        <nav className='nav-bar'>
          <Link to="/">Home</Link>
          <Link to="/collections">All Collections</Link>
          <Link to="/collections/newCollections">New Collection</Link>
          <Link to="/collections/onSale">On Sale</Link>
          <Link to="/user">User Icon</Link>
          <Link to="/cart">Cart Icon</Link>
        </nav>

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/collections' element={
            <div className='allCollections'>
              <Search onSearch={handleSearch}/>
              <ProductList products={filterProduct}/>
            </div>}/>
          <Route path ="/collections/:code" element={<Details/>}/>
        </Routes>
    </div>
  );
}

export default App;
