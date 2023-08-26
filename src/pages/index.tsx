import styled, { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '@/utils/Themes';
import NavBar from '@/components/Navbar';
import Hero from '@/components/HeroSection';
import Skills from '@/components/Skills';
import Education from '@/components/Education';
import Experince from '@/components/Experince';
import Projects from '@/components/Projects';
import React, { useState } from 'react';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ProjectDetails from '@/components/ProjectDetails';
import PreLoader from '@/components/PreLoader/PreLoader';

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  height: 100%;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%),
    linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  console.log(openModal);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <PreLoader />
      <NavBar />
      <Body>
        <Hero />
        <Wrapper>
          <Skills />
          <Experince />
        </Wrapper>
        <Projects />
        <Wrapper>
          <Education />
          <Contact />
        </Wrapper>
        <Footer />
        {openModal.state && <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />}
      </Body>
    </ThemeProvider>
  );
}
