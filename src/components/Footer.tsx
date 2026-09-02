import { Link } from 'react-router-dom';
import { Instagram, Linkedin } from 'lucide-react';
import { FaTiktok } from 'react-icons/fa';
import { SankofaMark } from './SankofaMark';
import { pillars } from '@/data/pillars';

const socialLinks = [
  { icon: Instagram, url: 'https://www.instagram.com/sanku.kama/', label: 'Instagram' },
  { icon: Linkedin, url: 'https://www.linkedin.com/company/sanku-kama/', label: 'LinkedIn' },
  { icon: FaTiktok, url: 'https://www.tiktok.com/@sanku.kama', label: 'Tiktok'}
];

export function Footer() {
  return (
    <footer className="relative bg-anthracite text-offwhite mt-24 overflow-hidden">
      {/* Watermark Sankofa */}
      <SankofaMark
        className="absolute -right-12 -bottom-12 w-72 h-72 text-offwhite/[0.03] pointer-events-none"
        color="currentColor"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <SankofaMark className="w-8 h-8 text-mauve-300" />
              <span className="font-cinzel text-lg font-700 tracking-[0.15em]">
                SANKU KÂMA
              </span>
            </div>

  <div className="flex gap-3">
                
              {socialLinks.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full border border-offwhite/15 flex items-center justify-center text-offwhite/50 hover:text-lime hover:border-lime/50 transition-colors"
                    aria-label={s.label}
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Pillars */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest text-offwhite/40 mb-4">
              Piliers
            </h4>
            <ul className="space-y-3">
              {pillars.map((p) => (
                <li key={p.id}>
                  <Link
                    to={`/articles?pillar=${p.id}`}
                    className="font-sans text-sm text-offwhite/60 hover:text-lime transition-colors"
                  >
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest text-offwhite/40 mb-4">
              Navigation
            </h4>
            <ul className="space-y-3">
              {[
                { to: '/articles', label: 'Analyses' },
                { to: '/sources', label: 'Bibliothèque de sources' },
                { to: '/apropos', label: 'À propos & Équipe' },
                { to: '/contact', label: 'Contact' },
              ].map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="font-sans text-sm text-offwhite/60 hover:text-lime transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-offwhite/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-offwhite/40">
            © {new Date().getFullYear()} SANKU KÂMA. Tous droits réservés.
          </p>
          <p className="font-sans text-xs text-offwhite/40">
            
          </p>
        </div>
      </div>
    </footer>
  );
}
