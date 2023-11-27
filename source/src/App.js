import { useState, useEffect } from 'react';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import './css/nav-bar.css';
import './css/allCollections.css';
import './css/homePage.css';
import './css/detailsPage.css';
import './css/yourCart.css';

import ProductList from './components/ProductList';
import Home from './components/home';
import Details from './components/Details';
import Search from './components/Search';
import CartList from './components/CartList';
import Login from './components/Login';


function App() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [filterProduct, setFilterProducts] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [users, setUsers] = useState([]);
  const [errorLogin, setErrorLogin] = useState('');
  const [carts, setCarts] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try{
        const productJson = await fetch('./json_file/product.json');
        const productData = await productJson.json();
        setProducts(productData);
        setFilterProducts(productData);

        const userJson = await fetch('./json_file/user.json');
        const usertData = await userJson.json();
        setUsers(usertData);
      }catch (error){
        console.log('error reading json');
      }
    };
    fetchData();
  }, []);

  //Search by Name
  const handleSearch = (value) => {
    setSearchValue(value);
    const searchedProducts = products.filter(d => d.name.toLowerCase().includes(value.toLowerCase()));
    setFilterProducts(searchedProducts);
  }

  const handleAddCarts = (product) => {
    const currentProduct = carts.find(item => item.id === product.id);
    if (currentProduct) {    // cập nhật số lượng
      const updatedCart = carts.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      setCarts(updatedCart);
      } else { //thêm vào giỏ hàng với số lượng là 1
        setCarts([...carts, { ...product, quantity: 1 }]);}
    }
  // Xóa sản phẩm khỏi giỏ hàng
  const handleDeleteCart = (id) => {
    const updatedCart = carts.map(item =>
      item.id === id
        ? { ...item, quantity: Math.max(item.quantity - 1, 0) }
        : item
    );
  const filterCart = updatedCart.filter(item => item.quantity > 0); setCarts(filterCart);
    }

  const checkLogin = (checkUser) => {
    const findUser = users.find(u => u.username == checkUser.username 
            && u.password == checkUser.password);
    if(findUser != null){
      //tim thay user
      console.log("login thanh cong");
      //dang ky localStorage
      localStorage.setItem('username', checkUser.username);
      setErrorLogin('');
      //chuyển đến route product
      navigate('/collections');
    }else{
      //khong tim thay user
      console.log("login khong thanh cong");
      alert('login khong thanh cong');     
      setErrorLogin('Invalid username or password');
    }
  }

  const deleteLocalStorage = () => {
    localStorage.clear();
  }


  return (
    <div className="App">
        <nav className='nav-bar'>
          <Link to="/">Home</Link>
          <Link to="/collections">All Collections</Link>
          <Link to="/collections/newCollections">New Collection</Link>
          <Link to="/collections/onSale">On Sale</Link>
          <Link to="/cart">Your Cart</Link>
          {localStorage.getItem('username') ? (
            <span>
              Welcome {localStorage.getItem('username')},
              <Link to="/login" onClick={() => deleteLocalStorage()} className='nav-list_menu'>Logout</Link>
            </span>
            ) : (
              <Link to="/login">Login</Link>
            )}
        </nav>

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/collections' element={
            <div className='allCollections'>
              <Search searchValue={searchValue} onSearch={handleSearch}/> 
              <ProductList products={filterProduct} addCart={handleAddCarts}/>
            </div>}/>
          <Route path='/cart' element={
            <CartList carts={carts} deleteCart={handleDeleteCart}/>}/>
          <Route path ="/collections/:code" element={
            <Details addCart={handleAddCarts}/>}/>
          <Route path='/login' element={
            <Login checkLogin={checkLogin} errorLogin={errorLogin} />}/>
        </Routes>
    </div>
  );
}

export default App;
