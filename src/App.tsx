import React from 'react';
import { Timer as TimeCapsule, Clock, Gift, Lock } from 'lucide-react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Footer } from './components/Footer.tsx';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sepia-50 via-warm-50 to-vintage-50">
      <Header />
      <main>
        <Hero />
        <Features />
      </main>
      <Footer />
    </div>
  );
}

export default App;