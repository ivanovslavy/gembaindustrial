import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

/* ------------------------------------------------------------------
   Заетост на екипа. Периодите се редактират САМО тук.
   status: 'booked' | 'provisional' | 'unavailable'
   Всичко, което не е изброено, се показва като свободно.
   🔴 Без имена на клиенти и обекти — клауза 10.1 от договорите.
------------------------------------------------------------------ */
const PERIODS = [
  { from: '2026-02-22', to: '2026-04-22', status: 'booked' },
  { from: '2026-04-26', to: '2026-06-10', status: 'booked' },
  { from: '2026-08-26', to: '2026-09-03', status: 'booked' },
  { from: '2026-09-07', to: '2026-09-20', status: 'booked' },
  { from: '2026-09-26', to: '2026-11-06', status: 'booked' },
  { from: '2026-11-15', to: '2026-11-28', status: 'booked' },
  { from: '2026-09-04', to: '2026-09-06', status: 'unavailable' },
  { from: '2026-09-21', to: '2026-09-25', status: 'unavailable' },
  { from: '2026-11-07', to: '2026-11-14', status: 'unavailable' },
  { from: '2026-11-29', to: '2026-12-31', status: 'unavailable' },
  { from: '2027-02-15', to: '2027-03-14', status: 'booked' },
];

const LOCALES = { en: 'en-GB', bg: 'bg-BG', es: 'es-ES' };

const TONE = {
  available:   { dot: '#06B6D4', bg: 'rgba(6,182,212,0.13)',  fg: '#06B6D4' },
  booked:      { dot: '#F43F5E', bg: 'rgba(244,63,94,0.13)',  fg: '#F43F5E' },
  provisional: { dot: '#F59E0B', bg: 'rgba(245,158,11,0.15)', fg: '#F59E0B' },
  unavailable: { dot: '#6B7280', bg: 'rgba(107,114,128,0.13)', fg: '#9CA3AF' },
};

const iso = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;

function isoWeek(d) {
  const t = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
  t.setUTCDate(t.getUTCDate() - ((t.getUTCDay() + 6) % 7) + 3);
  const ft = new Date(Date.UTC(t.getUTCFullYear(), 0, 4));
  ft.setUTCDate(ft.getUTCDate() - ((ft.getUTCDay() + 6) % 7) + 3);
  return 1 + Math.round((t - ft) / 604800000);
}

const statusOf = (d) => {
  const k = iso(d);
  const hit = PERIODS.find(p => k >= p.from && k <= p.to);
  return hit ? hit.status : 'available';
};

/* мрежата на един месец — винаги започва в понеделник */
function monthGrid(year, month) {
  const first = new Date(year, month, 1);
  const lead = (first.getDay() + 6) % 7;
  const days = new Date(year, month + 1, 0).getDate();
  const cells = [];
  for (let i = 0; i < lead; i++) cells.push(null);
  for (let i = 1; i <= days; i++) cells.push(new Date(year, month, i));
  while (cells.length % 7) cells.push(null);
  return Array.from({ length: cells.length / 7 }, (_, i) => cells.slice(i * 7, i * 7 + 7));
}

