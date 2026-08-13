import React from 'react';
import { Award, Target, Eye, ShieldCheck, CheckCircle2, Users, BookOpen, FileText, Star } from 'lucide-react';

export const AboutView: React.FC = () => {
  const stats = [
    { label: 'Students', value: '500+' },
    { label: 'Courses', value: '50+' },
    { label: 'Notes', value: '1000+' },
    { label: 'Student Rating', value: '4.9/5' },
  ];

  const whyChooseUs = [
    { title: 'Expert Content', desc: 'Learn directly from practicing High Court advocates and legal academics.' },
    { title: 'Trusted Resources', desc: 'Reliable and up-to-date study materials, notes, and case summaries.' },
    { title: 'Flexible Learning', desc: 'Study anytime, anywhere at your own pace on mobile or desktop.' },
    { title: 'Practical Approach', desc: 'Real-world courtroom examples and practical contract drafting insights.' },
    { title: 'Community Support', desc: 'Join a vibrant community of law students and aspiring advocates across Pakistan.' },
    { title: 'Affordable Pricing', desc: 'Quality legal education at a price structured to fit student budgets.' },
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      
      {/* Banner */}
      <div className="bg-navy-950 text-white py-12 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold font-serif mb-2">About Legal with Sadia</h1>
          <p className="text-slate-300 text-sm">
            Empowering future legal leaders through high-quality practical education and resources.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 space-y-12">
        
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
            <span className="text-xs font-extrabold text-gold-600 uppercase tracking-widest">Our Story</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-serif">
              Empowering Future Legal Professionals
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              <strong>Legal with Sadia</strong> was founded with a simple mission: to provide high-quality, practical legal education and resources that help law students and aspiring advocates succeed in their academic and professional journey.
            </p>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We believe that access to the right knowledge, courtroom strategies, and practical drafting guidance can transform student potential into legal excellence.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-slate-100">
              {stats.map((s, i) => (
                <div key={i} className="text-center p-2 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="text-lg font-black text-slate-900">{s.value}</div>
                  <div className="text-[10px] text-slate-500 font-semibold">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            {/* Founder Card with Image */}
            <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center gap-5">
              <div className="w-28 h-36 rounded-2xl overflow-hidden shrink-0 border-2 border-gold-500/40 shadow-md">
                <img
                  src="/images/hero_sadia_advocate.jpg"
                  alt="Advocate Sadia Hammad"
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/images/hero_right_perfect.jpg';
                  }}
                />
              </div>
              <div className="space-y-1.5 text-center sm:text-left">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-gold-100 text-gold-800 uppercase tracking-wider">
                  Lead Instructor & Founder
                </span>
                <h3 className="text-lg font-bold text-slate-900 font-serif">Advocate Sadia Hammad</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  High Court Advocate with years of courtroom & drafting experience dedicated to mentoring young legal minds across Pakistan.
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-gold-50 text-gold-600 flex items-center justify-center shrink-0">
                <Target className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 font-serif">Our Mission</h3>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  To deliver accessible, affordable, and expert-led legal education that equips students with the knowledge, skills, and confidence to excel in the legal profession.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-gold-50 text-gold-600 flex items-center justify-center shrink-0">
                <Eye className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 font-serif">Our Vision</h3>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  To be the most trusted online platform for legal education and resources in Pakistan, shaping the next generation of ethical and competent legal professionals.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Section */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-slate-900 font-serif text-center">
            Why Choose Legal with Sadia?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((w, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
                <CheckCircle2 className="w-6 h-6 text-gold-600" />
                <h3 className="text-base font-bold text-slate-900 font-serif">{w.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
