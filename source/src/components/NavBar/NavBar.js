import React, { useState, useContext } from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom';
import logo_icon from '../Assets/logo_icon.png';
import cart_icon from '../Assets/cart_icon.png';


const NavBar = ({totalProducts}) => {
  const [menu, setMenu] = useState('');
  
  const deleteLocalStorage = () => {
    localStorage.clear('');
  }

  return (
    <div className='navBar'>
        <div className="nav-logo">
          <Link to="/"><img src={logo_icon} alt='logo' width='150px'/></Link>
          <p><Link to="/">MADAM BOUTIQUE</Link></p>
        </div>
        <ul className="nav-menu">
          <li><Link to="/AllCollections">All Collections</Link></li>
          <li><Link to="/newCollections">New Collection</Link></li>
          <li><Link to="/onSale">Christmas Sale</Link></li>
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
          <div className="nav-cart-count">{totalProducts}</div>
        </div>
    </div>
  );
}

export default NavBar;

