export const Bio = {
  name: 'Muhammed Semih Irmak',
  title: 'Frontend-Focused Software Engineer',
  roles: ['React, Next.js & TypeScript', 'Real-Time FinTech Interfaces', 'ASP.NET Core & CI/CD'],
  location: 'Sakarya, Türkiye',
  email: 'smhirmak@hotmail.com',
  languages: [
    { name: 'Turkish', level: 'Native speaker' },
    { name: 'English', level: 'Intermediate' }
  ],
  github: 'https://github.com/smhirmak',
  resume: '/Muhammed_Semih_Irmak_CV_2026.pdf',
  linkedin: 'https://www.linkedin.com/in/muhammed-semih-irmak',
  website: 'https://www.semihirmak.com/'
};

export type Skill = { name: string; image?: string; imageClassName?: string };
export type SkillGroup = { title: string; skills: Skill[] };

export const skills: SkillGroup[] = [
  {
    title: 'Frontend & UI',
    skills: [
      { name: 'React', image: '/logos/skills/react.webp' },
      { name: 'Next.js', image: '/logos/skills/nextjs.svg', imageClassName: 'invert' },
      { name: 'TypeScript', image: '/logos/skills/ts.webp' },
      { name: 'JavaScript', image: '/logos/skills/js.webp' },
      { name: 'HTML5', image: '/logos/skills/html.webp' },
      { name: 'CSS3', image: '/logos/skills/css.webp' },
      { name: 'Vite', image: '/logos/skills/vite.svg' },
      { name: 'Tailwind CSS', image: '/logos/skills/tailwind.webp' },
      { name: 'shadcn/ui', image: '/logos/skills/shadcn.png' },
      { name: 'Material UI', image: '/logos/skills/mui.svg' },
      {
        name: 'Accessibility (a11y)',
        image: '/logos/skills/accessibility.png',
        imageClassName: 'rounded-full'
      }
    ]
  },
  {
    title: 'Application & State',
    skills: [
      { name: 'TanStack Query', image: '/logos/skills/tanstack.svg' },
      { name: 'TanStack Router', image: '/logos/skills/tanstack.svg' },
      { name: 'TanStack Table', image: '/logos/skills/tanstack.svg' },
      { name: 'TanStack Virtual', image: '/logos/skills/tanstack.svg' },
      { name: 'Zustand', image: '/logos/skills/zustand.webp' },
      { name: 'Redux', image: '/logos/skills/redux.svg' },
      { name: 'React Context', image: '/logos/skills/react.webp' },
      { name: 'Formik', image: '/logos/skills/formik.webp' },
      { name: 'Yup' },
      { name: 'i18n' }
    ]
  },
  {
    title: 'Real-Time & APIs',
    skills: [
      { name: 'WebSocket' },
      { name: 'SignalR', image: '/logos/skills/signalr.webp', imageClassName: 'rounded-full' },
      { name: 'REST APIs', image: '/logos/skills/rest-api.webp', imageClassName: 'invert' },
      { name: 'Axios', image: '/logos/skills/axios.svg' },
      { name: 'JWT Authentication', image: '/logos/skills/jwt.svg' },
      { name: 'Refresh Tokens' },
      { name: 'Permission-Based Authorization' },
      { name: 'Permission-Based UI' }
    ]
  },
  {
    title: 'Backend & Data',
    skills: [
      { name: 'C#', image: '/logos/skills/csharp.svg' },
      { name: 'ASP.NET Core', image: '/logos/skills/dotnet.svg' },
      {
        name: 'Entity Framework Core',
        image: '/logos/skills/entity-framework-core.png',
        imageClassName: 'rounded'
      },
      { name: 'SQL Server', image: '/logos/skills/sql-server.svg' },
      { name: 'PostgreSQL', image: '/logos/skills/postgresql.svg' },
      { name: 'Redis', image: '/logos/skills/redis.svg' },
      { name: 'Node.js', image: '/logos/skills/nodejs.webp' },
      { name: 'NestJS', image: '/logos/skills/nestjs.svg' },
      { name: 'Supabase', image: '/logos/skills/supabase.svg' },
      { name: 'Drizzle ORM', image: '/logos/skills/drizzle.webp' }
    ]
  },
  {
    title: 'Testing',
    skills: [
      { name: 'Vitest', image: '/logos/skills/vitest.svg' },
      { name: 'Playwright', image: '/logos/skills/playwright.svg' },
      { name: 'React Testing Library', image: '/logos/skills/testing-library.svg' }
    ]
  },
  {
    title: 'Delivery & Observability',
    skills: [
      { name: 'Git', image: '/logos/skills/git.webp' },
      { name: 'GitLab CI/CD', image: '/logos/skills/gitlab.svg' },
      { name: 'Docker', image: '/logos/skills/docker.svg' },
      { name: 'Docker Compose', image: '/logos/skills/docker.svg' },
      { name: 'Container Registry' },
      { name: 'Linux', image: '/logos/skills/linux.svg' },
      { name: 'IIS', image: '/logos/skills/iis.webp', imageClassName: 'bg-white rounded p-0.5' },
      { name: 'SonarQube', image: '/logos/skills/sonarqube.svg' },
      { name: 'Sentry', image: '/logos/skills/sentry.svg' }
    ]
  }
];

