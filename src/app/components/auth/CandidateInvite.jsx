"use client";
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import styles from '../../styles/CandidateInvite.module.css';
import config from '../../../../config/config';
import axios from 'axios';
import toast from 'react-hot-toast';


const CandidateInvite = () => {
  const [step, setStep] = useState(1);
  const totalSteps = 5; // Increased the total steps to 5

  const [formData, setFormData] = useState({
    email: '',
    invitationCode: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    address: '',
    highestEducation: '',
    resume: null,
    createPassword: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({
    email: false,
    invitationCode: false,
    firstName: false,
    lastName: false,
    phoneNumber: false,
    address: false,
    highestEducation: false,
    resume: false,
    createPassword: false,
    confirmPassword: false
  });

  const handleNext = () => {
    let valid = true;
    let newErrors = { ...errors };

    if (step === 1) {
      if (!formData.email) {
        newErrors.email = true;
        valid = false;
      }
      if (!formData.invitationCode) {
        newErrors.invitationCode = true;
        valid = false;
      }
    } else if (step === 2) {
      if (!formData.firstName) {
        newErrors.firstName = true;
        valid = false;
      }
      if (!formData.lastName) {
        newErrors.lastName = true;
        valid = false;
      }
    } else if (step === 3) {
      if (!formData.phoneNumber) {
        newErrors.phoneNumber = true;
        valid = false;
      }
      if (!formData.address) {
        newErrors.address = true;
        valid = false;
      }
    } else if (step === 4) {
      if (!formData.highestEducation) {
        newErrors.highestEducation = true;
        valid = false;
      }
      if (!formData.resume) {
        newErrors.resume = true;
        valid = false;
      }
    } else if (step === 5) {
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

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({
      ...formData,
      [name]: files[0]
    });
    setErrors({
      ...errors,
      [name]: false
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your form submission logic here  
    setLoading(true);
    axios
      .post(`${config.endpoint}/user/register`, {
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
      <form className={styles.candidatefield} onSubmit={handleSubmit}>
        {step === 1 && (
          <>
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
            <Tooltip title="Please enter the invitation code provided to you. If you don't have code, Contact Us" placement="right">
              <TextField
                label="Invitation Code"
                type="text"
                variant="outlined"
                margin="normal"
                fullWidth
                required
                name="invitationCode"
                value={formData.invitationCode}
                onChange={handleChange}
                error={errors.invitationCode}
                helperText={errors.invitationCode && "Invitation Code is required"}
              />
            </Tooltip>
          </>
        )}

        {step === 2 && (
          <>
            <TextField
              label="First Name"
              type="text"
              variant="outlined"
              margin="normal"
              fullWidth
              required
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              error={errors.firstName}
              helperText={errors.firstName && "First Name is required"}
            />
            <TextField
              label="Last Name"
              type="text"
              variant="outlined"
              margin="normal"
              fullWidth
              required
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              error={errors.lastName}
              helperText={errors.lastName && "Last Name is required"}
            />
          </>
        )}

        {step === 3 && (
          <>
            <TextField
              label="Phone Number"
              type="tel"
              variant="outlined"
              margin="normal"
              fullWidth
              required
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              error={errors.phoneNumber}
              helperText={errors.phoneNumber && "Phone Number is required"}
            />
            <TextField
              label="Address"
              type="text"
              variant="outlined"
              margin="normal"
              fullWidth
              required
              name="address"
              value={formData.address}
              onChange={handleChange}
              error={errors.address}
              helperText={errors.address && "Address is required"}
            />
          </>
        )}

        {step === 4 && (
          <>
            <TextField
              select
              label="Highest Education"
              variant="outlined"
              margin="normal"
              fullWidth
              required
              name="highestEducation"
              value={formData.highestEducation}
              onChange={handleChange}
              error={errors.highestEducation}
              helperText={errors.highestEducation && "Highest Education is required"}
            >
              <MenuItem value="High School">High School</MenuItem>
              <MenuItem value="Associate Degree">Associate Degree</MenuItem>
              <MenuItem value="Bachelor's Degree">Bachelor's Degree</MenuItem>
              <MenuItem value="Master's Degree">Master's Degree</MenuItem>
              <MenuItem value="Doctorate">Doctorate</MenuItem>
            </TextField>
            <TextField
              type="file"
              variant="outlined"
              margin="normal"
              fullWidth
              required
              name="resume"
              onChange={handleFileChange}
              error={errors.resume}
              helperText={errors.resume && "Resume is required"}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </>
        )}

        {step === 5 && (
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

export default CandidateInvite;
