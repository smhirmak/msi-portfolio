import HeroBgAnimation from '@/components/HeroBgAnimation/index';
import { Bio } from '@/data/constants';
import HeroImg from '@/images/memoji.png';
import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';
import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (
    <div id='hero'>
      <div className='flex justify-center relative pt-8 pb-20 px-4 md:py-14 md:px4 lg:py-14 lg:px-7 z-1' >
        <div className='flex justify-between items-center w-full max-w-[1100px] flex-col lg:flex-row'>
          <div className='flex-1 w-full cursor-default lg:order-1 order-2 flex items-center flex-col md:order-2 md:mb-8 md:flex md:items-start md:flex-col'>
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
              I am a Frontend Developer who delivers innovative solutions and writes clean, maintainable code, specializing in developing user-centric and high-performance web applications using modern technologies such as <span className='font-semibold text-text-primary'>React, Next.js, Tailwind CSS, and TypeScript</span>. I have proven success in responsive design, performance optimization, and user experience improvement.
            </p>
            <div className='flex text-2xl md:text-base mb-4'>
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
            <Link className='hover:scale-105 hover:transition-all hover:brightness-110 appearance-[button] no-underline w-[75%] text-center py-3 md:py-4 text-white rounded-xl cursor-pointer z-10 text=lg md:text-xl font-semibold transition-all'
              style={{ background: "-webkit-linear-gradient(280deg,hsla(0, 100%, 50%, 1) 0%,hsla(220, 100%, 41%, 1) 100%)", boxShadow: '20px 20px 60px #1f2634' }} href={Bio.resume} target="display">
              Check Resume
            </Link>
          </div>
          <div className='order-1 md:order-1 justify-center items-center md:mb-20 flex-1 w-full lg:order-2 flex gap-3'>
            <Image className='w-full h-full absolute rounded-full md:max-h-[450px] md:max-w-[450px] object-cover object-center border-2 border-primary sm:max-w-[350px] sm:max-h-[350px] max-h-[300px] max-w-[300px]' priority={true} src={HeroImg} alt="Hero" />
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
