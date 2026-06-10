import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function Services() {
  const { t, i18n } = useTranslation();
  const services = t('services.items', { returnObjects: true });
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl sm:text-4xl font-bold mb-2 animate-fade-up" style={{ fontFamily: 'var(--font-display)' }}>{t('services.page_title')}</h1>
      <p className="text-base mb-10 animate-fade-up delay-100" style={{ color: 'var(--text-secondary)' }}>{t('services.subtitle')}</p>
      <div className="space-y-4 animate-fade-up delay-200">
        {services.map((svc, i) => (
          <div key={i} className="rounded-xl p-5 relative overflow-hidden" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--border-color)' }}>
            <div className="absolute top-0 left-0 bottom-0 w-1" style={{ background: 'linear-gradient(180deg, #06B6D4, #4F46E5)' }} />
            <h3 className="text-base font-semibold mb-1 pl-3" style={{ fontFamily: 'var(--font-display)' }}>{svc.title}</h3>
            <p className="text-sm pl-3" style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>{svc.desc}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center"><Link to={`/${i18n.language}/contact`} className="btn-primary">{t('hero.cta2')} →</Link></div>
    </div>
  );
}
