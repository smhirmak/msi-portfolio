import React from 'react';

const ProjectCard: React.FC<{ project: any }> = ({ project }) => {
  return (
    <div className='w-[330px] h-[490px] bg-card cursor-default rounded-lg shadow-lg overflow-hidden transition-all py-6 px-5 flex flex-col gap-3 duration-300 hover:scale-105 drop-shadow-2xl shadow-primary'>
      <img className={`w-full h-[180px] bg-white rounded-lg object-cover shadow-lg ${project?.imageClassName}`} src={project.image} alt={project.title} />
      <div className='w-full flex flex-wrap gap-2 mt-1 items-center'>
        {project.tags.map((tag: any) => (
          <span className='text-xs font-medium text-primary bg-neutral-800 py-0.5 px-2 rounded-lg' key={tag}>{tag}</span>
        ))}
      </div>
      <div className='w-full flex flex-col px-0.5'>
        <div className='text-xl font-semibold text-text-secondary overflow-hidden text-ellipsis text-nowrap max-w-full'>{project.title}</div>
        <div className='text-xs ml-0.5 text-text-secondary'>{project.date}</div>
        <div className='text-text-secondary overflow-hidden text-ellipsis mt-2 max-w-full line-clamp-4' title={project.description}>{project.description}</div>
      </div>
      <div className='flex justify-end my-3 gap-3'>
        <a className='w-full text-center no-underline text-xs md:text-sm font-semibold text-text-primary py-3 px-4 rounded-md bg-red-800 hover:bg-red-700 cursor-pointer transition-all' href={project?.github} target="new">
          View Code
        </a>
        {project?.webapp && <a className='w-full text-center no-underline text-xs md:text-sm font-semibold text-text-primary py-3 px-4 rounded-md bg-red-800 hover:bg-red-700 cursor-pointer transition-all' href={project?.webapp} target="new">
          View Live App
        </a>}
      </div>
    </div>
  );
};

export default ProjectCard;
