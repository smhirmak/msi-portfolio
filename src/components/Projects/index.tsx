import { projects } from '@/data/constants';
import ProjectCard from '../Cards/ProjectCard';

const Projects = () => {
  return (
    <div className='flex flex-col justify-center relative z-1 items-center pt-14 '
      style={{
        background: 'linear-gradient(340deg, rgba(216, 38, 38, 0.06) 20%, rgba(216, 38, 38, 0) 75%)',
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 100% 98%, 0 100%)'
      }} id="projects">
      <div className='max-w-[1350px] relative flex flex-col justify-between w-full gap-3 items-center pt-2.5 pb-[100px]'>
        <div className='text-4xl md:text-5xl font-semibold text-center mt-3 md:mt-6 text-text-primary'>Projects</div>
        <div className='text-base md:text-lg max-w-[600px] text-center text-text-secondary'>Projects of my own that I`m working on.</div>
        <div className='flex justify-center items-center flex-wrap gap-9 pt-10'>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
