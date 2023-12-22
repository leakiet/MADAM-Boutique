import React from 'react'
import { Link } from 'react-router-dom';
import About1 from '../Assets/About1.webp'
import About2 from '../Assets/About2.webp'
import About3 from '../Assets/About3.webp'

function AboutUs() {
    return (
        <div className='Blogs'>
            <div className="path">
                <Link to='/'>HOME /</Link>
                <span>ABOUT US</span>
            </div>
            <hr />
            <div className="Blog-content">
                <h2>Madam Boutique - Luxury Fashion Brand for Successful Women</h2>
                    <p>Madam Boutique is a luxury fashion brand for women founded in 2003. With over 20 years of experience in the fashion industry, Madam Boutique has become one of the most trusted and chosen brands by many successful women.<br /><br />

                        Madam Boutique offers customers high-quality fashion products, designed with sophistication, elegance and suitable for all body shapes. Madam Boutique products are made from high-quality materials, durable and safe for the health of users.<br /><br />

                        <img src={About1} about='About us'/>

                        Madam Boutique always updates the latest fashion trends in the world to bring customers fashionable and trendy products. In addition, Madam Boutique also has a professional consultant team, always ready to assist customers in choosing the most suitable products for their needs.<br /><br />

                        With a mission to bring beauty and confidence to women, Madam Boutique always strives to improve the quality of its products and services. Madam Boutique is proud to be a trusted companion of successful women on the road to success.</p>

                    <img src={About2} about='About us'/>

                <p>

                    <h4>Here are some of the reasons why Madam Boutique is trusted and chosen by many women:</h4><br />

                    <h4>High-quality products, sophisticated and elegant design:</h4> Madam Boutique products are made from high-quality materials, durable and safe for the health of users. Madam Boutique designs bring a luxurious, sophisticated look and are suitable for all body shapes.<br /><br />

                    <h4>Good service quality:</h4>
                    Madam Boutique has a professional consultant team, always ready to assist customers in choosing the most suitable products for their needs. Madam Boutique also has a clear and transparent product warranty and return policy.<br /><br />

                    <h4>Reasonable price:</h4>
                    Madam Boutique provides high-quality fashion products at a reasonable price, suitable for the budget of many people.<br /><br />
                    
                    <img src={About3} about='About us'/>

                    If you are looking for a luxury, reputable and quality fashion brand, Madam Boutique is a great choice for you.
                </p>
            </div>
        </div>
    )
}

export default AboutUs;
