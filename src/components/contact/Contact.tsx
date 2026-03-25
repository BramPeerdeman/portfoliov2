import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [message, setMessage] = useState('');
  const [sending, setSending] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;
    setSending(true);

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_CODE || '',
        process.env.REACT_APP_TEMPLATE_CODE || '',
        form.current,
        process.env.REACT_APP_PUB_KEY || ''
      )
      .then(
        () => {
          setMessage('Message sent successfully!');
          form.current?.reset();
          setSending(false);
        },
        () => {
          setMessage('Failed to send message. Try again!');
          setSending(false);
        }
      );
  };

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <span className="section__subtitle">Get in touch</span>
        <h2 className="section__title">Contact Me</h2>

        <div className="contact__grid">
          <div className="contact__info">
            <h3 className="contact__info-title">Let&apos;s work together</h3>
            <p className="contact__info-text">
              Have a project in mind or just want to say hi? Feel free to reach out
              through the form or send me an email directly.
            </p>
            <a
              href="mailto:brampeer15@gmail.com"
              className="contact__email-link"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              brampeer15@gmail.com
            </a>
          </div>

          <form ref={form} onSubmit={sendEmail} className="contact__form">
            <div className="contact__form-group">
              <div className="contact__form-field">
                <label htmlFor="user_name" className="sr-only">Your name</label>
                <input
                  type="text"
                  id="user_name"
                  name="user_name"
                  className="contact__input"
                  placeholder="Your Name"
                  required
                  autoComplete="name"
                />
              </div>
              <div className="contact__form-field">
                <label htmlFor="user_email" className="sr-only">Your email</label>
                <input
                  type="email"
                  id="user_email"
                  name="user_email"
                  className="contact__input"
                  placeholder="Your Email"
                  required
                  autoComplete="email"
                />
              </div>
            </div>
            <div className="contact__form-field">
              <label htmlFor="message" className="sr-only">Your message</label>
              <textarea
                id="message"
                name="message"
                className="contact__input contact__textarea"
                placeholder="Your Message"
                rows={6}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn--primary" disabled={sending}>
              {sending ? 'Sending...' : 'Send Message'}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="22" x2="11" y1="2" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
            </button>
            {message && (
              <p className={`contact__status ${message.includes('success') ? 'contact__status--success' : 'contact__status--error'}`}>
                {message}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
