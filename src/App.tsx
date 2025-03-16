import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProcessOverview } from './components/ProcessOverview';
import { Features } from './components/Features';
import { Footer } from './components/Footer';

function App() {
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

export default App;
