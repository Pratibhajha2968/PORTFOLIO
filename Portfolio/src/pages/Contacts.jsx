import React from 'react'

import "../Styles/Contacts.css";

export default function Contact() {
  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <p>Let’s connect! You can reach me using the form below.</p>

      <form className="contact-form">
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email Address" required />
        <input type="url" placeholder="GitHub Profile Link" />
        <input type="url" placeholder="LinkedIn Profile Link" />

        <textarea placeholder="Your Message" rows="5"></textarea>

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}
