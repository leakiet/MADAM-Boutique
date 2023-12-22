import React, { useState } from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom';
import logo_icon from '../Assets/logo_icon.png';
import arrow_down from '../Assets/down-arrow.svg'
import cart_icon from '../Assets/cart_icon.png';
import search_icon from '../Assets/search_icon.webp';
import account_icon from '../Assets/account_icon.webp';
import menu_icon from '../Assets/menu-svgrepo-com.svg'


const NavBar = ({ totalProducts, searchValue, onSearch, setSearchValue }) => {
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
          <Link to="/" onClick={()=>{setMenu("")}}><img src={logo_icon} alt='logo'/></Link>
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
                  <li onClick={()=>{setMenu("collections")}}><Link to='/AoDai'>AO DAI</Link></li>
                </ul>
          )}
          </div>
          

          <li><Link to="/newCollections" onClick={()=>{setMenu("new")}}>New Collection</Link>{menu==="new"?<hr/>:<></>}</li>
          
          <li><Link to="/sale" onClick={()=>{setMenu("sale")}}>Christmas Sale</Link>{menu==="sale"?<hr/>:<></>}</li>
        </ul>

        <ul className="nav-login-cart">
          {/* <div>
              <img src={menu_icon} alt='Menu Icon' className='menu-icon'/>
          </div> */}
          <div 
              onMouseEnter={() => setShowSearch(true)}
              onMouseLeave={() => setShowSearch(false)}
            >
            <img onClick={()=>{setMenu("")}} src={search_icon} alt='search'/>
            {showSearch && (
          <ul className='search-links' >
            <li>
              <input type='text' placeholder='Products name' value={searchValue} onChange={(e)=>setSearchValue(e.target.value)} required/>
            </li>
            <li>
              <Link to='/searchpage'>
                  <img onClick={()=>{setMenu(""); onSearch(searchValue)}} src={search_icon} alt='search' width='35px'/>
              </Link>
            </li>
          </ul>
          )}
          </div>

          <div 
            onMouseEnter={() => setShowLogin(true)}
            onMouseLeave={() => setShowLogin(false)}
          >
          <img onClick={()=>{setMenu("")}} src={account_icon} alt='account'/>
          {showLogin && (
          <div className='account-links'>
            {localStorage.getItem('username') ? (
                <>
                  <Link to="/userpage">My Profile</Link>
                  <Link to="/login" onClick={() => {removeUser(); setMenu("")}}>Sign out</Link>
                  {/* <button onClick={clearLocalStorage}>Clear localStorage</button> */}
                </>
              ) : (
                <>
                  <Link to="/login" onClick={()=>{setMenu("")}}>Sign in</Link>
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
          <img onClick={()=>{setMenu("")}} src={cart_icon} alt='cart'/>
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

