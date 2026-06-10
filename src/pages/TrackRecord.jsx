import { useTranslation } from 'react-i18next';

export default function TrackRecord() {
  const { t } = useTranslation();
  const refineries = t('track_record.refineries', { returnObjects: true });
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl sm:text-4xl font-bold mb-2 animate-fade-up" style={{ fontFamily: 'var(--font-display)' }}>{t('track_record.page_title')}</h1>
      <p className="text-base mb-10 animate-fade-up delay-100" style={{ color: 'var(--text-secondary)' }}>{t('track_record.subtitle')}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 animate-fade-up delay-200">
        {refineries.map((r, i) => (
          <div key={i} className="flex items-start gap-3 p-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--border-color)' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#06B6D4" strokeWidth="2.5" className="shrink-0 mt-0.5"><polyline points="20 6 9 17 4 12"/></svg>
            <div>
              <div className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>{r.name}</div>
              <div className="text-xs" style={{ color: 'var(--text-secondary)' }}>{r.loc}</div>
            </div>
          </div>
        ))}
        <div className="flex items-center justify-center p-4 rounded-xl" style={{ border: '1px dashed var(--border-color)', color: 'var(--text-tertiary)' }}>
          <span className="text-sm">{t('track_record.more')}</span>
        </div>
      </div>
    </div>
  );
}
