import React from 'react';
import './Footer.css';
import logo_icon from '../Assets/logo_icon.png'
import facebook from '../Assets/facebook.svg'
import instagram from '../Assets/instagram.svg'
import whatapps from '../Assets/whatsapp.svg'
import twitter from '../Assets/twitter.svg'

function Footer() {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={logo_icon} alt="" width="150px"/>
            <p>MADAM BOUTIQUE</p>
        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Location</li>
            <li>Blog</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
            <img src={facebook} alt="facebook" width="70px"/>  
            <img src={instagram} alt="instagram" width="70px"/>  
            <img src={whatapps} alt="whatapps" width="70px"/>
            <img src={twitter} alt="twitter" width="70px"/> 
        </div>
        <div className="footer-copyright">
            <hr/>
            <p>Copyright @ 2023 - All Right Reserve</p>
        </div>
    </div>
  )
}

export default Footer;
