import Head from 'next/head';
import Link from 'next/link';
import { useMessages } from '@/i18n';
import { Bio } from '@/data/constants';

export default function ErrorPage({ code }: { code: 404 | 500 }) {
  const { messages } = useMessages();
  const title = code === 404 ? messages.notFound : messages.serverError;
  return (
    <>
      <Head>
        <title>{`${code} | ${Bio.name}`}</title>
        <meta name="robots" content="noindex" />
      </Head>
      <main className="flex min-h-dvh flex-col items-center justify-center gap-5 px-6 text-center">
        <p className="text-7xl font-semibold text-primary">{code}</p>
        <h1 className="text-3xl font-semibold">{title}</h1>
        <p className="text-text-secondary">{messages.errorIntro}</p>
        <Link href="/" className="button-primary">
          {messages.home}
        </Link>
      </main>
    </>
  );
}
