import React from 'react'
import TopHeader from './components/TopHeader'
import Hero from './components/Hero'
import ClientList from './components/ClientList'
import NumberData from './components/NumberData'
import Information from './components/Information'
import Features from './components/Features'
import Working from './components/Working'
import FeaturesGrid from './components/FeaturesGrid'
import Cta from './components/Cta'
import Faq from './components/Faq'
import BlogCards from './components/BlogCards'
import toast, { Toaster } from 'react-hot-toast';

const page = () => {
  return (
    <>
      <Hero />
      <ClientList />
      <NumberData />
      <Information />
      <Working />
      <BlogCards />
      <Features />
      <Faq />
      <Cta />
      <Toaster />
    </>
  )
}

export default page
