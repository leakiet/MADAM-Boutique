import React, { useState } from 'react'
import './Contactus.css'

function ContactUs() {
  const [sendFeedback, setSendFeedback] = useState(false)
  const saveFeedback = () => {
    setSendFeedback(true)
  }

    return (
      <div className='contact-container'>
        <form className='contact-info' onSubmit={saveFeedback}>
          <h2>MADAM BOUTIQUE</h2>
          <hr/>
          <p>Address: 10 Dong Khoi St, Ben Nghe, Dist. 1, HCMC</p>
          <p>Hotline: 028.328.88888</p>
          <p>Email: madamboutique@gmail.com</p>
          <hr/>
          <p>Your Name:</p>
          <input type='text' className='contact-info-text' placeholder='Name' required/>
          <p>Your Email:</p>
          <input type='email' className='contact-info-text' placeholder='Email' required/>
          <p>Your Feedback:</p>
          <textarea type='text' className='contact-info-feedback' placeholder='...' required/>

          {sendFeedback ? (<p>We received your feedback was sent. Thank you !!</p>) : (
            <p><button>Submit</button></p>
            )}

        </form>

        <div className='contact-map'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4829856549327!2d106.70265427569493!3d10.774271759232146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f469f05231b%3A0x693fc9f5a22ef72a!2zMTAgxJAuIMSQ4buTbmcgS2jhu59pLCBC4bq_biBOZ2jDqSwgUXXhuq1uIDEsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1702625043514!5m2!1svi!2s" width="80%" height="80%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    );
  };


export default ContactUs;
