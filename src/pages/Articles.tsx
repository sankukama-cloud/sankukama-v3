import { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Clock, Filter } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { articles } from '@/data/articles';
import { pillars, pillarById, type PillarId } from '@/data/pillars';

export default function Articles() {
  const [params, setParams] = useSearchParams();
  const activePillar = (params.get('pillar') as PillarId | null) ?? 'all';

  const filtered = useMemo(() => {
    if (activePillar === 'all') return articles;
    return articles.filter((a) => a.pillar === activePillar);
  }, [activePillar]);

  const setPillar = (id: string) => {
    if (id === 'all') setParams({});
    else setParams({ pillar: id });
  };

  return (
    <div className="pt-24 md:pt-32">
      {/* Header */}
      <section className="bg-parchemin py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <span className="font-sans text-xs uppercase tracking-[0.2em] text-mauve font-600">
              Catalogue
            </span>
            <h1 className="font-cinzel text-4xl md:text-5xl font-700 text-anthracite mt-3">
              Toutes nos analyses
            </h1>
            <p className="font-lora text-lg text-anthracite/60 mt-4 max-w-2xl">
              Filtrez par pilier thématique pour explorer nos dossiers, articles
              et analyses.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-16 md:top-20 z-30 bg-offwhite/95 backdrop-blur-md border-b border-anthracite/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide py-4">
            <Filter size={16} className="text-anthracite/40 flex-shrink-0" />
            <button
              onClick={() => setPillar('all')}
              className={`flex-shrink-0 px-4 py-1.5 rounded-full font-sans text-sm font-500 transition-colors ${
                activePillar === 'all'
                  ? 'bg-mauve text-offwhite'
                  : 'bg-parchemin text-anthracite/60 hover:text-mauve'
              }`}
            >
              Tous
            </button>
            {pillars.map((p) => (
              <button
                key={p.id}
                onClick={() => setPillar(p.id)}
                className={`flex-shrink-0 px-4 py-1.5 rounded-full font-sans text-sm font-500 transition-colors ${
                  activePillar === p.id
                    ? 'bg-mauve text-offwhite'
                    : 'bg-parchemin text-anthracite/60 hover:text-mauve'
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-12 md:py-16 bg-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((a, i) => (
              <Reveal key={a.slug} delay={0.04 * i}>
                <Link to={`/articles/${a.slug}`} className="group block h-full">
                  <div className="bg-parchemin rounded-2xl overflow-hidden h-full shadow-card hover:shadow-cardHover transition-shadow flex flex-col">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={a.cover}
                        alt={a.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <span className="absolute top-3 left-3 inline-block px-2.5 py-1 bg-offwhite/90 rounded-full font-sans text-xs font-600 text-mauve">
                        {pillarById(a.pillar).short}
                      </span>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="font-cinzel text-lg font-700 text-anthracite leading-tight group-hover:text-mauve transition-colors">
                        {a.title}
                      </h3>
                      <p className="font-lora text-sm text-anthracite/60 mt-2 line-clamp-2 flex-1">
                        {a.excerpt}
                      </p>
                      <div className="flex items-center justify-between mt-4">
                        <span className="font-sans text-xs text-anthracite/40">
                          {a.author}
                        </span>
                        <span className="flex items-center gap-1 font-sans text-xs text-anthracite/40">
                          <Clock size={12} /> {a.readingTime} min
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="font-lora text-lg text-anthracite/50">
                Aucune analyse dans ce pilier pour le moment.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
