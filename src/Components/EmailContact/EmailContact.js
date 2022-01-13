import React, { useRef } from 'react'
import emailjs from 'emailjs-com';

import './EmailContact.css'

import logoEmail from '../../Assets/email.svg'
import logoPhone from '../../Assets/phone.svg'
import logoLocation from '../../Assets/location.svg'

function EmailContact() {

    const form = useRef();
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_hv47muv', 'template_44l7fcq', form.current, 'user_dcOgKIhPLdAuIl75nepvH')
        .then((result) => {
            console.log(result.text);
            alert('Tu email ha sido enviado')
        }, (error) => {
            console.log(error.text);
        });

        e.target.reset()
    };

    return (
        <>
            <div className="contact-content--container">
                <div className="contact-info--container">
                    <div className="contact-info--item contact-info--email">
                        <img className="contact-info--icon" src={logoEmail} alt="" />
                        <p className='contact-info--text'>sanprabet@gmail.com</p>
                    </div>
                    <div className="contact-info--item contact-info--phone">
                        <img className="contact-info--icon" src={logoPhone} alt="" />
                        <p className='contact-info--text'>+57 3102956916</p>
                    </div>
                    <div className="contact-info--item contact-info--location">
                        <img className="contact-info--icon" src={logoLocation} alt="" />
                        <p className='contact-info--text'>Bogota, Colombia</p>
                    </div>
                </div>
                <div className="contact-emailme--contaner">
                    <form ref={form} onSubmit={sendEmail}>
                        <label>Name</label>
                        <br />
                        <input className='emailme-input--username' type="text" name="user_name" />
                        <br />
                        <label>Email</label>
                        <br />
                        <input type="email" name="user_email" />
                        <br />
                        <label>Message</label>
                        <br />
                        {/* <input className='emailme-input--message' type="text" name="message" /> */}
                        <textarea className='emailme-input--message' name="message" />
                        <br />
                        <input className='emailme-input--submit' type="submit" value="Send" />
                    </form>
                </div>
            </div>
        </>
    )
}

export default EmailContact
