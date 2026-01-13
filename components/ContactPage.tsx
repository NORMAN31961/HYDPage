
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { LanguageType } from '../App';

const ContactPage: React.FC<{ lang: LanguageType }> = ({ lang }) => {
  const t = {
    es: {
      title: 'Hablemos de Negocios',
      subtitle: 'Su aliado estratégico para la exportación de café de alta calidad y artesanías auténticas.',
      infoTitle: 'Información de Contacto',
      infoDesc: 'Estamos listos para asesorarlo en su proceso de compra internacional. Especializados en logística de exportación y cumplimiento de estándares de calidad.',
      office: 'Oficina Principal',
      phones: 'Teléfonos',
      hours: 'Lunes a Viernes, 8am - 6pm EST',
      email: 'Correo Electrónico',
      formTitle: 'Envíenos un Mensaje',
      name: 'Nombre',
      lastName: 'Apellido',
      corpEmail: 'Correo Corporativo',
      details: 'Detalles de la Solicitud',
      placeholder: 'Por favor incluya país de destino y volumen estimado...',
      privacy: 'Acepto la Política de Privacidad y el tratamiento de mis datos.',
      submit: 'Enviar Solicitud'
    },
    en: {
      title: 'Let’s Talk Business',
      subtitle: 'Your strategic ally for high-quality coffee export and authentic crafts.',
      infoTitle: 'Contact Information',
      infoDesc: 'We are ready to advise you on your international purchasing process. Specialized in export logistics and quality standards compliance.',
      office: 'Main Office',
      phones: 'Phones',
      hours: 'Monday to Friday, 8am - 6pm EST',
      email: 'Email',
      formTitle: 'Send Us a Message',
      name: 'Name',
      lastName: 'Last Name',
      corpEmail: 'Corporate Email',
      details: 'Request Details',
      placeholder: 'Please include destination country and estimated volume...',
      privacy: 'I accept the Privacy Policy and data treatment.',
      submit: 'Send Request'
    }
  }[lang];

  return (
    <div className="pt-20 bg-[#F9FAFB] min-h-screen">
      <section className="relative py-28 px-4 overflow-hidden border-b border-slate-100">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=2070" alt="" className="w-full h-full object-cover opacity-15" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/80 to-[#F9FAFB]"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-sans font-extrabold text-slate-900 mb-6 tracking-tight">{t.title}</h1>
          <p className="text-lg md:text-xl text-slate-600 font-medium max-w-2xl mx-auto">{t.subtitle}</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="w-full lg:w-5/12 space-y-12">
            <div className="relative">
              <div className="w-16 h-1.5 bg-blue-600 rounded-full mb-8"></div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">{t.infoTitle}</h2>
              <p className="text-slate-500 text-lg leading-relaxed">{t.infoDesc}</p>
            </div>
            <div className="space-y-10">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-blue-600 shrink-0 border border-slate-100"><MapPin size={24} /></div>
                <div><h4 className="font-bold text-slate-900 text-lg mb-1">{t.office}</h4><p className="text-slate-500">Calle 100 # 15-23, Edificio Trade Center, Bogotá, Col</p></div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-blue-600 shrink-0 border border-slate-100"><Phone size={24} /></div>
                <div><h4 className="font-bold text-slate-900 text-lg mb-1">{t.phones}</h4><p className="text-slate-500">+57 (300) 123-4567</p><p className="text-slate-400 text-xs mt-1 font-bold uppercase tracking-wider">{t.hours}</p></div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-blue-600 shrink-0 border border-slate-100"><Mail size={24} /></div>
                <div><h4 className="font-bold text-slate-900 text-lg mb-1">{t.email}</h4><p className="text-slate-500">comercioexterior@hdalianzas.com</p></div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-7/12">
            <div className="bg-white p-8 md:p-14 rounded-[2.5rem] shadow-xl shadow-slate-200/60 border border-white">
              <h3 className="text-3xl font-bold text-slate-900 mb-10">{t.formTitle}</h3>
              <form className="space-y-7">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">{t.name}</label>
                    <input type="text" className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-blue-600 outline-none" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">{t.lastName}</label>
                    <input type="text" className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-blue-600 outline-none" />
                  </div>
                </div>
                <div className="space-y-2"><label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">{t.corpEmail}</label><input type="email" className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-blue-600 outline-none" /></div>
                <div className="space-y-2"><label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">{t.details}</label><textarea rows={5} className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-blue-600 outline-none resize-none" placeholder={t.placeholder}></textarea></div>
                <div className="flex items-center gap-4 py-2"><input type="checkbox" id="privacy" className="w-5 h-5 text-blue-600 rounded-lg border-slate-200" /><label htmlFor="privacy" className="text-sm text-slate-500 cursor-pointer select-none">{t.privacy}</label></div>
                <button className="w-full py-5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl shadow-xl transition-all active:scale-[0.98] text-sm uppercase tracking-[0.2em]">{t.submit}</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
