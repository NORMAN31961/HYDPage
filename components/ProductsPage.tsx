import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Download, Coffee, Palette, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { LanguageType } from '../App';

interface ProductsPageProps {
  lang: LanguageType;
  onNavigate?: () => void;
}

const ImageCarousel = ({ images, alt, className = "" }: { images: string[], alt: string, className?: string }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const next = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  useEffect(() => {
    // Si está en pantalla completa, no cambiar automáticamente
    if (isFullscreen) return;

    const timer = setInterval(() => {
      next();
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length, isFullscreen]);

  // Handle keyboard navigation for fullscreen mode
  useEffect(() => {
    if (!isFullscreen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsFullscreen(false);
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFullscreen]);

  return (
    <>
      {/* Carrusel Normal */}
      <div className={`relative group overflow-hidden rounded-[2.5rem] shadow-2xl ${className}`}>
        <div
          className="flex transition-transform duration-700 ease-in-out h-full w-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`${alt} ${idx + 1}`}
              onClick={() => {
                setCurrentIndex(idx);
                setIsFullscreen(true);
              }}
              className="object-cover h-full w-full shrink-0 cursor-pointer"
            />
          ))}
        </div>

        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 backdrop-blur-sm text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all"
          aria-label="Previous image"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 backdrop-blur-sm text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all"
          aria-label="Next image"
        >
          <ChevronRight size={24} />
        </button>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to image ${idx + 1}`}
              className={`w-2.5 h-2.5 rounded-full transition-all ${idx === currentIndex ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/80'}`}
            />
          ))}
        </div>
      </div>

      {/* Modal de Pantalla Completa */}
      {isFullscreen && typeof document !== 'undefined' && createPortal(
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-sm animate-fade-in">
          {/* Botón Cerrar */}
          <button
            onClick={() => setIsFullscreen(false)}
            className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-all z-50"
          >
            <X size={28} />
          </button>

          {/* Imagen principal */}
          <div className="relative w-full h-full p-4 md:p-12 flex items-center justify-center" onClick={() => setIsFullscreen(false)}>
            <img
              src={images[currentIndex]}
              alt={`${alt} (Expanded)`}
              className="max-w-[90vw] max-h-[80vh] md:max-w-[85vw] md:max-h-[85vh] w-auto h-auto object-contain rounded-lg shadow-2xl animate-scale-up cursor-default"
              onClick={(e) => e.stopPropagation()}
            />
          </div>

          {/* Controles del Modal */}
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all"
          >
            <ChevronLeft size={32} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all"
          >
            <ChevronRight size={32} />
          </button>

          {/* Indicadores del Modal */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-3 h-3 rounded-full transition-all ${idx === currentIndex ? 'bg-white scale-125' : 'bg-white/30 hover:bg-white/60'}`}
              />
            ))}
          </div>
        </div>,
        document.body
      )}
    </>
  );
};

const ProductsPage: React.FC<ProductsPageProps> = ({ lang, onNavigate }) => {
  const pdf_Art = "https://drive.google.com/file/d/1Mu5WxHir2h39_2oSiXrKNVb9yH9KuPUC/view?usp=drive_link";

  const t = {
    es: {
      tag: 'PORTAFOLIO EXCLUSIVO',
      title: 'Excelencia',
      titleItalic: 'Sin Fronteras',
      subtitle: 'Descubra la curaduría más fina de productos colombianos, seleccionados bajo los más rigurosos estándares de exportación global.',
      coffeeTitle: 'Cafés de Especialidad',
      coffeeDesc: (
        <>
          <p>
            Trabajamos con granos cultivados por la comunidad indígena <strong className="font-black text-slate-900">UMBRA GUAQUEMARAE</strong>, sembrados alrededor de la colina sagrada de la diosa <strong className="font-black text-slate-900">MICHUA</strong>, ubicada a 1700 pies de altura.
          </p>
          <br />
          <p>
            Nuestros cafés alcanzan un puntaje de calidad de <strong className="font-black text-slate-900">85 puntos</strong>, lo que les otorga un perfil exclusivo en sabor y aroma. Cada etapa —desde el cultivo hasta la recolección— se realiza mediante procesos cuidadosos y tradicionales, garantizando un producto auténtico, de origen y con identidad propia.
          </p>
        </>
      ),
      coffeeList: ['Origen Quinchia Risaralda', 'Variedad Castillo', 'Tueste Personalizado para Exportación', 'Orden minima 22.68kg'],
      artTitle: 'Arte y Cultura Indígena',
      artDesc: ( 
        <>
          <p>
            Representamos la autenticidad y la fuerza de mujeres que han sido víctimas de violencia, quienes transforman su dolor en esperanza y resiliencia.
          </p>
          <br />
          <p>
            Cada pieza es un testimonio de libertad, resistencia y renacimiento; una expresión viva que se refleja tanto en su diseño como en su arte, llevando consigo una historia de valentía y transformación.
          </p>
        </>
      ),
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
          <p>
            We work with beans cultivated by the indigenous community <strong className="font-black text-slate-900">UMBRA GUAQUEMARAE</strong>, grown around the sacred hill of the goddess <strong className="font-black text-slate-900">MICHUA</strong>, located at 1,700 feet above sea level.
          </p>
          <br />
          <p>
            Our coffees achieve a quality score of <strong className="font-black text-slate-900">85 points</strong>, giving them an exclusive flavor and aroma profile. Every stage — from cultivation to harvesting — is carried out through careful and traditional processes, ensuring an authentic product with true origin and a distinctive identity.
          </p>
        </>
      ),
      coffeeList: ['Quinchia Risaralda Origin', "Castillo Variety", 'Custom Roasting for Export', 'Minimum order 22.68kg'],
      artTitle: 'Indigenous Art and Culture',
      artDesc: (
        <>
          <p>
            We represent the authenticity and strength of women who have been victims of violence, transforming their pain into hope and resilience.
          </p>
          <br />
          <p>
            Each piece is a testament to freedom, resistance, and rebirth; a living expression reflected in both its design and its artistry, carrying with it a story of courage and transformation.
          </p>
        </>
      ),
      artList: ['Limited Edition Wayuu Bags', 'Coffee Wood Crafts', 'Ancestral Woven Jewelry'],
      catTitle: 'Download the Master Catalog',
      catDesc: 'We represent the authenticity of women who have been victims of violence, embodying their hope, resilience, and pain. Each piece is a testament to freedom and hope, both in its design and artistry.',
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
          </div>
          <ImageCarousel
            images={['../images/Cafe3-ingles.png', '../images/cafe.jpg', '../images/cafe2.jpg', '../images/Granocafe.jpeg']}
            alt="Premium coffee beans"
            className="h-[400px] w-full"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <ImageCarousel
              images={['../images/Gato.png', '../images/Collares.png', '../images/Carro.png', '../images/Perro.png']}
              alt="Indigenous crafts"
              className="h-[400px] w-full"
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

        <div className="mt-20 flex justify-center w-full">
          <a
            href={pdf_Art}
            target='blank'
            className="inline-flex w-fit group relative items-center gap-4 px-12 py-6 bg-primary hover:bg-primary-dark text-white font-bold rounded-2xl shadow-2xl shadow-primary/40 transition-all transform hover:-translate-y-1 active:scale-95 text-2xl"
          >
            <Download size={32} className="group-hover:animate-bounce" />
            <span>{t.pdf_Art}</span>
          </a>
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
