import React from 'react'
import './contact.css'

const contact = () => {
  return (
    <>
      <div className="main-contact">
        <div className="left-content-contact">
          <h1>Contact</h1><br />
          <i>please fil out the form below to send us an email</i><br />
          <br /><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat harum voluptas, iure dolore eveniet distinctio animi explicabo fugit laudantium laborum illo velit rem debitis, aspernatur minus voluptatum, accusantium excepturi maxime?</p><br /><br />
          <br /><br /><b>E-mail:</b>
          <p>hello@reallygreatsite.com</p>
        </div>
        <div className="right-textbox-container">
          <input type='text' placeholder='NAME' className='nm' />
          <input type='email' placeholder='EMAIL' className='emal' />
          <input type='text' placeholder='SUBJECT' className='sub' />
          <textarea placeholder='MESSAGE' className='txtarea'/>
          <div className="btnsub">
            <button type='submit'>SUBMIT</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default contact
