import React from 'react'
import './Newsletter.css'

const Newsletter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive Offers On Your Mail</h1>
        <p>Subcribe to our newletter and stay updated</p>
        <div>
            <input type='email' placeholder='Your Email ID'/>
            <button>Subscribe</button>
        </div> 
    </div>
  )
}

export default Newsletter;