export type Project = {
  title: string;
  description: string;
  category: string;
  tags: string[];
  image?: string;
  imageClassName?: string;
  coverLabel?: string;
  links?: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    title: 'Report Issue Platform',
    category: 'Developer tooling',
    coverLabel: 'Report Issue',
    description:
      'Built reusable React and ASP.NET Core packages for issue reporting with privacy-aware screenshot annotation, browser-tab recording, console and network diagnostics, request correlation, and KVKK/GDPR-aware consent flows. Rolled out across 6+ projects, reducing issue triage and diagnosis time by approximately 70%.',
    tags: ['React', 'TypeScript', 'ASP.NET Core', 'npm', 'NuGet'],
    links: [
      { label: 'npm Package', href: 'https://www.npmjs.com/package/@tra-bilisim/report-issue' },
      { label: 'NuGet Package', href: 'https://www.nuget.org/packages/ReportIssue.AspNetCore/' }
    ]
  },
  {
    title: 'TRA UI Kit',
    category: 'Frontend platform',
    description:
      'Developed a reusable React and TypeScript component library with 30+ components, adopted across 5+ applications. Part of a shared frontend platform with TRA UI Base to standardize application foundations.',
    image: '/logos/projects/tra-ui-kit.webp',
    imageClassName: 'object-contain!',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Component Library'],
    links: [
      { label: 'View Code', href: 'https://github.com/smhirmak/tra-ui-kit' },
      { label: 'Live UI Kit', href: 'https://ui.trabilisim.tech/v1' }
    ]
  },
  {
    title: 'TRA UI Base',
    category: 'Frontend platform',
    description:
      'Developed a Vite project template and Node.js/TypeScript CLI as part of the shared frontend platform. The foundation has been used to bootstrap 10+ internal projects.',
    image: '/logos/projects/tra-ui-base.webp',
    imageClassName: 'object-contain!',
    tags: ['React', 'Vite', 'TypeScript', 'Node.js', 'CLI'],
    links: [{ label: 'View Code', href: 'https://github.com/smhirmak/tra-ui-base' }]
  },
  {
    title: 'Kairos Psychology & Child Development Platform',
    category: 'Full-stack platform',
    image: '/logos/projects/kairos-logo.webp',
    imageClassName: 'object-contain! bg-[#071f16]! p-2',
    description:
      'Built and launched a full-stack Next.js platform with dynamic specialist and service management, appointment scheduling, availability management, an admin CMS, RBAC/MFA, email workflows and SEO. Uses PostgreSQL, Drizzle ORM and Supabase, with Vitest and Playwright tests.',
    tags: [
      'Next.js',
      'TypeScript',
      'PostgreSQL',
      'Drizzle ORM',
      'Supabase',
      'Vitest',
      'Playwright'
    ],
    links: [{ label: 'View Live App', href: 'https://kairoscocukpsikoloji.com/' }]
  },
  {
    title: 'Tera Bank — Customer Onboarding & CRM',
    category: 'FinTech / RegTech',
    image: '/logos/projects/tera-bank-logo.svg',
    imageClassName: 'object-contain! p-6',
    description:
      'Owned the React UI end-to-end for customer onboarding and CRM, covering customer data, user management, permission-based workflows and real-time state. Also contributed to ASP.NET Core backend features and integrations.',
    tags: ['React', 'ASP.NET Core', 'CRM', 'Permission-Based UI']
  },
  {
    title: 'Tera Yatırım — Account Opening, CRM & Trading',
    category: 'FinTech / RegTech',
    image: '/logos/projects/tera-yatirim-logo.svg',
    imageClassName: 'object-contain! p-6',
    description:
      'Developed the React UI for online account opening and CRM, including multi-step onboarding, document workflows and customer operations, with contributions to the .NET backend. Built TeraRobot’s real-time trading and automation interfaces using SignalR-driven market and order updates.',
    tags: ['React', '.NET', 'SignalR', 'Trading', 'Onboarding']
  },
  {
    title: 'Tera Özel Güvenlik — Security Operations',
    category: 'Operations platform',
    image: '/logos/projects/tera-oze-guvenlik-logo.webp',
    imageClassName: 'object-contain!',
    description:
      'Owned the complete React UI for a platform serving multiple companies, covering shifts, attendance, patrols, reports, documents and user administration. Implemented major parts of the Node.js/NestJS backend with separate users, documents and workflows for each company.',
    tags: ['React', 'Node.js', 'NestJS', 'Multi-Company Workflows']
  }
];
