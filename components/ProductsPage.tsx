
import React from 'react';
import { Download, Coffee, Palette } from 'lucide-react';
import { LanguageType } from '../App';

interface ProductsPageProps {
  lang: LanguageType;
  onNavigate?: () => void;
}

const ProductsPage: React.FC<ProductsPageProps> = ({ lang, onNavigate }) => {
  const pdf_Coffee = "https://drive.google.com/file/d/1gNKN99b2sb0AlTW-PqR2l5BtI2aBF7Gk/view?usp=sharing";
  const pdf_Art = "https://drive.google.com/file/d/1FNpF2SRiI8pN79ngmiYIuh7pGqSmFMY8/view?usp=drive_link";

  const t = {
    es: {
      tag: 'PORTAFOLIO EXCLUSIVO',
      title: 'Excelencia',
      titleItalic: 'Sin Fronteras',
      subtitle: 'Descubra la curaduría más fina de productos colombianos, seleccionados bajo los más rigurosos estándares de exportación global.',
      coffeeTitle: 'Cafés de Especialidad',
      coffeeDesc: (
        <>
          Manejamos granos provenientes de la comunidad indigena <strong className="font-black text-slate-900">UMBRA GUAQUEMARAE</strong> y son sembrados a el rededor de la colina de la diosa <strong className="font-black text-slate-900">MICHUA</strong> ubicada a 1700 pies de altura, con una tasa de calidad puntaje 85 dandole a el cafe una exclusividad en su sabor y aroma y proceso de cultivos y recoleccion.
        </>
      ),
      coffeeList: ['Origen Huila & Nariño', 'Certificaciones Orgánicas', 'Tueste Personalizado para Exportación'],
      artTitle: 'Arte y Cultura Indígena',
      artDesc: 'Representamos la autenticidad de las comunidades Wayuu y artesanos del Eje Cafetero. Cada pieza es un testimonio de herencia cultural, tejida y tallada a mano con materiales sostenibles.',
      artList: ['Mochilas Wayuu de Edición Limitada', 'Artesanías en Madera de Cafeto', 'Joyas Ancestrales Tejidas'],
      catTitle: 'Descargue el Catálogo Maestro',
      catDesc: 'Hemos consolidado toda nuestra oferta exportable en un documento detallado. Encuentre fichas técnicas, perfiles de taza y disponibilidad de artesanías.',
      download: 'DESCARGAR CATÁLOGO PDF',
      preview: 'VISTA PREVIA',
      ctaTitle: '¿Busca un producto a medida?',
      ctaDesc: 'Si requiere una ficha técnica específica o personalización de marca, contáctenos directamente.',
      ctaBtn: 'HABLAR CON UN ASESOR COMERCIAL',
      pdf_Coffee: 'MAS PRODUCTOS',
      pdf_Art: 'MAS PRODUCTOS'
    },
    en: {
      tag: 'EXCLUSIVE PORTFOLIO',
      title: 'Excellence',
      titleItalic: 'Without Borders',
      subtitle: 'Discover the finest curation of Colombian products, selected under the most rigorous global export standards.',
      coffeeTitle: 'Specialty Coffees',
      coffeeDesc: (
        <>
          We source beans from the <strong className="font-black text-slate-900">UMBRA GUAQUEMARAE</strong> indigenous community, grown around the hill of the goddess <strong className="font-black text-slate-900">MICHUA</strong> at 1,700 feet. With a quality score of 85, this coffee offers exclusive flavor and aroma, achieved through unique cultivation and harvesting processes.
        </>
      ),
      coffeeList: ['Huila & Nariño Origin', 'Organic Certifications', 'Custom Roasting for Export'],
      artTitle: 'Indigenous Art and Culture',
      artDesc: 'We represent the authenticity of Wayuu communities and craftsmen from the Coffee Region. Each piece is a testimony of cultural heritage, hand-woven and carved with sustainable materials.',
      artList: ['Limited Edition Wayuu Bags', 'Coffee Wood Crafts', 'Ancestral Woven Jewelry'],
      catTitle: 'Download the Master Catalog',
      catDesc: 'We have consolidated our entire exportable offer in a detailed document. Find technical data sheets, cup profiles, and craft availability.',
      download: 'DOWNLOAD PDF CATALOG',
      preview: 'PREVIEW',
      ctaTitle: 'Looking for a custom product?',
      ctaDesc: 'If you require a specific data sheet or brand customization, contact us directly.',
      ctaBtn: 'TALK TO A SALES ADVISOR',
      pdf_Coffee: 'MORE PRODUCTS',
      pdf_Art: 'MORE PRODUCTS'
    }
  }[lang];

  return (
    <div className="pt-20 bg-white min-h-screen">
      <header className="relative h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="../images/banner-cafe3.jpg"
            alt="Coffee farm landscape"
            className="w-full h-full object-cover animate-subtle-scale"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/40 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl animate-fade-up">
            <span className="text-primary font-bold tracking-[0.4em] uppercase text-xs mb-4 block">
              {t.tag}
            </span>
            <h1 className="text-5xl md:text-7xl font-sans font-bold text-white mb-6 leading-tight">
              {t.title} <br />
              <span className="text-primary italic font-display font-medium">{t.titleItalic}</span>
            </h1>
            <p className="text-slate-300 text-lg md:text-xl leading-relaxed mb-8">
              {t.subtitle}
            </p>
          </div>
        </div>
      </header>

      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <div className="space-y-6">
            <div className="w-12 h-12 bg-blue-50 flex items-center justify-center rounded-xl text-primary animate-pulse">
              <Coffee size={28} />
            </div>
            <h2 className="text-3xl font-bold text-slate-900">{t.coffeeTitle}</h2>
            <p className="text-slate-500 text-lg leading-relaxed">{t.coffeeDesc}</p>
            <ul className="space-y-3">
              {t.coffeeList.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  {item}
                </li>
              ))}
            </ul>

            <a
              href={pdf_Coffee}
              target='blank'
              className="inline-flex w-fit group relative items-center gap-3 px-6 py-5 bg-primary hover:bg-primary-dark text-white font-bold rounded-xl shadow-2xl shadow-primary/40 transition-all transform hover:-translate-y-1 active:scale-95 text-base "
            >
              <Download size={24} className="group-hover:animate-bounce" />
              <span>{t.pdf_Coffee}</span>
            </a>

          </div>
          <div className="relative group">
            <img
              src="../images/cafe.jpg"
              alt="Premium coffee beans"
              className="rounded-[2.5rem] shadow-2xl object-cover h-[400px] w-full transition-all duration-700 group-hover:rotate-1"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative group">
            <img
              src="../images/artesanias.jpg"
              alt="Indigenous crafts"
              className="rounded-[2.5rem] shadow-2xl object-cover h-[400px] w-full transition-all duration-700 group-hover:-rotate-1"
            />
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <div className="w-12 h-12 bg-blue-50 flex items-center justify-center rounded-xl text-primary animate-pulse">
              <Palette size={28} />
            </div>
            <h2 className="text-3xl font-bold text-slate-900">{t.artTitle}</h2>
            <p className="text-slate-500 text-lg leading-relaxed">{t.artDesc}</p>
            <ul className="space-y-3">
              {t.artList.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  {item}
                </li>
              ))}
            </ul>
            <a
              href={pdf_Art}
              target='blank'
              className="inline-flex w-fit group relative items-center gap-3 px-6 py-5 bg-primary hover:bg-primary-dark text-white font-bold rounded-xl shadow-2xl shadow-primary/40 transition-all transform hover:-translate-y-1 active:scale-95 text-base "
            >
              <Download size={24} className="group-hover:animate-bounce" />
              <span>{t.pdf_Art}</span>
            </a>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-white text-2xl font-bold mb-4">{t.ctaTitle}</h3>
          <p className="text-slate-400 mb-8">{t.ctaDesc}</p>
          <button
            onClick={onNavigate}
            className="px-8 py-3 bg-white/5 hover:bg-white/10 text-primary border border-primary/20 font-bold rounded-xl transition-all text-sm uppercase tracking-widest active:scale-95"
          >
            {t.ctaBtn}
          </button>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
