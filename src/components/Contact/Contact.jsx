import { useState } from 'react';
import styles from './Contact.module.css';

function Contact() {
  return (
    <div id='contact' className={styles.container}>
      Contact
    </div>
  );
}
export default Contact;

//Function that help us send an email---------------
export function sendEmail(email, message) {
  const recipient = email;
  const subject = `Connect With me - My Portfolio`;
  const body = message;

  const messageUrl = `https://mail.google.com/mail/u/0/?view=cm&fs=1&to=${recipient}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.open(messageUrl, "_blank");
}
