import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Bio } from '@/data/constants';

function Footer() {
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
    <div className='w-full py-8 flex justify-center'>
      <div className='w-full max-w-[1200px] flex flex-col gap-3 items-center p-4 text-text-primary'>
        <h1 className='font-semibold text-xl text-primary cursor-default'>Muhammed Semih Irmak</h1>
        <nav className='w-full max-w-[800px] mt-4 flex gap-5 md:text-start text-sm mb-8 md:mb-0 md:text-base text-center md:gap-8 justify-center flex-wrap [&>a]:text-text-primary [&>a]:no-underline [&>a]:text-base md:[&>a]:text-lg [&>a]:transition-all [&>a]:mb-0 md:[&>a]:mb-4'>
          <a className='hover:text-primary' href="#about" onClick={topFunction}>
            About
          </a>
          <a className='hover:text-primary' href="#skills">Skills</a>
          <a className='hover:text-primary' href="#experience">Experience</a>
          <a className='hover:text-primary' href="#projects">Projects</a>
          <a className='hover:text-primary' href="#education">Education</a>
          <a className='hover:text-primary' href="#contact">Contact</a>
        </nav>
        <div className='flex text-2xl md:text-base'>
          <a className='inline-block mx-3 text-xl text-text-primary transition-colors' href={Bio.linkedin} target="display">
            <LinkedInIcon
              fontSize="large"
              sx={{
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  color: 'rgb(10,102,194)',
                  transition: 'all 0.3s ease-in-out',
                  transform: 'scale(1.2)'
                }
              }}
            />
          </a>
          <a className='inline-block mx-3 text-xl text-text-primary transition-colors' href={Bio.github} target="display">
            <GitHubIcon
              fontSize="large"
              sx={{
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  color: 'rgb(10,102,194)',
                  transition: 'all 0.3s ease-in-out',
                  transform: 'scale(1.2)'
                }
              }}
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
