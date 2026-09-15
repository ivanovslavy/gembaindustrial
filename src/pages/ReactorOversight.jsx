import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function Check() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#06B6D4" strokeWidth="2.5" className="shrink-0 mt-0.5"><polyline points="20 6 9 17 4 12" /></svg>;
}

function Cross() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--text-tertiary)" strokeWidth="2.5" className="shrink-0 mt-0.5"><path d="M18 6L6 18M6 6l12 12" /></svg>;
}

function Section({ title, children, className = '' }) {
  return (
    <section className={`mt-12 ${className}`}>
      <h2 className="text-xl font-semibold mb-3" style={{ fontFamily: 'var(--font-display)' }}>{title}</h2>
      {children}
    </section>
  );
}

export default function ReactorOversight() {
  const { t, i18n } = useTranslation();
  const timeItems = t('oversight.time_items', { returnObjects: true });
  const scopeIn = t('oversight.scope_in', { returnObjects: true });
  const scopeOut = t('oversight.scope_out', { returnObjects: true });
  const contractors = t('oversight.contractors', { returnObjects: true });
  const phases = t('oversight.phases', { returnObjects: true });
  const does = t('oversight.do', { returnObjects: true });
  const goals = t('oversight.goals', { returnObjects: true });
  const notdo = t('oversight.notdo', { returnObjects: true });
  const faq = t('oversight.faq', { returnObjects: true });

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <span className="inline-block text-xs font-medium tracking-wider uppercase px-4 py-1.5 rounded-full mb-4 animate-fade-up" style={{ color: '#06B6D4', backgroundColor: 'rgba(6,182,212,0.08)' }}>{t('oversight.eyebrow')}</span>
      <h1 className="text-3xl sm:text-4xl font-bold mb-2 animate-fade-up delay-100" style={{ fontFamily: 'var(--font-display)' }}>{t('oversight.page_title')}</h1>
      <p className="text-base mb-8 animate-fade-up delay-200" style={{ color: 'var(--text-secondary)' }}>{t('oversight.subtitle')}</p>

      <p className="text-sm mb-6 animate-fade-up delay-300" style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>{t('oversight.intro')}</p>

      {/* The differentiator */}
      <div className="rounded-xl p-5 relative overflow-hidden animate-fade-up delay-400" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--border-color)' }}>
        <div className="absolute top-0 left-0 bottom-0 w-1" style={{ background: 'linear-gradient(180deg, #06B6D4, #4F46E5)' }} />
        <p className="text-base font-medium pl-3 mb-2" style={{ fontFamily: 'var(--font-display)', lineHeight: 1.6 }}>{t('oversight.quote')}</p>
        <p className="text-xs pl-3 m-0" style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>{t('oversight.quote_note')}</p>
      </div>

      <Section title={t('oversight.why_title')}>
        <p className="text-sm mb-3" style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>{t('oversight.why_p1')}</p>
        <p className="text-sm" style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>{t('oversight.why_p2')}</p>
      </Section>

      <Section title={t('oversight.time_title')}>
        <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>{t('oversight.time_intro')}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {timeItems.map((item, i) => (
            <div key={i} className="flex items-start gap-2 p-3 rounded-lg" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--border-color)' }}>
              <Check />
              <span className="text-xs" style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>{item}</span>
            </div>
          ))}
        </div>
        <p className="text-sm mt-4" style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>{t('oversight.time_note')}</p>
      </Section>

      <Section title={t('oversight.scope_title')}>
        <p className="text-sm mb-3" style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>{t('oversight.scope_intro')}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {scopeIn.map((item, i) => (
            <div key={i} className="flex items-start gap-2 p-3 rounded-lg" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--border-color)' }}>
              <Check />
              <span className="text-xs" style={{ color: 'var(--text-primary)', lineHeight: 1.6 }}>{item}</span>
            </div>
          ))}
        </div>

        <h3 className="text-sm font-semibold mt-6 mb-3" style={{ fontFamily: 'var(--font-display)' }}>{t('oversight.scope_out_title')}</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {scopeOut.map((item, i) => (
            <div key={i} className="flex items-start gap-2 p-3 rounded-lg" style={{ border: '1px dashed var(--border-color)' }}>
              <Cross />
              <span className="text-xs" style={{ color: 'var(--text-tertiary)', lineHeight: 1.6 }}>{item}</span>
            </div>
          ))}
        </div>
        <p className="text-sm mt-4" style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>{t('oversight.scope_note')}</p>
      </Section>

      <Section title={t('oversight.contractors_title')}>
        <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>{t('oversight.contractors_intro')}</p>
        <div className="space-y-2">
          {contractors.map((item, i) => (
            <div key={i} className="flex items-start gap-2 p-3 rounded-lg" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--border-color)' }}>
              <Check />
              <span className="text-xs" style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>{item}</span>
            </div>
          ))}
        </div>
        <p className="text-sm mt-4" style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>{t('oversight.contractors_note')}</p>
      </Section>

      <Section title={t('oversight.phases_title')}>
        <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>{t('oversight.phases_intro')}</p>
        <div className="space-y-2">
          {phases.map((p, i) => (
            <div key={i} className="rounded-lg p-4 grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-4" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--border-color)' }}>
              <div className="text-xs font-semibold" style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}>{p.phase}</div>
              <div className="text-xs sm:col-span-2" style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>{p.watch}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section title={t('oversight.do_title')}>
        <div className="space-y-2">
          {does.map((item, i) => (
            <div key={i} className="flex items-start gap-2 p-3 rounded-lg" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--border-color)' }}>
              <Check />
              <span className="text-xs" style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>{item}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section title={t('oversight.goals_title')}>
        <div className="space-y-3">
          {goals.map((g, i) => (
            <div key={i} className="rounded-xl p-5 relative overflow-hidden" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--border-color)' }}>
              <div className="absolute top-0 left-0 bottom-0 w-1" style={{ background: 'linear-gradient(180deg, #06B6D4, #4F46E5)' }} />
              <div className="pl-3">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="gradient-text text-sm font-bold" style={{ fontFamily: 'var(--font-display)' }}>{i + 1}</span>
                  <h3 className="text-sm font-semibold m-0" style={{ fontFamily: 'var(--font-display)' }}>{g.title}</h3>
                </div>
                <p className="text-xs m-0" style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>{g.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title={t('oversight.how_title')}>
        <p className="text-sm" style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>{t('oversight.how_p')}</p>
      </Section>

      <Section title={t('oversight.people_title')}>
        <p className="text-sm mb-3" style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>{t('oversight.people_p1')}</p>
        <p className="text-sm" style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>{t('oversight.people_p2')}</p>
      </Section>

      <Section title={t('oversight.notdo_title')}>
        <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>{t('oversight.notdo_intro')}</p>
        <div className="space-y-2">
          {notdo.map((item, i) => (
            <div key={i} className="flex items-start gap-2 p-3 rounded-lg" style={{ border: '1px dashed var(--border-color)' }}>
              <Cross />
              <span className="text-xs" style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>{item}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section title={t('oversight.faq_title')}>
        <div className="space-y-3">
          {faq.map((f, i) => (
            <div key={i} className="rounded-xl p-5" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--border-color)' }}>
              <h3 className="text-sm font-semibold mb-2" style={{ fontFamily: 'var(--font-display)' }}>{f.q}</h3>
              <p className="text-xs m-0" style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>{f.a}</p>
            </div>
          ))}
        </div>
      </Section>

      <div className="mt-10 flex gap-3 justify-center flex-wrap">
        <Link to={`/${i18n.language}/track-record`} className="btn-outline">{t('nav.track_record')}</Link>
        <Link to={`/${i18n.language}/contact`} className="btn-primary">{t('oversight.cta')} →</Link>
      </div>
    </div>
  );
}
