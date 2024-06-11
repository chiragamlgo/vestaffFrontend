import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import styles from '../../styles/CompanyInvite.module.css';

const CompanyLogin = () => {
  const [formData, setFormData] = useState({
    businessEmail: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    businessEmail: false,
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
    // Add your form submission logic here
    console.log('Form submitted', formData);
  };

  return (
    <Box className={styles.container}>
      <form className={styles.companyInviteForm} onSubmit={handleSubmit}>
        <TextField
          label="Business Email"
          type="email"
          variant="outlined"
          margin="normal"
          fullWidth
          required
          name="businessEmail"
          value={formData.businessEmail}
          onChange={handleChange}
          error={errors.businessEmail}
          helperText={errors.businessEmail && 'Business Email is required'}
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
          helperText={errors.password && 'Password is required'}
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

export default CompanyLogin;
