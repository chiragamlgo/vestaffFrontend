"use client";
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import styles from '../../styles/CandidateInvite.module.css';

const CandidateLogin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: false,
    password: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: false,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;
    let newErrors = { ...errors };

    if (!formData.email) {
      newErrors.email = true;
      valid = false;
    }
    if (!formData.password) {
      newErrors.password = true;
      valid = false;
    }

    setErrors(newErrors);

    if (valid) {
      console.log('Form submitted', formData);
      // Add your form submission logic here
    }
  };

  return (
    <Box className={styles.container}>
      <form className={styles.candidatefield} onSubmit={handleSubmit}>
        <TextField
          label="Email ID"
          type="email"
          variant="outlined"
          margin="normal"
          fullWidth
          required
          name="email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          helperText={errors.email && "Email is required"}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          margin="normal"
          fullWidth
          required
          name="password"
          value={formData.password}
          onChange={handleChange}
          error={errors.password}
          helperText={errors.password && "Password is required"}
        />
        <Box className={styles.buttonContainer}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={styles.submitButton}
          >
            Submit
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default CandidateLogin;
