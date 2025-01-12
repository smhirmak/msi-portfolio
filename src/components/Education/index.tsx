/* eslint-disable react/no-unescaped-entities */
import { Timeline } from '../ui/timeline';
import Image from 'next/image';

const data = [
  {
    title: "Aug 2023 - Present",
    content: (
      <div>
        <p className="text-neutral-200 text-xl md:text-3xl font-bold mb-2">
          Sakarya University of Applied Science
        </p>
        <div className="flex w-fit gap-4 items-center mb-8">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Sakarya_University_of_Applied_Sciences_logo.svg/1200px-Sakarya_University_of_Applied_Sciences_logo.svg.png"
            alt="Tra Bilisim"
            width={300}
            height={300}
            className="rounded-lg object-fill max-w-14 max-h-1max-w-14 md:max-h-24 md:max-w-24 w-fit shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <p className="text-neutral-200 text-xl md:text-2xl md:whitespace-nowrap font-bold ">
            Biomedical Engineering <br /> Master's Degree
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "Sep 2017 - Feb 2022",
    content: (
      <div>
        <p className="text-neutral-200 text-xl md:text-3xl font-bold mb-2">
          Sakarya University
        </p>
        <div className="flex w-fit gap-4 items-center mb-8">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Sakarya_University_logo.svg/1200px-Sakarya_University_logo.svg.png"
            alt="Tra Bilisim"
            width={300}
            height={300}
            className="rounded-lg object-fill max-w-14 max-h-1max-w-14 md:max-h-24 md:max-w-24 w-fit shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <p className="text-neutral-200 text-xl md:text-2xl md:whitespace-nowrap font-bold ">
            Electric Electronic Engineering <br /> Bachelor's Degree
          </p>
        </div>
      </div>
    ),
  },
];


const Education = () => {
  return (
    <div className='pt-20' id="education">
      <Timeline
        title='Education'
        desc=' My education has been a journey of self-discovery and growth. My educational details are as follows.'
        data={data} />
    </div>
  );
};

export default Education;
