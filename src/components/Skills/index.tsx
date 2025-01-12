import { skills } from '@/data/constants';
import { FocusCards } from '../ui/focus-cards';

const Skills = () => {
  return (
    <div className='pt-20 md:pt-8 px-4 md:px-0' id='skills'>
      <div className='mb-8'>
        <p className='text-3xl md:text-5xl font-semibold mt-3 md:mt-20 text-text-primary'>Skills</p>
        <div className='text-xl md:text-3xl text-text-secondary'>Here are some of the skills I have been working on recently.</div>
      </div>
      <FocusCards cards={skills} />
    </div>
  );
};

export default Skills;
