import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProcessOverview } from './components/ProcessOverview';
import { Features } from './components/Features';
import { Footer } from './components/Footer';
import Form from './components/Form';

function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sepia-50 via-warm-50 to-vintage-50">
      <Header />
      <main>
        <Hero />
        <ProcessOverview />
        <Features />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Form />} />
      </Routes>
    </Router>
  );
}

export default App;