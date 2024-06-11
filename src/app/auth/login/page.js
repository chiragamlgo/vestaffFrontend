"use client";
import React, { useState } from 'react';
import styles from '../../styles/pages/Invitation.module.css';
import Image from 'next/image';
import Button from '@mui/material/Button';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import Link from 'next/link';
import CandidateLogin from '@/app/components/auth/CandidateLogin';
import CompanyLogin from '@/app/components/auth/CompanyLogin';

const Page = () => {
  const [activeState, setActiveState] = useState('candidate');

  return (
    <div className={styles.invitationContainer}>
      <div className={styles.image}>
        <Image src="/login.png" width={800} height={800} alt="login" />
      </div>

      <div className={styles.forms}>
        <h2>Login Now</h2>
        <div className={styles.state}>
          <Button
            variant="outlined"
            className={activeState === 'candidate' ? styles.activeButton : ''}
            startIcon={
              activeState === 'candidate' ? (
                <CheckCircleIcon />
              ) : (
                <CircleOutlinedIcon />
              )
            }
            onClick={() => setActiveState('candidate')}
          >
            Candidate
          </Button>
          <Button
            variant="outlined"
            className={activeState === 'company' ? styles.activeButton : ''}
            startIcon={
              activeState === 'company' ? (
                <CheckCircleIcon />
              ) : (
                <CircleOutlinedIcon />
              )
            }
            onClick={() => setActiveState('company')}
          >
            Company
          </Button>
        </div>

        {activeState === 'candidate' ? <CandidateLogin /> : <CompanyLogin />}
      <h4>Don't have Credentials? <Link href="/auth/register">Get Started Now</Link></h4>
      </div>

    </div>
  );
};

export default Page;
