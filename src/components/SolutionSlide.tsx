import React from 'react';
import { DialogueLogo } from './DialogueLogo';
import { User, MessageSquare, Lightbulb, FileText, CheckCircle, Clock, Shield, Zap } from 'lucide-react';

export function SolutionSlide() {
  const benefits = [
    { icon: Zap, text: 'Instant answers' },
    { icon: CheckCircle, text: 'Verified sources' },
    { icon: Clock, text: '24/7 availability' },
    { icon: Shield, text: 'Provides only backed information' },
  ];

  return (
    <div className="w-full h-screen bg-[#F5EFE7] px-16 py-8 relative overflow-hidden">
      {/* Logo */}
      <div className="absolute top-8 left-12">
        <DialogueLogo />
      </div>

      {/* Header */}
      <div className="max-w-6xl mx-auto pt-16">
        <h2 className="text-4xl text-[#2B2B2B] mb-10" style={{ fontFamily: 'Georgia, serif' }}>
          AI Agent in Slack
        </h2>

        {/* Workflow Visualization */}
        <div className="flex items-center justify-center gap-6 mb-12">
          {/* Team Member */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-white/60 flex items-center justify-center">
              <User className="w-8 h-8 text-[#2B2B2B]" />
            </div>
          </div>

          {/* Arrow */}
          <div className="w-10 h-1 bg-[#FF9B8A] rounded-full"></div>

          {/* Slack */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-white/60 flex items-center justify-center">
              <MessageSquare className="w-8 h-8 text-[#2B2B2B]" />
            </div>
          </div>

          {/* Arrow */}
          <div className="w-10 h-1 bg-[#FF9B8A] rounded-full"></div>

          {/* AI Brain */}
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 rounded-full bg-[#FF9B8A]/20 flex items-center justify-center border-2 border-[#FF9B8A]">
              <Lightbulb className="w-10 h-10 text-[#FF9B8A] fill-[#FF9B8A]" />
            </div>
          </div>

          {/* Arrow */}
          <div className="w-10 h-1 bg-[#FF9B8A] rounded-full"></div>

          {/* Notion Pages */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-white/60 flex items-center justify-center">
              <FileText className="w-8 h-8 text-[#2B2B2B]" />
            </div>
          </div>

          {/* Arrow */}
          <div className="w-10 h-1 bg-[#FF9B8A] rounded-full"></div>

          {/* Answer */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-white/60 flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-[#FF9B8A]" />
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-2 gap-5 max-w-3xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-white/50 rounded-2xl p-5 flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-[#FF9B8A]/20 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-[#FF9B8A]" />
                </div>
                <p className="text-[#2B2B2B]">{benefit.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
