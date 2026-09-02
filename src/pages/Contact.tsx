import { useState, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, Loader2, Mail } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { SankofaMark } from '@/components/SankofaMark';
type Status = 'idle' | 'loading' | 'success' | 'error';

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      // Envoi directement à Formspree
      const response = await fetch('https://formspree.io/f/xnjorjpp', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
        setErrorMsg('Une erreur est survenue lors de l’envoi. Veuillez réessayer.');
      }
    } catch (err) {
      setStatus('error');
      setErrorMsg('Erreur de connexion. Vérifiez votre réseau.');
    }
  };

  return (
    <div className="pt-24 md:pt-32">
      {/* Header */}
      <section className="bg-parchemin py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <SankofaMark className="w-12 h-12 text-mauve mx-auto mb-6" />
            <span className="font-sans text-xs uppercase tracking-[0.2em] text-mauve font-600">
              Contact
            </span>
            <h1 className="font-cinzel text-4xl md:text-5xl font-700 text-anthracite mt-3">
              Écrivez-nous
            </h1>
            <p className="font-lora text-lg text-anthracite/60 mt-4 max-w-xl mx-auto">
              Une question, une proposition de collaboration ou une idée
              d'analyse ? Nous lisons chaque message.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Form + info */}
      <section className="py-16 md:py-20 bg-offwhite">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Info column */}
            <div className="lg:col-span-2">
              <Reveal>
                <h2 className="font-cinzel text-2xl font-700 text-anthracite mb-6">
                  Nous joindre
                </h2>
                <div className="space-y-5">
                  {[
                    {
                      icon: Mail,
                      label: 'Email',
                      value: 'sankukama@gmail.com',
                    },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-xl bg-mauve/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-mauve" />
                      </div>
                      <div>
                        <p className="font-sans text-xs uppercase tracking-wider text-anthracite/40">
                          {item.label}
                        </p>
                        <p className="font-lora text-base text-anthracite/80 mt-1">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 bg-navy rounded-2xl p-6">
                  <p className="font-lora italic text-offwhite/70 text-sm">
                    « Sankofa nous enseigne qu'il n'est jamais trop tard pour
                    revenir chercher ce que l'on a oublié. »
                  </p>
                </div>
              </Reveal>
            </div>

            {/* Form column */}
            <div className="lg:col-span-3">
              <Reveal delay={0.1}>
                <div className="bg-parchemin rounded-2xl p-6 md:p-8 shadow-card">
                  <AnimatePresence mode="wait">
                    {status === 'success' ? (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex flex-col items-center justify-center py-16 text-center"
                      >
                        <CheckCircle className="w-16 h-16 text-lime-deep mb-4" />
                        <h3 className="font-cinzel text-2xl font-700 text-anthracite">
                          Message envoyé
                        </h3>
                        <p className="font-lora text-anthracite/60 mt-2">
                          Merci de nous avoir écrit. Nous vous répondrons dans
                          les meilleurs délais.
                        </p>
                        <button
                          onClick={() => setStatus('idle')}
                          className="mt-6 px-6 py-2.5 bg-mauve text-offwhite font-sans text-sm font-600 rounded-full hover:bg-mauve-600 transition-colors"
                        >
                          Envoyer un autre message
                        </button>
                      </motion.div>
                    ) : (
                      <motion.form
                        key="form"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        onSubmit={handleSubmit}
                        className="space-y-5"
                      >
                        <div className="grid sm:grid-cols-2 gap-4">
                          <Field
                            name="prenom"
                            label="Prénom"
                            placeholder="Aïcha"
                          />
                          <Field
                            name="nom"
                            label="Nom"
                            placeholder="Diallo"
                          />
                        </div>
                        <Field
                          name="email"
                          label="Email"
                          type="email"
                          placeholder="aïcha@email.com"
                        />
                        <Field
                          name="objet"
                          label="Sujet"
                          placeholder="Proposition de collaboration"
                        />
                        <div>
                          <label className="block font-sans text-sm font-500 text-anthracite/70 mb-2">
                            Message
                          </label>
                          <textarea
                            name="message"
                            rows={5}
                            required
                            placeholder="Votre message..."
                            className="w-full px-4 py-3 bg-offwhite rounded-xl font-lora text-sm text-anthracite placeholder:text-anthracite/30 border border-transparent focus:border-mauve/30 focus:outline-none transition-colors resize-none"
                          />
                        </div>

                        {status === 'error' && (
                          <p className="font-sans text-sm text-red-600">
                            {errorMsg}
                          </p>
                        )}

                        <button
                          type="submit"
                          disabled={status === 'loading'}
                          className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-lime text-anthracite font-sans font-700 rounded-xl hover:bg-lime-soft transition-colors disabled:opacity-60"
                        >
                          {status === 'loading' ? (
                            <>
                              <Loader2 size={18} className="animate-spin" />
                              Envoi...
                            </>
                          ) : (
                            <>
                              <Send size={18} />
                              Envoyer le message
                            </>
                          )}
                        </button>
                      </motion.form>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Field({
  name,
  label,
  type = 'text',
  placeholder,
}: {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block font-sans text-sm font-500 text-anthracite/70 mb-2">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required
        placeholder={placeholder}
        className="w-full px-4 py-3 bg-offwhite rounded-xl font-sans text-sm text-anthracite placeholder:text-anthracite/30 border border-transparent focus:border-mauve/30 focus:outline-none transition-colors"
      />
    </div>
  );
}