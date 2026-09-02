import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Target, Eye } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { SankofaMark } from '@/components/SankofaMark';
import { team, type TeamMember } from '@/data/team';

export default function About() {
  const [selected, setSelected] = useState<TeamMember | null>(null);

  return (
    <div className="pt-24 md:pt-32">
      {/* Hero */}
      <section className="bg-parchemin py-16 md:py-24 relative overflow-hidden">
        <SankofaMark className="absolute -right-20 -top-10 w-80 h-80 text-mauve/[0.04] pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <SankofaMark className="w-14 h-14 text-mauve mx-auto mb-6" />
            <span className="font-sans text-xs uppercase tracking-[0.2em] text-mauve font-600">
              Notre démarche
            </span>
            <h1 className="font-cinzel text-4xl md:text-5xl font-700 text-anthracite mt-3">
              À propos de SANKU KÂMA
            </h1>
            <p className="font-lora text-lg md:text-xl text-anthracite/70 mt-6 leading-relaxed">
              SANKU KÂMA est un média analytique indépendant dédié à l'histoire,
              la mémoire, la politique et la géopolitique africaines. Nous
              croyons que la réappropriation du récit historique est la
              condition d'une souveraineté intellectuelle assumée.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="py-16 md:py-20 bg-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Target,
                title: 'Mission',
                text: "Produire des analyses rigoureuses, ancrées dans les sources, qui restituent la complexité des dynamiques africaines sans simplification ni militantisme.",
              },
              {
                icon: Eye,
                title: 'Vision',
                text: "Un continent qui se réapproprie son récit historique et construit son avenir à partir d'une compréhension lucide de son passé.",
              },
              {
                icon: Sparkles,
                title: 'Valeurs',
                text: "Rigueur scientifique, indépendance éditoriale, pluralité des voix et engagement pour la transmission des savoirs.",
              },
            ].map((item, i) => (
              <Reveal key={item.title} delay={0.1 * i}>
                <div className="bg-parchemin rounded-2xl p-8 h-full">
                  <div className="w-12 h-12 rounded-xl bg-mauve/10 flex items-center justify-center mb-5">
                    <item.icon className="w-6 h-6 text-mauve" />
                  </div>
                  <h3 className="font-cinzel text-xl font-700 text-anthracite mb-3">
                    {item.title}
                  </h3>
                  <p className="font-lora text-sm text-anthracite/60 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Sankofa explained */}
      <section className="py-16 md:py-20 bg-navy relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="font-sans text-xs uppercase tracking-[0.2em] text-lime font-600">
                  Héritage Akan
                </span>
                <h2 className="font-cinzel text-3xl md:text-4xl font-700 text-offwhite mt-3">
                  Le symbole Sankofa
                </h2>
                <p className="font-lora text-base text-offwhite/60 mt-4 leading-relaxed">
                  Sankofa est un adinkra — un symbole visuel du peuple Akan
                  (Ghana, Côte d'Ivoire). Il représente un oiseau qui tourne la
                  tête vers l'arrière tout en avançant, portant un œuf sur son
                  dos. Le proverbe associé dit : « Se wo were fi na wosankofa a
                  yenkyi » — il n'est pas tabou de revenir chercher ce que l'on
                  a oublié.
                </p>
                <p className="font-lora text-base text-offwhite/60 mt-4 leading-relaxed">
                  C'est cette philosophie qui guide notre travail : comprendre
                  le passé non par nostalgie, mais pour bâtir l'avenir.
                </p>
              </div>
              <div className="flex justify-center">
                <div className="relative">
                  <SankofaMark className="w-48 h-48 text-lime" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-cinzel text-xs text-lime/60 tracking-widest">
                      SANKU KÂMA
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 md:py-20 bg-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-12">
              <span className="font-sans text-xs uppercase tracking-[0.2em] text-mauve font-600">
                L'équipe
              </span>
              <h2 className="font-cinzel text-3xl md:text-4xl font-700 text-anthracite mt-3">
                Pluralité des voix
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {team.map((member, i) => (
              <Reveal key={member.name} delay={0.06 * i}>
                <button
                  onClick={() => setSelected(member)}
                  className="group block w-full text-left bg-parchemin rounded-2xl overflow-hidden shadow-card hover:shadow-cardHover transition-shadow"
                >
                  <div className="relative h-64 overflow-hidden bg-mauve/10 flex items-center justify-center">
                    {member.photo ? (
                      <img
                        src={member.photo}
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    ) : (
                      <span className="font-cinzel text-4xl font-700 text-mauve/40">
                        {member.name.charAt(0)}
                      </span>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-anthracite/60 to-transparent" />
                    <span className="absolute top-3 right-3 px-2.5 py-1 bg-lime/90 text-anthracite font-sans text-xs font-600 rounded-full">
                      {member.focus}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-cinzel text-lg font-700 text-anthracite">
                      {member.name}
                    </h3>
                    <p className="font-sans text-sm text-mauve mt-1">
                      {member.role}
                    </p>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-anthracite/60 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-offwhite rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-56 bg-mauve/10 flex items-center justify-center">
                {selected.photo ? (
                  <img
                    src={selected.photo}
                    alt={selected.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="font-cinzel text-5xl font-700 text-mauve/40">
                    {selected.name.charAt(0)}
                  </span>
                )}
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-3 right-3 w-9 h-9 rounded-full bg-offwhite/90 flex items-center justify-center text-anthracite hover:bg-lime transition-colors"
                >
                  <X size={18} />
                </button>
              </div>
              <div className="p-6">
                <h3 className="font-cinzel text-2xl font-700 text-anthracite">
                  {selected.name}
                </h3>
                <p className="font-sans text-sm text-mauve mt-1">
                  {selected.role}
                </p>
                <span className="inline-block mt-3 px-3 py-1 bg-lime/20 text-anthracite font-sans text-xs font-600 rounded-full">
                  {selected.focus}
                </span>
                <p className="font-lora text-base text-anthracite/70 mt-4 leading-relaxed">
                  {selected.bio}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
