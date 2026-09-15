import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import GembaLogo from '../components/GembaLogo';

export default function Home() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const refineries = t('track_record.refineries', { returnObjects: true });

  const divisions = [
    {
      to: `/${lang}/services/reactor-crews`,
      eyebrow: t('services.crews_eyebrow'),
      title: t('services.crews_title'),
      desc: t('services.crews_desc'),
      icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
    },
    {
      to: `/${lang}/services/reactor-oversight`,
      eyebrow: t('services.oversight_eyebrow'),
      title: t('services.oversight_title'),
      desc: t('services.oversight_desc'),
      icon: <><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.35-4.35" /></>,
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="text-center py-16 sm:py-24 px-4 relative overflow-hidden">
        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(79,70,229,0.06) 0%, transparent 70%)' }} />
        <div className="relative z-10">
          <div className="flex justify-center mb-6 animate-fade-up"><GembaLogo size={80} animated /></div>
          <span className="inline-block text-xs font-medium tracking-wider uppercase px-4 py-1.5 rounded-full mb-5 animate-fade-up delay-100" style={{ color: '#06B6D4', backgroundColor: 'rgba(6,182,212,0.08)' }}>{t('hero.badge')}</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight max-w-2xl mx-auto mb-4 animate-fade-up delay-200" style={{ fontFamily: 'var(--font-display)' }}>
            {t('hero.title1')}<br /><span className="gradient-text">{t('hero.title_accent')}</span><br />{t('hero.title2')}
          </h1>
          <p className="text-base sm:text-lg max-w-xl mx-auto mb-8 animate-fade-up delay-300" style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>{t('hero.subtitle')}</p>
          <div className="flex gap-3 justify-center flex-wrap animate-fade-up delay-400">
            <Link to={`/${lang}/services`} className="btn-primary">{t('hero.cta')} →</Link>
            <Link to={`/${lang}/services/reactor-oversight`} className="btn-outline">{t('hero.cta3')}</Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-4xl mx-auto px-4 pb-12" style={{ borderTop: '1px solid var(--border-color)' }}>
        <div className="grid grid-cols-4 gap-0" style={{ borderBottom: '1px solid var(--border-color)' }}>
          {[{ v: '4–12', k: 'crew' }, { v: '10+', k: 'years' }, { v: '100%', k: 'safety' }, { v: '24/7', k: 'availability' }].map((s, i) => (
            <div key={i} className="text-center py-6" style={{ borderRight: i < 3 ? '1px solid var(--border-color)' : 'none' }}>
              <div className="gradient-text text-2xl sm:text-3xl font-bold" style={{ fontFamily: 'var(--font-display)' }}>{s.v}</div>
              <div className="text-xs mt-1 uppercase tracking-wider" style={{ color: 'var(--text-secondary)' }}>{t(`stats.${s.k}`)}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Two divisions */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-semibold text-center mb-1" style={{ fontFamily: 'var(--font-display)' }}>{t('services.page_title')}</h2>
          <p className="text-sm text-center mb-8" style={{ color: 'var(--text-secondary)' }}>{t('services.subtitle')}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {divisions.map((d) => (
              <Link key={d.to} to={d.to} className="no-underline rounded-xl p-6 relative overflow-hidden flex flex-col transition-all duration-200 hover:-translate-y-0.5" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--border-color)' }}>
                <div className="absolute top-0 left-0 bottom-0 w-1" style={{ background: 'linear-gradient(180deg, #06B6D4, #4F46E5)' }} />
                <div className="pl-3 flex flex-col h-full">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-3" style={{ backgroundColor: 'rgba(6,182,212,0.1)' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0E7490" strokeWidth="2">{d.icon}</svg>
                  </div>
                  <span className="text-xs font-medium tracking-wider uppercase mb-1.5" style={{ color: '#06B6D4' }}>{d.eyebrow}</span>
                  <h3 className="text-base font-semibold mb-2" style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}>{d.title}</h3>
                  <p className="text-xs mb-4 flex-1" style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>{d.desc}</p>
                  <span className="text-xs font-medium" style={{ color: '#4F46E5' }}>{t('services.read_more')} →</span>
                </div>
              </Link>
            ))}
          </div>
          <p className="text-xs text-center mt-5" style={{ color: 'var(--text-tertiary)' }}>{t('services.independence')}</p>
        </div>
      </section>

      {/* Refineries preview */}
      <section className="py-12 px-4" style={{ borderTop: '1px solid var(--border-color)' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-semibold text-center mb-1" style={{ fontFamily: 'var(--font-display)' }}>{t('track_record.page_title')}</h2>
          <p className="text-sm text-center mb-8" style={{ color: 'var(--text-secondary)' }}>{t('track_record.subtitle')}</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {refineries.slice(0, 8).map((r, i) => (
              <div key={i} className="flex items-start gap-2 p-3 rounded-lg" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--border-color)' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#06B6D4" strokeWidth="2.5" className="shrink-0 mt-0.5"><polyline points="20 6 9 17 4 12"/></svg>
                <div>
                  <div className="text-xs font-semibold" style={{ color: 'var(--text-primary)' }}>{r.name}</div>
                  <div className="text-xs" style={{ color: 'var(--text-tertiary)' }}>{r.loc}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link to={`/${lang}/track-record`} className="text-sm font-medium no-underline" style={{ color: '#4F46E5' }}>{t('track_record.more')} →</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-14 px-4" style={{ borderTop: '1px solid var(--border-color)' }}>
        <h2 className="text-xl font-semibold mb-2" style={{ fontFamily: 'var(--font-display)' }}>{t('contact.title')}</h2>
        <p className="text-sm mb-6" style={{ color: 'var(--text-secondary)' }}>{t('contact.subtitle')}</p>
        <Link to={`/${lang}/contact`} className="btn-primary">{t('hero.cta2')} →</Link>
      </section>
    </div>
  );
}
