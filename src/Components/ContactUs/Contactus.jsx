import React from 'react'
import "./Contact.css"

const Contactus = () => {
  return (
    <div className='contact'>
      <div className="contact-form">
        <div className="first-container">
          <div className="info-container">
            <h2>Lets Makeover Youeself</h2>
          </div>
        </div>
        <div className="second-container">
          <h2>Send us a message</h2>
          <form >
          <div className="form-group">
            <label htmlFor="">Your First name</label>
            <input type="text" name="fname" placeholder='Your name' />
          </div>
          <div className="form-group">
            <label htmlFor="">Email</label>
            <input type="email" name="email" placeholder='Your email' />
          </div>
          <div className="form-group">
            <label htmlFor="">phone number</label>
            <input type="text" name="pnum" placeholder='Your number' />
          </div>
          <div className="form-group">
            <label htmlFor="">message</label>
            <textarea name="message" placeholder='write a maege'></textarea>
          </div>
          <button >send message</button>

          </form>
          
        </div>
      </div>
     
    </div>
  )
}

export default Contactus