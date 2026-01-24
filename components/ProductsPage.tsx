
import React from 'react';
import { FileText, Download, Coffee, Palette, FileDown } from 'lucide-react';
import { LanguageType } from '../App';

interface ProductsPageProps {
  lang: LanguageType;
  onNavigate?: () => void;
}

const ProductsPage: React.FC<ProductsPageProps> = ({ lang, onNavigate }) => {
  const pdfLink = "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"; 

  const t = {
    es: {
      tag: 'PORTAFOLIO EXCLUSIVO',
      title: 'Excelencia',
      titleItalic: 'Sin Fronteras',
      subtitle: 'Descubra la curaduría más fina de productos colombianos, seleccionados bajo los más rigurosos estándares de exportación global.',
      coffeeTitle: 'Cafés de Especialidad',
      coffeeDesc: 'Manejamos granos con puntajes superiores a 85 SCA, provenientes de las regiones más privilegiadas de Colombia. Nuestra oferta incluye perfiles lavados, honeys y procesos naturales con trazabilidad completa.',
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
      ctaBtn: 'HABLAR CON UN ASESOR COMERCIAL'
    },
    en: {
      tag: 'EXCLUSIVE PORTFOLIO',
      title: 'Excellence',
      titleItalic: 'Without Borders',
      subtitle: 'Discover the finest curation of Colombian products, selected under the most rigorous global export standards.',
      coffeeTitle: 'Specialty Coffees',
      coffeeDesc: 'We manage beans with scores above 85 SCA, from the most privileged regions of Colombia. Our offer includes washed, honeys, and natural processes with full traceability.',
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
      ctaBtn: 'TALK TO A SALES ADVISOR'
    }
  }[lang];

  return (
    <div className="pt-20 bg-white min-h-screen">
      <header className="relative h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="../images/banner-cafe.jpg" 
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
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-24 border-t border-slate-100 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-white shadow-xl rounded-[2rem] mb-10 text-primary border border-slate-100 animate-float">
            <FileDown size={48} />
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-6 tracking-tight">{t.catTitle}</h2>
          <p className="text-slate-500 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">{t.catDesc}</p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href={pdfLink}
              download="Catalogo_HD_Alianzas.pdf"
              target='blank'
              className="group relative flex items-center gap-4 px-12 py-6 bg-primary hover:bg-primary-dark text-white font-bold rounded-2xl shadow-2xl shadow-primary/40 transition-all transform hover:-translate-y-1 active:scale-95 text-lg"
            >
              <Download size={24} className="group-hover:animate-bounce" />
              <span>{t.download}</span>
            </a>
            
            <button 
              onClick={() => window.open(pdfLink, '_blank')}
              className="flex items-center gap-3 px-10 py-6 border-2 border-slate-200 text-slate-600 font-bold rounded-2xl hover:bg-slate-100 hover:border-slate-300 transition-all active:scale-95"
            >
              <FileText size={20} />
              <span>{t.preview}</span>
            </button>
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
