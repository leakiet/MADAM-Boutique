import { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

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

import NewCollections from './components/NewCollections/NewCollections';
import Sale from './components/Sale/Sale';
import WinterMemories from './components/Collections/WinterMemories';
import ParisianLady from './components/Collections/ParisianLady';
import StarryNight from './components/Collections/StarryNight';
import AoDai from './components/Collections/AoDai';
import Profile from './components/UserBio/Profile';
import Comparation from './components/Comparation/Comparation';

function App() {

  const [products, setProducts] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);
  
  const [users, setUsers] = useState([]);
  const [errorLogin, setErrorLogin] = useState('');
  const [isLoggedin, setIsLoggedIn] = useState(false);
  const [logged , setLogged]= useState('');

  const [carts, setCarts] = useState(() => JSON.parse(localStorage.getItem('carts')) || []); // luu carts trong localstorage

  const [dataAccessory , setDataAccessory] = useState([]);
  const [dataClothing , setDataClothing] = useState([]);
  const [dataNew , setDataNew] = useState([]);
  const [dataSale , setDataSale] = useState([]);

  const [collection1 , setCollection1] = useState([]);
  const [collection2 , setCollection2] = useState([]);
  const [collection3 , setCollection3] = useState([]);
  const [collection4 , setCollection4] = useState([]);


  const [currentPage , setCurrentPage] = useState(1);
  const [productPerPage, setProductPerPage] = useState(8);

  const [searchValue, setSearchValue] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const navigate = useNavigate();


  useEffect(() => {
    const fetchData = async () => {
      try{
        const productJson = await fetch('../json_file/product.json');
        const productData = await productJson.json();

        // const data1 = productData;
        // const data2 = productData;
        // const data3 = productData;
        // const data4 = productData;

        setDataAccessory(productData.filter(p => p.category === "Accessory").slice(1,9));
        setDataClothing(productData.filter(p => p.category === "Clothing").slice(8,16));
        setDataNew(productData.filter(p => p.code === "new"));
        setDataSale(productData.filter(p => p.code === "sale"));

        setCollection1(productData.filter(p => p.brand === "Winnie"));
        setCollection2(productData.filter(p => p.brand === "Charming Chic"));
        setCollection3(productData.filter(p => p.brand === "Timeless"));
        setCollection4(productData.filter(p => p.brand === "NEM"));

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
  const currentProductsNew = dataNew.slice(indexOfFirstProduct, indexOfLastProduct);
  const currentProductsSale = dataSale.slice(indexOfFirstProduct, indexOfLastProduct);
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
    const savedUser = JSON.parse(localStorage.getItem('user-data')) || [];
    const findUser = ((users.find(u => u.username === checkUser.loginUsername 
                                  && u.password === checkUser.loginPassword)) ||
                      (savedUser && savedUser.find(u =>  u.username === checkUser.loginUsername && u.password === checkUser.loginPassword)))
    console.log(savedUser);
    if(findUser){
      //tim thay user
      console.log("login thanh cong");
      //dang ky localStorage
      localStorage.setItem('username', JSON.stringify(checkUser));
      console.log(localStorage)
      setLogged(true)
      setErrorLogin(false);
    } else{
      //khong tim thay user
      console.log("login khong thanh cong");    
      setErrorLogin(true);
      setLogged(false)
    }};

  const calculateTotalProduct = (carts) => {
    let totalProduct = 0;
    for (const product of carts) {
        totalProduct += product.quantity;
    }
    return totalProduct;
}

const checkLoginStatus = () => {
  const user = JSON.parse(localStorage.getItem('username'))
  if (user!=null){
      handlePaymentSuccess();
  } else {
      alert('Please Log in');
      navigate('/login');
      window.scrollTo(0, 0);
  }
}

const handlePaymentSuccess = () => {
  alert('payment successful')
  // localStorage.setItem('user-cart', JSON.stringify(carts))
  const savedUser = JSON.parse(localStorage.getItem('user-data')) || [];
  const currentUser = JSON.parse(localStorage.getItem('username'));
  const currentCart = JSON.parse(localStorage.getItem('carts')) || [];
  const currentUserInfo = savedUser.find(user => user.username === currentUser.loginUsername);
  // Ensure purchasedItems is initialized as an array
  currentUserInfo.purchasedItems = currentUserInfo.purchasedItems || [];
  // Update purchased items for the current user
  currentUserInfo.purchasedItems = [...currentUserInfo.purchasedItems, ...currentCart];
  localStorage.setItem('user-data', JSON.stringify(savedUser));
  localStorage.removeItem('carts')
  navigate(`/userpage`);
  window.location.reload()
};

const toggleLogin =() =>{
  setErrorLogin(false)
  setLogged(false)
};

  return (
    <div>
          <NavBar totalProducts={calculateTotalProduct(carts)} carts={carts}/>
          <Routes>
              <Route path='/' element={
                  <Home dataAccessory={dataAccessory} dataClothing={dataClothing} addCart={handleAddCarts}/>}/>
             
             <Route path='/AllCollections' element={
                <div>
                  <Search searchValue={searchValue} onSearch={handleSearch} minPrice={minPrice} maxPrice={maxPrice} onMinPrice={handleMinPriceChange} onMaxPrice={handleMaxPriceChange}/>
                  <ProductList products={currentProducts} addCart={handleAddCarts}/>
                  <Pagination productPerPage={productPerPage} totalProducts={filterProducts.length} paginate={paginate} />
                </div>
              }/>
                
              <Route path='/newCollections' element={
                <div>
                  <NewCollections dataNew={currentProductsNew} addCart={handleAddCarts}/>
                  <Pagination productPerPage={productPerPage} totalProducts={dataNew.length} paginate={paginate} />
                </div>
                }/>

              <Route path='/sale' element={
                <div>
                  <Sale dataSale={currentProductsSale} addCart={handleAddCarts}/>
                  <Pagination productPerPage={productPerPage} totalProducts={dataSale.length} paginate={paginate} />
                </div>
              }/>

              <Route path='/WinterMemories'element={
                <div>
                  <WinterMemories collection1={collection1} addCart={handleAddCarts}/>
                </div>
              }/>
              <Route path='/ParisianLady' element={
                <div>
                  <ParisianLady collection2={collection2} addCart={handleAddCarts}/>
                </div>
              }/>
              <Route path='/StarryNight'element={
                <div>
                  <StarryNight collection3={collection3} addCart={handleAddCarts}/>
                </div>
              }/>
              <Route path='/AoDai'element={
                <div>
                  <AoDai collection4={collection4} addCart={handleAddCarts}/>
                </div>
              }/>
                  
              <Route path ="/collections/:id" element={
                  <Details addCart={handleAddCarts}/>}/>

              <Route path='/cart' element={
                  <CartList carts={carts} deleteCart={handleDeleteCart} onQuantityChange={handleQuantityChange} checkLoginStatus={checkLoginStatus}/>}/>
              <Route path='/login' element={
                  <Login checkLogin={checkLogin} errorLogin={errorLogin} isLoggedin={isLoggedin} logged={logged} toggleLogin={toggleLogin}/>}/>
              <Route path='/Signup' element={
                  <Signup />}/>
              <Route path='/userpage' element={
                  <Profile />}/>
          </Routes>
          <Newsletter/> 
          <Footer/>
    </div>
  )
}

export default App;
