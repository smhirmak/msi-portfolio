import { Bio } from '@/data/constants';
import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react';
import Link from 'next/link';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

function Footer() {
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
    <div className='w-full py-8 flex justify-center'>
      <div className='w-full max-w-[1200px] flex flex-col gap-3 items-center p-4 text-text-primary'>
        <h1 className='font-semibold text-xl text-primary cursor-default'>Muhammed Semih Irmak</h1>
        <nav className='w-full [&>a]:cursor-pointer max-w-[800px] mt-4 flex gap-5 md:text-start text-sm mb-8 md:mb-0 md:text-base text-center md:gap-8 justify-center flex-wrap [&>a]:text-text-primary [&>a]:no-underline [&>a]:text-base md:[&>a]:text-lg [&>a]:transition-all [&>a]:mb-0 md:[&>a]:mb-4'>
          <Link className='hover:text-primary' href='' onClick={(e) => { e.stopPropagation(); scroll.scrollToTop() }}>About</Link>
          <ScrollLink className='hover:text-primary' to="projects" smooth={true}>Projects</ScrollLink>
          <ScrollLink className='hover:text-primary' to="experience" smooth={true}>Experience</ScrollLink>
          <ScrollLink className='hover:text-primary' to="skills" smooth={true}>Skills</ScrollLink>
          <ScrollLink className='hover:text-primary' to="education" smooth={true}>Education</ScrollLink>
          <ScrollLink className='hover:text-primary' to="contact" smooth={true}>Contact</ScrollLink>
        </nav>
        <div className='flex text-2xl md:text-base'>
          <a className='inline-block mx-3 text-xl text-text-primary transition-colors' href={Bio.linkedin} target="display">
            <IconBrandLinkedin
              size={35}
              className='hover:text-icons-hover transition-all duration-300 hover:scale-125'
            />
          </a>
          <a className='inline-block mx-3 text-xl text-text-primary transition-colors' href={Bio.github} target="display">
            <IconBrandGithub
              size={35}
              className='hover:text-icons-hover transition-all duration-300 hover:scale-125'
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
