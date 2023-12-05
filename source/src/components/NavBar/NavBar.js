import React, { useState } from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom';
import logo_icon from '../Assets/logo_icon.png';
import cart_icon from '../Assets/cart_icon.png';


const NavBar = () => {
  const [menu, setMenu] = useState('');
  const deleteLocalStorage = () => {
    localStorage.clear();
  }
  const refreshPage = () => {window.location.href = '/';};
  const refreshPage1 = () => {window.location.href = '/collections';};
  const refreshPage2 = () => {window.location.href = '/newCollections';};
  const refreshPage3 = () => {window.location.href = '/onSale';};

  return (
    <div className='navBar'>
        <div className="nav-logo">
          <Link to="/"><img onClick={refreshPage} src={logo_icon} alt='logo' width='150px'/></Link>
          <p onClick={refreshPage}><Link to="/">MADAM BOUTIQUE</Link></p>
        </div>
        <ul className="nav-menu">
          <li onClick={refreshPage1}><Link to="/collections">All Collections</Link></li>
          <li onClick={refreshPage2}><Link to="/newCollections">New Collection</Link></li>
          <li onClick={refreshPage3}><Link to="/onSale">Christmas Sale</Link></li>
        </ul>
        <div className="nav-login-cart">
          {localStorage.getItem('username') ? (
            <div>
              {/* {localStorage.getItem('username')}, --user name */}
              <Link to="/login" onClick={() => deleteLocalStorage()}><button onClick={()=>{setMenu("")}}>Logout</button></Link>
            </div>
            ) : (
            <Link to="/login"><button onClick={()=>{setMenu("")}}>Login</button></Link>
            )}
          <Link to="/cart"><img onClick={()=>{setMenu("")}} src={cart_icon} alt='cart' width='40px'/></Link>
          <div className="nav-cart-count">0</div>
        </div>
    </div>
  );
}

export default NavBar;

