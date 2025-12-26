import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Projects from './pages/Projects';
import Mentorship from './pages/Mentorship';
import Contact from './pages/Contact';

// Layout wrapper to ensure Navbar and Footer are always present
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  
  // Example of using location to trigger page specific effects if needed
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen font-sans bg-neutral-50 text-neutral-900 selection:bg-accent-sky selection:text-white">
      <Navbar />
      {/* Increased padding-top to pt-32 to account for the larger floating navbar */}
      <main className="flex-grow pt-32 px-4">
        <div className="max-w-6xl mx-auto w-full">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/mentorship" element={<Mentorship />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;