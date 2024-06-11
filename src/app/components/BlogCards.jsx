"use client"
import React from 'react'
import styles from "../styles/BlogCards.module.css"
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@mui/material'
import { styled } from '@mui/material/styles'

const BlackButton = styled(Button)(({ theme }) => ({
  backgroundColor: 'black',
  color: 'white',
  '&:hover': {
    backgroundColor: 'darkgrey',
  },
}));

const BlogCards = () => {
  return (
    <div className={styles.mainContainer}>
        <div className={styles.blogContainer}>
        <h2>Blogs and Resources</h2>

        <div className={styles.blogCards}>
            <div className={styles.card}>
                <div className={styles.cardImg}>
                    <Image src="/blog.jpg" width={300} height={200} alt='blog' layout='responsive'/>
                </div>
                <div className={styles.blogContent}>
                    <h5>Blog</h5>
                    <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis temporibus assumenda doloribus</h4>
                    <Link href="/">Read More</Link>
                </div>
            </div>

            <div className={styles.card}>
                <div className={styles.cardImg}>
                    <Image src="/blog.jpg" width={300} height={200} alt='blog' layout='responsive'/>
                </div>
                <div className={styles.blogContent}>
                    <h5>Blog</h5>
                    <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis temporibus assumenda doloribus</h4>
                    <Link href="/">Read More</Link>
                </div>
            </div>

            <div className={styles.card}>
                <div className={styles.cardImg}>
                    <Image src="/blog.jpg" width={300} height={200} alt='blog' layout='responsive'/>
                </div>
                <div className={styles.blogContent}>
                    <h5>Blog</h5>
                    <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis temporibus assumenda doloribus</h4>
                    <Link href="/">Read More</Link>
                </div>
            </div>
        </div>

        <div className={styles.buttonContainer}>
          <BlackButton variant="contained">View All</BlackButton>
        </div>
        </div>
    </div>
  )
}

export default BlogCards
