import { projects } from '@/data/constants';
import { motion } from "framer-motion";
import { LampContainer } from '../ui/lamp';
import { HoverEffect } from '../ui/card-hover-effect';

const Projects = () => {
  return (
    <div className='bg-slate-950 mb-20' id='projects'>
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          <div>
            <span className='text-4xl md:text-6xl font-bold'>Projects</span> <br /> <span className='text-2xl md:text-4xl'>Projects of my own that I`m working on.</span>
          </div>
        </motion.h1>
      </LampContainer>
      <HoverEffect items={projects} />
    </div>
  );
};

export default Projects;
