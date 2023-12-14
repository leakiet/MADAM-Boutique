import React, { useState, useContext } from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom';
import logo_icon from '../Assets/logo_icon.png';
import arrow_down from '../Assets/down-arrow.svg'
import cart_icon from '../Assets/cart_icon.png';
import search_icon from '../Assets/search_icon.webp';
import account_icon from '../Assets/account_icon.webp';


const NavBar = ({totalProducts, carts}) => {
  const [menu, setMenu] = useState('');
  const [showLogin, setShowLogin] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showCarts, setShowCarts] = useState(false);
  const [showCollections, setShowCollections] = useState(false);
  
  const removeUser = () => {
    // Remove only the username key
    localStorage.removeItem('username');
    console.log(localStorage)
  };

  const clearLocalStorage = () => {
    localStorage.clear();
    console.log(localStorage)
  }

  const handleShowCart =() =>{
    const notice = "Your cart is empty"
    const notice2 = "Please enter to see your cart"
    if (totalProducts==0){
      return notice;
    } else {
      return notice2;
    }
  }

  return (
    <div className='navBar'>
        <div className="nav-logo">
          <Link to="/" onClick={()=>{setMenu("")}}><img src={logo_icon} alt='logo' width='150px'/></Link>
          <p><Link to="/" onClick={()=>{setMenu("")}}>MADAM BOUTIQUE</Link></p>
        </div>

        <ul className="nav-menu">
          <li><Link to="/AllCollections" onClick={()=>{setMenu("all")}}>All Collections</Link>{menu==="all"?<hr/>:<></>}</li>

          <div 
              onMouseEnter={() => setShowCollections(true)}
              onMouseLeave={() => setShowCollections(false)}
            >
          <li><span>Collections <img src={arrow_down} alt='dropdow' width='13px'/></span>{menu==="collections"?<hr/>:<></>}</li>
          {showCollections && (       
                <ul className="collections-links">
                  <li onClick={()=>{setMenu("collections")}}><Link to='/WinterMemories'>WINTER MEMORIES</Link></li>
                  <li onClick={()=>{setMenu("collections")}}><Link to='/ParisianLady'>PARISIAN LADY</Link></li>
                  <li onClick={()=>{setMenu("collections")}}><Link to='/StarryNight'>STARRY NIGHT</Link></li>
                  <li onClick={()=>{setMenu("collections")}}><Link to='/AoDai'>ÁO DÀI</Link></li>
                </ul>
          )}
          </div>
          

          <li><Link to="/newCollections" onClick={()=>{setMenu("new")}}>New Collection</Link>{menu==="new"?<hr/>:<></>}</li>
          
          <li><Link to="/sale" onClick={()=>{setMenu("sale")}}>Christmas Sale</Link>{menu==="sale"?<hr/>:<></>}</li>
        </ul>

        <ul className="nav-login-cart">
          <Link to='/compare'>Wish List</Link>
          <div 
              onMouseEnter={() => setShowSearch(true)}
              onMouseLeave={() => setShowSearch(false)}
            >
            <img onClick={()=>{setMenu("")}} src={search_icon} alt='search' width='35px'/>
            {showSearch && (
          <ul className='search-links'>
            <li><input type='text' placeholder='Products name '/></li>
            <li><img onClick={()=>{setMenu("")}} src={search_icon} alt='search' width='35px'/></li>
          </ul>
          )}
          </div>

          <div 
            onMouseEnter={() => setShowLogin(true)}
            onMouseLeave={() => setShowLogin(false)}
          >
          <img onClick={()=>{setMenu("")}} src={account_icon} alt='account' width='35px'/>
          {showLogin && (
          <div className='account-links'>
            {localStorage.getItem('username') ? (
                <>
                  <Link to="/userpage">My Profile</Link>
                  <Link to="/login" onClick={() => {removeUser(); setMenu("")}}>Logout</Link>
                  <button onClick={clearLocalStorage}>Clear localStorage</button>
                </>
              ) : (
                <>
                  <Link to="/login" onClick={()=>{setMenu("")}}>Login</Link>
                  <Link to='/Signup'>Register</Link>
                </>
              )}
          </div>
          )}
          </div>
          
          <div 
            onMouseEnter={() => setShowCarts(true)}
            onMouseLeave={() => setShowCarts(false)}
          >
          {totalProducts ? (
          <Link to="/cart"><img onClick={()=>{setMenu("")}} src={cart_icon} alt='cart' width='35px'/></Link>
          ) : (
          <img onClick={()=>{setMenu("")}} src={cart_icon} alt='cart' width='35px'/>
          )}
          {showCarts && (
          <div className='carts-links'>
            {handleShowCart()}
          </div>
          )}

          </div>
          <div className="nav-cart-count">{totalProducts}</div>
        </ul>
    </div>
  );
}

export default NavBar;

