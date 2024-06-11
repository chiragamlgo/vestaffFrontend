
"use client"
import React, { useState } from 'react';
import styles from "../styles/pages/ContactUs.module.css";
import Image from 'next/image';
import { Button, TextField } from '@mui/material';
import Link from 'next/link';

const Page = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    // You can send formData to your backend or perform any other action
  };

  return (
    <div className={styles.contactUs}>
      <div className={styles.contactImage}>
        <Image src="/contact.png" width={400} height={400} alt='contact' />
      </div>
      <div className={styles.contactForm}>
        <h1>Submit your queries.</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
          <TextField
            className={styles.textField}
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            variant="outlined"
            required
          />
          <TextField
            className={styles.textField}
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            variant="outlined"
            type="email"
            required
          />
          <TextField
            className={styles.textField}
            label="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            variant="outlined"
            multiline
            rows={4}
            required
          />
          <Button className={styles.contactBtn} variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </form>

        <div className={styles.contactDetails}>
          <h3>Have General Questions? : <Link href="/">Check Our FAQs</Link></h3>
          <h3>Email : <Link href={`mailto:info@vestaff.com}`}>info@vestaff.com</Link></h3>
        </div>
      </div>
      
    </div>
  );
};

export default Page;
