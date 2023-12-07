import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';

import ProductList from './components/Product/ProductList';
import Home from './components/Home/home';
import Details from './components/ProductDetails/Details';
import Search from './components/Product/Search';
import CartList from './components/Cart/CartList';
import Login from './components/Login/Login';
import Pagination from './components/Pagination/Pagination';
import NavBar from './components/NavBar/NavBar';
import Newsletter from './components/Newsletter/Newsletter';
import Footer from './components/Footer/Footer';
import Signup from './components/Login/Signup';
import LocalStorageViewer from './components/Other/Localstorage';

function App() {

  const [products, setProducts] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);
  
  const [users, setUsers] = useState([]);
  const [errorLogin, setErrorLogin] = useState('');

  const [carts, setCarts] = useState(() => JSON.parse(localStorage.getItem('carts')) || []); // luu carts trong localstorage

  const [dataAccessory , setDataAccessory] = useState([]);
  const [dataClothing , setDataClothing] = useState([]);

  const [currentPage , setCurrentPage] = useState(1);
  const [productPerPage, setProductPerPage] = useState(8);

  const [searchValue, setSearchValue] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const [showPriceNotice, setShowPriceNotice] = useState(false);
  const navigate = useNavigate();


  useEffect(() => {
    const fetchData = async () => {
      try{
        const productJson = await fetch('../json_file/product.json');
        const productData = await productJson.json();
        const data1 = productData;
        const data2 = productData;
        setDataAccessory(data1.filter(p => p.category === "Accessory").slice(1,9));
        setDataClothing(data2.filter(p => p.category === "Clothing").slice(8,16));
        setProducts(productData);
        setFilterProducts(productData);

        const userJson = await fetch('../json_file/user.json');
        const usertData = await userJson.json();
        setUsers(usertData);
      }catch (error){
        console.log('error reading json');
      }
    };
    fetchData();
  }, []);
 
// hiển thi cart lưu trong local storage  
  useEffect(() => {
    localStorage.setItem('carts', JSON.stringify(carts));
  }, [carts]);
//update cart change
  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === 'carts') {
        setCarts(JSON.parse(event.newValue));
      }
    };
    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
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
    setMaxPrice(event.target.value)
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
      // alert('Succesully add to cart')
    }
  // Xóa sản phẩm khỏi giỏ hàng
  const handleDeleteCart = (id) => {
    const updatedCart = carts.map(item =>
      item.id === id
        ? { ...item, quantity: 0 }
        : item
    );
  const filterCart = updatedCart.filter(item => item.quantity > 0);
  setCarts(filterCart);
  }

  const handleQuantityChange = (action, id) => {
    const updatedCartList = carts.map((product) => {
      if (product.id === id) {
        let newQuantity;
        if (action === 'increment') {
          newQuantity = product.quantity + 1;
        } else if (action === 'decrement') {
          newQuantity = product.quantity - 1;
        }
        if (newQuantity > 5){
          alert('Out of Stock')
        }
        if (newQuantity > 0 && newQuantity <=5) {
          return { ...product, quantity: newQuantity };
        } else {
          return product; // Prevent quantity from going below 0 or above 5
        }
      } else {
        return product;
      }
    });
    setCarts(updatedCartList);
}; 

  const checkLogin = (checkUser) => {
    const savedUser = JSON.parse(localStorage.getItem('user-data'));
    const findUser = ((users.find(u => u.username === checkUser.loginUsername 
                                  && u.password === checkUser.loginPassword)) ||
                      (savedUser && savedUser.username === checkUser.loginUsername && savedUser.password === checkUser.loginPassword))
    if(findUser){
      //tim thay user
      console.log("login thanh cong");
      //dang ky localStorage
      alert('login thanh cong')
      localStorage.setItem('username', checkUser.loginUsername);
      setErrorLogin('');
      navigate(`/cart`);
    }else{
      //khong tim thay user
      console.log("login khong thanh cong");    
      setErrorLogin('Invalid username or password');
    }
  }
  const checkSignup = (signupData) => {
    // Use the saved account information
    localStorage.setItem('user-data', JSON.stringify(signupData));

    alert('User successfully signed up');
    console.log(localStorage)
    navigate(`/login`); // Redirect to login page or handle as needed
  };

  const calculateTotalProduct = (carts) => {
    let totalProduct = 0;
    for (const product of carts) {
        totalProduct += product.quantity;
    }
    return totalProduct;
}

  return (
    <div>
          <NavBar totalProducts={calculateTotalProduct(carts)}/>
          <Routes>
              <Route path='/' element={
                  <Home dataAccessory={dataAccessory} dataClothing={dataClothing} addCart={handleAddCarts}/>}/>
              <Route path='/AllCollections' element={
                <div>
                  <Search searchValue={searchValue} onSearch={handleSearch} minPrice={minPrice} maxPrice={maxPrice} onMinPrice={handleMinPriceChange} onMaxPrice={handleMaxPriceChange}/>
                  <ProductList products={currentProducts} addCart={handleAddCarts}/>
                  <Pagination productPerPage={productPerPage} totalProducts={filterProducts.length} paginate={paginate} />
                </div>}/>
              <Route path ="/collections/:id" element={
                  <Details addCart={handleAddCarts}/>}/>
              <Route path='/cart' element={
                  <CartList carts={carts} deleteCart={handleDeleteCart} onQuantityChange={handleQuantityChange}/>}/>
              <Route path='/login' element={
                  <Login checkLogin={checkLogin} errorLogin={errorLogin} />}/>
              <Route path='/Signup' element={
                  <Signup checkSignup={checkSignup}/>}/>
          </Routes>
          <Newsletter/>
          <Footer/>
    </div>
  )
}

export default App;
