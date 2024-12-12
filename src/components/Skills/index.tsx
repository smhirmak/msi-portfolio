import { skills } from '@/data/constants';

const Skills = () => {
  return (
    <div className='flex cursor-default flex-col justify-center relative z-1 items-center pt-16 md:pt-14' id="skills">
      <div className='max-w-[1100px] relative flex flex-col justify-between w-full gap-3 items-center' >
        <div className='text-3xl md:text-5xl font-semibold text-center mt-3 md:mt-5 text-text-primary'>Skills</div>
        <div className='text-base md:text-lg max-w-[600px] text-center text-text-secondary py-0 px-2.5'>Here are some of the skills I have been working on recently.</div>
        <div className='w-full flex flex-wrap mt-7 justify-center gap-8'>
          {skills.map((item, i) => (
            <div className='w-full max-w-[330px] md:max-w-[400px] lg:max-w-[500px] bg-card border-2 border-primary rounded-lg py-2.5 md:py-4 px-12' key={i}>
              <h2 className='text-3xl font-semibold text-text-secondary mb-5 text-center'>{item.title}</h2>
              <div className='flex justify-center flex-wrap cursor-default gap-3 mb-5'>
                {item.skills.map((skill, i) => (
                  <div className='flex items-center gap-2 justify-center text-sm md:text-base text-neutral-400 border border-neutral-400 rounded-lg py-2 px-3 md:py-3 md:px-4 font-normal transition-all hover:shadow-lg hover:scale-[1.01]' key={i}>
                    <img className='size-6' src={skill.image} alt={skill.name} />
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
