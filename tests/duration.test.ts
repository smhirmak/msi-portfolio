import { describe, expect, it } from 'vitest';
import { formatDuration } from '@/lib/duration';

describe('experience duration', () => {
  it('formats ongoing and completed employment at month precision', () => {
    expect(formatDuration('2023-11', '2026-10', 'tr')).toBe('2 yıl 11 ay');
    expect(formatDuration('2022-01', '2023-07', 'en')).toBe('1 year 6 months');
  });
  it('handles anniversaries, singular months and short periods', () => {
    expect(formatDuration('2023-11', '2026-11', 'tr')).toBe('3 yıl');
    expect(formatDuration('2023-12', '2024-01', 'en')).toBe('1 month');
    expect(formatDuration('2023-11', '2023-11', 'tr')).toBe('1 aydan az');
  });
  it('does not display invalid or negative periods', () => {
    expect(formatDuration('invalid', '2026-10', 'tr')).toBe('');
    expect(formatDuration('2026-11', '2026-10', 'en')).toBe('');
  });
});
