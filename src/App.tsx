import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Components
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import LoadingScreen from './components/Layout/LoadingScreen';

// Pages
import Home from './components/Pages/Home';
import Products from './components/Pages/Products';
import About from './components/Pages/About';
import Services from './components/Pages/Services';
import Gallery from './components/Pages/Gallery';
import Contact from './components/Pages/Contact';

// Styles
import './styles/globals.css';
import './styles/theme.css';
import './styles/animations.css';

// Context
import { ThemeProvider } from './contexts/ThemeContext';
import { BusinessProvider } from './contexts/BusinessContext';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <ThemeProvider>
      <BusinessProvider>
        <Router>
          <div className="app">
            <Header />
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </AnimatePresence>
            <Footer />
          </div>
        </Router>
      </BusinessProvider>
    </ThemeProvider>
  );
};

export default App;
