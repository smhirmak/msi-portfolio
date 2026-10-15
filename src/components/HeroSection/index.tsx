import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react';
import { Bio } from '@/data/constants';
import HeroBgAnimation from '@/components/HeroBgAnimation';
import { useMessages } from '@/i18n';
import { useMotionPreference } from '@/hooks/useMotionPreference';
import { TypewriterText } from '@/components/ui/typewriter-text';

export default function Hero() {
  const { messages } = useMessages();
  const reduced = useMotionPreference();
  return (
    <section
      id="hero"
      tabIndex={-1}
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden py-10 sm:py-14">
      <div className="relative z-10 max-w-4xl">
        <h1
          id="hero-title"
          className="text-4xl leading-tight font-bold tracking-tight sm:text-5xl lg:text-6xl">
          <span className="block mb-2 text-2xl font-medium text-text-secondary sm:text-3xl">
            {messages.greeting}
          </span>
          {Bio.name}
        </h1>
        <p className="mt-5 text-xl font-semibold sm:text-3xl">{messages.title}</p>
        <p
          aria-hidden="true"
          className="mt-3 min-h-14 text-lg font-semibold text-primary sm:min-h-8 sm:text-xl">
          <TypewriterText values={messages.roles} />
        </p>
        <p className="mt-3 max-w-3xl text-base leading-8 text-text-secondary sm:text-lg">
          {messages.hero}
        </p>
        <ul className="mt-6 flex flex-wrap gap-3 text-sm text-neutral-200">
          {[messages.pipelines, messages.deployments, Bio.location].map((item) => (
            <li key={item} className="rounded-lg border border-slate-700 bg-card/50 px-3 py-2">
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#projects" className="button-primary">
            {messages.viewProjects}
          </a>
          <a href="#contact" className="button-secondary">
            {messages.getInTouch}
          </a>
          <a
            href={Bio.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="button-secondary">
            {messages.resume}
          </a>
        </div>
        <div className="mt-6 flex gap-3">
          <a
            href={Bio.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex size-11 items-center justify-center rounded-lg transition-colors hover:text-icons-hover">
            <IconBrandLinkedin size={28} aria-hidden="true" />
          </a>
          <a
            href={Bio.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex size-11 items-center justify-center rounded-lg transition-colors hover:text-icons-hover">
            <IconBrandGithub size={28} aria-hidden="true" />
          </a>
        </div>
      </div>
      {!reduced && (
        <div
          className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-end opacity-60"
          aria-hidden="true">
          <HeroBgAnimation />
        </div>
      )}
    </section>
  );
}
