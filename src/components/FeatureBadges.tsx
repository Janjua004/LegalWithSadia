import React from 'react';
import { Award, BookOpen, Briefcase, Clock } from 'lucide-react';

export const FeatureBadges: React.FC = () => {
  const features = [
    {
      icon: Award,
      title: 'Expert Guidance',
      description: 'Learn directly from practicing High Court advocates with years of court litigation experience.',
    },
    {
      icon: BookOpen,
      title: 'Comprehensive Notes',
      description: 'Well-structured notes, case law summaries, legislation breakdowns, and legal checklists.',
    },
    {
      icon: Briefcase,
      title: 'Internship Program',
      description: 'Gain practical courtroom & drafting exposure through our exclusive law chamber partnerships.',
    },
    {
      icon: Clock,
      title: 'Learn at Your Pace',
      description: 'Study anytime, anywhere on desktop or mobile with lifetime access to recorded video lectures.',
    },
  ];

  return (
    <section className="py-12 bg-[#070A10] text-white border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className={`bg-slate-900/80 p-6 rounded-2xl border border-slate-800 shadow-sm hover:shadow-lg hover:border-gold-500/40 hover-card-lift transition-all duration-300 flex flex-col items-center text-center group cursor-pointer animate-fade-in-up ${
                  idx === 0 ? 'animate-delay-1' : idx === 1 ? 'animate-delay-2' : idx === 2 ? 'animate-delay-3' : 'animate-delay-4'
                }`}
              >
                <div className="w-14 h-14 rounded-full bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 mb-4 group-hover:scale-110 group-hover:bg-gold-500 group-hover:text-navy-950 transition-all duration-300 shadow-sm">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-white mb-2 font-serif">
                  {feature.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
