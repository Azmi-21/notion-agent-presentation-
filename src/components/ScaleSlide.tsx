import React from 'react';
import { DialogueLogo } from './DialogueLogo';
import { Lock, DollarSign } from 'lucide-react';

export function ScaleSlide() {
  return (
    <div className="w-full h-screen bg-[#F5EFE7] px-16 py-8 relative overflow-hidden">
      {/* Logo */}
      <div className="absolute top-8 left-12">
        <DialogueLogo />
      </div>

      {/* Header */}
      <div className="max-w-6xl mx-auto pt-16">
        <h2 className="text-4xl text-[#2B2B2B] mb-10" style={{ fontFamily: 'Georgia, serif' }}>
          Built for Growth
        </h2>

        {/* Growth Stages */}
        <div className="flex items-center justify-center gap-8 mb-12">
          {/* Stage 1 */}
          <div className="flex flex-col items-center gap-3">
            <div className="w-24 h-24 rounded-full border-4 border-[#FF9B8A] flex items-center justify-center">
              <div className="text-center">
                <div className="text-[#FF9B8A] text-xl mb-1">1</div>
                <div className="text-[#2B2B2B] text-xs">Start</div>
              </div>
            </div>
            <p className="text-[#2B2B2B] text-center text-sm">Our Team</p>
          </div>

          {/* Arrow */}
          <div className="flex items-center gap-1">
            <div className="w-12 h-1 bg-[#FF9B8A] rounded-full"></div>
            <div className="w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-l-[10px] border-l-[#FF9B8A]"></div>
          </div>

          {/* Stage 2 */}
          <div className="flex flex-col items-center gap-3">
            <div className="w-32 h-32 rounded-full bg-[#FF9B8A]/20 border-4 border-[#FF9B8A] flex items-center justify-center">
              <div className="text-center">
                <div className="text-[#FF9B8A] text-xl mb-1">2</div>
                <div className="text-[#2B2B2B] text-xs">Expand</div>
              </div>
            </div>
            <p className="text-[#2B2B2B] text-center text-sm">Multiple Teams</p>
          </div>

          {/* Arrow */}
          <div className="flex items-center gap-1">
            <div className="w-12 h-1 bg-[#FF9B8A] rounded-full"></div>
            <div className="w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-l-[10px] border-l-[#FF9B8A]"></div>
          </div>

          {/* Stage 3 */}
          <div className="flex flex-col items-center gap-3">
            <div className="w-40 h-40 rounded-full bg-[#FF9B8A]/40 border-4 border-[#FF9B8A] flex items-center justify-center">
              <div className="text-center">
                <div className="text-[#FF9B8A] text-2xl mb-1">3</div>
                <div className="text-[#2B2B2B] text-sm">Scale</div>
              </div>
            </div>
            <p className="text-[#2B2B2B] text-center text-sm">Tackle more<br />issues</p>
          </div>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Security Card */}
          <div className="bg-white/50 rounded-3xl p-6 border border-[#2B2B2B]/10 flex flex-col items-center text-center gap-3">
            <div className="w-12 h-12 rounded-full bg-[#FF9B8A]/20 flex items-center justify-center">
              <Lock className="w-6 h-6 text-[#FF9B8A]" />
            </div>
            <h3 className="text-[#2B2B2B]">Enterprise-Grade Security</h3>
            <p className="text-[#2B2B2B] opacity-70 text-sm">
              Your data stays secure with industry-leading protection
            </p>
          </div>

          {/* Pricing Card */}
          <div className="bg-white/50 rounded-3xl p-6 border border-[#2B2B2B]/10 flex flex-col items-center text-center gap-3">
            <div className="w-12 h-12 rounded-full bg-[#FF9B8A]/20 flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-[#FF9B8A]" />
            </div>
            <h3 className="text-[#2B2B2B]">Usage-Based Pricing</h3>
            <p className="text-[#2B2B2B] opacity-70 text-sm">
              Pay only for what you use as you grow
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
