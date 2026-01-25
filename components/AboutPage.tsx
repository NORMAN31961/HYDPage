
import React from 'react';
import { Target, Eye, Heart, Shield, Sparkles, Users } from 'lucide-react';
import { LanguageType } from '../App';

interface AboutPageProps {
  lang: LanguageType;
  onNavigate?: () => void;
}



const AboutPage: React.FC<AboutPageProps> = ({ lang, onNavigate }) => {
  const t = {
    es: {
      heroTag: 'Nuestra Historia',
      title: 'H&D ALIANZAS',
      subtitle: 'Sembrando esperanza, exportando sueños desde 2016.',
      p1: 'H&D Alianzas (HOPE AND DREAMS) fue fundada en 2016 por dos emprendedores colombo-americanos apasionados por empoderar a comunidades vulnerables ricas en cultura y recursos. Hemos establecido una asociación estratégica con la Comunidad Indígena Umbre Guaquemarae y la Fundación Arropame.',
      p2: 'Nuestras alianzas nos permiten ofrecer productos de alta calidad, incluyendo café colombiano premium y artículos artesanales elaborados con amor por mujeres emprendedoras.',
      missionTitle: 'Misión',
      missionText: 'Nuestra misión es empoderar a las comunidades vulnerables de Colombia mediante la promoción y celebración de su rico patrimonio cultural y sus valiosos recursos. A través de alianzas estratégicas, buscamos brindarles las herramientas y oportunidades necesarias para producir productos de alta calidad que puedan competir en el mercado internacional. Al apoyar el desarrollo sostenible de las pequeñas y medianas empresas, no solo contribuimos a impulsar las economías locales, sino también a la preservación de las tradiciones y prácticas únicas que definen a estas comunidades. Juntos, podemos crear un futuro más prometedor que honre tanto a la gente como a la tierra de Colombia, a la vez que fomentamos las conexiones globales.',
      visionTitle: 'Visión',
      visionText: 'Nuestra visión es convertirnos en una empresa líder en la promoción global de la cultura y los productos colombianos. Nos esforzamos por ser reconocidos no solo por la calidad y la riqueza de nuestra oferta, sino también por nuestro firme compromiso con la inclusión social y la sostenibilidad. Al centrarnos en el empoderamiento de las comunidades marginadas, buscamos crear oportunidades y apoyar a quienes a menudo son ignorados, garantizando que nuestros esfuerzos generen un impacto positivo significativo y duradero tanto en la economía colombiana como en la sociedad en su conjunto. A través de nuestras iniciativas, creemos que podemos ayudar a mostrar la belleza del patrimonio colombiano, a la vez que fomentamos el crecimiento económico y la equidad social.',
      valuesTitle: 'Nuestros Valores',
      values: [
        { icon: <Heart size={24} />, title: 'Inclusión', desc: 'Damos voz a quienes son ignorados.' },
        { icon: <Shield size={24} />, title: 'Sostenibilidad', desc: 'Respeto profundo por la tierra.' },
        { icon: <Sparkles size={24} />, title: 'Excelencia', desc: 'Calidad superior en cada grano.' },
        { icon: <Users size={24} />, title: 'Herencia', desc: 'Preservación de tradiciones.' }
      ],
      ctaTitle: '¿Listo para ser parte de esta alianza global?',
      ctaDesc: 'Únase a nosotros en la misión de llevar el corazón de Colombia a cada rincón del mundo.',
      ctaButton: 'Contactar ahora'
    },
    en: {
      heroTag: 'Our Story',
      title: 'H&D ALIANZAS',
      subtitle: 'Sowing hope, exporting dreams since 2016.',
      p1: 'H&D Alianzas (HOPE AND DREAMS) was founded in 2016 by two Colombian-American entrepreneurs passionate about empowering vulnerable communities rich in culture and resources. We’ve established strategic partnerships with the Umbre Guaquemarae Indigenous Community and Fundación Arropame.',
      p2: 'Our alliances enable us to offer high-quality products, including premium Colombian coffee and artisanal goods crafted with love by women entrepreneurs.',
      missionTitle: 'Mission',
      missionText: 'Our mission is to empower vulnerable communities in Colombia by promoting and celebrating their rich cultural heritage and valuable resources. Through strategic partnerships, we aim to provide these communities with the tools and opportunities needed to produce high-quality products that can compete in the international market. By supporting the sustainable development of small and medium-sized businesses, we not only help uplift local economies but also contribute to the preservation of unique traditions and practices that define these communities. Together, we can create a brighter future that honors both the people and the land of Colombia while fostering global connections.',
      visionTitle: 'Vision',
      visionText: 'Our vision is to become a leading company in the global promotion of Colombian culture and products. We strive to be recognized not only for the quality and richness of our offerings but also for our unwavering commitment to social inclusion and sustainability. By focusing on empowering marginalized communities, we aim to create opportunities and uplift those who are often overlooked, ensuring that our efforts generate a significant and lasting positive impact on both Colombia economy and society as a whole. Through our initiatives, we believe that we can help showcase the beauty of Colombian heritage while fostering economic growth and social equity.',
      valuesTitle: 'Our Values',
      values: [
        { icon: <Heart size={24} />, title: 'Inclusion', desc: 'We give a voice to those overlooked.' },
        { icon: <Shield size={24} />, title: 'Sustainability', desc: 'Deep respect for the land.' },
        { icon: <Sparkles size={24} />, title: 'Excellence', desc: 'Superior quality in every bean.' },
        { icon: <Users size={24} />, title: 'Heritage', desc: 'Preservation of traditions.' }
      ],
      ctaTitle: 'Ready to be part of this global alliance?',
      ctaDesc: 'Join us in the mission of bringing the heart of Colombia to every corner of the world.',
      ctaButton: 'Contact now'
    }
  }[lang];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section for About Us */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover"
            alt="Colombian landscape"
          />
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px]"></div>
        </div>
        <div className="relative z-10 text-center px-4 animate-fade-up">
          <span className="text-primary font-bold tracking-[0.5em] uppercase text-xs mb-4 block">{t.heroTag}</span>
          <h1 className="text-5xl md:text-8xl font-sans font-bold text-white mb-6 tracking-tighter">
            {t.title}
          </h1>
          <p className="text-white/80 text-lg md:text-2xl font-display italic max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Founders & Story - Overlapping Layout */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/2 relative">
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl animate-fade-left">
              <img 
                src="https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?auto=format&fit=crop&q=80&w=1000" 
                alt="Coffee production"
                className="w-full h-[500px] object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-blue-50 rounded-[2rem] -z-10 animate-float"></div>
            <div className="absolute top-1/2 -left-12 w-24 h-24 bg-primary/10 rounded-full blur-2xl -z-10"></div>
          </div>

          <div className="w-full lg:w-1/2 space-y-8 animate-fade-right">
            <div className="w-20 h-20 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center justify-center mb-4">
              <img src='images/hyd-logo-transparent.png' alt="Logo" className="w-full h-full object-contain" />
            </div>
            <h2 className="text-3xl md:text-4xl font-sans font-bold text-slate-900 leading-tight">
              Hope and Dreams: <br />
              <span className="text-primary">
                {lang === 'es' ? 'El origen de nuestra alianza' : 'The origin of our alliance'}
              </span>
            </h2>
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
              <p>{t.p1}</p>
              <p className="font-medium text-slate-800 border-l-4 border-primary pl-6 py-2 bg-slate-50 rounded-r-xl italic">
                {t.p2}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision - Modern Cards */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-12 rounded-[3rem] shadow-xl shadow-slate-200/50 group transition-all hover:shadow-2xl hover:-translate-y-2 border border-white">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white mb-8 group-hover:rotate-6 transition-transform">
                <Target size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6 uppercase tracking-widest">{t.missionTitle}</h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                {t.missionText}
              </p>
            </div>

            <div className="bg-slate-900 p-12 rounded-[3rem] shadow-xl group transition-all hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-0"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-white mb-8 group-hover:-rotate-6 transition-transform">
                  <Eye size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-6 uppercase tracking-widest">{t.visionTitle}</h3>
                <p className="text-slate-300 leading-relaxed text-lg">
                  {t.visionText}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-sans font-bold text-slate-900 mb-4">{t.valuesTitle}</h2>
          <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.values.map((value, idx) => (
            <div 
              key={idx} 
              className="p-10 bg-white border border-slate-100 rounded-[2.5rem] text-center transition-all hover:bg-slate-50 hover:border-primary/20 animate-fade-up"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="w-14 h-14 bg-blue-50 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                {value.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed">{value.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Impact CTA */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-3xl md:text-4xl font-sans font-bold text-white mb-8 leading-tight">
            {t.ctaTitle}
          </h3>
          <p className="text-white/80 mb-10 text-lg">
            {t.ctaDesc}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <button 
               onClick={onNavigate}
               className="px-12 py-4 bg-white text-primary font-bold rounded-xl hover:shadow-2xl transition-all uppercase tracking-widest text-sm"
             >
               {t.ctaButton}
             </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
