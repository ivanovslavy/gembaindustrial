import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

const meta = {
  en: {
    home: { title: 'GEMBA Industrial Services — Reactor & Catalyst Changeout Specialists', desc: 'Specialist reactor technician and catalyst changeout crews across Europe. Shell, ExxonMobil, BP, Neste, ORLEN.' },
    services: { title: 'Services — GEMBA Industrial', desc: 'Reactor technician services, catalyst changeout, safety compliance, specialist personnel.' },
    'track-record': { title: 'Track Record — GEMBA Industrial', desc: 'Where we have worked: Shell, ExxonMobil, BP, Neste, ORLEN and more.' },
    'services/reactor-crews': { title: 'Reactor Crew Services — GEMBA Industrial', desc: 'Certified BA reactor technicians for catalyst changeout, vessel internals and box-up across Europe.' },
    'services/reactor-oversight': { title: 'Reactor Oversight — Owner\'s Site Representation | GEMBA Industrial', desc: 'Independent owner\'s representatives on your reactors, from shutdown to start-up. Daily written reporting on every contractor.' },
    about: { title: 'About — GEMBA Industrial', desc: '10+ years experience at Europe\'s largest refineries.' },
    blog: { title: 'Blog — GEMBA Industrial', desc: 'Insights on industrial services, refinery operations, and safety.' },
    team: { title: 'Team — GEMBA Industrial', desc: 'Meet our leadership and crew.' },
    careers: { title: 'Careers — GEMBA Industrial', desc: 'Join our crew. We are hiring reactor technicians.' },
    contact: { title: 'Contact — GEMBA Industrial', desc: 'Get in touch for reactor and catalyst changeout services.' },
  },
  bg: {
    home: { title: 'ГЕМБА Индустриални услуги — Реакторни специалисти', desc: 'Реакторни техници и подмяна на катализатори в Европа.' },
    services: { title: 'Услуги — ГЕМБА Индустриални', desc: 'Реакторни техници, подмяна на катализатори, безопасност.' },
    'track-record': { title: 'Опит — ГЕМБА Индустриални', desc: 'Къде сме работили.' },
    'services/reactor-crews': { title: 'Реакторни екипи — ГЕМБА Индустриални', desc: 'Сертифицирани BA реакторни техници за подмяна на катализатори и работа по съдове.' },
    'services/reactor-oversight': { title: 'Реакторен надзор — представителство на собственика | ГЕМБА Индустриални', desc: 'Независими представители на вашите реактори, от спирането до пускането. Ежедневен писмен доклад.' },
    about: { title: 'За нас — ГЕМБА Индустриални', desc: '10+ години опит.' },
    blog: { title: 'Блог — ГЕМБА Индустриални', desc: 'Новини и анализи.' },
    team: { title: 'Екип — ГЕМБА Индустриални', desc: 'Нашият екип.' },
    careers: { title: 'Кариери — ГЕМБА Индустриални', desc: 'Търсим реакторни техници.' },
    contact: { title: 'Контакти — ГЕМБА Индустриални', desc: 'Свържете се с нас.' },
  },
  es: {
    home: { title: 'GEMBA Industrial — Especialistas en Reactores', desc: 'Técnicos de reactor y cambio de catalizadores en Europa.' },
    services: { title: 'Servicios — GEMBA Industrial', desc: 'Técnicos de reactor, cambio de catalizadores.' },
    'track-record': { title: 'Experiencia — GEMBA Industrial', desc: 'Dónde hemos trabajado.' },
    'services/reactor-crews': { title: 'Equipos de reactor — GEMBA Industrial', desc: 'Técnicos de reactor certificados para cambio de catalizador e internos de recipiente.' },
    'services/reactor-oversight': { title: 'Supervisión de reactores — GEMBA Industrial', desc: 'Representantes independientes del propietario en sus reactores, de la parada al arranque.' },
    about: { title: 'Sobre nosotros — GEMBA Industrial', desc: '10+ años de experiencia.' },
    blog: { title: 'Blog — GEMBA Industrial', desc: 'Noticias y análisis.' },
    team: { title: 'Equipo — GEMBA Industrial', desc: 'Nuestro equipo.' },
    careers: { title: 'Carreras — GEMBA Industrial', desc: 'Únete a nuestro equipo.' },
    contact: { title: 'Contacto — GEMBA Industrial', desc: 'Contáctenos.' },
  },
};

export default function SEOHead() {
  const { i18n } = useTranslation();
  const location = useLocation();
  const lang = i18n.language || 'en';
  const pathParts = location.pathname.split('/').filter(Boolean);
  const page = pathParts.slice(1).join('/') || 'home';
  const pageMeta = meta[lang]?.[page] || meta[lang]?.home || meta.en.home;
  const baseUrl = 'https://gembaindustrial.com';
  const canonicalUrl = `${baseUrl}${location.pathname}`;
  return (
    <Helmet>
      <html lang={lang} />
      <title>{pageMeta.title}</title>
      <meta name="description" content={pageMeta.desc} />
      <link rel="canonical" href={canonicalUrl} />
      {['en','bg','es'].map(l => <link key={l} rel="alternate" hrefLang={l} href={`${baseUrl}/${l}${pathParts.length > 1 ? '/' + pathParts.slice(1).join('/') : ''}`} />)}
      <meta property="og:title" content={pageMeta.title} />
      <meta property="og:description" content={pageMeta.desc} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      <script type="application/ld+json">{JSON.stringify({'@context':'https://schema.org','@type':'Organization',name:'GEMBA Industrial Services',url:'https://gembaindustrial.com',description:pageMeta.desc,parentOrganization:{name:'GEMBA EOOD',url:'https://gembateam.com'},address:{'@type':'PostalAddress',streetAddress:'bul. Knyaz Boris I 109, floor 13, apt. 50',addressLocality:'Varna',addressRegion:'Varna',postalCode:'9002',addressCountry:'BG'}})}</script>
    </Helmet>
  );
}
