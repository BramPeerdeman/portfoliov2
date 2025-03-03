import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import "./contact.css";

const Contact = () => {
  const form = useRef();
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_mcgpu2o", 
      "template_rfqbi1n", 
      form.current, 
      "djipRmg8LASNU3C5W"
    )
    .then((result) => {
        console.log(result.text);
        setMessage("Message sent successfully!");
        form.current.reset();  // Clear form after submission
    }, (error) => {
        console.log(error.text);
        setMessage("Failed to send message. Try again!");
    });
  };

  return (
    <section className="contact container section" id='contact'>
      <h2 className="section__title">Contact Me</h2>
      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">Let's get in touch!</h3>
          <p className="contact__details">Don't like forms? Send me an email:</p>
          <p className="contact_details">  
            <button onClick={() => window.open('mailto:brampeer15@gmail.com', '_blank')}>Click Here</button>
          </p>
        </div>

        <form ref={form} onSubmit={sendEmail} className="contact__form">
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input type="text" name="user_name" className="contact__form-input" placeholder='Insert your name' required />
            </div>

            <div className="contact__form-div">
              <input type="email" name="user_email" className="contact__form-input" placeholder='Insert your email' required />
            </div>
          </div>
          
          <div className="contact__form-div">
            <input type="text" name="user_subject" className="contact__form-input" placeholder='Insert your subject' required />
          </div>

          <div className="contact__form-div contact__form-area">
            <textarea name="message" cols="30" rows="10" className='contact__form-input' placeholder='Write your message' required></textarea>
          </div>

          <button type="submit" className='btn'>Send Message</button>
          {message && <p className="form-message">{message}</p>}
        </form>
      </div>
    </section>
  );
}

export default Contact;