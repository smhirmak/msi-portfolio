import { skills } from '@/data/constants';
import { FocusCards } from '../ui/focus-cards';
import { useMessages } from '@/i18n';

export default function Skills() {
  const { messages } = useMessages();
  const names = messages.skillNames as Record<string, string>;
  const localized = skills.map((group, index) => ({
    ...group,
    title: messages.skillGroups[index],
    skills: group.skills.map((skill) => ({ ...skill, name: names[skill.name] || skill.name }))
  }));
  return (
    <section id="skills" tabIndex={-1} aria-labelledby="skills-title">
      <h2 id="skills-title" className="text-3xl font-bold sm:text-4xl">
        {messages.skills}
      </h2>
      <p className="mt-3 mb-6 text-base text-text-secondary sm:text-lg">{messages.skillsIntro}</p>
      <FocusCards cards={localized} />
    </section>
  );
}
