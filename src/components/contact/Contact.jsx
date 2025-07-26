import React, { useState } from 'react';
import styles from './contact.module.css';
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaRegPaperPlane } from 'react-icons/fa';
import { MdMessage } from 'react-icons/md';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import emailjs from 'emailjs-com';

const MySwal = withReactContent(Swal);

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    location: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: name === 'email' ? value.toLowerCase() : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.location || !form.subject || !form.message) {
      MySwal.fire({
        icon: 'error',
        title: 'All fields are required!',
        background: 'linear-gradient(135deg, #001f1f, #003333)',
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000
      });
      return;
    }

    setIsSubmitting(true);

    const templateParams = {
      from_name: form.name,
      from_email: form.email,
      from_location: form.location,
      subject: form.subject,
      message: form.message,
      time: new Date().toLocaleString()
    };

    emailjs.send(
      'service_uzairarif21',
      'template_cjp1r7d',
      templateParams,
      'JiX_rVdNAdd8oZ33S'
    ).then(() => {
      MySwal.fire({
        icon: 'success',
        title: 'Message Sent!',
        text: 'We will get back to you soon.',
        background: 'linear-gradient(135deg, #001f1f, #003333)',
        color: '#ffffff',
        confirmButtonColor: '#00ffee',
        confirmButtonText: 'OK',
        customClass: {
          popup: 'neon-alert-popup',
          title: 'neon-alert-title',
          confirmButton: 'neon-alert-button'
        }
      });
      setForm({ name: '', email: '', location: '', subject: '', message: '' });
    }).catch((error) => {
      console.error('EmailJS Error:', error);
      MySwal.fire({
        icon: 'error',
        title: 'Failed to send message!',
        text: error.text || 'Please try again later.',
        background: 'linear-gradient(135deg, #001f1f, #003333)',
        color: '#ffffff',
        confirmButtonColor: '#ff4444'
      });
    }).finally(() => {
      setIsSubmitting(false);
    });
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.title} data-aos="fade-up">
        <h2>Contact</h2>
        <p>Let's connect and make something amazing together!</p>
      </div>

      <div className={styles.container}>
        <div className={styles.infoSection}>
          <div className={styles.infoItem}>
            <FaMapMarkerAlt />
            <div>
              <h3>Address</h3>
              <p>Cantt Bazar, Malir Cantt, Karachi</p>
            </div>
          </div>
          <div className={styles.infoItem}>
            <FaPhone className={styles.phone} />
            <div>
              <h3>Call Me</h3>
              <p>+92 317 1043099</p>
            </div>
          </div>
          <div className={styles.infoItem}>
            <FaEnvelope />
            <div>
              <h3>Gmail</h3>
              <p>uzairarif1718@gmail.com</p>
            </div>
          </div>
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.57943537926!2d67.19532952520191!3d24.912323277895496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb3377b1ba099db%3A0x4d98579114407109!2sCheck%20Post%202%20Parking%2C%20Malir%20Cantonment%2C%20Karachi%2C%20Pakistan!5e0!3m2!1sen!2s!4v1753173785251!5m2!1sen!2s"
            style={{ border: 0, width: '100%', height: '250px' }}
            allowFullScreen
            loading="lazy"
          />
        </div>

        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <FaUser className={styles.icon} />
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <FaEnvelope className={styles.icon} />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <FaMapMarkerAlt className={styles.icon} />
            <input
              type="text"
              name="location"
              placeholder="Your Location"
              value={form.location}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <FaRegPaperPlane className={styles.icon} />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={form.subject}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <MdMessage className={styles.messageicon} />
            <textarea
              name="message"
              placeholder="Message"
              rows="6"
              value={form.message}
              onChange={handleChange}
              required
            />
          </div>
          <input
            type="submit"
            className={styles.sendBtn}
            value={isSubmitting ? 'Processing...' : 'Send Message'}
            disabled={isSubmitting}
          />
        </form>
      </div>
    </section>
  );
};

export default Contact;
