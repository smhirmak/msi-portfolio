import Image from 'next/image';
import { Timeline } from '../ui/timeline';

const data = [
  {
    title: "Nov 2023 - Present",
    content: (
      <div>
        <p className="text-neutral-200 text-xl md:text-3xl font-bold mb-2">
          Junior Frontend Developer
        </p>
        <div className="flex w-fit gap-4 items-center mb-8">
          <Image
            src="/logos/experiences/tra-bilisim.svg"
            alt="Tra Bilisim"
            width={300}
            height={300}
            className="rounded-lg object-fill max-w-14 max-h-1max-w-14 md:max-h-24 md:max-w-24 w-fit shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <p className="text-neutral-200 text-xl md:text-2xl md:whitespace-nowrap font-bold ">
            Tra Bilişim
          </p>
        </div>
        <p className="text-neutral-200 text-sm md:text-base font-normal mb-8">
          I am working as a Junior Frontend Developer at Tra Bilisim. I am responsible for developing and maintaining the frontend of the projects. I am using React, Typescript, Tailwind, and Material UI in the projects.
        </p>
      </div>
    ),
  },
  {
    title: "Jan 2022 - July 2023",
    content: (
      <div>
        <p className="text-neutral-200 text-xl md:text-3xl font-bold mb-2">
          R&D / Hardware Design Engineer
        </p>
        <div className="flex w-fit gap-4 items-center mb-8">
          <Image
            src="/logos/experiences/linatek.png"
            alt="Tra Bilisim"
            width={300}
            height={300}
            className="rounded-lg object-fill max-w-14 max-h-1max-w-14 md:max-h-24 md:max-w-24 w-fit shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <p className="text-neutral-200 text-xl md:text-2xl md:whitespace-nowrap font-bold ">
            Linatek Elektronik Raylı Sistemler
          </p>
        </div>
        <p className="text-neutral-200 text-sm md:text-base font-normal mb-8">
          Electric electronic cards and units of locomotives production and repair. These cards and Electronic card design, drawing in the production of units, I am involved in repair and software areas.
        </p>
      </div>
    ),
  },
  {
    title: "July 2021 - Jan 2022",
    content: (
      <div>
        <p className="text-neutral-200 text-xl md:text-3xl font-bold mb-2">
          Electric Electronics Engineer Intern
        </p>
        <div className="flex w-fit gap-4 items-center mb-8">
          <Image
            src="/logos/experiences/linatek.png"
            alt="Tra Bilisim"
            width={300}
            height={300}
            className="rounded-lg object-fill max-w-14 max-h-1max-w-14 md:max-h-24 md:max-w-24 w-fit shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <p className="text-neutral-200 text-xl md:text-2xl md:whitespace-nowrap font-bold ">
            Linatek Elektronik Raylı Sistemler
          </p>
        </div>
        <p className="text-neutral-200 text-sm md:text-base font-normal mb-8">
          I developed projects in the field of Embedded Systems. I soldered SMD and DIP materials on PCB boards. I made schematic drawings with Reverse Engineering methods.
        </p>
      </div>
    ),
  },
  {
    title: "Jan 2020 - Feb 2020",
    content: (
      <div>
        <p className="text-neutral-200 text-xl md:text-3xl font-bold mb-2">
          Electric Electronics Engineer Intern
        </p>
        <div className="flex w-fit gap-4 items-center mb-8">
          <Image
            src="/logos/experiences/genpark.png"
            alt="Tra Bilisim"
            width={300}
            height={300}
            className="rounded-lg object-fill max-w-14 max-h-1max-w-14 md:max-h-24 md:max-w-24 w-fit shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <p className="text-neutral-200 text-xl md:text-2xl md:whitespace-nowrap font-bold ">
            GENPARK Power System
          </p>
        </div>
        <p className="text-neutral-200 text-sm md:text-base font-normal mb-8">
          I worked in electrical panel design and assembly departments.
        </p>
      </div>
    ),
  },
];

const Experince = () => {
  return (
    <div className='pt-24' id='experience'>
      <Timeline title='Experience' desc='Here are some of my projects' data={data} />
    </div>
  );
};

export default Experince;
