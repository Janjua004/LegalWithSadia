import React from 'react';
import { Users, FileText, Star, Monitor } from 'lucide-react';
import { ActiveTab } from '../types';

interface HeroProps {
  setActiveTab: (tab: ActiveTab) => void;
}

export const Hero: React.FC<HeroProps> = ({ setActiveTab }) => {
  const stats = [
    { icon: Users, count: '500+', label: 'Students' },
    { icon: Monitor, count: '50+', label: 'Courses' },
    { icon: FileText, count: '1000+', label: 'Notes' },
    { icon: Star, count: '4.9/5', label: 'Student Rating' },
  ];

  return (
    <section className="relative bg-[#070A10] text-white overflow-hidden min-h-[500px] lg:min-h-[580px] flex items-center border-b border-slate-800/80">
      
      {/* Right-Side Full Height Hero Advocate Banner Image - Clearly visible on Mobile & Desktop */}
      <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[58%] xl:w-[54%] h-full pointer-events-none z-0 overflow-hidden">
        <img
          src="/images/hero_exact_matching.jpg"
          alt="Advocate Sadia Hammad - Legal Mentor"
          className="w-full h-full object-cover object-[82%_top] sm:object-center opacity-70 sm:opacity-85 lg:opacity-100 transition-opacity duration-300"
          onError={(e) => {
            (e.target as HTMLImageElement).src = '/images/hero_sadia_advocate.jpg';
          }}
        />
        
        {/* Soft edge gradient blending text on left while keeping Advocate Sadia image clearly visible on right */}
        <div className="absolute inset-y-0 left-0 w-full sm:w-80 lg:w-96 bg-gradient-to-r from-[#070A10] via-[#070A10]/90 sm:via-[#070A10]/80 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#070A10] via-[#070A10]/60 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-14 bg-gradient-to-b from-[#070A10] to-transparent pointer-events-none" />
      </div>

      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Text Content, CTAs & Stats */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            
            <div className="space-y-3 sm:space-y-5">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight sm:leading-[1.18] font-serif max-w-xl">
                Practical Legal Education <br className="hidden sm:inline" />
                <span className="text-[#d9a24a]">For Future Leaders</span>
              </h1>

              <p className="text-slate-300 text-sm sm:text-base lg:text-lg max-w-xl font-normal leading-relaxed drop-shadow-sm">
                Access high-quality lectures, comprehensive notes, and internship training to become confident legal professionals.
              </p>
            </div>

            {/* Action Buttons - Restored to side-by-side flex layout */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1">
              <button
                onClick={() => setActiveTab('courses')}
                className="px-6 sm:px-8 py-3.5 rounded-lg font-bold text-navy-950 bg-[#d9a24a] hover:bg-[#c8923a] transition-all text-sm sm:text-base shadow-md cursor-pointer hover:scale-[1.02] active:scale-95"
              >
                Explore Courses
              </button>

              <button
                onClick={() => setActiveTab('notes')}
                className="px-6 sm:px-8 py-3.5 rounded-lg font-semibold text-slate-100 bg-slate-950/60 sm:bg-transparent border border-[#d9a24a]/60 hover:border-[#d9a24a] hover:text-[#d9a24a] backdrop-blur-sm sm:backdrop-blur-none transition-all text-sm sm:text-base cursor-pointer"
              >
                Browse Notes
              </button>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 pt-6 sm:pt-10 border-t border-slate-800/60 max-w-2xl w-full">
              {stats.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 p-2 sm:p-0 rounded-xl bg-slate-950/40 sm:bg-transparent border border-slate-800/40 sm:border-none backdrop-blur-sm sm:backdrop-blur-none"
                  >
                    <div className="text-[#d9a24a] shrink-0 p-1 sm:p-0 rounded-lg bg-[#d9a24a]/10 sm:bg-transparent flex items-center justify-center">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 stroke-[1.75]" />
                    </div>
                    <div className="text-left min-w-0">
                      <div className="text-sm sm:text-lg font-bold text-white leading-tight truncate">
                        {stat.count}
                      </div>
                      <div className="text-[11px] sm:text-xs text-slate-400 font-medium leading-tight truncate">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};



