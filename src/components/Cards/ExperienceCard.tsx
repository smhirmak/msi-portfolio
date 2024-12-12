import React from 'react';

const ExperienceCard: React.FC<{ experience: any }> = ({ experience }) => {
  return (
    <div className='w-[320px] md:w-[650px] border-2 border-primary rounded-xl p-2.5 md:py-3 md:px-4 justify-between relative overflow-hidden flex flex-col gap-2 md:gap-3 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2'>
      <div className='w-full flex gap-3'>
        <img className='size-10 md:size-12 bg-white rounded-xl mt-1 p-0.5' src={experience.img} alt={experience.role} />
        <div className='w-full flex flex-col'>
          <div className='text-sm md:text-lg font-semibold text-neutral-200'>{experience.role}</div>
          <div className='text-xs md:text-sm font-medium text-neutral-300'>{experience.company}</div>
          <div className='text-[10px] md:text-xs text-neutral-400'>{experience.date}</div>
        </div>
      </div>
      <div className='w-full text-xs md:text-base text-neutral-300 mb-2.5'>
        {experience?.desc && <span>{experience.desc}</span>}

        {experience?.skills && (
          <>
            <br />
            <div className='w-full flex gap-3 mt-2.5'>
              <b>Skills:</b>
              <div className='flex flex-wrap gap-2'>
                {experience.skills.map((skill: string) => (
                  <div className='text-xs md:text-base text-neutral-300' key={skill}>• {skill}</div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ExperienceCard;
