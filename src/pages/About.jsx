import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();
  const certs = t('about.certs', { returnObjects: true });
  const countries = t('about.countries', { returnObjects: true });
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl sm:text-4xl font-bold mb-8 animate-fade-up" style={{ fontFamily: 'var(--font-display)' }}>{t('about.title')}</h1>
      <div className="space-y-4 mb-8 animate-fade-up delay-100">
        {['p1','p2','p3'].map(k => <p key={k} className="text-base" style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>{t(`about.${k}`)}</p>)}
      </div>
      <div className="flex flex-wrap gap-2 mb-6 animate-fade-up delay-200">
        {certs.map(c => <span key={c} className="text-xs font-medium px-3 py-1.5 rounded-md" style={{ backgroundColor: 'rgba(79,70,229,0.1)', border: '1px solid rgba(79,70,229,0.2)', color: '#818cf8' }}>{c}</span>)}
      </div>
      <div className="flex flex-wrap gap-2 animate-fade-up delay-300">
        {countries.map(c => <span key={c} className="text-sm px-3 py-1.5 rounded-full" style={{ border: '1px solid var(--border-color)', backgroundColor: 'var(--card-bg)' }}>{c}</span>)}
      </div>
    </div>
  );
}
