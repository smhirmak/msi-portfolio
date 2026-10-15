import Image from 'next/image';
import { useMessages } from '@/i18n';
import { Timeline } from '@/components/ui/timeline';

export default function Education() {
  const { messages } = useMessages();
  const data = [
    {
      title: messages.educationDates,
      content: (
        <article className="flex items-center gap-4 rounded-xl border border-slate-700 p-5 sm:gap-6 sm:p-6">
          <Image
            src="/logos/education/sau.png"
            alt={messages.university}
            width={80}
            height={80}
            className="size-14 shrink-0 rounded-lg object-contain sm:size-20"
          />
          <div>
            <h3 className="text-xl font-semibold sm:text-2xl">{messages.university}</h3>
            <p className="mt-2 text-sm leading-6 sm:text-base">{messages.degree}</p>
          </div>
        </article>
      )
    }
  ];
  return (
    <section id="education" tabIndex={-1} aria-labelledby="education-title">
      <Timeline
        title={messages.education}
        titleId="education-title"
        desc={messages.educationIntro}
        data={data}
        startOffset={0.8}
      />
    </section>
  );
}
