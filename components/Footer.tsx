
import React from 'react';
import { Facebook, Instagram, MapPin, Mail, Phone } from 'lucide-react';
import { ViewType, LanguageType } from '../App';

interface FooterProps {
  setView: (view: ViewType) => void;
  lang: LanguageType;
}

const Footer: React.FC<FooterProps> = ({ setView, lang }) => {
  const t = {
    es: {
      tag: 'TU MEJOR ALIADO COMERCIAL',
      desc: 'Comprometidos con la excelencia en la exportación y la promoción de la cultura a través de productos únicos que trascienden fronteras.',
      links: 'ENLACES RÁPIDOS',
      home: 'Inicio',
      catalog: 'Catálogo de Productos',
      guide: 'Guía de Exportación',
      about: 'Sobre Nosotros',
      contactTitle: 'CONTACTO',
      address: 'Bogotá, Colombia',
      rights: '© 2023 H&D Alianzas. Todos los derechos reservados.'
    },
    en: {
      tag: 'YOUR BEST BUSINESS ALLY',
      desc: 'Committed to excellence in export and culture promotion through unique products that transcend borders.',
      links: 'QUICK LINKS',
      home: 'Home',
      catalog: 'Product Catalog',
      guide: 'Export Guide',
      about: 'About Us',
      contactTitle: 'CONTACT',
      address: 'Bogotá, Colombia',
      rights: '© 2023 H&D Alianzas. All rights reserved.'
    }
  }[lang];

  return (
    <footer className="bg-[#0b1120] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-5 space-y-6">
            <div>
              <h3 className="text-2xl font-display font-bold tracking-tight mb-2">H&D ALIANZAS</h3>
              <p className="text-[10px] text-primary font-bold tracking-[0.25em] uppercase">{t.tag}</p>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">{t.desc}</p>
            <div className="flex space-x-5 pt-4">
              <a href="#" className="text-slate-400 hover:text-white"><Facebook size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-white"><Instagram size={20} /></a>
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-sm font-bold uppercase tracking-widest mb-8 text-white">{t.links}</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><button onClick={() => setView('home')} className="hover:text-white">{t.home}</button></li>
              <li><button onClick={() => setView('products')} className="hover:text-white">{t.catalog}</button></li>
              <li><button onClick={() => setView('export')} className="hover:text-white">{t.guide}</button></li>
              <li><button onClick={() => setView('about')} className="hover:text-white">{t.about}</button></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-sm font-bold uppercase tracking-widest mb-8 text-white">{t.contactTitle}</h4>
            <ul className="space-y-6 text-slate-400 text-sm">
              <li className="flex items-start gap-4">
                <MapPin size={18} className="text-primary shrink-0" />
                <span>{t.address}</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail size={18} className="text-primary shrink-0" />
                <a href="mailto:servicioalcliente@hydalianzas.com.co">servicioalcliente@hydalianzas.com.co</a>
              </li>
              <li className="flex items-center gap-4">
                <Phone size={18} className="text-primary shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:+573159946086">+57 (315) 9946086</a>
                  <a href="tel:+100000000">+1 (000) 00000</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-slate-800 text-center">
          <p className="text-slate-500 text-[11px] tracking-wide">{t.rights}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
