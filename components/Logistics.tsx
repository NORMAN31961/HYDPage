
import React from 'react';
import { Zap, FileText } from 'lucide-react';
import { LanguageType } from '../App';

interface LogisticsProps {
  onNavigate?: () => void;
  lang: LanguageType;
}

const Logistics: React.FC<LogisticsProps> = ({ onNavigate, lang }) => {
  const t = {
    es: {
      title: 'Logística Global de Élite',
      titleAccent: 'Para tus negocios',
      desc: 'H&D Alianzas es tu departamento de comercio exterior. Gestionamos desde la recolección en origen hasta la entrega final en puerto internacional.',
      air: 'Envíos Express Aéreos',
      airDesc: 'Soluciones rápidas para muestras y pedidos de alto valor a partir de 50kg con tiempos de tránsito optimizados.',
      customs: 'Expertos en Aduanas',
      customsDesc: 'Control total de certificados fitosanitarios (ICA/INVIMA) y toda la documentación legal para evitar retrasos.',
      cta: 'VER DETALLES DE EXPORTACIÓN'
    },
    en: {
      title: 'Elite Global Logistics',
      titleAccent: 'For your business',
      desc: 'H&D Alianzas is your foreign trade department. We manage from collection at origin to final delivery at international ports.',
      air: 'Express Air Shipping',
      airDesc: 'Fast solutions for samples and high-value orders from 50kg with optimized transit times.',
      customs: 'Customs Experts',
      customsDesc: 'Full control of phytosanitary certificates (ICA/INVIMA) and all legal documents to avoid delays.',
      cta: 'VIEW EXPORT DETAILS'
    }
  }[lang];

  return (
    <section id="export" className="py-24 bg-slate-100 dark:bg-slate-900/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="w-full lg:w-1/2 relative animate-fade-left">
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl shadow-blue-500/10 group">
              <img src="https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&q=80&w=1200" alt="" className="w-full h-[400px] md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-blue-50 rounded-full blur-3xl -z-0 opacity-60 animate-pulse"></div>
          </div>

          <div className="w-full lg:w-1/2 animate-fade-right">
            <div className="space-y-2 mb-8">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-sans font-bold text-slate-900 dark:text-white leading-[1.1]">
                {t.title} <br /><span className="text-blue-500/80">{t.titleAccent}</span>
              </h2>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-base md:text-lg leading-relaxed mb-12 max-w-xl">{t.desc}</p>
            <div className="space-y-10 mb-12">
              <div className="flex items-start gap-5 group">
                <div className="flex-shrink-0 w-14 h-14 bg-blue-600/90 flex items-center justify-center rounded-2xl shadow-lg transition-all group-hover:-rotate-6"><Zap className="text-white" size={26} fill="white" /></div>
                <div><h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{t.air}</h4><p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed max-w-sm">{t.airDesc}</p></div>
              </div>
              <div className="flex items-start gap-5 group">
                <div className="flex-shrink-0 w-14 h-14 bg-blue-600/90 flex items-center justify-center rounded-2xl shadow-lg transition-all group-hover:rotate-6"><FileText className="text-white" size={26} /></div>
                <div><h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{t.customs}</h4><p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed max-w-sm">{t.customsDesc}</p></div>
              </div>
            </div>
            <button onClick={onNavigate} className="px-10 py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-all shadow-xl active:scale-95">{t.cta}</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Logistics;
