import React from 'react';
import { DialogueLogo } from './DialogueLogo';
import { Link, Zap, CheckCircle2 } from 'lucide-react';

export function IntegrationSlide() {
  const steps = [
    { icon: Link, text: 'Connect the agent to Notion' },
    { icon: CheckCircle2, text: 'Grant access to the pages needed' },
    { icon: Zap, text: 'It will work perfectly' },
  ];

  return (
    <div className="w-full h-screen bg-[#F5EFE7] px-16 py-8 relative overflow-hidden">
      {/* Logo */}
      <div className="absolute top-8 left-12">
        <DialogueLogo />
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto pt-20 flex flex-col items-center justify-center h-full -mt-8">
        <h2 className="text-5xl text-[#2B2B2B] mb-4 text-center" style={{ fontFamily: 'Georgia, serif' }}>
          Integration Example
        </h2>

        <p className="text-[#2B2B2B] opacity-70 text-center mb-12 max-w-2xl">
          See the agent in action with our pre-built Gumloop integration
        </p>

        {/* Gumloop Link Card */}
        <div className="bg-white/70 rounded-3xl p-10 mb-10 max-w-3xl w-full border border-[#FF9B8A]/20 shadow-sm">
          <div className="flex items-start gap-6">
            <div className="bg-[#FF9B8A]/10 rounded-2xl p-4 flex-shrink-0">
              <Zap className="w-10 h-10 text-[#FF9B8A]" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl text-[#2B2B2B] mb-3" style={{ fontFamily: 'Georgia, serif' }}>
                Try the Agent Now
              </h3>
              <a
                href="https://www.gumloop.com/agents/b9wn7iGJns22wRZ8UHMA7x"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FF9B8A] hover:underline break-all"
              >
                www.gumloop.com/agents/b9wn7iGJns22wRZ8UHMA7x
              </a>
            </div>
          </div>
        </div>

        {/* Quick Setup Steps */}
        <div className="flex gap-6 items-center justify-center mb-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <React.Fragment key={index}>
                <div className="flex items-center gap-3 bg-white/50 rounded-2xl px-6 py-4 border border-[#FF9B8A]/10">
                  <Icon className="w-5 h-5 text-[#FF9B8A]" />
                  <span className="text-[#2B2B2B]">{step.text}</span>
                </div>
                {index < steps.length - 1 && (
                  <div className="text-[#FF9B8A] text-2xl">→</div>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Tagline */}
        <div className="text-center text-[#2B2B2B] opacity-60 text-sm mt-4">
          HEALTH IS EVERYTHING. DON'T SETTLE.
        </div>
      </div>
    </div>
  );
}
