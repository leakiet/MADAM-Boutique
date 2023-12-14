import React, { useEffect, useState } from 'react'
import './Newsletter.css'

const Newsletter = () => {
  const [getEmail, setGetEmail] = useState('');
  const [subscribedEmails, setSubscribedEmails] = useState([]);

  useEffect(() => {
    // Load previously subscribed emails from local storage on component mount
    const storedEmails = JSON.parse(localStorage.getItem('subscribedEmails')) || [];
    setSubscribedEmails(storedEmails);
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    const updatedEmails = [...subscribedEmails, getEmail];
    localStorage.setItem('subscribedEmails', JSON.stringify(updatedEmails));
    setSubscribedEmails(updatedEmails);
    alert('Thank you');
    setGetEmail('');
    console.log(localStorage)
  };


  return (
    <div className='newsletter'>
        <h1>Get Exclusive Offers On Your Mail</h1>
        <p>Subcribe to our newletter and stay updated</p>
        <form onSubmit={handleSubscribe}>
            <input onChange={(e)=> setGetEmail(e.target.value)} type='email' placeholder='Your Email ID'/>
            <button type='submit'>Subscribe</button>
        </form> 
    </div>
  )
}

export default Newsletter;
