import { act, render, screen } from '@testing-library/react';
import { StrictMode } from 'react';
import { describe, expect, it, vi } from 'vitest';
import PreLoader, { INTRO_STORAGE_KEY } from '@/components/PreLoader/PreLoader';
vi.mock('@/i18n', async () => {
  const { en } = await import('@/i18n/messages');
  return { useMessages: () => ({ locale: 'en', messages: en }) };
});

describe('first-visit intro', () => {
  it('finishes within 850ms and does not replay on subsequent mounts', () => {
    vi.useFakeTimers();
    const first = render(
      <StrictMode>
        <PreLoader />
      </StrictMode>
    );
    act(() => vi.advanceTimersByTime(1));
    expect(screen.getByTestId('intro-overlay')).toBeInTheDocument();
    act(() => vi.advanceTimersByTime(850));
    expect(screen.queryByTestId('intro-overlay')).not.toBeInTheDocument();
    expect(localStorage.getItem(INTRO_STORAGE_KEY)).toBe('1');
    first.unmount();
    render(<PreLoader />);
    act(() => vi.runAllTimers());
    expect(screen.queryByTestId('intro-overlay')).not.toBeInTheDocument();
  });
  it('skips animation for reduced-motion users', () => {
    vi.spyOn(window, 'matchMedia').mockReturnValue({
      matches: true,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn()
    } as unknown as MediaQueryList);
    render(<PreLoader />);
    expect(screen.queryByTestId('intro-overlay')).not.toBeInTheDocument();
  });
  it('does not cover direct section links', () => {
    window.history.replaceState(null, '', '/#contact');
    render(<PreLoader />);
    expect(screen.queryByTestId('intro-overlay')).not.toBeInTheDocument();
    window.history.replaceState(null, '', '/');
  });
});
