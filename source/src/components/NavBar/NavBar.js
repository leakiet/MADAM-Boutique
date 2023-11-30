import React, { useState } from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom';
import logo_icon from '../Assets/logo_icon.png';
import cart_icon from '../Assets/cart_icon.png';


const NavBar = () => {
    const deleteLocalStorage = () => {
        localStorage.clear();
      }
    const [menu, setMenu] = useState('');

  return (
    <div className='navBar'>
        <div className="nav-logo">
          <Link to="/"><img onClick={()=>{setMenu("")}} src={logo_icon} alt='logo' width='150px'/></Link>
          <p onClick={()=>{setMenu("")}}><Link to="/">MADAM BOUTIQUE</Link></p>
        </div>
        <ul className="nav-menu">
          <li onClick={()=>{setMenu("all")}}><Link to="/collections">All Collections{menu==="all"?<hr/>:<></>}</Link></li>
          <li onClick={()=>{setMenu("new")}}><Link to="/collections/newCollections">New Collection{menu==="new"?<hr/>:<></>}</Link></li>
          <li onClick={()=>{setMenu("sale")}}><Link to="/collections/onSale">Chrismas Sale{menu==="sale"?<hr/>:<></>}</Link></li>
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

