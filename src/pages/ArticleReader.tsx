import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, ArrowLeft, ArrowRight, BookOpen } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { SankofaMark } from '@/components/SankofaMark';
import { articleBySlug } from '@/data/articles';
import { pillarById } from '@/data/pillars';

export default function ArticleReader() {
  const { slug } = useParams();
  const article = slug ? articleBySlug(slug) : undefined;

  if (!article) return <Navigate to="/articles" replace />;

  const pillar = pillarById(article.pillar);

  return (
    <div className="relative pt-20 md:pt-28 overflow-hidden bg-offwhite min-h-screen">
      
{/* 🌊 Cours d'eau vivant en arrière-plan (double onde renforcée) */}
<div className="absolute inset-0 pointer-events-none z-0 opacity-50 overflow-hidden">
  <svg
    className="w-full h-full min-h-[3000px]"
    viewBox="0 0 1200 3000"
    preserveAspectRatio="none"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Première onde principale */}
    <motion.path
      d="M -100 0 C 600 400 1100 200 800 900 C 500 1600 -100 1400 300 2100 C 700 2700 1300 2400 1300 3200"
      stroke="rgb(168, 85, 247)"
      strokeWidth="60"
      strokeLinecap="round"
      className="blur-md opacity-80"
      animate={{
        d: [
          "M -100 0 C 600 400 1100 200 800 900 C 500 1600 -100 1400 300 2100 C 700 2700 1300 2400 1300 3200",
          "M -100 0 C 200 600 1200 400 600 1000 C 100 1500 200 1200 500 2000 C 900 2600 1100 2500 1300 3200",
          "M -100 0 C 600 400 1100 200 800 900 C 500 1600 -100 1400 300 2100 C 700 2700 1300 2400 1300 3200"
        ]
      }}
      transition={{
        duration: 16,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />

    {/* Deuxième onde secondaire pour l'effet de profondeur */}
    <motion.path
      d="M -50 -100 C 400 300 900 500 700 1100 C 300 1700 100 1300 500 2200 C 800 2600 1200 2300 1200 3100"
      stroke="rgb(147, 51, 234)"
      strokeWidth="35"
      strokeLinecap="round"
      className="blur-sm opacity-90"
      animate={{
        d: [
          "M -50 -100 C 400 300 900 500 700 1100 C 300 1700 100 1300 500 2200 C 800 2600 1200 2300 1200 3100",
          "M -50 -100 C 700 200 300 800 800 1300 C 400 1800 300 1600 200 2300 C 600 2800 1000 2200 1200 3100",
          "M -50 -100 C 400 300 900 500 700 1100 C 300 1700 100 1300 500 2200 C 800 2600 1200 2300 1200 3100"
        ]
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  </svg>
</div>

      {/* Hero */}
      <section className="relative h-[50vh] min-h-[320px] overflow-hidden z-10">
        <img
          src={article.cover}
          alt={article.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-anthracite/95 via-anthracite/50 to-anthracite/30" />
        <div className="relative h-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to={`/articles?pillar=${article.pillar}`}
              className="inline-block px-3 py-1 bg-mauve text-offwhite font-sans text-xs font-600 rounded-full mb-4"
            >
              {pillar.label}
            </Link>
            <h1 className="font-cinzel text-3xl md:text-5xl font-700 text-offwhite leading-tight max-w-3xl">
              {article.title}
            </h1>
            <div className="flex items-center gap-4 mt-5 font-sans text-sm text-offwhite/60">
              <span className="font-600 text-offwhite/80">{article.author}</span>
              <span>{article.authorRole}</span>
              <span className="flex items-center gap-1">
                <Clock size={14} /> {article.readingTime} min
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Thesis box */}
      <section className="relative z-10 py-10 bg-parchemin border-y border-anthracite/8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4">
            <SankofaMark className="w-10 h-10 text-mauve flex-shrink-0 mt-1" />
            <div>
              <span className="font-sans text-xs uppercase tracking-widest text-mauve font-600">
                Thèse
              </span>
              <p className="font-lora italic text-lg md:text-xl text-anthracite/80 mt-2 leading-relaxed">
                {article.thesis}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <article className="relative z-10 py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10 pb-6 border-b border-anthracite/8">
            <Link
              to="/articles"
              className="inline-flex items-center gap-2 font-sans text-sm text-anthracite/50 hover:text-mauve transition-colors"
            >
              <ArrowLeft size={16} /> Retour aux articles
            </Link>
          </div>

          <div className="article-body prose prose-lg max-w-none font-lora">
            {typeof article.body === 'string' && (
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  h1: ({ children }) => (
                    <h1 className="!font-cinzel !text-mauve !text-3xl md:!text-4xl !font-700 !mt-12 !mb-6">
                      {children}
                    </h1>
                  ),
                  h2: ({ children, id }) => {
                    if (id === 'footnote-label' || String(children).toLowerCase().includes('footnote')) {
                      return null;
                    }
                    return (
                      <h2 className="!font-cinzel !text-mauve !text-2xl md:!text-3xl !font-700 !mt-10 !mb-5">
                        {children}
                      </h2>
                    );
                  },
                  h3: ({ children }) => (
                    <h3 className="!font-cinzel !text-mauve !text-xl md:!text-2xl !font-700 !mt-8 !mb-4">
                      {children}
                    </h3>
                  ),
                  // Transformation du blockquote Markdown en encadré Prisme Sanku Kamâ
                  blockquote: ({ children }) => (
                    <div className="my-12 p-8 md:p-10 bg-anthracite text-offwhite rounded-2xl shadow-2xl border border-mauve/40 relative overflow-hidden [&_p]:!text-offwhite/90 [&_strong]:!text-offwhite [&_li]:!text-offwhite/90 [&_h3]:!text-offwhite">
                      <div className="border-b border-offwhite/15 pb-4 mb-6">
                        <span className="inline-block px-3.5 py-1 bg-mauve/30 text-mauve font-sans text-xs font-700 tracking-widest uppercase rounded-full mb-2">
                          Prisme Sanku Kamâ
                        </span>
                        <p className="font-sans text-xs text-offwhite/70 italic !m-0">
                          Cette section livre notre grille de lecture et notre analyse critique des faits présentés ci-dessus.
                        </p>
                      </div>
                      <div className="space-y-4 font-lora text-base md:text-lg leading-relaxed">
                        {children}
                      </div>
                    </div>
                  ),
                  sup: ({ children, ...props }) => {
                    if (props.className?.includes('footnote-backref')) return null;
                    return (
                      <sup className="text-mauve font-sans font-600 px-0.5 hover:underline">
                        {children}
                      </sup>
                    );
                  },
                  ol: ({ node, ...props }) => (
                    <ol className="list-decimal space-y-2 pl-5 font-lora text-sm opacity-90" {...props}>
                      {props.children}
                    </ol>
                  ),
                  section: ({ node, ...props }) => {
                    if (props['data-footnotes' as keyof typeof props]) {
                      return (
                        <section className="mt-16 pt-8 border-t border-anthracite/10 text-sm font-lora opacity-80">
                          <h4 className="font-cinzel text-lg font-700 text-mauve mb-4">
                            Notes de bas de page
                          </h4>
                          {props.children}
                        </section>
                      );
                    }
                    return <section {...props} />;
                  },
                  a: ({ node, ...props }) => {
                    if (
                      props['data-footnote-backref' as keyof typeof props] ||
                      props.className?.includes('footnote-backref')
                    ) {
                      return null;
                    }
                    return (
                      <a {...props} className="text-mauve underline hover:text-mauve-600">
                        {props.children}
                      </a>
                    );
                  },
                }}
              >
                {article.body}
              </ReactMarkdown>
            )}
          </div>

          {/* Sources & Bibliographie */}
          {article.sources && article.sources.length > 0 && (
            <div className="mt-16 pt-8 border-t border-anthracite/10">
              <div className="flex items-center gap-2 mb-6">
                <BookOpen className="w-5 h-5 text-mauve" />
                <h3 className="font-cinzel text-xl font-700 text-anthracite">
                  Bibliographie et références
                </h3>
              </div>
              <ol className="space-y-3">
                {article.sources.map((src, i) => (
                  <li key={i} className="flex gap-3 font-lora text-sm text-anthracite/70">
                    <span className="font-sans font-600 text-mauve flex-shrink-0">{i + 1}.</span>
                    <span><span className="font-600">{src.label}</span> — {src.detail}</span>
                  </li>
                ))}
              </ol>
            </div>
          )}

          {/* Author card */}
          <div className="mt-12 bg-parchemin rounded-2xl p-6 flex items-center gap-5">
            <div className="w-16 h-16 rounded-full bg-mauve/10 flex items-center justify-center flex-shrink-0">
              <span className="font-cinzel text-xl font-700 text-mauve">
                {article.author.charAt(0)}
              </span>
            </div>
            <div>
              <p className="font-sans text-xs uppercase tracking-wider text-anthracite/40">
                {article.authorRole}
              </p>
              <p className="font-cinzel text-lg font-700 text-anthracite mt-1">
                {article.author}
              </p>
            </div>
          </div>

          {/* Next CTA */}
          <div className="mt-12 text-center">
            <Link
              to="/articles"
              className="inline-flex items-center gap-2 px-6 py-3 bg-mauve text-offwhite font-sans font-600 rounded-full hover:bg-mauve-600 transition-colors"
            >
              Lire d'autres analyses <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}