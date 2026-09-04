import React, { useEffect } from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ToastContainer } from './components/Toast';
import { SearchModal } from './components/SearchModal';
import { ArticleModal } from './components/ArticleModal';
import { CMSModal } from './components/CMSModal';
import { ErrorBoundary } from './components/ErrorBoundary';

// Views
import { HomeView } from './views/HomeView';
import { AboutView } from './views/AboutView';
import { WhatWeDoView } from './views/WhatWeDoView';
import { GetInvolvedView } from './views/GetInvolvedView';
import { ReportConcernView } from './views/ReportConcernView';
import { NewsStoriesView } from './views/NewsStoriesView';
import { LeadershipView } from './views/LeadershipView';
import { ContactView } from './views/ContactView';
import { LegalView } from './views/LegalView';

const MainLayout: React.FC = () => {
  const { currentView } = useApp();

  // Scroll to top whenever view changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentView]);

  const renderActiveView = () => {
    switch (currentView) {
      case 'home':
        return <HomeView />;
      case 'about':
        return <AboutView />;
      case 'what-we-do':
        return <WhatWeDoView />;
      case 'get-involved':
        return <GetInvolvedView />;
      case 'report':
        return <ReportConcernView />;
      case 'news':
        return <NewsStoriesView />;
      case 'campaigns':
        return <NewsStoriesView initialCategory="CAMPAIGNS" />;
      case 'leadership':
        return <LeadershipView />;
      case 'contact':
        return <ContactView />;
      case 'privacy':
        return <LegalView type="privacy" />;
      case 'terms':
        return <LegalView type="terms" />;
      case 'disclaimer':
        return <LegalView type="disclaimer" />;
      default:
        return <HomeView />;
    }
  };

  return (
    <div className="min-h-screen bg-[#F9F9F7] text-[#1A1A1A] flex flex-col selection:bg-[#D4AF37] selection:text-[#1A1A1A]">
      <Navbar />

      <main className="flex-grow">
        {renderActiveView()}
      </main>

      <Footer />

      {/* Global Interactive Modals & Toast notifications */}
      <SearchModal />
      <ArticleModal />
      <CMSModal />
      <ToastContainer />
    </div>
  );
};

export function App() {
  return (
    <ErrorBoundary>
      <AppProvider>
        <MainLayout />
      </AppProvider>
    </ErrorBoundary>
  );
}

export default App;
