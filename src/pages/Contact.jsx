import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

const TURNSTILE_SITEKEY = '0x4AAAAAAC-GigJLFZlSeJKL';

export default function Contact() {
  const { t } = useTranslation();
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState(null);
  const turnstileRef = useRef(null);
  const widgetIdRef = useRef(null);

  useEffect(() => {
    const r = () => { if (window.turnstile && turnstileRef.current && widgetIdRef.current === null) { widgetIdRef.current = window.turnstile.render(turnstileRef.current, { sitekey: TURNSTILE_SITEKEY, theme: document.documentElement.classList.contains('dark') ? 'dark' : 'light' }); } };
    if (window.turnstile) r(); else { const iv = setInterval(() => { if (window.turnstile) { r(); clearInterval(iv); } }, 200); return () => clearInterval(iv); }
    return () => { if (widgetIdRef.current !== null && window.turnstile) { try { window.turnstile.remove(widgetIdRef.current); } catch(e) {} widgetIdRef.current = null; } };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault(); setSending(true); setStatus(null);
    try {
      const tk = window.turnstile?.getResponse(widgetIdRef.current);
      if (!tk) { setStatus('error'); setSending(false); return; }
      const res = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...form, turnstileToken: tk }) });
      if (!res.ok) throw new Error();
      setStatus('success'); setForm({ name: '', email: '', subject: '', message: '' });
      if (window.turnstile) window.turnstile.reset(widgetIdRef.current);
    } catch { setStatus('error'); } finally { setSending(false); }
  };

  const is = { backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-color)', color: 'var(--text-primary)', fontFamily: 'var(--font-body)' };

  return (
    <div className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="text-3xl sm:text-4xl font-bold mb-3 text-center animate-fade-up" style={{ fontFamily: 'var(--font-display)' }}>{t('contact.title')}</h1>
      <p className="text-base mb-10 text-center animate-fade-up delay-100" style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>{t('contact.subtitle')}</p>
      <div className="animate-fade-up delay-200">
        <div className="rounded-xl p-6 sm:p-8" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--border-color)' }}>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div><label className="block text-xs font-medium mb-1.5" style={{ color: 'var(--text-secondary)' }}>{t('contact.form.name')} *</label><input type="text" required value={form.name} onChange={e=>setForm({...form,name:e.target.value})} className="w-full px-3 py-2.5 rounded-lg text-sm outline-none" style={is}/></div>
              <div><label className="block text-xs font-medium mb-1.5" style={{ color: 'var(--text-secondary)' }}>{t('contact.form.email')} *</label><input type="email" required value={form.email} onChange={e=>setForm({...form,email:e.target.value})} className="w-full px-3 py-2.5 rounded-lg text-sm outline-none" style={is}/></div>
            </div>
            <div><label className="block text-xs font-medium mb-1.5" style={{ color: 'var(--text-secondary)' }}>{t('contact.form.subject')}</label><input type="text" value={form.subject} onChange={e=>setForm({...form,subject:e.target.value})} className="w-full px-3 py-2.5 rounded-lg text-sm outline-none" style={is}/></div>
            <div><label className="block text-xs font-medium mb-1.5" style={{ color: 'var(--text-secondary)' }}>{t('contact.form.message')} *</label><textarea rows="6" required value={form.message} onChange={e=>setForm({...form,message:e.target.value})} className="w-full px-3 py-2.5 rounded-lg text-sm outline-none resize-none" style={is}/></div>
            <div className="flex justify-center pt-1"><div ref={turnstileRef}/></div>
            {status==='success'&&<div className="text-sm font-medium px-4 py-3 rounded-lg text-center" style={{backgroundColor:'rgba(5,150,105,0.08)',color:'#059669'}}>{t('contact.form.success')}</div>}
            {status==='error'&&<div className="text-sm font-medium px-4 py-3 rounded-lg text-center" style={{backgroundColor:'rgba(220,38,38,0.08)',color:'#DC2626'}}>{t('contact.form.error')}</div>}
            <div className="pt-1 flex justify-center"><button type="submit" disabled={sending} className="btn-primary text-sm" style={{opacity:sending?0.6:1}}>{sending?t('contact.form.sending'):`${t('contact.form.send')} →`}</button></div>
          </form>
        </div>
      </div>
    </div>
  );
}
