import { useState, useMemo } from 'react';
import { BookOpen, ExternalLink, Search } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { sources as staticSources, type SourceEntry } from '@/data/sources';
import { getDynamicSources } from '@/data/articles';

const types: SourceEntry['type'][] = [
  'Ouvrage',
  'Article',
  'Archive',
  'Rapport',
  'Site',
];

export default function Sources() {
  const [query, setQuery] = useState('');
  const [typeFilter, setTypeFilter] = useState<string>('all');

  // Fusion des sources statiques et des sources extraites automatiquement des articles
  const allSources = useMemo(() => {
    const dynamic = getDynamicSources();
    return [...staticSources, ...dynamic];
  }, []);

  const filtered = useMemo(() => {
    return allSources.filter((s) => {
      const matchQuery =
        query === '' ||
        s.title.toLowerCase().includes(query.toLowerCase()) ||
        s.author.toLowerCase().includes(query.toLowerCase());
      const matchType = typeFilter === 'all' || s.type === typeFilter;
      return matchQuery && matchType;
    });
  }, [allSources, query, typeFilter]);

  return (
    <div className="pt-24 md:pt-32">
      <section className="bg-parchemin py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <span className="font-sans text-xs uppercase tracking-[0.2em] text-mauve font-600">
              Références
            </span>
            <h1 className="font-cinzel text-4xl md:text-5xl font-700 text-anthracite mt-3">
              Bibliothèque de sources
            </h1>
            <p className="font-lora text-lg text-anthracite/60 mt-4 max-w-2xl">
              Un index des ouvrages, articles, archives et sites mobilisés dans
              nos analyses. Chaque référence est citée et vérifiable.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search + filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-anthracite/30"
              />
              <input
                type="text"
                placeholder="Rechercher par titre ou auteur..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-parchemin rounded-xl font-sans text-sm text-anthracite placeholder:text-anthracite/30 border border-transparent focus:border-mauve/30 focus:outline-none transition-colors"
              />
            </div>
            <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide">
              <button
                onClick={() => setTypeFilter('all')}
                className={`flex-shrink-0 px-4 py-2 rounded-full font-sans text-sm font-500 transition-colors ${
                  typeFilter === 'all'
                    ? 'bg-mauve text-offwhite'
                    : 'bg-parchemin text-anthracite/60 hover:text-mauve'
                }`}
              >
                Tous
              </button>
              {types.map((t) => (
                <button
                  key={t}
                  onClick={() => setTypeFilter(t)}
                  className={`flex-shrink-0 px-4 py-2 rounded-full font-sans text-sm font-500 transition-colors ${
                    typeFilter === t
                      ? 'bg-mauve text-offwhite'
                      : 'bg-parchemin text-anthracite/60 hover:text-mauve'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* Table */}
          <div className="bg-parchemin rounded-2xl overflow-hidden shadow-card">
            <table className="w-full">
              <thead>
                <tr className="border-b border-anthracite/8">
                  <th className="text-left font-sans text-xs uppercase tracking-wider text-anthracite/40 px-6 py-4">
                    Titre / Référence
                  </th>
                  <th className="text-left font-sans text-xs uppercase tracking-wider text-anthracite/40 px-6 py-4 hidden md:table-cell">
                    Auteur
                  </th>
                  <th className="text-left font-sans text-xs uppercase tracking-wider text-anthracite/40 px-6 py-4 hidden sm:table-cell">
                    Type
                  </th>
                  <th className="text-left font-sans text-xs uppercase tracking-wider text-anthracite/40 px-6 py-4 hidden lg:table-cell">
                    Pilier
                  </th>
                  <th className="text-left font-sans text-xs uppercase tracking-wider text-anthracite/40 px-6 py-4">
                    Année
                  </th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((s) => (
                  <tr
                    key={s.id}
                    className="border-b border-anthracite/5 hover:bg-offwhite/50 transition-colors group"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <BookOpen className="w-4 h-4 text-mauve/50 flex-shrink-0" />
                        {s.url ? (
                          <a
                            href={s.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-lora text-sm text-anthracite hover:text-mauve transition-colors flex items-center gap-1"
                          >
                            {s.title}
                            <ExternalLink size={12} className="opacity-50" />
                          </a>
                        ) : (
                          <span className="font-lora text-sm text-anthracite">
                            {s.title}
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 font-sans text-sm text-anthracite/60 hidden md:table-cell">
                      {s.author}
                    </td>
                    <td className="px-6 py-4 hidden sm:table-cell">
                      <span className="inline-block px-2.5 py-1 bg-mauve/10 text-mauve font-sans text-xs font-500 rounded-full">
                        {s.type}
                      </span>
                    </td>
                    <td className="px-6 py-4 font-sans text-xs text-anthracite/50 hidden lg:table-cell">
                      {s.pillar}
                    </td>
                    <td className="px-6 py-4 font-sans text-sm text-anthracite/50">
                      {s.year}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {filtered.length === 0 && (
              <div className="text-center py-16">
                <p className="font-lora text-anthracite/50">
                  Aucune source ne correspond à votre recherche.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}