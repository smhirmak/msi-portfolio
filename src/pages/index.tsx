import Head from 'next/head';
import { Bio } from '@/data/constants';
import { useMessages } from '@/i18n';
import NavBar from '@/components/Navbar';
import Hero from '@/components/HeroSection';
import Projects from '@/components/Projects';
import Experience from '@/components/Experince';
import Skills from '@/components/Skills';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import PreLoader from '@/components/PreLoader/PreLoader';

export function getStaticProps() {
  return { props: { currentMonth: new Date().toISOString().slice(0, 7) } };
}

export default function Home({ currentMonth }: { currentMonth: string }) {
  const { locale, messages } = useMessages();
  const title = `${Bio.name} | ${messages.title}`;
  const canonical = `${Bio.website}${locale === 'tr' ? 'tr' : ''}`;
  const ogImage = `${Bio.website}og/${locale}.png`;
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    '@id': `${canonical}#profile`,
    url: canonical,
    name: title,
    description: messages.description,
    inLanguage: locale,
    mainEntity: {
      '@type': 'Person',
      '@id': `${Bio.website}#person`,
      name: Bio.name,
      url: Bio.website,
      jobTitle: messages.title,
      description: messages.hero,
      sameAs: [Bio.github, Bio.linkedin]
    }
  };
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={messages.description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={messages.ogDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonical} />
        <meta property="og:site_name" content={Bio.name} />
        <meta property="og:locale" content={locale === 'tr' ? 'tr_TR' : 'en_US'} />
        <meta property="og:locale:alternate" content={locale === 'tr' ? 'en_US' : 'tr_TR'} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={title} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={messages.ogDescription} />
        <meta name="twitter:image" content={ogImage} />
        <meta name="twitter:image:alt" content={title} />
        <meta name="theme-color" content="#020617" />
        <script
          key="profile-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, '\\u003c')
          }}
        />
        <link rel="canonical" href={canonical} />
        <link rel="alternate" hrefLang="en" href={Bio.website} />
        <link rel="alternate" hrefLang="tr" href={`${Bio.website}tr`} />
        <link rel="alternate" hrefLang="x-default" href={Bio.website} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Head>
      <a
        href="#main-content"
        className="fixed top-3 left-3 z-110 -translate-y-24 rounded-lg bg-text-primary px-4 py-3 text-bg focus:translate-y-0">
        {messages.skip}
      </a>
      <PreLoader />
      <NavBar />
      <main
        id="main-content"
        tabIndex={-1}
        className="mx-auto max-w-7xl space-y-16 px-4 pb-8 sm:space-y-20 sm:px-6">
        <Hero />
        <Projects />
        <Experience currentMonth={currentMonth} />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
