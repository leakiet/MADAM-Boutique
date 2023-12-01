import { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

import ProductList from './components/Product/ProductList';
import Home from './components/Home/home';
import Details from './components/Details';
import Search from './components/Product/Search';
import CartList from './components/CartList';
import Login from './components/Login';
import Pagination from './components/Pagination/Pagination';
import NavBar from './components/NavBar/NavBar';
import Newsletter from './components/Newsletter/Newsletter';
import Footer from './components/Footer/Footer';

function App() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);
  
  const [users, setUsers] = useState([]);
  const [errorLogin, setErrorLogin] = useState('');
  const [carts, setCarts] = useState([]);
  const [dataAccessory , setDataAccessory] = useState([]);
  const [dataClothing , setDataClothing] = useState([]);

  const [currentPage , setCurrentPage] = useState(1);
  const [productPerPage, setProductPerPage] = useState(8);

  const [searchValue, setSearchValue] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');


  useEffect(() => {
    const fetchData = async () => {
      try{
        const productJson = await fetch('./json_file/product.json');
        const productData = await productJson.json();
        setProducts(productData);
        setFilterProducts(productData);
        //Home display Accessory and Clothing
        const data1 = productData;
        const data2 = productData;
        setDataAccessory(data1.filter(p => p.category == "Accessory").slice(1,9));
        setDataClothing(data2.filter(p => p.category == "Clothing").slice(8,16));
        //User json
        const userJson = await fetch('./json_file/user.json');
        const usertData = await userJson.json();
        setUsers(usertData);
      }catch (error){
        console.log('error reading json');
      }
    };
    fetchData();
  }, []);

  //Get Current Products
  const indexOfLastProduct = (currentPage * productPerPage);
  const indexOfFirstProduct = (indexOfLastProduct - productPerPage);
  const currentProducts = filterProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  //Change Page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  //Search by Tag and by Price
  
  const handleMinPriceChange = (event) => {
    setMinPrice(event.target.value);
  };

  const handleMaxPriceChange = (event) => {
    setMaxPrice(event.target.value);
  };
  const handleSearch = (event) => {
    setSearchValue(event.target.value);
  };

  useEffect(() => {
    setCurrentPage(1);
    const searchedProducts = products.filter(d => {
      const tagMatch = d.tags.toLowerCase().includes(searchValue.toLowerCase());
      const priceMatch = 
        (minPrice === '' || d.price >= parseFloat(minPrice)) &&
        (maxPrice === '' || d.price <= parseFloat(maxPrice));
      return tagMatch && priceMatch;
    })
    setFilterProducts(searchedProducts);
  }, [searchValue, minPrice, maxPrice]);

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

  return (
    <div>
        <NavBar/>
        <Routes>
          <Route path='/' element={
            <Home dataAccessory={dataAccessory} dataClothing={dataClothing}/>}/>
          <Route path='/collections' element={
            <div>
              <Search searchValue={searchValue} onSearch={handleSearch} minPrice={minPrice} maxPrice={maxPrice} onMinPrice={handleMinPriceChange} onMaxPrice={handleMaxPriceChange}/>
              <ProductList products={currentProducts} addCart={handleAddCarts}/>
              <Pagination productPerPage={productPerPage} totalProducts={filterProducts.length} paginate={paginate} />
            </div>}/>
          <Route path='/cart' element={
            <CartList carts={carts} deleteCart={handleDeleteCart}/>}/>
          <Route path ="/collections/:code" element={
            <Details addCart={handleAddCarts}/>}/>
          <Route path='/login' element={
            <Login checkLogin={checkLogin} errorLogin={errorLogin} />}/>
        </Routes>
        <Newsletter/>
        <Footer/>
    </div>
  );
}

export default App;
