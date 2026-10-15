import { useRouter } from 'next/router';
import { en, tr } from './messages';

export function useMessages() {
  const router = useRouter();
  const locale: 'tr' | 'en' = router.locale === 'tr' ? 'tr' : 'en';
  return { locale, messages: locale === 'tr' ? tr : en };
}
