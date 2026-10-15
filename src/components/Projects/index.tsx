import { projects } from '@/data/constants';
import { LampContainer } from '../ui/lamp';
import { HoverEffect } from '../ui/card-hover-effect';
import { useMessages } from '@/i18n';

export default function Projects() {
  const { messages } = useMessages();
  const labels = messages.links as Record<string, string>;
  const localized = projects.map((project, index) => ({
    ...project,
    ...messages.projectDetails[index],
    links: project.links?.map((link) => ({ ...link, label: labels[link.label] || link.label }))
  }));
  return (
    <section id="projects" tabIndex={-1} aria-labelledby="projects-title" className="relative">
      <LampContainer>
        <h2 id="projects-title" className="text-3xl font-bold sm:text-4xl">
          {messages.projects}
        </h2>
        <p className="mt-3 text-base text-text-secondary sm:text-lg">{messages.projectIntro}</p>
      </LampContainer>
      <HoverEffect items={localized} />
    </section>
  );
}
