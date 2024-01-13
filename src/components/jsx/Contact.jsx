import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../css/contact.css';

 const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9fwzcnj', 'template_li8ti1b', form.current, '8FbMBdRTc6rU6tdbJ')
      .then((result) => {
          console.log(result);
          window.location.reload();
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
}

export default ContactUs;
