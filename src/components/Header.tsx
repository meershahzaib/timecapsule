import React, { useState } from 'react';
import { Timer as TimeCapsule, Menu, X, Home, Info, Gift, Settings, HelpCircle, BookOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { icon: <Home className="w-5 h-5" />, label: 'Home', href: '#' },
    { icon: <Info className="w-5 h-5" />, label: 'About', href: '#about' },
    { icon: <Gift className="w-5 h-5" />, label: 'Features', href: '#features' },
    { icon: <BookOpen className="w-5 h-5" />, label: 'How it Works', href: '#how-it-works' },
    { icon: <HelpCircle className="w-5 h-5" />, label: 'FAQ', href: '#faq' },
    { icon: <Settings className="w-5 h-5" />, label: 'Settings', href: '#settings' },
  ];

  return (
    <>
      <header className="bg-white/80 backdrop-blur-sm border-b border-sepia-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <TimeCapsule className="h-8 w-8 text-vintage-700" />
              <span className="ml-2 text-xl font-semibold text-vintage-900">Time Capsule Hub</span>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {menuItems.slice(0, 4).map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-center space-x-1 text-vintage-700 hover:text-sepia-600 transition-colors"
                >
                  {item.icon}
                  <span>{item.label}</span>
                </a>
              ))}
              <button className="bg-vintage-700 text-white px-6 py-2.5 rounded-lg hover:bg-vintage-800 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl flex items-center space-x-2">
                <Gift className="w-5 h-5" />
                <span>Get Started</span>
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg text-vintage-700 hover:bg-vintage-50 transition-colors"
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Portal */}
      <AnimatePresence>
        {isMenuOpen && (
          <div className="fixed inset-0 z-50 md:hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed right-0 top-0 h-full w-72 bg-white/95 backdrop-blur-md shadow-2xl border-l border-sepia-200"
            >
              <div className="flex flex-col h-full">
                <div className="p-4 border-b border-sepia-200">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-vintage-900">Menu</span>
                    <button
                      className="p-2 rounded-lg text-vintage-700 hover:bg-vintage-50 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <X className="h-6 w-6" />
                    </button>
                  </div>
                </div>
                
                <nav className="flex-1 overflow-y-auto p-4">
                  <div className="space-y-2">
                    {menuItems.map((item, index) => (
                      <a
                        key={index}
                        href={item.href}
                        className="flex items-center space-x-3 px-4 py-3 text-vintage-700 hover:bg-vintage-50 rounded-lg transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.icon}
                        <span className="font-medium">{item.label}</span>
                      </a>
                    ))}
                  </div>
                </nav>

                <div className="p-4 border-t border-sepia-200">
                  <button className="w-full bg-vintage-700 text-white px-4 py-3 rounded-lg hover:bg-vintage-800 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl">
                    <Gift className="w-5 h-5" />
                    <span className="font-medium">Get Started</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}