"use client";
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import styles from '../../styles/CompanyInvite.module.css';
import axios from 'axios';
import config from '../../../../config/config';
import toast from 'react-hot-toast';


const CompanyInvite = () => {
  const [step, setStep] = useState(1);
  const totalSteps = 4;

  const [formData, setFormData] = useState({
    businessEmail: '',
    companyName: '',
    gstNumber: '',
    linkedinUrl: '',
    mobileNumber: '',
    location: '',
    createPassword: '',
    confirmPassword: ''
  });

  const [loading, setLoading] = useState(false)

  const [errors, setErrors] = useState({
    businessEmail: false,
    companyName: false,
    gstNumber: false,
    linkedinUrl: false,
    mobileNumber: false,
    location: false,
    createPassword: false,
    confirmPassword: false
  });

  const handleNext = () => {
    let valid = true;
    let newErrors = { ...errors };

    if (step === 1) {
      if (!formData.businessEmail) {
        newErrors.businessEmail = true;
        valid = false;
      }
      if (!formData.companyName) {
        newErrors.companyName = true;
        valid = false;
      }
    } else if (step === 2) {
      if (!formData.gstNumber) {
        newErrors.gstNumber = true;
        valid = false;
      }
      if (!formData.linkedinUrl) {
        newErrors.linkedinUrl = true;
        valid = false;
      }
    } else if (step === 3) {
      if (!formData.mobileNumber) {
        newErrors.mobileNumber = true;
        valid = false;
      }
      if (!formData.location) {
        newErrors.location = true;
        valid = false;
      }
    } else if (step === 4) {
      if (!formData.createPassword) {
        newErrors.createPassword = true;
        valid = false;
      }
      if (formData.createPassword !== formData.confirmPassword) {
        newErrors.confirmPassword = true;
        valid = false;
      }
    }

    setErrors(newErrors);

    if (valid) {
      setStep((prevStep) => Math.min(prevStep + 1, totalSteps));
    }
  };

  const handleBack = () => {
    setStep((prevStep) => Math.max(prevStep - 1, 1));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    setErrors({
      ...errors,
      [name]: false
    });
  };



  // console.log("formData", formData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your form submission logic here  
    setLoading(true);
    axios
      .post(`${config.endpoint}/client/register`, {
        formData
      })
      .then((response) => {
        setData(response.data);
        setLoading(false);
        toast.success("User registered successfully");
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
        toast.error(error.response.data.error)
      });

  };




  const progress = (step / totalSteps) * 100;

  return (
    <Box className={styles.container}>
      <form className={styles.companyInviteForm} onSubmit={handleSubmit}>
        {step === 1 && (
          <>
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
              helperText={errors.businessEmail && "Business Email is required"}
            />
            <TextField
              label="Company Name"
              type="text"
              variant="outlined"
              margin="normal"
              fullWidth
              required
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              error={errors.companyName}
              helperText={errors.companyName && "Company Name is required"}
            />
          </>
        )}

        {step === 2 && (
          <>
            <TextField
              label="GST Number"
              type="text"
              variant="outlined"
              margin="normal"
              fullWidth
              required
              name="gstNumber"
              value={formData.gstNumber}
              onChange={handleChange}
              error={errors.gstNumber}
              helperText={errors.gstNumber && "GST Number is required"}
            />
            <TextField
              label="LinkedIn URL"
              type="url"
              variant="outlined"
              margin="normal"
              fullWidth
              required
              name="linkedinUrl"
              value={formData.linkedinUrl}
              onChange={handleChange}
              error={errors.linkedinUrl}
              helperText={errors.linkedinUrl && "LinkedIn URL is required"}
            />
          </>
        )}

        {step === 3 && (
          <>
            <TextField
              label="Mobile Number"
              type="tel"
              variant="outlined"
              margin="normal"
              fullWidth
              required
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              error={errors.mobileNumber}
              helperText={errors.mobileNumber && "Mobile Number is required"}
            />
            <TextField
              label="Location"
              type="text"
              variant="outlined"
              margin="normal"
              fullWidth
              required
              name="location"
              value={formData.location}
              onChange={handleChange}
              error={errors.location}
              helperText={errors.location && "Location is required"}
            />
          </>
        )}

        {step === 4 && (
          <>
            <TextField
              label="Create Password"
              type="password"
              variant="outlined"
              margin="normal"
              fullWidth
              required
              name="createPassword"
              value={formData.createPassword}
              onChange={handleChange}
              error={errors.createPassword}
              helperText={errors.createPassword && "Password is required"}
            />
            <TextField
              label="Confirm Password"
              type="password"
              variant="outlined"
              margin="normal"
              fullWidth
              required
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              error={errors.confirmPassword}
              helperText={errors.confirmPassword && "Passwords must match"}
            />
          </>
        )}

        <Box className={styles.buttonContainer}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleBack}
            className={styles.backButton}
            disabled={step === 1}
          >
            Back
          </Button>
          {step < totalSteps ? (
            <Button
              variant="contained"
              color="primary"
              onClick={handleNext}
              className={styles.continueButton}
            >
              Continue
            </Button>
          ) : (
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={styles.submitButton}
            >
              Submit
            </Button>
          )}
        </Box>
      </form>
      <LinearProgress variant="determinate" value={progress} className={styles.progress} />
    </Box>
  );
};

export default CompanyInvite;
