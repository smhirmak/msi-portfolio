import { useEffect, useState } from 'react';
import { useMotionPreference } from '@/hooks/useMotionPreference';

export function TypewriterText({ values }: { values: string[] }) {
  const reduced = useMotionPreference();
  const [text, setText] = useState(values[0] || '');

  useEffect(() => {
    if (reduced || values.length === 0) return;
    let word = 0;
    let length = 0;
    let deleting = false;
    let timer: number;
    setText('');
    const tick = () => {
      const characters = Array.from(values[word]);
      length += deleting ? -1 : 1;
      setText(characters.slice(0, length).join(''));
      let delay = deleting ? 35 : 65;
      if (!deleting && length === characters.length) {
        deleting = true;
        delay = 1600;
      } else if (deleting && length === 0) {
        deleting = false;
        word = (word + 1) % values.length;
        delay = 250;
      }
      timer = window.setTimeout(tick, delay);
    };
    timer = window.setTimeout(tick, 100);
    return () => window.clearTimeout(timer);
  }, [values, reduced]);

  return (
    <span data-testid="typewriter-text">
      {reduced ? values[0] : text}
      {!reduced && <span aria-hidden="true" className="typewriter-cursor" />}
    </span>
  );
}
