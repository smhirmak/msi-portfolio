import React from 'react';

const EducationCard: React.FC<{ education: any }> = ({ education }) => {
  return (
    <div className='w-[320px] md:w-[650px] border-2 border-primary rounded-xl p-2.5 md:py-3 md:px-4 justify-between relative overflow-hidden flex flex-col gap-2 md:gap-3 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2'>
      <div className='w-full flex gap-3'>
        <img className='h-10 md:h-12 bg-white rounded-xl mt-1 p-1' src={education.img} alt={education.school} />
        <div className='w-full flex flex-col'>
          <div className='text-base md:text-lg font-semibold text-text-primary'>{education.school}</div>
          <div className='text-xs md:text-sm font-medium text-text-secondary'>{education.degree}</div>
          <div className='text-[10px] md:text-xs text-text-secondary'>{education.date}</div>
        </div>
      </div>
      <div className='w-full text-xs md:text-base text-neutral-300 mb-2.5'>
        <span className='overflow-hidden max-w-full line-clamp-4 text-ellipsis'>{education.desc}</span>
      </div>
    </div>
  );
};

export default EducationCard;
