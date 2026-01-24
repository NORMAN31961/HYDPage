
import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { LanguageType } from '../App';

interface HeroProps {
  onNavigate?: () => void;
  lang: LanguageType;
}

const Hero: React.FC<HeroProps> = ({ onNavigate, lang }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const slides = {
    es: [
      {
        image: "../images/home2.jpg",
        title: "TU MEJOR\nALIADO\nCOMERCIAL",
        highlightWord: "ALIADO",
        subtitle: "Conectamos la riqueza de Colombia con el mundo. Exportación premium de café, artesanías únicas y cultura ancestral.",
        tag: "EXCELENCIA GLOBAL EN NEGOCIOS",
        cta: "EXPLORAR PRODUCTOS"
      },
      {
        image: "../images/home3.jpg",
        title: "ARTE Y\nTRADICIÓN\nVIVA",
        highlightWord: "TRADICIÓN",
        subtitle: "Piezas únicas que narran historias milenarias de nuestras comunidades aliadas.",
        tag: "PATRIMONIO CULTURAL",
        cta: "EXPLORAR PRODUCTOS"
      },
      {
        image: "../images/home1.jpg",
        title: "CALIDAD EN\nCADA\nGRANO",
        highlightWord: "GRANO",
        subtitle: "Selección rigurosa de café pergamino seco con los más altos estándares de exportación.",
        tag: "SELECCIÓN PREMIUM",
        cta: "EXPLORAR PRODUCTOS"
      }
    ],
    en: [
      {
        image: "../images/home2.jpg",
        title: "YOUR BEST\nBUSINESS\nALLY",
        highlightWord: "ALLY",
        subtitle: "Connecting Colombia's wealth with the world. Premium export of coffee, unique crafts, and ancestral culture.",
        tag: "GLOBAL BUSINESS EXCELLENCE",
        cta: "EXPLORE PRODUCTS"
      },
      {
        image: "../images/home3.jpg",
        title: "ART AND\nLIVING\nTRADITION",
        highlightWord: "TRADITION",
        subtitle: "Unique pieces telling millenary stories from our allied communities.",
        tag: "CULTURAL HERITAGE",
        cta: "EXPLORE PRODUCTS"
      },
      {
        image: "../images/home1.jpg",
        title: "QUALITY IN\nEVERY\nBEAN",
        highlightWord: "BEAN",
        subtitle: "Rigorous selection of dry parchment coffee with the highest export standards.",
        tag: "PREMIUM SELECTION",
        cta: "EXPLORE PRODUCTS"
      }
    ]
  }[lang];

  const nextSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 1000);
  }, [isAnimating, slides.length]);

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 1000);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 8000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="relative h-screen flex items-center overflow-hidden bg-slate-950">
      {slides.map((slide, index) => (
        <div 
          key={index} 
          className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
          style={{ transitionProperty: 'opacity, transform' }}
        >
          <img src={slide.image} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#1a1a3a]/65 backdrop-brightness-75"></div>
        </div>
      ))}

      <button onClick={prevSlide} className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 z-30 p-4 rounded-full bg-white/5 hover:bg-white/20 text-white/40 hover:text-white transition-all backdrop-blur-sm border border-white/10">
        <ChevronLeft size={32} />
      </button>
      
      <button onClick={nextSlide} className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 z-30 p-4 rounded-full bg-white/5 hover:bg-white/20 text-white/40 hover:text-white transition-all backdrop-blur-sm border border-white/10">
        <ChevronRight size={32} />
      </button>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-4xl" key={`${currentSlide}-${lang}`}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8 animate-fade-down">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></div>
            <span className="text-[10px] font-bold text-white tracking-[0.2em] uppercase">{slides[currentSlide].tag}</span>
          </div>

          <h1 className="text-5xl md:text-[7.5rem] font-display font-bold text-white mb-8 leading-[0.9] uppercase tracking-tighter">
            {slides[currentSlide].title.split('\n').map((line, i) => (
              <div key={i} className="overflow-hidden">
                <span className="block animate-text-reveal" style={{ animationDelay: `${i * 0.15}s` }}>
                  {line.split(' ').map((word, j) => (
                    <span key={j} className={word === slides[currentSlide].highlightWord ? 'text-[#818cf8]' : ''}>
                      {word}{' '}
                    </span>
                  ))}
                </span>
              </div>
            ))}
          </h1>

          <p className="text-lg text-slate-300 mb-12 max-w-xl leading-relaxed animate-fade-up-slow">
            {slides[currentSlide].subtitle}
          </p>

          <div className="flex animate-fade-up-delayed">
            <button onClick={onNavigate} className="px-12 py-5 bg-[#6366f1] hover:bg-[#4f46e5] text-white text-[12px] tracking-[0.2em] font-bold uppercase transition-all shadow-2xl shadow-indigo-500/40 hover:scale-105">
              {slides[currentSlide].cta}
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex gap-4">
        {slides.map((_, index) => (
          <button key={index} onClick={() => setCurrentSlide(index)} className={`h-1 transition-all duration-700 rounded-full ${index === currentSlide ? 'bg-blue-400 w-16' : 'bg-white/10 w-6'}`} />
        ))}
      </div>
    </section>
  );
};

export default Hero;
