
import React from 'react';
import { Globe2, Award, Handshake } from 'lucide-react';
import { LanguageType } from '../App';

const Features: React.FC<{ lang: LanguageType }> = ({ lang }) => {
  const t = {
    es: {
      global: 'ALCANCE GLOBAL',
      globalDesc: 'Exportamos a mercados internacionales con logística premium.',
      quality: 'CALIDAD CERTIFICADA',
      qualityDesc: 'Productos seleccionados bajo los más altos estándares.',
      trade: 'COMERCIO JUSTO',
      tradeDesc: 'Apoyando directamente a las comunidades productoras.'
    },
    en: {
      global: 'GLOBAL REACH',
      globalDesc: 'We export to international markets with premium logistics.',
      quality: 'CERTIFIED QUALITY',
      qualityDesc: 'Products selected under the highest standards.',
      trade: 'FAIR TRADE',
      tradeDesc: 'Directly supporting producing communities.'
    }
  }[lang];

  const features = [
    { icon: <Globe2 className="text-primary" size={40} />, title: t.global, description: t.globalDesc },
    { icon: <Award className="text-amber-600" size={40} />, title: t.quality, description: t.qualityDesc },
    { icon: <Handshake className="text-primary" size={40} />, title: t.trade, description: t.tradeDesc }
  ];

  return (
    <section className="py-16 bg-white dark:bg-slate-900 border-b dark:border-slate-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-slate-100 dark:divide-slate-800">
          {features.map((feature, idx) => (
            <div key={idx} className="p-4 flex flex-col items-center group animate-fade-up stagger-item" style={{ animationDelay: `${idx * 0.2}s` }}>
              <div className="mb-6 transform transition-transform duration-500 group-hover:scale-110">{feature.icon}</div>
              <h3 className="text-sm font-bold tracking-widest text-slate-900 dark:text-white mb-2">{feature.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm max-w-xs">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
