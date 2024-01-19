import { useState } from 'react';
import styles from './Contact.module.css';

function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div id='contact' className={styles.container}>
      <h1>Connect with me</h1>
      <div className={styles.formContainer}>
        <input type='email' id='email' name='email' placeholder='Email' autoComplete='email' onChange={(e)=>setEmail(e.target.value)}/>
        <textarea id='message' name='message' placeholder='Message' rows="2" onChange={(e)=>setMessage(e.target.value)}/>
        <button className={styles.send} onClick={()=>sendEmail(email, message)}>Send</button>
      </div>
    </div>
  );
}
export default Contact;

//Function that help us send an email---------------
export function sendEmail(email, message) {
  const recipient = "lzyahyapk@gmail.com";
  const subject = `Connect With me - My Portfolio - from: ${email}`;
  const body = message;

  const messageUrl = `https://mail.google.com/mail/u/0/?view=cm&fs=1&to=${recipient}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.open(messageUrl, "_blank");
}
