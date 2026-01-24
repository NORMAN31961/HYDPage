
import React from 'react';
import { LanguageType } from '../App';

interface CollectionProps {
  onNavigate?: () => void;
  lang: LanguageType;
}

const Collection: React.FC<CollectionProps> = ({ onNavigate, lang }) => {
  const t = {
    es: {
      tag: 'NUESTRA SELECCIÓN',
      title: 'Productos con',
      titleItalic: 'Sello de Excelencia',
      coffee: 'Café de Especialidad',
      coffeeDesc: 'Granos con trazabilidad completa y perfiles sensoriales superiores de 85+ puntos SCA.',
      crafts: 'Artesanías de Madera',
      craftsDesc: 'Creaciones elaboradas por maestros artesanos utilizando madera de cafeto reciclada.',
      cta: 'VER CATÁLOGO COMPLETO'
    },
    en: {
      tag: 'OUR SELECTION',
      title: 'Products with',
      titleItalic: 'Seal of Excellence',
      coffee: 'Specialty Coffee',
      coffeeDesc: 'Full traceability beans and superior sensory profiles of 85+ SCA points.',
      crafts: 'Wooden Crafts',
      craftsDesc: 'Creations made by master craftsmen using recycled coffee wood.',
      cta: 'VIEW FULL CATALOG'
    }
  }[lang];

  const products = [
    { title: t.coffee, description: t.coffeeDesc, image: '../images/cafe2.jpg' },
    { title: t.crafts, description: t.craftsDesc, image: '../images/artesania2.jpg' }
  ];

  return (
    <section id="products" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <span className="text-[10px] font-bold tracking-[0.3em] text-blue-600 uppercase block mb-4">{t.tag}</span>
          <h2 className="text-4xl md:text-5xl font-sans font-bold text-slate-900">
            {t.title} <span className="text-blue-600 italic font-display font-medium">{t.titleItalic}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {products.map((p, idx) => (
            <div key={idx} className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl transition-transform hover:-translate-y-2">
              <img src={p.image} alt="" className="w-full h-80 object-cover" />
              <div className="p-10 text-center">
                <h3 className="text-xl font-bold mb-4">{p.title}</h3>
                <p className="text-slate-500 text-sm mb-8 px-4">{p.description}</p>
                <button onClick={onNavigate} className="text-[10px] font-bold text-blue-600 uppercase tracking-[0.25em] border-b border-transparent hover:border-blue-600 pb-1 transition-all">
                  {t.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collection;
