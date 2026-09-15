import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const cards = [
  {
    to: 'services/reactor-crews',
    eyebrow: 'services.crews_eyebrow',
    title: 'services.crews_title',
    desc: 'services.crews_desc',
    icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
  },
  {
    to: 'services/reactor-oversight',
    eyebrow: 'services.oversight_eyebrow',
    title: 'services.oversight_title',
    desc: 'services.oversight_desc',
    icon: <><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.35-4.35" /></>,
  },
];

export default function Services() {
  const { t, i18n } = useTranslation();
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl sm:text-4xl font-bold mb-2 animate-fade-up" style={{ fontFamily: 'var(--font-display)' }}>{t('services.page_title')}</h1>
      <p className="text-base mb-10 animate-fade-up delay-100" style={{ color: 'var(--text-secondary)' }}>{t('services.subtitle')}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-fade-up delay-200">
        {cards.map((c) => (
          <Link key={c.to} to={`/${i18n.language}/${c.to}`} className="no-underline rounded-xl p-6 relative overflow-hidden flex flex-col transition-all duration-200 hover:-translate-y-0.5" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--border-color)' }}>
            <div className="absolute top-0 left-0 bottom-0 w-1" style={{ background: 'linear-gradient(180deg, #06B6D4, #4F46E5)' }} />
            <div className="pl-3 flex flex-col h-full">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-3" style={{ backgroundColor: 'rgba(6,182,212,0.1)' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0E7490" strokeWidth="2">{c.icon}</svg>
              </div>
              <span className="text-xs font-medium tracking-wider uppercase mb-1.5" style={{ color: '#06B6D4' }}>{t(c.eyebrow)}</span>
              <h2 className="text-lg font-semibold mb-2" style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}>{t(c.title)}</h2>
              <p className="text-sm mb-4 flex-1" style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>{t(c.desc)}</p>
              <span className="text-sm font-medium" style={{ color: '#4F46E5' }}>{t('services.read_more')} →</span>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-6 rounded-xl p-5 animate-fade-up delay-300" style={{ border: '1px dashed var(--border-color)' }}>
        <p className="text-sm m-0" style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>{t('services.independence')}</p>
      </div>

      <div className="mt-8 text-center"><Link to={`/${i18n.language}/contact`} className="btn-primary">{t('hero.cta2')} →</Link></div>
    </div>
  );
}
