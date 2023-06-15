import React, { useState } from "react";
import './contactForm.css'

const FORM_ENDPOINT = "https://public.herotofu.com/v1/e54a1ee0-0b85-11ee-a6b0-17653bd30bd3"; // TODO - fill on the later step

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
        <h2>Thank you!</h2>
        <div>I will be in touch soon.</div>
      </>
    );
  }

  return (
    <form className="inputForm"
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
    >
      <div className="inputDiv">
        <input className="input" type="text" placeholder="Your name" name="name" required />
      </div>
      <div>
        <input type="email" placeholder="Email" name="email" required />
      </div>
      <div>
        <textarea placeholder="Your message" name="message" required />
      </div>
      <div>
        <button className="contactBtn" type="submit"> Send a message </button>
      </div>
    </form>
  );
};

export default ContactForm;