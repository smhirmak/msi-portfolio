import { act, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { TypewriterText } from '@/components/ui/typewriter-text';

const roles = [
  'React, Next.js & TypeScript',
  'Real-Time FinTech Interfaces',
  'ASP.NET Core & CI/CD'
];

describe('hero typewriter', () => {
  it('types and deletes text, visits all three roles, and loops', () => {
    vi.useFakeTimers();
    render(<TypewriterText values={roles} />);
    const label = screen.getByTestId('typewriter-text');
    act(() => vi.advanceTimersByTime(250));
    expect(label.textContent).toBe('Rea');
    const completed = new Set<string>();
    let previousLength = label.textContent!.length;
    let deleted = false;
    for (let time = 0; time < 15000; time += 100) {
      act(() => vi.advanceTimersByTime(100));
      const value = label.textContent || '';
      if (roles.includes(value)) completed.add(value);
      if (value.length < previousLength) deleted = true;
      previousLength = value.length;
    }
    expect(completed).toEqual(new Set(roles));
    expect(deleted).toBe(true);
  });
  it('renders the full text without a cursor for reduced motion', () => {
    vi.spyOn(window, 'matchMedia').mockReturnValue({
      matches: true,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn()
    } as unknown as MediaQueryList);
    render(<TypewriterText values={roles} />);
    expect(screen.getByTestId('typewriter-text')).toHaveTextContent(roles[0]);
    expect(document.querySelector('.typewriter-cursor')).toBeNull();
  });
  it('resets to the translated roles when the language changes', () => {
    vi.useFakeTimers();
    const view = render(<TypewriterText values={roles} />);
    act(() => vi.advanceTimersByTime(800));
    view.rerender(<TypewriterText values={['Gerçek Zamanlı FinTech Arayüzleri']} />);
    act(() => vi.advanceTimersByTime(3000));
    expect(screen.getByTestId('typewriter-text')).toHaveTextContent(
      'Gerçek Zamanlı FinTech Arayüzleri'
    );
  });
});