export default function Availability() {
  const { t, i18n } = useTranslation();
  const locale = LOCALES[i18n.language] || 'en-GB';
  const today = useMemo(() => new Date(), []);
  const todayKey = iso(today);

  const [view, setViewState] = useState(() => {
    if (typeof window === 'undefined') return 'month';
    return new URLSearchParams(window.location.search).get('view') === 'year' ? 'year' : 'month';
  });
  const setView = (v) => {
    setViewState(v);
    if (typeof window !== 'undefined') {
      const u = new URL(window.location.href);
      if (v === 'year') u.searchParams.set('view', 'year'); else u.searchParams.delete('view');
      window.history.replaceState(null, '', u.pathname + u.search);
    }
  };
  const [cursor, setCursor] = useState(new Date(today.getFullYear(), today.getMonth(), 1));

  const dayNames = useMemo(() => {
    const base = new Date(2026, 0, 5); // понеделник
    return Array.from({ length: 7 }, (_, i) => {
      const d = new Date(base); d.setDate(base.getDate() + i);
      return d.toLocaleDateString(locale, { weekday: 'short' });
    });
  }, [locale]);

  const monthLabel = (y, m) =>
    new Date(y, m, 1).toLocaleDateString(locale, { month: 'long' });

  const step = (n) => setCursor(c => new Date(c.getFullYear(), c.getMonth() + n, 1));
  const stepYear = (n) => setCursor(c => new Date(c.getFullYear() + n, c.getMonth(), 1));
  const goToday = () => setCursor(new Date(today.getFullYear(), today.getMonth(), 1));

  const Arrow = ({ dir, onClick, label }) => (
    <button onClick={onClick} aria-label={label}
      className="w-9 h-9 rounded-lg flex items-center justify-center cursor-pointer transition-colors duration-200 hover:opacity-70"
      style={{ border: '1px solid var(--border-color)', background: 'transparent', color: 'var(--text-secondary)' }}>
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d={dir === 'prev' ? 'M15 18l-6-6 6-6' : 'M9 18l6-6-6-6'} />
      </svg>
    </button>
  );

  /* ---------- голям месечен изглед ---------- */
  const MonthView = () => {
    const y = cursor.getFullYear(), m = cursor.getMonth();
    return (
      <div className="rounded-2xl overflow-hidden animate-fade-up delay-200"
        style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--border-color)' }}>
        <div className="flex items-center justify-between px-4 sm:px-6 py-4"
          style={{ borderBottom: '1px solid var(--border-color)' }}>
          <Arrow dir="prev" onClick={() => step(-1)} label={t('availability.prev')} />
          <div className="text-center">
            <div className="text-lg sm:text-xl font-semibold capitalize" style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}>
              {monthLabel(y, m)}
            </div>
            <div className="text-xs mt-0.5" style={{ color: 'var(--text-tertiary)' }}>{y}</div>
          </div>
          <Arrow dir="next" onClick={() => step(1)} label={t('availability.next')} />
        </div>

        <div className="px-2 sm:px-4 py-3">
          <div className="grid gap-1" style={{ gridTemplateColumns: '2.4rem repeat(7, minmax(0,1fr))' }}>
            <div className="text-[10px] font-semibold uppercase tracking-wider py-2 text-center" style={{ color: 'var(--text-tertiary)' }}>
              {t('availability.week_short')}
            </div>
            {dayNames.map((d, i) => (
              <div key={i} className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider py-2 text-center"
                style={{ color: i > 4 ? 'var(--text-tertiary)' : 'var(--text-secondary)' }}>{d}</div>
            ))}

            {monthGrid(y, m).map((week, wi) => {
              const anchor = week.find(Boolean);
              return (
                <div key={wi} className="contents">
                  <div className="flex items-center justify-center text-[10px] font-medium rounded-md"
                    style={{ color: 'var(--text-tertiary)', background: 'var(--bg-secondary)' }}>
                    {anchor ? isoWeek(anchor) : ''}
                  </div>
                  {week.map((d, di) => {
                    if (!d) return <div key={di} />;
                    const st = statusOf(d);
                    const tone = TONE[st];
                    const past = iso(d) < todayKey;
                    const isToday = iso(d) === todayKey;
                    return (
                      <div key={di}
                        className="aspect-square sm:aspect-auto sm:h-14 rounded-lg flex flex-col items-center justify-center transition-transform duration-150 hover:-translate-y-0.5"
                        title={t(`availability.status.${st}`)}
                        style={{
                          background: tone.bg,
                          border: isToday ? '1.5px solid var(--text-primary)' : '1px solid transparent',
                          opacity: past ? 0.4 : 1,
                        }}>
                        <span className="text-xs sm:text-sm font-semibold" style={{ color: tone.fg }}>{d.getDate()}</span>
                        <span className="w-1.5 h-1.5 rounded-full mt-1" style={{ background: tone.dot }} />
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  /* ---------- годишен изглед — всичките 12 месеца ---------- */
  const YearView = () => {
    const y = cursor.getFullYear();
    return (
      <div className="animate-fade-up delay-200">
        <div className="flex items-center justify-between mb-5">
          <Arrow dir="prev" onClick={() => stepYear(-1)} label={t('availability.prev')} />
          <div className="text-2xl font-semibold gradient-text" style={{ fontFamily: 'var(--font-display)' }}>{y}</div>
          <Arrow dir="next" onClick={() => stepYear(1)} label={t('availability.next')} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {Array.from({ length: 12 }, (_, m) => (
            <div key={m} className="rounded-xl p-3"
              style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--border-color)' }}>
              <button onClick={() => { setCursor(new Date(y, m, 1)); setView('month'); }}
                className="w-full text-left text-sm font-semibold mb-2 capitalize cursor-pointer"
                style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)', background: 'transparent', border: 'none', padding: 0 }}>
                {monthLabel(y, m)}
              </button>
              <div className="grid grid-cols-7 gap-0.5">
                {dayNames.map((d, i) => (
                  <div key={i} className="text-[8px] text-center font-semibold uppercase pb-1" style={{ color: 'var(--text-tertiary)' }}>{d.slice(0, 1)}</div>
                ))}
                {monthGrid(y, m).flat().map((d, i) => {
                  if (!d) return <div key={i} />;
                  const tone = TONE[statusOf(d)];
                  const past = iso(d) < todayKey;
                  const isToday = iso(d) === todayKey;
                  return (
                    <div key={i} className="aspect-square rounded flex items-center justify-center text-[9px] font-medium"
                      title={t(`availability.status.${statusOf(d)}`)}
                      style={{
                        background: tone.bg, color: tone.fg,
                        outline: isToday ? '1px solid var(--text-primary)' : 'none',
                        opacity: past ? 0.4 : 1,
                      }}>{d.getDate()}</div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const Tab = ({ id, label }) => (
    <button onClick={() => setView(id)}
      className="px-4 py-1.5 rounded-lg text-sm font-medium cursor-pointer transition-colors duration-200"
      style={{
        background: view === id ? 'var(--card-bg)' : 'transparent',
        color: view === id ? 'var(--text-primary)' : 'var(--text-secondary)',
        border: `1px solid ${view === id ? 'var(--border-color)' : 'transparent'}`,
      }}>{label}</button>
  );

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl sm:text-4xl font-bold mb-2 animate-fade-up" style={{ fontFamily: 'var(--font-display)' }}>
        {t('availability.page_title')}
      </h1>
      <p className="text-base mb-8 animate-fade-up delay-100" style={{ color: 'var(--text-secondary)' }}>
        {t('availability.subtitle')}
      </p>

      <div className="flex items-center justify-between gap-3 mb-5 animate-fade-up delay-100">
        <div className="flex gap-1 p-1 rounded-xl" style={{ border: '1px solid var(--border-color)' }}>
          <Tab id="month" label={t('availability.view_month')} />
          <Tab id="year" label={t('availability.view_year')} />
        </div>
        <button onClick={goToday}
          className="px-3.5 py-1.5 rounded-lg text-sm font-medium cursor-pointer transition-colors duration-200 hover:opacity-70"
          style={{ border: '1px solid var(--border-color)', background: 'transparent', color: 'var(--text-secondary)' }}>
          {t('availability.today')}
        </button>
      </div>

      {view === 'month' ? <MonthView /> : <YearView />}

      <div className="flex flex-wrap gap-x-5 gap-y-2 mt-6 animate-fade-up delay-300">
        {['available', 'provisional', 'booked', 'unavailable'].map(k => (
          <div key={k} className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ background: TONE[k].dot }} />
            <span className="text-xs" style={{ color: 'var(--text-secondary)' }}>{t(`availability.status.${k}`)}</span>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-xl p-5 animate-fade-up delay-300"
        style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--border-color)' }}>
        <div className="text-sm font-semibold mb-1" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-display)' }}>
          {t('availability.cta_title')}
        </div>
        <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>{t('availability.cta_body')}</p>
        <Link to={`/${i18n.language}/contact`}
          className="inline-block px-5 py-2.5 rounded-lg text-sm font-semibold no-underline text-white"
          style={{ background: 'var(--grad, linear-gradient(135deg,#4F46E5,#06B6D4))' }}>
          {t('availability.cta_button')}
        </Link>
      </div>

      <p className="text-xs mt-5" style={{ color: 'var(--text-tertiary)' }}>{t('availability.note')}</p>
    </div>
  );
}
