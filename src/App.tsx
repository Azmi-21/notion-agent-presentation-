import React, { useState } from 'react';
import { TitleSlide } from './components/TitleSlide';
import { ProblemSlide } from './components/ProblemSlide';
import { SolutionSlide } from './components/SolutionSlide';
import { ValuesSlide } from './components/ValuesSlide';
import { ImpactSlide } from './components/ImpactSlide';
import { ScaleSlide } from './components/ScaleSlide';
import { NextStepsSlide } from './components/NextStepsSlide';
import { IntegrationSlide } from './components/IntegrationSlide';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    <TitleSlide key="title" />,
    <ProblemSlide key="problem" />,
    <SolutionSlide key="solution" />,
    <ValuesSlide key="values" />,
    <ImpactSlide key="impact" />,
    <ScaleSlide key="scale" />,
    <NextStepsSlide key="next-steps" />,
    <IntegrationSlide key="integration" />,
  ];

  const totalSlides = slides.length;

  const goToSlide = (index: number) => {
    if (index >= 0 && index < totalSlides) {
      setCurrentSlide(index);
    }
  };

  const goToPrevious = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToNext = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  return (
    <div className="relative w-full h-screen bg-[#F5EFE7] overflow-hidden">
      {/* Slides Container */}
      <div className="w-full h-full relative">
        {slides[currentSlide]}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={goToPrevious}
        disabled={currentSlide === 0}
        className="absolute left-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/80 hover:bg-white disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center transition-all shadow-lg"
      >
        <ChevronLeft className="w-6 h-6 text-[#2B2B2B]" />
      </button>
      
      <button
        onClick={goToNext}
        disabled={currentSlide === totalSlides - 1}
        className="absolute right-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/80 hover:bg-white disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center transition-all shadow-lg"
      >
        <ChevronRight className="w-6 h-6 text-[#2B2B2B]" />
      </button>

      {/* Slide Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? 'bg-[#FF9B8A] w-8'
                : 'bg-[#FF9B8A]/30 hover:bg-[#FF9B8A]/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slide Counter */}
      <div className="absolute bottom-8 right-8 z-10 text-[#2B2B2B] opacity-60">
        {currentSlide + 1} / {totalSlides}
      </div>

      {/* Author Footer */}
      <div className="absolute bottom-8 left-8 z-10 text-[#2B2B2B] opacity-50 text-sm">
        <div>Azmi Abidi</div>
        <div className="text-xs">azmiabidi2003@gmail.com</div>
      </div>

      {/* Keyboard Navigation */}
      <div
        className="absolute inset-0 -z-10"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'ArrowLeft') goToPrevious();
          if (e.key === 'ArrowRight') goToNext();
        }}
      />
    </div>
  );
}