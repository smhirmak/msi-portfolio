import HeroBgAnimation from '@/components/HeroBgAnimation/index';
import { Bio } from '@/data/constants';
import HeroImg from '@/images/memoji.png';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Image from 'next/image';
import Link from 'next/link';
import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (
    <div>
      <div className='bg-card-light flex justify-center relative pt-8 pb-20 px-4 md:py-14 md:px4 lg:py-14 lg:px-7 z-1' style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%)' }}>
        <div className='flex justify-between items-center w-full max-w-[1100px] flex-col lg:flex-row'>
          <div className='flex-1 w-full cursor-default lg:order-1 order-2 flex items-center flex-col md:order-2 md:mb-8 md:flex md:items-center md:flex-col'>
            <div className='md:text-5xl text-4xl font-bold text-text-primary leading-[48px] mb-2 md:leading-[68px] text-center md:text-start'>
              Hi, I am <br /> {Bio.name}
            </div>
            <div className='text-xl md:text-3xl font-semibold text-text-primary leading-[48px] mb-4 md:mb-0 md:leading-[68px] gap-3 flex text-center lg:text-start '>
              I am a
              <span className='text-primary cursor-default'>
                <Typewriter options={{ strings: Bio.roles, autoStart: true, loop: true }} />
              </span>
            </div>
            <p className='text-base md:text-xl text-center md:text-start text-neutral-300 leading-[32px] mb-4'>
              I`m a motivated Frontend Developer skilled in{' '}
              <span className='font-semibold text-text-primary'>React, JavaScript, TypeScript, HTML, CSS and Next.js</span>. I am
              currently learning <span className='font-semibold text-text-primary'>Node.js and Express.js</span>, which are Backend
              Technologies. With a passion for learning and a growth mindset, I`m committed to
              delivering high-quality results and creating a significant impact. Ready to
              collaborate and bring creative projects to life.
            </p>
            <div className='flex mb-4 [&>a]:inline-block [&>a]:mr-4 [&>a]:text-xl [&>a]:text-text-primary [&>a]: transition-colors'>
              <a className='hover:text-primary' href={Bio.linkedin} target="display">
                <LinkedInIcon
                  fontSize="large"
                  sx={{
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      color: 'rgb(10,102,194)',
                      transition: 'all 0.3s ease-in-out',
                      transform: 'scale(1.15)'
                    }
                  }}
                />
              </a>
              <a className='hover:text-primary' href={Bio.github} target="display">
                <GitHubIcon
                  fontSize="large"
                  sx={{
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      color: 'rgb(10,102,194)',
                      transition: 'all 0.3s ease-in-out',
                      transform: 'scale(1.15)'
                    }
                  }}
                />
              </a>
            </div>
            <Link className='hover:scale-105 hover:transition-all hover:brightness-110 appearance-[button] no-underline w-[75%] text-center py-3 md:py-4 text-white rounded-xl cursor-pointer z-10 text=lg md:text-xl font-semibold transition-all'
             style={{ background: "-webkit-linear-gradient(280deg,hsla(0, 100%, 50%, 1) 0%,hsla(220, 100%, 41%, 1) 100%)", boxShadow: '20px 20px 60px #1f2634' }} href={Bio.resume} target="display">
              Check Resume
            </Link>
          </div>
          <div className='order-1 mb-8 md:order-1 justify-center md:items-center md:mb-20 flex-1 w-full lg:order-2 flex justify-end gap-3'>
            <Image className='w-full h-full absolute rounded-full md:max-h-[450px] md:max-w-[450px] object-cover object-center border-2 border-primary sm:max-w-[350px] sm:max-h-[350px] max-h-[280px] max-w-[280px]' priority={true} src={HeroImg} alt="Hero" />
            <div className='overflow-hidden flex '>
              <HeroBgAnimation />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
