import React from 'react';
import { LanguageType } from '../App';

interface AboutProps {
  onNavigate?: () => void;
  lang: LanguageType;
}



const About: React.FC<AboutProps> = ({ onNavigate, lang }) => {
  const t = {
    es: {
      tag: 'Misión y Visión',
      quote: '"Somos el puente que conecta el talento de nuestros artesanos y la riqueza de nuestra tierra con los mercados internacionales más exigentes."',
      crafts: 'artesanos',
      land: 'tierra',
      desc: 'En H&D Alianzas, no solo exportamos productos; exportamos historias, cultura y el esfuerzo de cientos de familias colombianas.',
      cta: 'CONOCE NUESTRO IMPACTO COMPLETO'
    },
    en: {
      tag: 'Mission and Vision',
      quote: '"We are the bridge connecting the talent of our artisans and the wealth of our land with the most demanding international markets."',
      crafts: 'artisans',
      land: 'land',
      desc: 'At H&D Alianzas, we don’t just export products; we export stories, culture, and the effort of hundreds of Colombian families.',
      cta: 'LEARN ABOUT OUR FULL IMPACT'
    }
  }[lang];

  return (
    <section id="about" className="py-24 bg-slate-900 text-white text-center relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(14,165,233,0.05)_0%,_transparent_70%)] pointer-events-none"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-12">
          <div className="w-32 h-32 bg-white flex items-center justify-center rounded-2xl shadow-[0_0_50px_rgba(255,255,255,0.1)] transform hover:scale-105 transition-transform duration-500 overflow-hidden">
             <img src='../public/hyd-logo-transparent.png' alt="" className="w-full h-full object-contain p-2" />
          </div>
        </div>

        <h2 className="text-xs font-bold tracking-[0.5em] mb-8 text-primary uppercase">{t.tag}</h2>
        
        <p className="text-2xl md:text-3xl font-display italic text-slate-100 leading-relaxed mb-12">
          {t.quote}
        </p>

        <div className="w-16 h-1 bg-primary/30 mx-auto mb-12 rounded-full"></div>
        
        <p className="text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
          {t.desc}
        </p>
        
        <button onClick={onNavigate} className="inline-block px-12 py-4 border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold transition-all text-[11px] tracking-[0.25em] uppercase">
          {t.cta}
        </button>
      </div>
    </section>
  );
};

export default About;
