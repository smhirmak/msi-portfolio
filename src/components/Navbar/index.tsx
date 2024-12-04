import { Bio } from '@/data/constants';
import Logo from '@/images/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import styled, { useTheme } from 'styled-components';

const MobileMenuLinks = styled(Link)`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const NavBar = () => {
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  function mobileMenu() {
    setOpen(prev => !prev);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  const [open, setOpen] = useState<boolean>(false);
  const theme = useTheme();
  return (
    <div className='bg-card-light h-20 flex justify-center items-center text-base sticky top-0 z-10 transition-all'>
      <div className='flex justify-between h-16 z-1 w-full max-w-[1200px]'>
        <Link className='w-full p-0 flex justify-center items-center no-underline absolute top-4 md:relative md:top-0' href="/">
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              color: 'white',
              marginBottom: '20',
              cursor: 'pointer'
            }}>
            <Image className='w-[251px] h-[27px] md:w-[280px] md:h-[30px]' src={Logo} alt="SEMIHIRMAK" />
          </div>
        </Link>
        <div className='md:hidden block absolute top-4 right-0 -translate-x-[80%] translate-y-[0%] text-2xl cursor-pointer text-text-primary'>
          <FaBars
            onClick={() => {
              setOpen(prev => !prev);
            }}
          />
        </div>

        <ul className='w-full hidden md:flex justify-center items-center gap-8 list-none [&>a]:text-text-primary [&>a]:font-medium [&>a]:cursor-pointer [&>a]:no-underline [&>a]:transition-all'>
          <a href="#about" className='hover:text-primary' onClick={topFunction}>
            About
          </a>
          <a className='hover:text-primary' href="#skills">Skills</a>
          <a className='hover:text-primary' href="#experience">Experience</a>
          <a className='hover:text-primary' href="#projects">Projects</a>
          <a className='hover:text-primary' href="#education">Education</a>
          <a className='hover:text-primary' href="#contact">Contact</a>
        </ul>
        <div className='hidden md:flex items-center justify-end w-[80%] py-0 px-2'>
          <Link className='bg-transparent text-primary border-[1.8px] border-primary rounded-2xl flex no-underline justify-center items-center py-0 px-5 h-[70%] text-xs md:text-base font-medium transition-all cursor-pointer hover:bg-primary hover:text-white' href={Bio.github} target="display">
            Github Profile
          </Link>
        </div>
      </div>
      <div data-open={open} className='flex flex-col justify-center gap-4 absolute top-20 right-0 w-full pt-[42px] px-10 pb-6 bg-[rgba(25,25,36,0.9)] transition-all data-[open=false]:translate-x-0 rounded-b-2xl shadow-2xl data-[open=true]:opacity-100 data-[open=false]:opacity-0 data-[open=true]:z-1 data-[open=false]:-z-1 data-[open=false]:hidden'>
        <MobileMenuLinks href="#about" onClick={mobileMenu}>
          About
        </MobileMenuLinks>
        <MobileMenuLinks
          href="#skills"
          onClick={() => {
            setOpen(prev => !prev);
          }}>
          Skills
        </MobileMenuLinks>
        <MobileMenuLinks
          href="#experience"
          onClick={() => {
            setOpen(prev => !prev);
          }}>
          Experience
        </MobileMenuLinks>
        <MobileMenuLinks
          href="#projects"
          onClick={() => {
            setOpen(prev => !prev);
          }}>
          Projects
        </MobileMenuLinks>
        <MobileMenuLinks
          href="#education"
          onClick={() => {
            setOpen(prev => !prev);
          }}>
          Education
        </MobileMenuLinks>
        <MobileMenuLinks
          href="#contact"
          onClick={() => {
            setOpen(prev => !prev);
          }}>
          Contact
        </MobileMenuLinks>
        <Link className='bg-primary w-full text-white border-[1.8px] border-primary rounded-2xl flex no-underline justify-center items-center py-2.5 px-4 h-[70%] text-xs md:text-base font-medium transition-all cursor-pointer hover:bg-transparent hover:text-primary'
          href={Bio.github}
          target="display">
          Github Profile
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
