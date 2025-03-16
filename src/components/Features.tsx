import React from 'react';
import { Clock, Lock, Gift, Upload } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: <Upload className="h-6 w-6 text-sepia-600" />,
      title: 'Easy Upload',
      description: 'Drag and drop your photos, videos, and documents into your time capsule with ease.'
    },
    {
      icon: <Lock className="h-6 w-6 text-sepia-600" />,
      title: 'Secure Storage',
      description: 'Your memories are protected with end-to-end encryption until their scheduled reveal date.'
    },
    {
      icon: <Clock className="h-6 w-6 text-sepia-600" />,
      title: 'Smart Scheduling',
      description: 'Set specific dates or milestones for when your time capsule should be revealed.'
    },
    {
      icon: <Gift className="h-6 w-6 text-sepia-600" />,
      title: 'Reward System',
      description: 'Earn points and unlock exclusive features by preserving your memories longer.'
    }
  ];

  return (
    <div className="py-16 bg-white/80 backdrop-blur-sm" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-vintage-900 sm:text-4xl">
            Features that Preserve Your Legacy
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-vintage-600">
            Everything you need to create meaningful time capsules for future generations.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col items-center p-8 bg-white rounded-xl border border-sepia-100 hover:border-sepia-200 transition-all transform hover:-translate-y-1 hover:shadow-xl">
                  <div className="flex items-center justify-center h-14 w-14 rounded-full bg-sepia-100">
                    {feature.icon}
                  </div>
                  <h3 className="mt-4 text-lg font-medium text-vintage-900">{feature.title}</h3>
                  <p className="mt-2 text-base text-vintage-600 text-center">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
