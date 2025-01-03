import Contact from '@/components/Contact';
import Education from '@/components/Education';
import Experince from '@/components/Experince';
import Footer from '@/components/Footer';
import Hero from '@/components/HeroSection';
import NavBar from '@/components/Navbar';
import PreLoader from '@/components/PreLoader/PreLoader';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import { darkTheme } from '@/utils/Themes';
import Head from 'next/head';
import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';


export default function Home() {
  return (
    <>
      <Head>
        <title>Muhammed Semih Irmak</title>
        <meta name="description" content="Muhammed Semih Irmak - Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.ico" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png"></link>
      </Head>
      <ThemeProvider theme={darkTheme}>
        <PreLoader />
        <NavBar />
        <div className='bg-bg w-full h-full overflow-hidden'>
          <Hero />
          <div className='w-full' style={{
            background: 'linear-gradient(38.73deg, rgba(204, 0, 0, 0.15) 0%, rgba(194, 24, 24, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%)',
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%)'
          }}>
            <Experince />
            <Projects />
          </div>
          <Skills />
          <div className='w-full' style={{
            background: 'linear-gradient(38.73deg, rgba(204, 0, 0, 0.15) 0%, rgba(194, 24, 24, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%)',
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%)'
          }}>
            <Education />
            <Contact />
          </div>
          <Footer />
        </div>
      </ThemeProvider>
    </>
  );
}
