import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function ReactorCrews() {
  const { t, i18n } = useTranslation();
  const items = t('crews.items', { returnObjects: true });
  const why = t('crews.why', { returnObjects: true });
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <span className="inline-block text-xs font-medium tracking-wider uppercase px-4 py-1.5 rounded-full mb-4 animate-fade-up" style={{ color: '#06B6D4', backgroundColor: 'rgba(6,182,212,0.08)' }}>{t('crews.eyebrow')}</span>
      <h1 className="text-3xl sm:text-4xl font-bold mb-2 animate-fade-up delay-100" style={{ fontFamily: 'var(--font-display)' }}>{t('crews.page_title')}</h1>
      <p className="text-base mb-10 animate-fade-up delay-200" style={{ color: 'var(--text-secondary)' }}>{t('crews.subtitle')}</p>

      <div className="space-y-4 animate-fade-up delay-300">
        {items.map((svc, i) => (
          <div key={i} className="rounded-xl p-5 relative overflow-hidden" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--border-color)' }}>
            <div className="absolute top-0 left-0 bottom-0 w-1" style={{ background: 'linear-gradient(180deg, #06B6D4, #4F46E5)' }} />
            <h3 className="text-base font-semibold mb-1 pl-3" style={{ fontFamily: 'var(--font-display)' }}>{svc.title}</h3>
            <p className="text-sm pl-3" style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>{svc.desc}</p>
          </div>
        ))}
      </div>

      <h2 className="text-xl font-semibold mt-12 mb-4" style={{ fontFamily: 'var(--font-display)' }}>{t('crews.why_title')}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {why.map((w, i) => (
          <div key={i} className="rounded-xl p-4" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--border-color)' }}>
            <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-2" style={{ backgroundColor: 'rgba(6,182,212,0.1)' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0E7490" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
            </div>
            <h3 className="text-sm font-semibold mb-1" style={{ fontFamily: 'var(--font-display)' }}>{w.title}</h3>
            <p className="text-xs" style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>{w.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 flex gap-3 justify-center flex-wrap">
        <Link to={`/${i18n.language}/availability`} className="btn-outline">{t('crews.cta')}</Link>
        <Link to={`/${i18n.language}/contact`} className="btn-primary">{t('hero.cta2')} →</Link>
      </div>
    </div>
  );
}
