import { Bio } from '@/data/constants';
import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react';
import { useMessages } from '@/i18n';

export default function Footer() {
  const { messages } = useMessages();
  return (
    <footer className="mt-16 border-t border-slate-800 px-4 py-10 text-center">
      <p className="font-semibold text-xl text-primary">{Bio.name}</p>
      <p className="mt-2 text-sm text-text-secondary">{messages.title}</p>
      <nav aria-label={messages.footer} className="my-5 flex flex-wrap justify-center gap-x-6">
        {Object.entries(messages.nav).map(([id, label]) => (
          <a
            key={id}
            href={`#${id}`}
            className="inline-flex min-h-11 items-center text-sm transition-colors hover:text-primary">
            {label}
          </a>
        ))}
      </nav>
      <div className="flex justify-center gap-3">
        <a
          href={Bio.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="flex size-11 items-center justify-center hover:text-icons-hover">
          <IconBrandLinkedin size={26} aria-hidden="true" />
        </a>
        <a
          href={Bio.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="flex size-11 items-center justify-center hover:text-icons-hover">
          <IconBrandGithub size={26} aria-hidden="true" />
        </a>
      </div>
      <p className="mt-4 text-xs text-text-secondary">{messages.footer}</p>
    </footer>
  );
}
