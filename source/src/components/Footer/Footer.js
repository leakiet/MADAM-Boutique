import './Footer.css';
import logo_icon from '../Assets/logo_icon.png'
import facebook from '../Assets/facebook.svg'
import instagram from '../Assets/instagram.svg'
import whatapps from '../Assets/whatsapp.svg'
import twitter from '../Assets/twitter.svg'
import { Link, useNavigate } from 'react-router-dom';

function Footer() {
    const navigate = useNavigate();

  return (
    <div className='footer'>
        <div className="footer-logo" onClick={()=> {navigate('/') ; window.scrollTo({top: 0})}}>
            <img src={logo_icon} alt="logo"/>
            <p>MADAM BOUTIQUE</p>
        </div>
        <div className="footer-links">
            <li onClick={()=>window.scrollTo(0,0)}><Link to='/Aboutus'>About us</Link></li>
            <li onClick={()=>window.scrollTo(0,0)}><Link to='/AboutProduct'>Product</Link></li>
            <li onClick={()=>window.scrollTo(0,0)}><Link to='/Policy'>Policy</Link></li>
            <li onClick={()=>window.scrollTo(0,0)}><Link to='/blog'>Blog</Link></li>
            <li onClick={()=>window.scrollTo(0,0)}><Link to='/contactus'>Contact us</Link></li>
        </div>
        <div className="footer-social-icon">
            <a href="https://www.facebook.com/" target="_blank"><img src={facebook} alt="facebook"/></a>  
            <a href="https://www.instagram.com/" target="_blank"><img src={instagram} alt="instagram"/></a>  
            <a href="https://www.whatsapp.com/" target="_blank"><img src={whatapps} alt="whatapps"/></a>
            <a href="https://twitter.com/" target="_blank"><img src={twitter} alt="twitter"/></a>
        </div>
        <div className="footer-copyright">
            <hr/>
            <p>Copyright @ 2023 - All Right Reserve</p>
        </div>
    </div>
  )
}

export default Footer;
