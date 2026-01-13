import React from 'react';
import { Package, FileText, Truck, Globe, Coffee, Palette, Scale } from 'lucide-react';
import { LanguageType } from '../App';

interface ExportPageProps {
  lang: LanguageType;
}

const ExportPage: React.FC<ExportPageProps> = ({ lang }) => {
  const t = {
    es: {
      title: 'Tu Puente al',
      titleAccent: 'Comercio Global',
      subtitle: 'Especialistas en la exportación de café de altura, artesanías cafeteras y arte indígena. Simplificamos la logística para que tu producto llegue seguro a cualquier parte del mundo.',
      logisticsTag: 'Logística Integral',
      processTitle: 'Proceso de Exportación Paso a Paso',
      steps: [
        { title: "1. Selección y Empaque", desc: "Curaduría de café premium y artesanías. Embalaje especializado para proteger la integridad del producto." },
        { title: "2. Trámites Aduaneros", desc: "Gestión documental completa: Certificados de origen, fitosanitarios y permisos de exportación." },
        { title: "3. Logística y Carga", desc: "Transporte multimodal hacia puerto o aeropuerto. Consolidación de carga en contenedores seguros." },
        { title: "4. Exportación Global", desc: "Envío internacional con seguimiento en tiempo real hasta el destino final de su negocio." }
      ],
      reqTitle: 'Requisitos de',
      reqAccent: 'Volumen y Peso',
      reqDesc: 'Para garantizar la rentabilidad y eficiencia logística de su exportación, H&D Alianzas establece parámetros claros basados en el tipo de producto.',
      coffeeTitle: 'Exportación de Café',
      coffeeSub: 'Café verde o tostado de origen.',
      coffeeMin: 'Mínimo: 500 Kilogramos',
      artTitle: 'Artesanías y Mixtos',
      artSub: 'Artesanías indígenas y productos derivados del café.',
      artMin: 'Mínimo: 100 Kilogramos (Consolidado)',
      whyMin: '¿Por qué existe un mínimo?',
      whyDesc: 'Optimizar el espacio en contenedores reduce significativamente la huella de carbono y el costo por unidad para nuestros clientes.',
      lcl: 'LCL',
      lclDesc: 'Carga menor a contenedor',
      fcl: 'FCL',
      fclDesc: 'Contenedor de carga completa'
    },
    en: {
      title: 'Your Bridge to',
      titleAccent: 'Global Trade',
      subtitle: 'Specialists in high-altitude coffee, coffee-themed crafts, and indigenous art exports. We simplify logistics so your product reaches anywhere in the world safely.',
      logisticsTag: 'Comprehensive Logistics',
      processTitle: 'Step-by-Step Export Process',
      steps: [
        { title: "1. Selection and Packing", desc: "Curation of premium coffee and crafts. Specialized packaging to protect product integrity." },
        { title: "2. Customs Procedures", desc: "Complete document management: Certificates of origin, phytosanitary, and export permits." },
        { title: "3. Logistics and Cargo", desc: "Multimodal transport to port or airport. Consolidation of cargo in secure containers." },
        { title: "4. Global Export", desc: "International shipping with real-time tracking to your business's final destination." }
      ],
      reqTitle: 'Volume and',
      reqAccent: 'Weight Requirements',
      reqDesc: 'To guarantee profitability and logistic efficiency of your export, H&D Alianzas establishes clear parameters based on the product type.',
      coffeeTitle: 'Coffee Export',
      coffeeSub: 'Green or roasted origin coffee.',
      coffeeMin: 'Minimum: 500 Kilograms',
      artTitle: 'Crafts and Mixed',
      artSub: 'Indigenous crafts and coffee-derived products.',
      artMin: 'Minimum: 100 Kilograms (Consolidated)',
      whyMin: 'Why is there a minimum?',
      whyDesc: 'Optimizing container space significantly reduces the carbon footprint and the cost per unit for our customers.',
      lcl: 'LCL',
      lclDesc: 'Less than Container Load',
      fcl: 'FCL',
      fclDesc: 'Full Container Load'
    }
  }[lang];

  return (
    <div className="pt-20 bg-[#F9FAFB] overflow-x-hidden">
      <header className="relative bg-white py-16 lg:py-24 overflow-hidden border-b border-gray-100">
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
          <img 
            alt="Shipping Containers" 
            className="w-full h-full object-cover grayscale animate-subtle-scale" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDY6ProSTTXm_7GhmT9rA_-RQrWxH7eoM1_IpPstsp1ltmYWrzOV4E8zgq_UNmoNEerwbvQNha6lvteC7Wn0VYQfwQjDptbQGpCgdW9BbB6a7Y2T1zcDx3RuRysQdfccC_s_pC6k6xoVdfm5uBR-xqTzoV6tbq4Fdm_fKgGRN_KsiX7txidPMWlgi8o8v-X9bjSsyKJrI70m1xpNUvD0r1NZG3Eu1cZ7FWXIWP1TzuJKaaM0i131LUA7WRaxSZ-WtLsx0UIRI9kiiE" 
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center animate-fade-up">
          <h2 className="font-sans font-bold text-4xl sm:text-5xl lg:text-6xl text-gray-900 mb-6 tracking-tight">
            {t.title} <span className="text-[#0056b3]">{t.titleAccent}</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t.subtitle}</p>
        </div>
      </header>

      <section className="py-16 bg-[#F9FAFB]" id="proceso">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-up">
            <span className="text-[#0056b3] font-bold tracking-wider uppercase text-sm">{t.logisticsTag}</span>
            <h3 className="font-sans text-3xl font-bold text-gray-900 mt-2">{t.processTitle}</h3>
          </div>
          <div className="relative">
            <div className="hidden lg:block absolute left-0 right-0 top-1/2 h-1 bg-gray-200 -translate-y-1/2 z-0 mx-20 rounded-full"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {t.steps.map((step, idx) => {
                const icons = [<Package key="1" />, <FileText key="2" />, <Truck key="3" />, <Globe key="4" />];
                return (
                  <div 
                    key={idx} 
                    className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hover:-translate-y-2 transition-all duration-300 animate-fade-up"
                    style={{ animationDelay: `${idx * 0.15}s` }}
                  >
                    <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-4 border-2 border-[#0056b3] transition-transform duration-500 hover:rotate-12 text-[#0056b3]">
                      {/* Fix: Cast icons[idx] to React.ReactElement<any> to resolve the TypeScript error when applying 'size' prop via cloneElement */}
                      {React.cloneElement(icons[idx] as React.ReactElement<any>, { size: 28 })}
                    </div>
                    <h4 className="font-sans font-bold text-lg text-center mb-2">{step.title}</h4>
                    <p className="text-sm text-gray-600 text-center">{step.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-t border-gray-100" id="requisitos">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2 animate-fade-left">
              <h3 className="font-sans text-3xl font-bold text-gray-900 mb-6">
                {t.reqTitle} <span className="text-[#0056b3]">{t.reqAccent}</span>
              </h3>
              <p className="text-gray-600 mb-8 text-lg">{t.reqDesc}</p>
              <div className="space-y-6">
                <div className="flex items-start bg-[#F9FAFB] p-6 rounded-xl border-l-4 border-[#6F4E37] shadow-sm hover:translate-x-2 transition-transform duration-300">
                  <div className="flex-shrink-0 mt-1 text-[#6F4E37]"><Coffee size={28} /></div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-gray-900">{t.coffeeTitle}</h4>
                    <p className="mt-1 text-sm text-gray-500">{t.coffeeSub}</p>
                    <div className="mt-3 inline-block px-4 py-1.5 bg-[#6F4E37]/10 text-[#6F4E37] rounded-lg font-bold text-sm">{t.coffeeMin}</div>
                  </div>
                </div>
                <div className="flex items-start bg-[#F9FAFB] p-6 rounded-xl border-l-4 border-[#0ea5e9] shadow-sm hover:translate-x-2 transition-transform duration-300">
                  <div className="flex-shrink-0 mt-1 text-[#0ea5e9]"><Palette size={28} /></div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-gray-900">{t.artTitle}</h4>
                    <p className="mt-1 text-sm text-gray-500">{t.artSub}</p>
                    <div className="mt-3 inline-block px-4 py-1.5 bg-[#0ea5e9]/10 text-[#0ea5e9] rounded-lg font-bold text-sm">{t.artMin}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 w-full animate-fade-right">
              <div className="relative bg-gradient-to-br from-blue-600 to-[#0056b3] rounded-2xl p-10 text-white shadow-2xl overflow-hidden group text-center">
                <Scale className="mx-auto mb-4 opacity-90 animate-float" size={64} />
                <h4 className="text-2xl font-bold mb-2">{t.whyMin}</h4>
                <p className="text-blue-100 text-sm mb-8 leading-relaxed">{t.whyDesc}</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 hover:bg-white/20 transition-colors">
                    <span className="block text-3xl font-bold">{t.lcl}</span>
                    <span className="text-xs text-blue-100">{t.lclDesc}</span>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 hover:bg-white/20 transition-colors">
                    <span className="block text-3xl font-bold">{t.fcl}</span>
                    <span className="text-xs text-blue-100">{t.fclDesc}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExportPage;