
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Collection from './components/Collection';
import Logistics from './components/Logistics';
import About from './components/About';
import Footer from './components/Footer';
import ProductsPage from './components/ProductsPage';
import ExportPage from './components/ExportPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';

export type ViewType = 'home' | 'products' | 'export' | 'about' | 'contact';
export type LanguageType = 'es' | 'en';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewType>(() => {
    // Intentar leer la vista desde el hash de la URL al cargar
    const hash = window.location.hash.replace('#', '');
    const validViews: ViewType[] = ['home', 'products', 'export', 'about', 'contact'];
    return validViews.includes(hash as ViewType) ? (hash as ViewType) : 'home';
  });
  const [language, setLanguage] = useState<LanguageType>('en');

  // Sincronizar el estado con la URL
  useEffect(() => {
    if (currentView === 'home') {
      window.history.replaceState(null, '', window.location.pathname);
    } else {
      window.location.hash = currentView;
    }
    window.scrollTo(0, 0);
  }, [currentView]);

  // Escuchar cambios en el historial (botón atrás/adelante del navegador)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      const validViews: ViewType[] = ['home', 'products', 'export', 'about', 'contact'];
      if (validViews.includes(hash as ViewType)) {
        setCurrentView(hash as ViewType);
      } else if (!hash) {
        setCurrentView('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderContent = () => {
    switch (currentView) {
      case 'products':
        return <ProductsPage lang={language} onNavigate={() => setCurrentView('contact')} />;
      case 'export':
        return <ExportPage lang={language} />;
      case 'about':
        return <AboutPage lang={language} onNavigate={() => setCurrentView('contact')} />;
      case 'contact':
        return <ContactPage lang={language} />;
      case 'home':
      default:
        return (
          <>
            <Hero lang={language} onNavigate={() => setCurrentView('products')} />
            <Features lang={language} />
            <Collection lang={language} onNavigate={() => setCurrentView('products')} />
            <Logistics lang={language} onNavigate={() => setCurrentView('export')} />
            <About lang={language} onNavigate={() => setCurrentView('about')} />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-h-surface transition-colors duration-300">
      <Navbar
        currentView={currentView}
        setView={setCurrentView}
        lang={language}
        setLang={setLanguage}
      />
      <main className="animate-fade-in-content" key={language}>
        {renderContent()}
      </main>
      <Footer setView={setCurrentView} lang={language} />

      <style>{`
        @keyframes fade-in-content {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-content {
          animation: fade-in-content 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default App;
