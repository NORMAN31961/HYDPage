
import React, { useState, useEffect } from 'react';
import { Menu, X} from 'lucide-react';
import { ViewType, LanguageType } from '../App';

interface NavbarProps {
  currentView: ViewType;
  setView: (view: ViewType) => void;
  lang: LanguageType;
  setLang: (lang: LanguageType) => void;
}

const LOGO_URL = "https://images.unsplash.com/photo-1599305096909-e8b5b1262819?auto=format&fit=crop&q=80&w=200";

const Navbar: React.FC<NavbarProps> = ({ currentView, setView, lang, setLang }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const t = {
    es: { products: 'Productos', export: 'Exportación', about: 'Nosotros', contact: 'Contacto', mobileContact: 'Contacto Directo', tag: 'TU MEJOR ALIADO COMERCIAL' },
    en: { products: 'Products', export: 'Export', about: 'About Us', contact: 'Contact', mobileContact: 'Direct Contact', tag: 'YOUR BEST BUSINESS ALLY' }
  }[lang];

  const navLinks: { label: string; view: ViewType }[] = [
    { label: t.products, view: 'products' },
    { label: t.export, view: 'export' },
    { label: t.about, view: 'about' },
  ];

  const handleNavClick = (view: ViewType) => {
    setView(view);
    setMobileMenuOpen(false);
  };

  const isHome = currentView === 'home';
  const navBackground = isScrolled || !isHome ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5';
  const textColor = isScrolled || !isHome ? 'text-slate-900' : 'text-white';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${navBackground}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          <button onClick={() => handleNavClick('home')} className="flex items-center gap-3 group text-left">
            <div className="w-12 h-12 flex items-center justify-center transition-transform group-hover:scale-105">
               <img src={LOGO_URL} alt="H&D Alianzas Logo" className="w-full h-full object-contain rounded-lg" />
            </div>
            <div className="hidden sm:block">
              <h1 className={`text-lg font-bold tracking-tight leading-none transition-colors ${textColor}`}>
                H&D ALIANZAS
              </h1>
              <p className="text-[10px] text-primary font-bold tracking-widest uppercase mt-0.5">
                {t.tag}
              </p>
            </div>
          </button>

          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <button 
                key={link.view}
                onClick={() => handleNavClick(link.view)} 
                className={`text-sm font-semibold transition-all relative py-1 ${
                  currentView === link.view 
                    ? 'text-primary' 
                    : `${textColor} hover:text-primary`
                }`}
              >
                {link.label}
                {currentView === link.view && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary animate-scale-x"></span>
                )}
              </button>
            ))}

            <button 
              onClick={() => handleNavClick('contact')}
              className={`px-8 py-2.5 rounded-full text-sm font-bold transition-all transform hover:scale-105 ${
                isScrolled || !isHome ? 'bg-primary text-white shadow-lg shadow-primary/30' : 'bg-white text-slate-900 hover:bg-primary hover:text-white'
              } ${currentView === 'contact' ? 'ring-2 ring-primary ring-offset-2' : ''}`}>
              {t.contact}
            </button>

            {/* Selector de Idioma (Ahora después del botón de contacto) */}
            <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full border ${isScrolled || !isHome ? 'border-slate-200' : 'border-white/20'}`}>
              <button 
                onClick={() => setLang('es')}
                className={`text-[10px] font-bold transition-all px-2 ${lang === 'es' ? 'text-primary' : (isScrolled || !isHome ? 'text-slate-400' : 'text-white/50')}`}
              >
                ES
              </button>
              <div className={`w-[1px] h-3 ${isScrolled || !isHome ? 'bg-slate-200' : 'bg-white/20'}`}></div>
              <button 
                onClick={() => setLang('en')}
                className={`text-[10px] font-bold transition-all px-2 ${lang === 'en' ? 'text-primary' : (isScrolled || !isHome ? 'text-slate-400' : 'text-white/50')}`}
              >
                EN
              </button>
            </div>
          </div>

          <div className="md:hidden flex items-center gap-4">
             <button 
                onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
                className={`text-[12px] font-bold px-3 py-1 rounded-lg border ${textColor} border-current/20`}
              >
                {lang.toUpperCase()}
              </button>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className={textColor}>
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-2xl animate-fade-in border-t border-slate-100">
          <div className="flex flex-col p-6 space-y-4">
            {navLinks.map((link) => (
              <button 
                key={link.view}
                onClick={() => handleNavClick(link.view)}
                className={`text-lg font-bold text-left py-2 ${currentView === link.view ? 'text-primary' : 'text-slate-700'}`}
              >
                {link.label}
              </button>
            ))}
            <button 
              onClick={() => handleNavClick('contact')}
              className="w-full bg-primary text-white py-4 rounded-xl font-bold shadow-lg text-center"
            >
              {t.mobileContact}
            </button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes scale-x {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        .animate-scale-x {
          transform-origin: left;
          animation: scale-x 0.3s ease-out forwards;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
