import React from 'react';
import './Footer.css';
import logo_icon from '../Assets/logo_icon.png'
import facebook from '../Assets/facebook.svg'
import instagram from '../Assets/instagram.svg'
import whatapps from '../Assets/whatsapp.svg'
import twitter from '../Assets/twitter.svg'
import { useNavigate } from 'react-router-dom';

function Footer() {
    const navigate = useNavigate();

  return (
    <div className='footer'>
        <div className="footer-logo" onClick={()=> {navigate('/') ; window.scrollTo({top: 0})}}>
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
            <a href="https://www.facebook.com/" target="_blank"><img src={facebook} alt="facebook" width="35px"/></a>  
            <a href="https://www.instagram.com/" target="_blank"><img src={instagram} alt="instagram" width="35px"/></a>  
            <a href="https://www.whatsapp.com/" target="_blank"><img src={whatapps} alt="whatapps" width="35px"/></a>
            <a href="https://twitter.com/" target="_blank"><img src={twitter} alt="twitter" width="35px"/></a>
        </div>
        <div className="footer-copyright">
            <hr/>
            <p>Copyright @ 2023 - All Right Reserve</p>
        </div>
    </div>
  )
}

export default Footer;
