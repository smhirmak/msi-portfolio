// Dates are month-precision in the CV. Count elapsed calendar months, without
// counting both endpoints as full months or depending on the browser timezone.
export function formatDuration(start: string, end: string, locale: 'en' | 'tr') {
  const from = new Date(`${start}-01T00:00:00Z`);
  const to = new Date(`${end}-01T00:00:00Z`);
  const months =
    (to.getUTCFullYear() - from.getUTCFullYear()) * 12 + to.getUTCMonth() - from.getUTCMonth();
  if (!Number.isFinite(months) || months < 0) return '';
  if (months === 0) return locale === 'tr' ? '1 aydan az' : 'Less than a month';
  const years = Math.floor(months / 12);
  const remainder = months % 12;
  const parts: string[] = [];
  if (years)
    parts.push(locale === 'tr' ? `${years} yıl` : `${years} year${years === 1 ? '' : 's'}`);
  if (remainder)
    parts.push(
      locale === 'tr' ? `${remainder} ay` : `${remainder} month${remainder === 1 ? '' : 's'}`
    );
  return parts.join(' ');
}
