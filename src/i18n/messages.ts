import { projects } from '@/data/constants';

export const en = {
  nav: {
    hero: 'About',
    projects: 'Projects',
    experience: 'Experience',
    skills: 'Skills',
    education: 'Education',
    contact: 'Contact'
  },
  skip: 'Skip to content',
  menuOpen: 'Open navigation',
  menuClose: 'Close navigation',
  language: 'Change language',
  github: 'GitHub Profile',
  title: 'Frontend-Focused Software Engineer',
  greeting: 'Hi, I am',
  hero: 'I build accessible, real-time React, Next.js and TypeScript applications in FinTech/RegTech. My work connects frontend engineering with ASP.NET Core, automated testing and production delivery.',
  roles: ['React, Next.js & TypeScript', 'Real-Time FinTech Interfaces', 'ASP.NET Core & CI/CD'],
  pipelines: '5+ CI/CD pipelines',
  deployments: '15+ application deployments',
  resume: 'View Resume (PDF · English)',
  viewProjects: 'View Projects',
  getInTouch: 'Get in Touch',
  projects: 'Selected Projects',
  projectIntro: 'Professional platforms, reusable packages and full-stack applications.',
  links: {
    'View Code': 'View Code',
    'Live UI Kit': 'Live UI Kit',
    'View Live App': 'View Live App',
    'npm Package': 'npm Package',
    'NuGet Package': 'NuGet Package'
  },
  projectDetails: projects.map(({ title, category, description }) => ({
    title,
    category,
    description
  })),
  experience: 'Experience',
  experienceIntro:
    'Software engineering in FinTech/RegTech, backed by an electronics engineering background.',
  traDates: 'Nov 2023 – Present',
  traRole: 'Frontend Developer',
  traLocation: 'Sakarya, Türkiye · FinTech / RegTech',
  traIntro:
    'Develop products for Tera Bank, Tera Yatırım, Tera Portföy, Tera Özel Güvenlik, Tera Finansal Yatırımlar Holding (TRHOL) and Tera Yatırım Teknoloji Holding (TEHOL).',
  traBullets: [
    'Build accessible React and Next.js applications for trading, portfolio management, CRM and customer onboarding; collaborate with designers and backend engineers, and review junior developers’ code.',
    'Build live order, order book and ticker interfaces with WebSocket/SignalR; keep large datasets responsive through virtualization, memoization and TanStack Query caching.',
    'Modernize legacy React class-component and MVC frontends with function components, Vite, Next.js and the TanStack ecosystem.',
    'Maintain 5+ GitLab CI/CD pipelines with Vitest/Playwright quality checks, SonarQube analysis and Sentry monitoring.',
    'Manage production delivery for 15+ applications across container registries, Docker Compose, Linux and IIS; designed the company’s first automated IIS deployment pipeline.',
    'Built an issue-reporting platform used across 6+ projects, reducing issue triage and diagnosis time by approximately 70%.'
  ],
  linatekDates: 'Jan 2022 – Jul 2023',
  linatekRole: 'R&D / Hardware Design Engineer',
  linatekLocation: 'Malatya, Türkiye · Railway electronics',
  linatekDescription:
    'Designed, produced, tested and repaired electronic control boards and electrical control units used in railway locomotives. Contributed to hardware prototyping, troubleshooting and production support.',
  internships: 'Earlier Internships',
  internRole: 'Electrical and Electronics Engineering Intern',
  internDates: ['Jul 2021 – Jan 2022', 'Jan 2020 – Feb 2020'],
  internDescriptions: [
    'Developed embedded systems projects, assembled SMD and DIP components on PCB boards, and created schematics through reverse engineering.',
    'Worked on electrical panel design and assembly.'
  ],
  skills: 'Skills',
  skillsIntro: 'Technologies I use to build, test and deliver production applications.',
  skillGroups: [
    'Frontend & UI',
    'Application & State',
    'Real-Time & APIs',
    'Backend & Data',
    'Testing',
    'Delivery & Observability'
  ],
  skillNames: {
    'Accessibility (a11y)': 'Accessibility (a11y)',
    'JWT Authentication': 'JWT Authentication',
    'Refresh Tokens': 'Refresh Tokens',
    'Permission-Based Authorization': 'Permission-Based Authorization',
    'Permission-Based UI': 'Permission-Based UI',
    'Container Registry': 'Container Registry'
  },
  education: 'Education',
  educationIntro: 'An engineering foundation in electronics, hardware and software.',
  university: 'Sakarya University',
  degree: 'B.Sc. in Electrical and Electronics Engineering',
  educationDates: 'Sep 2017 – Feb 2022',
  contact: 'Contact',
  contactIntro: 'Have a project or opportunity in mind? Let’s talk.',
  languages: ['Turkish — Native speaker', 'English — Intermediate'],
  fields: { name: 'Your Name', email: 'Your Email', subject: 'Subject', message: 'Message' },
  required: 'This field is required.',
  invalidEmail: 'Enter a valid email address.',
  tooLong: 'Please shorten this field.',
  send: 'Send Message',
  sending: 'Sending…',
  sent: 'Your message was sent successfully.',
  sendError: 'Your message could not be sent. Please try again or email me directly.',
  formErrors: 'Please correct the highlighted fields.',
  captchaLabel: 'Security verification',
  captchaRequired: 'Please complete the security verification.',
  captchaError: 'Security verification could not load. Please retry or email me directly.',
  captchaUnavailable: 'The contact form is temporarily unavailable. Please email me directly.',
  captchaDevelopment: 'Development preview: CAPTCHA uses a test key.',
  retry: 'Retry',
  footer: 'Built by Muhammed Semih Irmak.',
  description:
    'Frontend-focused software engineer building React, Next.js and TypeScript applications in FinTech/RegTech, with ASP.NET Core, real-time UI and CI/CD experience.',
  ogDescription:
    'Explore my FinTech/RegTech work, reusable frontend platforms, developer tools and full-stack applications.',
  notFound: 'Page not found',
  serverError: 'Something went wrong',
  errorIntro: 'You can return to the homepage to explore my work.',
  home: 'Back to Homepage'
};

