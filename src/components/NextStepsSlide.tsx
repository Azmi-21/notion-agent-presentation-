import React from 'react';
import { DialogueLogo } from './DialogueLogo';
import { Rocket, BarChart3, TrendingUp } from 'lucide-react';

export function NextStepsSlide() {
  const steps = [
    { number: 1, icon: Rocket, title: 'Pilot (1 month)', description: 'Launch with your team' },
    { number: 2, icon: BarChart3, title: 'Measure Results', description: 'Track the impact' },
    { number: 3, icon: TrendingUp, title: 'Scale Success', description: 'Expand across teams & issues' },
  ];

  return (
    <div className="w-full h-screen bg-[#F5EFE7] px-16 py-8 relative overflow-hidden">
      {/* Logo */}
      <div className="absolute top-8 left-12">
        <DialogueLogo />
      </div>

      {/* Header */}
      <div className="max-w-6xl mx-auto pt-16">
        <h2 className="text-4xl text-[#2B2B2B] mb-12" style={{ fontFamily: 'Georgia, serif' }}>
          Let's Get Started
        </h2>

        {/* Steps */}
        <div className="flex justify-center gap-8 mb-12">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="bg-white/50 rounded-3xl p-8 w-72 flex flex-col items-center text-center gap-4 border border-[#FF9B8A]/20"
              >
                <div className="text-6xl text-[#FF9B8A]" style={{ fontFamily: 'Georgia, serif' }}>
                  {step.number}
                </div>
                <Icon className="w-10 h-10 text-[#2B2B2B]" />
                <h3 className="text-[#2B2B2B] text-xl" style={{ fontFamily: 'Georgia, serif' }}>
                  {step.title}
                </h3>
                <p className="text-[#2B2B2B] opacity-70 text-sm">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="bg-[#FF9B8A] rounded-3xl p-10 text-center">
            <h3 className="text-white text-2xl" style={{ fontFamily: 'Georgia, serif' }}>
              Ready to Transform Our Knowledge Base
            </h3>
          </div>
        </div>

        {/* Tagline at bottom */}
        <div className="text-center text-[#2B2B2B] [0.3em] opacity-60 text-sm">
          HEALTH IS EVERYTHING. DON'T SETTLE.
        </div>
      </div>
    </div>
  );
}
