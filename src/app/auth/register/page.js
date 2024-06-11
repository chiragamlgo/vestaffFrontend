"use client";
import React, { useState } from 'react';
import styles from '../../styles/pages/Invitation.module.css';
import Image from 'next/image';
import CandidateInvite from '@/app/components/auth/CandidateInvite';
import CompanyInvite from '@/app/components/auth/CompanyInvite';
import Button from '@mui/material/Button';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import Link from 'next/link';

const Page = () => {
  const [activeState, setActiveState] = useState('candidate');

  return (
    <div className={styles.invitationContainer}>
      <div className={styles.image}>
        <Image src="/invitation3.png" width={800} height={800} alt="invitation" />
      </div>

      <div className={styles.forms}>
        <h2>Get Started Now</h2>
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

        {activeState === 'candidate' ? <CandidateInvite /> : <CompanyInvite />}
      <h4>Already Have an Account? <Link href="/auth/login">Login</Link></h4>
      </div>

    </div>
  );
};

export default Page;
