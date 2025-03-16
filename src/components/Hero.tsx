import React from 'react';
import { Clock, Lock, ArrowRight, Gift } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1597589827317-4c6d6e0a90bd?auto=format&fit=crop&q=80')] bg-fixed bg-center opacity-5"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-bold text-vintage-900 sm:text-5xl md:text-6xl">
            <span className="block">Preserve Your Memories</span>
            <span className="block text-vintage-700 mt-2">For Tomorrow</span>
          </h1>
          <p className="mt-6 max-w-md mx-auto text-base text-vintage-600 sm:text-lg md:mt-8 md:text-xl md:max-w-3xl">
            Create digital time capsules to safeguard your precious moments. Set a future date, earn rewards, and rediscover your memories when the time is right.
          </p>
          <div className="mt-8 max-w-md mx-auto sm:flex sm:justify-center md:mt-10 space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="w-full sm:w-auto flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-vintage-700 hover:bg-vintage-800 md:py-4 md:text-lg md:px-10 transform hover:-translate-y-0.5 transition-all duration-300 shadow-lg hover:shadow-xl space-x-2">
              <Gift className="w-5 h-5" />
              <span>Create Your Capsule</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="w-full sm:w-auto flex items-center justify-center px-8 py-3 border-2 border-vintage-700 text-base font-medium rounded-lg text-vintage-700 bg-white hover:bg-vintage-50 md:py-4 md:text-lg md:px-10 transform hover:-translate-y-0.5 transition-all duration-300 space-x-2">
              <Clock className="w-5 h-5" />
              <span>Learn More</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}