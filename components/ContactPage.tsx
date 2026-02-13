
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Loader2, CheckCircle2, AlertCircle, Info, ExternalLink } from 'lucide-react';
import { LanguageType } from '../App';

const ContactPage: React.FC<{ lang: LanguageType }> = ({ lang }) => {
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    details: '',
    privacy: false
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [showDiagnostics, setShowDiagnostics] = useState(false);

  // URL del Webhook actualizada según la petición del usuario
  const webhookUrl = 'https://jean8n.duckdns.org/webhook/dbafdff4-7eaf-4b17-9380-c7e6453f7dbb';

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
      submit: 'Enviar Solicitud',
      sending: 'Enviando...',
      success: '¡Mensaje enviado con éxito!',
      error: 'Hubo un problema de conexión con el servidor.',
      diagTitle: 'Diagnóstico de Conexión',
      diagDesc: 'El error "Failed to fetch" usualmente ocurre por:',
      cors: '1. CORS: El servidor n8n no permite peticiones desde este dominio. Debes habilitar CORS en n8n.',
      mixed: '2. Contenido Mixto: Si esta página usa HTTPS, no puede llamar a un webhook HTTP (sin SSL).',
      testLink: 'Verificar si la IP es accesible',
      close: 'Cerrar'
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
      submit: 'Send Request',
      sending: 'Sending...',
      success: 'Message sent successfully!',
      error: 'There was a connection problem with the server.',
      diagTitle: 'Connection Diagnostics',
      diagDesc: 'The "Failed to fetch" error usually happens because:',
      cors: '1. CORS: The n8n server does not allow requests from this domain. Enable CORS in n8n.',
      mixed: '2. Mixed Content: If this site is HTTPS, it cannot call an HTTP webhook (no SSL).',
      testLink: 'Check if IP is reachable',
      close: 'Close'
    }
  }[lang];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.privacy) return;

    setStatus('loading');
    setErrorMessage(null);
    setShowDiagnostics(false);

    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        mode: 'cors',
        body: JSON.stringify({
          ...formData,
          submittedAt: new Date().toISOString(),
          language: lang,
          origin: window.location.origin
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', lastName: '', email: '', details: '', privacy: false });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setErrorMessage(`Error del servidor (Status: ${response.status})`);
      }
    } catch (error) {
      console.error('Error de red detectado:', error);
      setStatus('error');
      setShowDiagnostics(true);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    setFormData(prev => ({ ...prev, [name]: val }));
  };

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
                <div><h4 className="font-bold text-slate-900 text-lg mb-1">{t.office}</h4><p className="text-slate-500">Bogotá, Colombia</p></div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-blue-600 shrink-0 border border-slate-100"><Phone size={24} /></div>
                <div><h4 className="font-bold text-slate-900 text-lg mb-1">{t.phones}</h4>
                <p className="text-slate-500">+57 (315) 9946086</p>
                <p className="text-slate-500">+1 (000) 00000</p>
                <p className="text-slate-400 text-xs mt-1 font-bold uppercase tracking-wider">{t.hours}</p></div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-blue-600 shrink-0 border border-slate-100"><Mail size={24} /></div>
                <div><h4 className="font-bold text-slate-900 text-lg mb-1">{t.email}</h4><p className="text-slate-500">servicioalcliente@hydalianzas.com.co</p></div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-7/12">
            <div className="bg-white p-8 md:p-14 rounded-[2.5rem] shadow-xl shadow-slate-200/60 border border-white">
              <h3 className="text-3xl font-bold text-slate-900 mb-10">{t.formTitle}</h3>
              <form className="space-y-7" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">{t.name}</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-blue-600 outline-none" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">{t.lastName}</label>
                    <input 
                      type="text" 
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-blue-600 outline-none" 
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">{t.corpEmail}</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-blue-600 outline-none" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">{t.details}</label>
                  <textarea 
                    name="details"
                    required
                    rows={5} 
                    value={formData.details}
                    onChange={handleInputChange}
                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-blue-600 outline-none resize-none" 
                    placeholder={t.placeholder}
                  ></textarea>
                </div>
                <div className="flex items-center gap-4 py-2">
                  <input 
                    type="checkbox" 
                    id="privacy" 
                    name="privacy"
                    required
                    checked={formData.privacy}
                    onChange={handleInputChange}
                    className="w-5 h-5 text-blue-600 rounded-lg border-slate-200 cursor-pointer" 
                  />
                  <label htmlFor="privacy" className="text-sm text-slate-500 cursor-pointer select-none">{t.privacy}</label>
                </div>
                
                <button 
                  type="submit"
                  disabled={status === 'loading'}
                  className={`w-full py-5 text-white font-bold rounded-2xl shadow-xl transition-all active:scale-[0.98] text-sm uppercase tracking-[0.2em] flex items-center justify-center gap-3 ${
                    status === 'loading' ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
                  }`}
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="animate-spin" size={20} />
                      {t.sending}
                    </>
                  ) : t.submit}
                </button>

                {status === 'success' && (
                  <div className="mt-4 p-4 bg-green-50 border border-green-100 text-green-700 rounded-xl flex items-center gap-3 animate-fade-in">
                    <CheckCircle2 size={20} />
                    <span className="font-bold text-sm">{t.success}</span>
                  </div>
                )}

                {status === 'error' && (
                  <div className="space-y-4">
                    <div className="mt-4 p-4 bg-red-50 border border-red-100 text-red-700 rounded-xl flex items-start gap-3 animate-fade-in">
                      <AlertCircle className="shrink-0 mt-0.5" size={20} />
                      <div className="space-y-1">
                        <p className="font-bold text-sm">{errorMessage || t.error}</p>
                      </div>
                    </div>

                    {showDiagnostics && (
                      <div className="p-6 bg-slate-900 text-white rounded-[1.5rem] space-y-4 animate-fade-up">
                        <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-widest">
                          <Info size={16} />
                          {t.diagTitle}
                        </div>
                        <p className="text-sm text-slate-300">{t.diagDesc}</p>
                        <div className="space-y-3 text-xs leading-relaxed text-slate-400">
                          <p>{t.cors}</p>
                          <p>{t.mixed}</p>
                        </div>
                        <div className="pt-2">
                          <a 
                            href={webhookUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-white bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-all"
                          >
                            <span className="text-xs font-bold">{t.testLink}</span>
                            <ExternalLink size={14} />
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
