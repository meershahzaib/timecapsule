import React from 'react';
import { Timer as TimeCapsule, Heart, Mail, Twitter, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-vintage-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center">
              <TimeCapsule className="h-8 w-8 text-sepia-300" />
              <span className="ml-2 text-xl font-semibold">Time Capsule Hub</span>
            </div>
            <p className="mt-4 text-vintage-300 max-w-md">
              Preserving today's moments for tomorrow's memories. Join us in creating a legacy that spans generations.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-vintage-300 hover:text-sepia-300 transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="text-vintage-300 hover:text-sepia-300 transition-colors">How it Works</a></li>
              <li><a href="#pricing" className="text-vintage-300 hover:text-sepia-300 transition-colors">Pricing</a></li>
              <li><a href="#about" className="text-vintage-300 hover:text-sepia-300 transition-colors">About Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-vintage-300 hover:text-sepia-300 transition-colors">
                <Mail className="h-6 w-6" />
              </a>
              <a href="#" className="text-vintage-300 hover:text-sepia-300 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-vintage-300 hover:text-sepia-300 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-vintage-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-vintage-300 text-sm">
              © 2025 Time Capsule Hub. All rights reserved.
            </p>
            <div className="flex items-center mt-4 md:mt-0">
              <span className="text-vintage-300 text-sm">Made with</span>
              <Heart className="h-4 w-4 mx-1 text-sepia-400" />
              <span className="text-vintage-300 text-sm">for preserving memories</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
