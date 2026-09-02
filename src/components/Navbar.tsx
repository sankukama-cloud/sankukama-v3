import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { SankofaMark } from './SankofaMark';
import { pillars } from '@/data/pillars';

const navLinks = [
  { to: '/', label: 'Accueil' },
  { to: '/articles', label: 'Analyses' },
  { to: '/sources', label: 'Bibliothèque' },
  { to: '/apropos', label: 'À propos' },
  { to: '/contact', label: 'Contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-anthracite/95 backdrop-blur-md shadow-lg'
            : 'bg-anthracite'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <span className="font-cinzel text-lg md:text-xl font-700 tracking-[0.15em] text-offwhite">
                SANKU KÂMA
              </span>
              <span className="hidden sm:block text-lime text-xs font-500 tracking-widest uppercase border-l border-offwhite/20 pl-3">
                Renaître par la connaissance
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`font-sans text-sm font-500 tracking-wide transition-colors relative py-2 ${
                    location.pathname === link.to
                      ? 'text-lime'
                      : 'text-offwhite/70 hover:text-offwhite'
                  }`}
                >
                  {link.label}
                  {location.pathname === link.to && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-lime"
                    />
                  )}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <button
                className="lg:hidden text-offwhite p-1"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Menu"
              >
                {mobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Pillars bar (desktop) */}
        <div className="hidden lg:block border-t border-offwhite/10 bg-anthracite/80">
          <div className="max-w-7xl mx-auto px-8 flex items-center justify-center gap-10 h-10">
            {pillars.map((p) => (
              <Link
                key={p.id}
                to={`/articles?pillar=${p.id}`}
                className="font-sans text-xs font-500 tracking-wider uppercase text-offwhite/50 hover:text-lime transition-colors"
              >
                {p.label}
              </Link>
            ))}
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden bg-anthracite pt-20"
          >
            <div className="flex flex-col px-6 py-6 gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="font-cinzel text-2xl text-offwhite py-4 border-b border-offwhite/10"
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-6 pt-4 border-t border-offwhite/10">
                <p className="font-sans text-xs uppercase tracking-widest text-offwhite/40 mb-3">
                  Piliers thématiques
                </p>
                {pillars.map((p) => (
                  <Link
                    key={p.id}
                    to={`/articles?pillar=${p.id}`}
                    className="flex items-center gap-3 py-3"
                  >
                    <SankofaMark className="w-5 h-5 text-mauve-300" />
                    <span className="font-sans text-sm text-offwhite/70">{p.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}