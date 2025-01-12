"use client";
import { Bio } from '@/data/constants';
import Logo from '@/images/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { MovingBorder } from '../ui/moving-border';
import { cn } from '@/lib/utils';

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
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='bg-slate-950 h-20 flex justify-center items-center text-base sticky top-0 z-50 transition-all'>
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
          <Link className='hover:text-primary' href='' onClick={(e) => { e.stopPropagation(); scroll.scrollToTop() }}>About</Link>
          <ScrollLink className='hover:text-primary' to="projects" smooth={true}>Projects</ScrollLink>
          <ScrollLink className='hover:text-primary' to="experience" smooth={true}>Experience</ScrollLink>
          <ScrollLink className='hover:text-primary' to="skills" smooth={true}>Skills</ScrollLink>
          <ScrollLink className='hover:text-primary' to="education" smooth={true}>Education</ScrollLink>
          <ScrollLink className='hover:text-primary' to="contact" smooth={true}>Contact</ScrollLink>
        </ul>
        {!isMobile && <div className='hidden md:flex items-center justify-end w-[80%] py-0 px-2'>
          <Link href={Bio.github} target="display"
            className={cn(
              "bg-transparent relative text-xl h-16 w-40 p-[2px] overflow-hidden ",
            )}
            style={{
              borderRadius: "1.75rem",
            }}
          >
            <div
              className="absolute inset-0"
              style={{ borderRadius: `calc(1.75rem * 0.96)` }}
            >
              <MovingBorder
                duration={7000}
                rx="30%" ry="30%">
                <div
                  className={cn(
                    "h-20 w-20 opacity-[0.8] bg-[radial-gradient(#f00_40%,transparent_60%)]",
                  )}
                />
              </MovingBorder>
            </div>

            <div
              className={cn(
                "relative bg-slate-950 border border-slate-700 backdrop-blur-xl text-[#f00] flex items-center justify-center w-full h-full text-sm antialiased",
              )}
              style={{
                borderRadius: `calc(1.75rem * 0.96)`,
              }}
            >
              Github Profile
            </div>
          </Link>
        </div>}
      </div>
      <div data-open={open} className='flex flex-col justify-center gap-4 absolute top-20 right-0 w-full pt-[42px] px-10 pb-6 bg-[rgba(25,25,36,0.9)] transition-all data-[open=false]:translate-x-0 rounded-b-2xl shadow-2xl data-[open=true]:opacity-100 data-[open=false]:opacity-0 data-[open=true]:z-1 data-[open=false]:-z-1 data-[open=false]:hidden'>
        <Link className='text-text-primary font-medium cursor-pointer no-underline transition-all hover:text-primary'
          href='' onClick={(e) => { e.stopPropagation(); setOpen(prev => !prev); scroll.scrollToTop() }}>
          About
        </Link>
        <ScrollLink
          className='text-text-primary font-medium cursor-pointer no-underline transition-all hover:text-primary'
          to="projects"
          smooth={true}
          onClick={() => {
            setOpen(prev => !prev);
          }}>
          Projects
        </ScrollLink>
        <ScrollLink
          className='text-text-primary font-medium cursor-pointer no-underline transition-all hover:text-primary'
          to="experience"
          smooth={true}
          onClick={() => {
            setOpen(prev => !prev);
          }}>
          Experience
        </ScrollLink>
        <ScrollLink
          className='text-text-primary font-medium cursor-pointer no-underline transition-all hover:text-primary'
          to="skills"
          smooth={true}
          onClick={() => {
            setOpen(prev => !prev);
          }}>
          Skills
        </ScrollLink>
        <ScrollLink
          className='text-text-primary font-medium cursor-pointer no-underline transition-all hover:text-primary'
          to="education"
          smooth={true}
          onClick={() => {
            setOpen(prev => !prev);
          }}>
          Education
        </ScrollLink>
        <ScrollLink
          className='text-text-primary font-medium cursor-pointer no-underline transition-all hover:text-primary'
          to="contact"
          smooth={true}
          onClick={() => {
            setOpen(prev => !prev);
          }}>
          Contact
        </ScrollLink>
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
