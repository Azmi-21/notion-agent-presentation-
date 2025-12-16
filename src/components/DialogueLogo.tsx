import React from 'react';
import { Heart } from 'lucide-react';

export function DialogueLogo() {
  return (
    <div className="flex items-center gap-2">
      <Heart className="w-6 h-6 text-[#FF9B8A] fill-[#FF9B8A]" />
      <span className="text-[#2B2B2B] tracking-wide">Dialogue</span>
    </div>
  );
}
