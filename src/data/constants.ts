export const Bio = {
  name: 'Muhammed Semih',
  roles: ['Frontend Developer', 'Web Developer', 'Programmer', 'Engineer'],
  github: 'https://github.com/smhirmak',
  resume: 'https://drive.google.com/file/d/10Z0iCsumQlQxjLck1wEGkwyCWAgv_pK8/view?usp=drive_link',
  linkedin: 'https://www.linkedin.com/in/muhammed-semih-irmak-307890152/'
};

export const skills = [
  {
    title: 'Frontend',
    skills: [
      {
        name: 'React',
        image:
          '/logos/skills/react.png'
      },
      {
        name: 'Redux',
        image:
          '/logos/skills/redux.svg'
      },
      {
        name: 'Next.js',
        image:
          '/logos/skills/nexjs.png'
      },
      {
        name: 'HTML',
        image: '/logos/skills/html.png'
      },
      {
        name: 'CSS',
        image:
          '/logos/skills/css.png'
      },
      {
        name: 'JavaScript',
        image:
          '/logos/skills/js.png'
      },
      {
        name: 'TypeScript',
        image:
          '/logos/skills/ts.png'
      },
      {
        name: 'Material UI',
        image:
          '/logos/skills/mui.svg'
      },
      {
        name: 'Tailwind',
        image: '/logos/skills/tailwind.png'
      },
      {
        name: 'styled-components',
        image: '/logos/skills/sc.png'
      },
      {
        name: 'GSAP',
        image:
          '/logos/skills/gsap.png'
      }
    ]
  },
  {
    title: 'Backend',
    skills: [
      {
        name: 'Node.js',
        image: '/logos/skills/nodejs.png'
      },
      {
        name: 'Express.js',
        image:
          '/logos/skills/express-js.png'
      },
      {
        name: 'MongoDB',
        image:
          '/logos/skills/mongodb.webp'
      },
      {
        name: 'Firebase',
        image: '/logos/skills/firebase.png'
      }
    ]
  },
  {
    title: 'Others',
    skills: [
      {
        name: 'Git',
        image:
          '/logos/skills/git.png'
      },
      {
        name: 'GitHub',
        image: '/logos/skills/github.png'
      },

      {
        name: 'VS Code',
        image:
          '/logos/skills/vscode.png'
      },
    ]
  }
];

export const experiences = [
  {
    id: 0,
    img: "/logos/experiences/tra-bilisim.svg",
    role: 'Junior Frontend Developer',
    company: 'Tra Bilisim',
    date: 'Nov 2023 - Present',
    desc: 'I am working as a Junior Frontend Developer at Tra Bilisim. I am responsible for developing and maintaining the frontend of the projects. I am using React, Typescript, Tailwind, and Material UI in the projects.'
  },
  {
    id: 1,
    img: '/logos/experiences/linatek.png',
    role: 'R&D / Hardware Design Engineer',
    company: 'Linatek Elektronik Raylı Sistemler',
    date: 'Jan 2022 - July 2023',
    desc: 'Electric electronic cards and units of locomotives production and repair. These cards and Electronic card design, drawing in the production of units, I am involved in repair and software areas.'
  },
  {
    id: 2,
    img: '/logos/experiences/linatek.png',
    role: 'Electric Electronics Engineer Intern',
    company: 'Linatek Elektronik Raylı Sistemler',
    date: 'July 2021 - Jan 2022',
    desc: 'I developed projects in the field of Embedded Systems. I soldered SMD and DIP materials on PCB boards. I made schematic drawings with Reverse Engineering methods.'
  },
  {
    id: 3,
    img: '/logos/experiences/genpark.png',
    role: 'Electric Electronics Engineer Intern',
    company: 'GENPARK Power System',
    date: 'Jan 2020 - Feb 2020',
    desc: 'I worked in electrical panel design and assembly departments.'
  }
];

export const education = [
  {
    id: 0,
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Sakarya_University_of_Applied_Sciences_logo.svg/1200px-Sakarya_University_of_Applied_Sciences_logo.svg.png',
    school: 'Sakarya University of Applied Science',
    date: 'Aug 2023 - Present',
    desc: 'Biomedical Engineering',
    degree: "Master's Degree"
  },
  {
    id: 1,
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Sakarya_University_logo.svg/1200px-Sakarya_University_logo.svg.png',
    school: 'Sakarya University',
    date: 'Sep 2017 - Feb 2022',
    desc: 'Electric Electronic Engineering',
    degree: "Bachelor's Degree"
  }
];

export const projects = [
  {
    id: 0,
    title: 'MSI UI Kit',
    description:
      'This project is a UI Kit and developed using React, TypeScript, Tailwind.',
    image:
      '/logos/projects/msi-ui-kit-logo-light.png',
    imageClassName: '!object-contain',
    tags: ['React Js', 'TypeScript', 'Tailwind', 'HTML', 'CSS'],
    category: 'ui kit',
    github: 'https://github.com/smhirmak/msi-ui-kit',
  },
  {
    id: 1,
    title: 'Shopping Cart App',
    description:
      'This project is a demo e-commerce website and developed using React, NextJS, TypeScript, Material UI.',
    image:
      'https://user-images.githubusercontent.com/42941265/263745812-0809baba-6443-4f73-a309-dd5469948415.png',
    tags: ['React Js', 'Next.js', 'TypeScript', 'HTML', 'CSS', 'Material UI'],
    category: 'web app',
    github: 'https://github.com/smhirmak/shopping-cart-app',
    webapp: 'https://shopping-cart-app-smhirmak.vercel.app/'
  },
  {
    id: 2,
    title: 'Weather App',
    description:
      'This project is designed to show weather forecasts and developed using React, NextJS, TypeScript, Material UI, Tailwind.',
    image:
      'https://user-images.githubusercontent.com/42941265/263491602-cc2471a3-2cde-4bd1-81dd-7e600eaf7b37.png',
    tags: ['React Js', 'Next.js', 'TypeScript', 'HTML', 'CSS', 'Material UI', 'Tailwind'],
    category: 'web app',
    github: 'https://github.com/smhirmak/weather-app',
    webapp: 'https://weather-app-smhirmak.vercel.app/'
  }
];