export type Messages = typeof en;
export const tr: Messages = {
  nav: {
    hero: 'Hakkımda',
    projects: 'Projeler',
    experience: 'Deneyim',
    skills: 'Yetkinlikler',
    education: 'Eğitim',
    contact: 'İletişim'
  },
  skip: 'İçeriğe geç',
  menuOpen: 'Menüyü aç',
  menuClose: 'Menüyü kapat',
  language: 'Dili değiştir',
  github: 'GitHub Profili',
  title: 'Frontend Odaklı Yazılım Mühendisi',
  greeting: 'Merhaba, ben',
  hero: 'FinTech/RegTech alanında erişilebilir, gerçek zamanlı React, Next.js ve TypeScript uygulamaları geliştiriyorum. Frontend mühendisliğini ASP.NET Core, otomatik testler ve üretim ortamına dağıtım deneyimiyle birleştiriyorum.',
  roles: [
    'React, Next.js ve TypeScript',
    'Gerçek Zamanlı FinTech Arayüzleri',
    'ASP.NET Core ve CI/CD'
  ],
  pipelines: '5+ CI/CD pipeline',
  deployments: '15+ uygulamanın dağıtımı',
  resume: 'CV’yi Gör (PDF · İngilizce)',
  viewProjects: 'Projeleri Gör',
  getInTouch: 'İletişime Geç',
  projects: 'Seçili Projeler',
  projectIntro:
    'Profesyonel platformlar, yeniden kullanılabilir paketler ve full-stack uygulamalar.',
  links: {
    'View Code': 'Kodu Gör',
    'Live UI Kit': 'UI Kit’i Gör',
    'View Live App': 'Siteyi Ziyaret Et',
    'npm Package': 'npm Paketi',
    'NuGet Package': 'NuGet Paketi'
  },
  projectDetails: [
    {
      title: 'Report Issue Platform',
      category: 'Geliştirici araçları',
      description:
        'Gizliliği gözeten ekran görüntüsü işaretleme, tarayıcı sekmesi kaydı, konsol ve ağ tanılama, istek ilişkilendirme ve KVKK/GDPR odaklı onay akışları içeren React ve ASP.NET Core paketleri geliştirdim. 6+ projede kullanılan platform, sorunların ön inceleme ve tanılama süresini yaklaşık %70 azalttı.'
    },
    {
      title: 'TRA UI Kit',
      category: 'Frontend platformu',
      description:
        '5+ uygulamada kullanılan, 30+ bileşenli React ve TypeScript bileşen kütüphanesi geliştirdim. TRA UI Base ile birlikte uygulama temellerini standartlaştıran ortak frontend platformunun bir parçası.'
    },
    {
      title: 'TRA UI Base',
      category: 'Frontend platformu',
      description:
        'Ortak frontend platformu kapsamında Vite proje şablonu ve Node.js/TypeScript CLI geliştirdim. Bu altyapıyla 10+ şirket içi projenin başlangıcı yapıldı.'
    },
    {
      title: 'Kairos Psikoloji ve Çocuk Gelişimi Platformu',
      category: 'Full-stack platform',
      description:
        'Uzman ve hizmet yönetimi, randevu planlama, uygunluk yönetimi, yönetim paneli, RBAC/MFA, e-posta akışları ve SEO özellikleri içeren Next.js platformunu geliştirip yayına aldım. PostgreSQL, Drizzle ORM ve Supabase kullanıyor; Vitest ve Playwright testleri içeriyor.'
    },
    {
      title: 'Tera Bank — Müşteri Edinimi ve CRM',
      category: 'FinTech / RegTech',
      description:
        'Müşteri verileri, kullanıcı yönetimi, yetkiye dayalı iş akışları ve gerçek zamanlı durumu kapsayan müşteri edinimi ve CRM platformunun React arayüzünü uçtan uca geliştirdim. ASP.NET Core backend özellikleri ve entegrasyonlarına da katkıda bulundum.'
    },
    {
      title: 'Tera Yatırım — Hesap Açılışı, CRM ve Trading',
      category: 'FinTech / RegTech',
      description:
        'Çok adımlı müşteri edinimi, belge akışları ve müşteri operasyonlarını kapsayan online hesap açılışı ve CRM arayüzlerini React ile geliştirdim; .NET backend’e katkıda bulundum. TeraRobot’un gerçek zamanlı trading ve otomasyon arayüzlerini SignalR üzerinden gelen piyasa ve emir güncellemeleriyle geliştirdim.'
    },
    {
      title: 'Tera Özel Güvenlik — Operasyon Yönetimi',
      category: 'Operasyon platformu',
      description:
        'Birden fazla şirkete hizmet veren vardiya, devam takibi, devriye, rapor, belge ve kullanıcı yönetimi platformunun React arayüzünü tamamen geliştirdim. Node.js/NestJS backend’in önemli bölümlerini, her şirket için ayrı kullanıcı, belge ve iş akışları sağlayacak şekilde uyguladım.'
    }
  ],
  experience: 'Deneyim',
  experienceIntro:
    'Elektronik mühendisliği temeliyle FinTech/RegTech alanında yazılım geliştirme deneyimi.',
  traDates: 'Kas 2023 – Devam ediyor',
  traRole: 'Frontend Geliştirici',
  traLocation: 'Sakarya, Türkiye · FinTech / RegTech',
  traIntro:
    'Tera Bank, Tera Yatırım, Tera Portföy, Tera Özel Güvenlik, Tera Finansal Yatırımlar Holding (TRHOL) ve Tera Yatırım Teknoloji Holding (TEHOL) için ürünler geliştiriyorum.',
  traBullets: [
    'Trading, portföy yönetimi, CRM ve müşteri edinimi için erişilebilir React ve Next.js uygulamaları geliştiriyorum; tasarımcılar ve backend mühendisleriyle çalışıyor, junior geliştiricilerin kodlarını inceliyorum.',
    'WebSocket/SignalR ile canlı emir, emir defteri ve fiyat arayüzleri geliştiriyorum; sanallaştırma, memoization ve TanStack Query önbelleğiyle büyük veri kümelerinde performansı koruyorum.',
    'Eski React class component ve MVC arayüzlerini function component, Vite, Next.js ve TanStack ekosistemiyle modernleştiriyorum.',
    'Vitest/Playwright kalite kontrolleri, SonarQube analizi ve Sentry izlemesi içeren 5+ GitLab CI/CD pipeline yönetiyorum.',
    'Container registry, Docker Compose, Linux ve IIS üzerinde 15+ uygulamanın üretim ortamına dağıtımını yönetiyorum; şirketin ilk otomatik IIS dağıtım pipeline’ını tasarladım.',
    '6+ projede kullanılan issue-reporting platformuyla sorunların ön inceleme ve tanılama süresini yaklaşık %70 azalttım.'
  ],
  linatekDates: 'Oca 2022 – Tem 2023',
  linatekRole: 'Ar-Ge / Donanım Tasarım Mühendisi',
  linatekLocation: 'Malatya, Türkiye · Demiryolu elektroniği',
  linatekDescription:
    'Lokomotiflerde kullanılan elektronik kontrol kartları ve elektrik kontrol birimlerinin tasarım, üretim, test ve onarımını yaptım. Donanım prototipleme, arıza giderme ve üretim desteğine katkıda bulundum.',
  internships: 'Önceki Stajlar',
  internRole: 'Elektrik ve Elektronik Mühendisliği Stajyeri',
  internDates: ['Tem 2021 – Oca 2022', 'Oca 2020 – Şub 2020'],
  internDescriptions: [
    'Gömülü sistem projeleri geliştirdim, PCB üzerine SMD ve DIP bileşenler monte ettim ve tersine mühendislik yöntemleriyle şemalar hazırladım.',
    'Elektrik panosu tasarım ve montaj çalışmalarına katıldım.'
  ],
  skills: 'Yetkinlikler',
  skillsIntro:
    'Üretim uygulamalarını geliştirmek, test etmek ve yayına almak için kullandığım teknolojiler.',
  skillGroups: [
    'Frontend ve Arayüz',
    'Uygulama ve Durum Yönetimi',
    'Gerçek Zamanlı Sistemler ve API',
    'Backend ve Veri',
    'Test',
    'Dağıtım ve Gözlemlenebilirlik'
  ],
  skillNames: {
    'Accessibility (a11y)': 'Erişilebilirlik (a11y)',
    'JWT Authentication': 'JWT Kimlik Doğrulama',
    'Refresh Tokens': 'Yenileme Token’ları',
    'Permission-Based Authorization': 'Yetkiye Dayalı Yetkilendirme',
    'Permission-Based UI': 'Yetkiye Dayalı Arayüz',
    'Container Registry': 'Container Registry'
  },
  education: 'Eğitim',
  educationIntro: 'Elektronik, donanım ve yazılım alanlarında mühendislik temeli.',
  university: 'Sakarya Üniversitesi',
  degree: 'Elektrik ve Elektronik Mühendisliği Lisans',
  educationDates: 'Eyl 2017 – Şub 2022',
  contact: 'İletişim',
  contactIntro: 'Bir projen veya iş fırsatın mı var? Konuşalım.',
  languages: ['Türkçe — Ana dil', 'İngilizce — Orta seviye'],
  fields: { name: 'Adınız', email: 'E-posta Adresiniz', subject: 'Konu', message: 'Mesajınız' },
  required: 'Bu alan zorunludur.',
  invalidEmail: 'Geçerli bir e-posta adresi girin.',
  tooLong: 'Lütfen bu alanı kısaltın.',
  send: 'Mesaj Gönder',
  sending: 'Gönderiliyor…',
  sent: 'Mesajınız başarıyla gönderildi.',
  sendError: 'Mesajınız gönderilemedi. Tekrar deneyebilir veya doğrudan e-posta gönderebilirsiniz.',
  formErrors: 'Lütfen işaretlenen alanları düzeltin.',
  captchaLabel: 'Güvenlik doğrulaması',
  captchaRequired: 'Lütfen güvenlik doğrulamasını tamamlayın.',
  captchaError: 'Güvenlik doğrulaması yüklenemedi. Tekrar deneyin veya doğrudan e-posta gönderin.',
  captchaUnavailable:
    'İletişim formu geçici olarak kullanılamıyor. Lütfen doğrudan e-posta gönderin.',
  captchaDevelopment: 'Geliştirme önizlemesi: CAPTCHA test anahtarı kullanılıyor.',
  retry: 'Tekrar Dene',
  footer: 'Muhammed Semih Irmak tarafından geliştirildi.',
  description:
    'FinTech/RegTech alanında React, Next.js ve TypeScript uygulamaları geliştiren; ASP.NET Core, gerçek zamanlı arayüz ve CI/CD deneyimine sahip frontend odaklı yazılım mühendisi.',
  ogDescription:
    'FinTech/RegTech projelerimi, ortak frontend platformlarını, geliştirici araçlarını ve full-stack uygulamalarımı keşfedin.',
  notFound: 'Sayfa bulunamadı',
  serverError: 'Bir sorun oluştu',
  errorIntro: 'Çalışmalarımı keşfetmek için ana sayfaya dönebilirsiniz.',
  home: 'Ana Sayfaya Dön'
};
