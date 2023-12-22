import React from 'react'
import { Link } from 'react-router-dom'

function Policy() {
    return (
        <div className='Blogs'>
            <div className="path">
                <Link to='/'>HOME /</Link>
                <span>POLICY</span>
            </div>
            <hr />
            <div className="Blog-content">
                <h2>
                    Madam Boutique: Policies for a Luxurious Experience
                </h2>
                <p>

                    At Madam Boutique, we strive to provide you with an exceptional experience, from browsing our exquisite garments to wearing them with confidence. To ensure a smooth and pleasant journey for all our valued customers, we have established the following policies:<br/><br/>

                    <h4>1. Purchases and Payments:</h4>

                    - We accept major credit cards, debit cards, and cash for in-store purchases.<br/>
                    - Online purchases can be made using secure payment gateways, offering various payment options.<br/>
                    - All prices are displayed in USD and include applicable taxes.
                    Gift certificates are available for purchase in-store and online, and they can be used for both in-store and online purchases.<br/><br/>

                    <h4>2. Shipping and Returns:</h4>

                    - We offer free standard shipping for all orders exceeding $200.<br/>
                    - Expedited shipping options are available at an additional cost.<br/>
                    - International shipping is available at a calculated rate based on destination and order weight.<br/>
                    - Items received within 30 days of purchase can be returned or exchanged for a full refund or store credit, provided they are unworn, unwashed, and have original tags attached.<br/>
                    - Sale items are final sale and cannot be returned or exchanged.<br/>
                    - To initiate a return or exchange, please contact our customer service team at 028.328.88888 or madamboutique@gmail.com.<br/><br/>
                    
                    <h4>3. Alterations and Repairs:</h4>

                    - We offer professional alteration services for a nominal fee.<br/>
                    - Minor repairs on purchased items can be done free of charge, depending on the issue.<br/>
                    - For major repairs, we will provide you with a cost estimate before proceeding.<br/><br/>

                    <h4>4. Privacy and Security:</h4>

                    - We are committed to protecting your privacy and security. We use industry-standard security measures to safeguard your personal information.<br/>
                    - You can review our Privacy Policy on our website for more information on how we collect, use, and protect your data.<br/><br/>
                    
                    <h4>5. Customer Service:</h4>

                    - We are dedicated to providing excellent customer service. If you have any questions or concerns, please do not hesitate to contact our friendly and knowledgeable team at 028.328.88888 or madamboutique@gmail.com.<br/><br/>
                    
                    <h4>6. Feedback and Suggestions:</h4>

                    We value your feedback and suggestions. Please let us know what you think of your Madam Boutique experience and how we can improve. You can send your feedback to madamboutique@gmail.com.<br/><br/>

                    Thank you for choosing Madam Boutique! We look forward to welcoming you into our world of luxury and elegance.
                </p>
            </div>
        </div>
    )
}

export default Policy
