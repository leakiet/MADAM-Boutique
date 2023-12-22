import React, { useEffect, useState } from 'react'
import './Newsletter.css'

const Newsletter = () => {
  const [getEmail, setGetEmail] = useState('');
  const [subscribedEmails, setSubscribedEmails] = useState([]);
  const [isSub , setIsSub] = useState(false)

  useEffect(() => {
    const storedEmails = JSON.parse(localStorage.getItem('subscribedEmails')) || [];
    setSubscribedEmails(storedEmails);
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    const updatedEmails = [...subscribedEmails, getEmail];
    localStorage.setItem('subscribedEmails', JSON.stringify(updatedEmails));
    setSubscribedEmails(updatedEmails);
    setIsSub(true);
  };


  return (
    <div className='newsletter'>
        <h1>Get Exclusive Offers On Your Mail</h1>
        <p>Subcribe to our newletter and stay updated</p>
        {isSub ? ( 
        <div className='subcribed'>Thank you for Subcribing to our newsletter. Have a nice day!</div>
        ): (
        <form onSubmit={handleSubscribe}>
          <input onChange={(e)=> setGetEmail(e.target.value)} type='email' placeholder='Your Email ID' required/>
          <button type='submit'>Subscribe</button>
        </form>
        )}

        
    </div>
  )
}

export default Newsletter;
