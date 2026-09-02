import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Clock,
  Bookmark,
  Play,
  Quote,
  Sparkles,
  BookOpen,
  Globe,
  TrendingUp,
  ScrollText,
} from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { SankofaMark } from '@/components/SankofaMark';
import { featuredArticles } from '@/data/articles';
import { pillars } from '@/data/pillars';
import { pillarById } from '@/data/pillars';

const pillarIcons: Record<string, typeof BookOpen> = {
  R1: BookOpen,
  R2: Sparkles,
  R3: Globe,
  R4: TrendingUp,
  R5: ScrollText,
};

export default function Home() {
  const [selectedVideo, setSelectedVideo] = useState<{ insta: string; tiktok: string } | null>(null);

  const hero = featuredArticles[0];
  const heroSub = featuredArticles.slice(1, 2);

  return (
    <div>
      {/* ===== HERO ===== */}
      <section className="relative pt-16 md:pt-28 pb-16 md:pb-24 bg-parchemin overflow-hidden">
        {/* Decorative grain */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 30%, #6B3A7D 1px, transparent 1px), radial-gradient(circle at 70% 60%, #1A1A1A 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Text column */}
            <div className="lg:col-span-7 order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-3 mb-6"
              >
                <SankofaMark className="w-7 h-7 text-mauve" />
                <span className="font-sans text-xs font-600 uppercase tracking-[0.2em] text-mauve">
                  Média analytique africain
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="font-cinzel text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-700 leading-[1.05] text-anthracite text-balance"
              >
                Renaître par la <span className="text-mauve">connaissance</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="mt-6 font-lora text-lg md:text-xl text-anthracite/70 max-w-xl leading-relaxed"
              >
                Histoire, mémoire, politique et géopolitique africaines.
                Des analyses rigoureuses, ancrées dans les sources, pour
                comprendre le passé et bâtir l'avenir.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.45 }}
                className="mt-8 flex flex-wrap items-center gap-4"
              >
                <Link
                  to="/articles"
                  className="group inline-flex items-center gap-2 px-7 py-3.5 bg-lime text-anthracite font-sans font-600 rounded-full hover:bg-lime-soft transition-all hover:shadow-lg"
                >
                  Découvrir nos analyses
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>

            {/* Hero image card */}
            <div className="lg:col-span-5 order-1 lg:order-2">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <Link to={`/articles/${hero.slug}`} className="block">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] group cursor-pointer">
                    <img
                      src={hero.cover}
                      alt={hero.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-anthracite/90 via-anthracite/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <span className="inline-block px-3 py-1 bg-lime text-anthracite font-sans text-xs font-600 rounded-full mb-3">
                        À la une
                      </span>
                      <h3 className="font-cinzel text-xl md:text-2xl font-600 text-offwhite leading-tight group-hover:text-lime transition-colors">
                        {hero.title}
                      </h3>
                      <p className="font-sans text-xs text-offwhite/60 mt-2">
                        {hero.author} · {hero.readingTime} min
                      </p>
                    </div>
                  </div>
                </Link>
                {/* Floating quote card */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.5 }}
                  className="absolute -left-4 lg:-left-8 top-1/3 bg-offwhite rounded-xl shadow-card p-5 max-w-[200px] hidden sm:block"
                >
                  <Quote className="w-5 h-5 text-mauve mb-2" />
                  <p className="font-lora italic text-sm text-anthracite/80 leading-snug">
                    Comprendre le passé pour bâtir l'avenir.
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
{/* ===== PILLARS ORBITAL SYSTEM ===== */}
      <section className="bg-anthracite py-16 overflow-hidden relative border-y border-offwhite/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <span className="font-sans text-xs uppercase tracking-[0.2em] text-mauve font-600 mb-8">
            Explorer par piliers
          </span>

          <div className="relative w-[340px] h-[340px] sm:w-[480px] sm:h-[480px] flex items-center justify-center">
            {/* Ligne d'orbite fixe */}
            <div className="absolute inset-4 rounded-full border border-dashed border-mauve/30 pointer-events-none" />

            {/* PLANÈTE CENTRALE : Politique & Souveraineté */}
            <Link
              to={`/articles?pillar=${pillars[2].id}`}
              className="absolute z-20 w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-gradient-to-br from-mauve to-anthracite border-2 border-lime/60 shadow-[0_0_25px_rgba(107,58,125,0.6)] flex flex-col items-center justify-center text-center p-2 group hover:scale-110 transition-transform duration-300 cursor-pointer"
            >
              <Globe className="w-6 h-6 sm:w-8 sm:h-8 text-lime mb-1 group-hover:rotate-12 transition-transform" />
              <span className="font-cinzel text-xs sm:text-sm font-700 text-offwhite group-hover:text-lime transition-colors leading-tight">
                {pillars[2].label}
              </span>
            </Link>

            {/* PLANÈTES SATELLITES (Trajectoire orbitale pure sans rotation de texte) */}
            {[
              { pillar: pillars[0], icon: BookOpen, offset: 0 },       // Histoire & Mémoire
              { pillar: pillars[1], icon: Sparkles, offset: 0.25 },   // Culture & Identités
              { pillar: pillars[3], icon: TrendingUp, offset: 0.5 },   // Économie & Développement
              { pillar: pillars[4], icon: ScrollText, offset: 0.75 }, // Colonisation & Néocolonialisme
            ].map(({ pillar, icon: Icon, offset }) => {
              // Rayon de l'orbite (adapté au conteneur)
              const radius = 180; 

              return (
                <motion.div
                  key={pillar.id}
                  className="absolute z-10"
                  animate={{
                    x: [
                      Math.cos((0 + offset) * 2 * Math.PI) * radius,
                      Math.cos((0.25 + offset) * 2 * Math.PI) * radius,
                      Math.cos((0.5 + offset) * 2 * Math.PI) * radius,
                      Math.cos((0.75 + offset) * 2 * Math.PI) * radius,
                      Math.cos((1 + offset) * 2 * Math.PI) * radius,
                    ],
                    y: [
                      Math.sin((0 + offset) * 2 * Math.PI) * radius,
                      Math.sin((0.25 + offset) * 2 * Math.PI) * radius,
                      Math.sin((0.5 + offset) * 2 * Math.PI) * radius,
                      Math.sin((0.75 + offset) * 2 * Math.PI) * radius,
                      Math.sin((1 + offset) * 2 * Math.PI) * radius,
                    ],
                  }}
                  transition={{
                    duration: 35,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <Link
                    to={`/articles?pillar=${pillar.id}`}
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-anthracite border border-mauve/40 hover:border-lime bg-opacity-90 backdrop-blur-md shadow-lg flex flex-col items-center justify-center text-center p-2 group hover:scale-110 transition-all duration-300 cursor-pointer -translate-x-1/2 -translate-y-1/2"
                  >
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-mauve group-hover:text-lime transition-colors mb-1" />
                    <span className="font-sans text-[10px] sm:text-xs font-500 text-offwhite/80 group-hover:text-offwhite leading-tight">
                      {pillar.label}
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== FEATURED ANALYSES ===== */}
      <section className="py-20 md:py-28 bg-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="flex items-end justify-between mb-12">
              <div>
                <span className="font-sans text-xs uppercase tracking-[0.2em] text-mauve font-600">
                  À lire maintenant
                </span>
                <h2 className="font-cinzel text-3xl md:text-4xl font-700 text-anthracite mt-2">
                  Analyses en vedette
                </h2>
              </div>
              <Link
                to="/articles"
                className="hidden sm:flex items-center gap-2 font-sans text-sm font-600 text-mauve hover:gap-3 transition-all"
              >
                Tout voir <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Reveal className="md:col-span-2 md:row-span-2">
              <ArticleCardLarge article={hero} />
            </Reveal>
            {heroSub.map((a, i) => (
              <Reveal key={a.slug} delay={0.1 * (i + 1)}>
                <ArticleCardTall article={a} />
              </Reveal>
            ))}
            <Reveal delay={0.2}>
              <ComingSoonCard />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== SANKOFA PHILOSOPHY ===== */}
      <section className="py-20 md:py-28 bg-parchemin relative overflow-hidden">
        <SankofaMark
          className="absolute -left-16 top-1/2 -translate-y-1/2 w-96 h-96 text-mauve/[0.04] pointer-events-none"
        />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <SankofaMark className="w-16 h-16 text-mauve mx-auto mb-6" />
            <span className="font-sans text-xs uppercase tracking-[0.2em] text-mauve font-600">
              Notre philosophie
            </span>
            
            <p className="font-lora italic text-base text-mauve mt-6">
              « Se réapproprier le passé est l'une des conditions sine qua non
              d'une souveraineté intellectuelle. »
            </p>
            <Link
              to="/apropos"
              className="inline-flex items-center gap-2 mt-8 font-sans text-sm font-600 text-anthracite hover:text-mauve transition-colors"
            >
              Découvrir notre démarche <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ===== MULTIMEDIA FEED ===== */}
      <section className="py-20 md:py-28 bg-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="flex items-end justify-between mb-12">
              <div>
                <span className="font-sans text-xs uppercase tracking-[0.2em] text-mauve font-600">
                  Sur les réseaux
                </span>
                <h2 className="font-cinzel text-3xl md:text-4xl font-700 text-anthracite mt-2">
                  Fil multimédia
                </h2>
              </div>
            </div>
          </Reveal>

          <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-4">
            <Reveal>
              <div
                onClick={() =>
                  setSelectedVideo({
                    insta: "https://www.instagram.com/p/DZ0ER2FNK61/",
                    tiktok: "https://www.tiktok.com/@sanku.kama/video/7653510536625229089",
                  })
                }
                className="flex-shrink-0 w-72 h-96 rounded-2xl overflow-hidden relative group cursor-pointer shadow-card hover:shadow-cardHover transition-shadow block"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-mauve/80 to-anthracite/60" />
                <div className="absolute inset-0 bg-anthracite/20 group-hover:bg-anthracite/10 transition-colors" />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-offwhite/90 rounded-full font-sans text-xs font-600 text-anthracite">
                    <Play size={12} /> Voir la vidéo
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="font-lora text-lg text-offwhite leading-snug">
                    Le Code Noir
                  </h3>
                </div>
              </div>
            </Reveal>
                        <Reveal>
              <div
                onClick={() =>
                  setSelectedVideo({
                    insta: "https://www.instagram.com/p/DcwCnrVtrGx/",
                    tiktok: "https://www.tiktok.com/@sanku.kama/video/7680969893134535968",
                  })
                }
                className="flex-shrink-0 w-72 h-96 rounded-2xl overflow-hidden relative group cursor-pointer shadow-card hover:shadow-cardHover transition-shadow block"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-mauve/80 to-anthracite/60" />
                <div className="absolute inset-0 bg-anthracite/20 group-hover:bg-anthracite/10 transition-colors" />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-offwhite/90 rounded-full font-sans text-xs font-600 text-anthracite">
                    <Play size={12} /> Voir la vidéo
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="font-lora text-lg text-offwhite leading-snug">
                    L'épistémicide, ou la hiérarchisation des savoirs
                  </h3>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Pop-up de choix Instagram / TikTok */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-anthracite/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-offwhite rounded-2xl p-6 max-w-sm w-full text-center relative shadow-2xl border border-gold/20">
            {/* Bouton de fermeture */}
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-3 right-3 text-anthracite/60 hover:text-anthracite text-lg font-bold p-1"
            >
              ✕
            </button>

            <h3 className="font-lora text-xl text-anthracite font-600 mb-2">
              Regarder la vidéo
            </h3>
            <p className="font-sans text-xs text-anthracite/70 mb-6">
              Choisissez la plateforme sur laquelle vous souhaitez visionner ce contenu :
            </p>

            {/* Les deux choix */}
            <div className="flex flex-col gap-3 font-sans text-sm">
              <a
                href={selectedVideo.insta}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-500 rounded-xl hover:opacity-90 transition shadow-sm"
              >
                Instagram
              </a>

              <a
                href={selectedVideo.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 bg-black text-white font-500 rounded-xl hover:bg-zinc-800 transition shadow-sm"
              >
                TikTok
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ===== Pillar link helper ===== */

function PillarLink({ pillar }: { pillar: typeof pillars[0] }) {
  const Icon = pillarIcons[pillar.id];
  return (
    <Link
      to={`/articles?pillar=${pillar.id}`}
      className="group bg-anthracite px-4 py-5 flex flex-col items-center text-center hover:bg-anthracite/80 transition-colors"
    >
      <Icon className="w-6 h-6 text-mauve-300 mb-2 group-hover:text-lime transition-colors" />
      <span className="font-sans text-xs font-500 text-offwhite/70 group-hover:text-offwhite transition-colors leading-tight">
        {pillar.label}
      </span>
    </Link>
  );
}

/* ===== Article card components ===== */

function PillarTag({ pillarId }: { pillarId: string }) {
  const p = pillarById(pillarId as any);
  if (!p) return null;
  return (
    <span className="inline-block font-sans text-xs font-600 uppercase tracking-wider text-mauve">
      {p.short}
    </span>
  );
}

function ArticleCardLarge({ article }: { article: typeof featuredArticles[0] }) {
  return (
    <Link to={`/articles/${article.slug}`} className="group block h-full">
      <div className="relative rounded-2xl overflow-hidden h-full min-h-[400px] shadow-card hover:shadow-cardHover transition-shadow">
        <img
          src={article.cover}
          alt={article.title}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-anthracite/95 via-anthracite/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <PillarTag pillarId={article.pillar} />
          <h3 className="font-cinzel text-2xl md:text-3xl font-700 text-offwhite mt-3 leading-tight group-hover:text-lime transition-colors">
            {article.title}
          </h3>
          <p className="font-lora text-base text-offwhite/70 mt-3 max-w-lg line-clamp-2">
            {article.excerpt}
          </p>
          <div className="flex items-center gap-4 mt-4 font-sans text-xs text-offwhite/50">
            <span>{article.author}</span>
            <span className="flex items-center gap-1">
              <Clock size={12} /> {article.readingTime} min
            </span>
            <Bookmark size={14} className="hover:text-lime transition-colors" />
          </div>
        </div>
      </div>
    </Link>
  );
}

function ArticleCardTall({ article }: { article: typeof featuredArticles[0] }) {
  return (
    <Link to={`/articles/${article.slug}`} className="group block h-full">
      <div className="bg-parchemin rounded-2xl overflow-hidden h-full shadow-card hover:shadow-cardHover transition-shadow flex flex-col">
        <div className="relative h-48 overflow-hidden">
          <img
            src={article.cover}
            alt={article.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </div>
        <div className="p-6 flex flex-col flex-1">
          <PillarTag pillarId={article.pillar} />
          <h3 className="font-cinzel text-lg font-700 text-anthracite mt-2 leading-tight group-hover:text-mauve transition-colors">
            {article.title}
          </h3>
          <p className="font-lora text-sm text-anthracite/60 mt-2 line-clamp-2 flex-1">
            {article.excerpt}
          </p>
          <div className="flex items-center gap-3 mt-4 font-sans text-xs text-anthracite/40">
            <span>{article.author}</span>
            <span className="flex items-center gap-1">
              <Clock size={12} /> {article.readingTime} min
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

function ComingSoonCard() {
  return (
    <div className="bg-parchemin rounded-2xl overflow-hidden h-full shadow-card flex flex-col items-center justify-center min-h-[260px] border-2 border-dashed border-mauve/20">
      <div className="w-14 h-14 rounded-full bg-mauve/10 flex items-center justify-center mb-4">
        <Sparkles className="w-6 h-6 text-mauve" />
      </div>
      <span className="font-cinzel text-lg font-700 text-mauve">À venir</span>
      <p className="font-lora text-sm text-anthracite/50 mt-2 text-center px-6">
        De nouvelles analyses sont en préparation.
      </p>
    </div>
  );
}