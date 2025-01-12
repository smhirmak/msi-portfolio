import Contact from '@/components/Contact';
import Projects from '@/components/Projects';
import Education from '@/components/Education';
import Experince from '@/components/Experince';
import Footer from '@/components/Footer';
import Hero from '@/components/HeroSection';
import NavBar from '@/components/Navbar';
import PreLoader from '@/components/PreLoader/PreLoader';
import Skills from '@/components/Skills';
import { darkTheme } from '@/utils/Themes';
import Head from 'next/head';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import SmoothScrolling from '@/components/SmoothScroll';


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
        <div className='bg-bg'>
          <NavBar />
          <div className='container mx-auto max-w-screen-xl '>
            <SmoothScrolling>
              <div className='w-full h-full'>
                <Hero />
                <Projects />
                <Experince />
                <Skills />
                <Education />
                <Contact />
              </div>
            </SmoothScrolling>
          </div>
          <Footer />
        </div>
      </ThemeProvider>
    </>
  );
}
