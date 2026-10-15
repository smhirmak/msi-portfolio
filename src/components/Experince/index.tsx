import Image from 'next/image';
import { Timeline } from '../ui/timeline';
import { useMessages } from '@/i18n';
import { useEffect, useState } from 'react';
import { formatDuration } from '@/lib/duration';

export default function Experience({ currentMonth }: { currentMonth: string }) {
  const { messages, locale } = useMessages();
  const [month, setMonth] = useState(currentMonth);
  useEffect(() => {
    // Refresh static build data after hydration without a server/client mismatch.
    setMonth(new Date().toISOString().slice(0, 7));
  }, []);
  const data = [
    {
      title: messages.traDates,
      subTitle: formatDuration('2023-11', month, locale),
      content: (
        <article>
          <h3 className="mb-3 text-xl font-bold sm:text-2xl">{messages.traRole}</h3>
          <div className="mb-4 flex items-center gap-4">
            <Image
              src="/logos/experiences/tra-bilisim.svg"
              alt="TRA Bilişim"
              width={72}
              height={72}
              className="size-14 shrink-0 rounded-lg object-contain sm:size-18"
            />
            <div>
              <p className="text-lg font-semibold">TRA Bilişim</p>
              <p className="mt-1 text-sm text-text-secondary">{messages.traLocation}</p>
            </div>
          </div>
          <p className="mb-4 text-sm leading-7 text-text-secondary">{messages.traIntro}</p>
          <ul className="list-disc space-y-3 pl-5 text-sm leading-7 sm:text-base">
            {messages.traBullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        </article>
      )
    },
    {
      title: messages.linatekDates,
      subTitle: formatDuration('2022-01', '2023-07', locale),
      content: (
        <article>
          <h3 className="mb-3 text-xl font-bold sm:text-2xl">{messages.linatekRole}</h3>
          <div className="mb-4 flex items-center gap-4">
            <Image
              src="/logos/experiences/linatek.png"
              alt="Linatek Elektronik Raylı Sistemler"
              width={72}
              height={72}
              className="size-14 shrink-0 rounded-lg object-contain sm:size-18"
            />
            <div>
              <p className="text-lg font-semibold">Linatek Elektronik Raylı Sistemler</p>
              <p className="mt-1 text-sm text-text-secondary">{messages.linatekLocation}</p>
            </div>
          </div>
          <p className="text-sm leading-7 text-text-secondary sm:text-base">
            {messages.linatekDescription}
          </p>
        </article>
      )
    }
  ];
  return (
    <section id="experience" tabIndex={-1} aria-labelledby="experience-title">
      <Timeline
        title={messages.experience}
        titleId="experience-title"
        desc={messages.experienceIntro}
        data={data}
      />
      <div className="mt-10">
        <h3 className="mb-5 text-xl font-semibold">{messages.internships}</h3>
        <div className="grid gap-5 md:grid-cols-2">
          {['Linatek Elektronik Raylı Sistemler', 'GENPARK Power System'].map((company, index) => (
            <article key={company} className="rounded-xl border border-slate-700 p-5">
              <div className="mb-3 flex items-center gap-3">
                <Image
                  src={`/logos/experiences/${index === 0 ? 'linatek' : 'genpark'}.png`}
                  alt={company}
                  width={48}
                  height={48}
                  className="shrink-0 rounded-lg object-contain"
                />
                <div>
                  <h4 className="font-semibold">{company}</h4>
                  <p className="mt-1 text-sm text-text-secondary">{messages.internDates[index]}</p>
                </div>
              </div>
              <p className="mb-2 text-sm font-medium">{messages.internRole}</p>
              <p className="text-sm leading-7 text-text-secondary">
                {messages.internDescriptions[index]}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
