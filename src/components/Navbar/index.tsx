import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { IconMenu2, IconX, IconBrandGithub } from '@tabler/icons-react';
import Logo from '@/images/logo.png';
import { Bio } from '@/data/constants';
import { useMessages } from '@/i18n';
import { cn } from '@/lib/utils';
import { MovingBorder } from '@/components/ui/moving-border';

export default function NavBar() {
  const { messages, locale } = useMessages();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('hero');
  const button = useRef<HTMLButtonElement>(null);
  const nav = useRef<HTMLElement>(null);
  const links = Object.entries(messages.nav);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id);
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: 0 }
    );
    document.querySelectorAll('main section[id]').forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const closeOutside = (event: PointerEvent) => {
      if (!nav.current?.contains(event.target as Node)) setOpen(false);
    };
    const media = window.matchMedia('(min-width: 1024px)');
    const closeWide = () => {
      if (media.matches) setOpen(false);
    };
    document.addEventListener('pointerdown', closeOutside);
    media.addEventListener('change', closeWide);
    return () => {
      document.removeEventListener('pointerdown', closeOutside);
      media.removeEventListener('change', closeWide);
    };
  }, []);

  async function changeLanguage(nextLocale: string) {
    document.cookie = `NEXT_LOCALE=${nextLocale};path=/;max-age=31536000;SameSite=Lax`;
    const target = `${router.asPath.split('#')[0]}${window.location.hash}`;
    await router.push(target, target, { locale: nextLocale, scroll: false });
    setOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 h-20 border-b border-slate-800 bg-bg/95 backdrop-blur-md">
      <nav
        ref={nav}
        aria-label={locale === 'tr' ? 'Ana navigasyon' : 'Main navigation'}
        className="mx-auto flex h-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6"
        onKeyDown={(event) => {
          if (event.key === 'Escape' && open) {
            setOpen(false);
            button.current?.focus();
          }
        }}
        onBlur={(event) => {
          if (event.relatedTarget && !event.currentTarget.contains(event.relatedTarget as Node))
            setOpen(false);
        }}>
        <a href="#hero" className="shrink-0" aria-label={Bio.name} onClick={() => setOpen(false)}>
          <Image
            src={Logo}
            alt={Bio.name}
            className="h-auto w-36 sm:w-48 xl:w-56"
            sizes="(min-width: 1280px) 224px, (min-width: 640px) 192px, 144px"
            preload
          />
        </a>
        <ul className="hidden items-center gap-4 text-sm lg:flex xl:gap-6">
          {links.map(([id, label]) => (
            <li key={id}>
              <a
                href={`#${id}`}
                aria-current={active === id ? 'location' : undefined}
                className={cn(
                  'inline-flex min-h-11 items-center transition-colors hover:text-primary',
                  active === id && 'text-primary'
                )}>
                {label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <select
            aria-label={messages.language}
            value={locale}
            onChange={(event) => void changeLanguage(event.target.value)}
            className="min-h-11 rounded-lg border border-slate-600 bg-card px-2 text-sm font-semibold cursor-pointer">
            <option value="en" lang="en">
              EN
            </option>
            <option value="tr" lang="tr">
              TR
            </option>
          </select>
          <a
            href={Bio.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={messages.github}
            className="relative isolate hidden min-h-11 items-center gap-2 rounded-lg border border-slate-600 px-3 text-primary transition-colors hover:bg-card lg:inline-flex">
            <MovingBorder>
              <div className="size-12 rounded-full bg-red-500/70 blur-md" />
            </MovingBorder>
            <IconBrandGithub size={20} aria-hidden="true" />
            <span className="hidden text-sm xl:inline">GitHub</span>
          </a>
          <button
            ref={button}
            type="button"
            aria-label={open ? messages.menuClose : messages.menuOpen}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            className="flex size-11 items-center justify-center rounded-lg border border-slate-600 lg:hidden"
            onClick={() => setOpen(!open)}>
            {open ? <IconX aria-hidden="true" /> : <IconMenu2 aria-hidden="true" />}
          </button>
        </div>
        <ul
          id="mobile-navigation"
          hidden={!open}
          className="absolute inset-x-0 top-20 border-b border-slate-700 bg-bg px-4 py-3 shadow-xl lg:hidden">
          {links.map(([id, label]) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className="block rounded-lg px-4 py-3 hover:bg-card hover:text-primary"
                aria-current={active === id ? 'location' : undefined}
                onClick={() => setOpen(false)}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
