import React, { useState } from 'react';
import { Scale, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Youtube, Send, Check } from 'lucide-react';
import { ActiveTab } from '../types';

interface FooterProps {
  setActiveTab: (tab: ActiveTab) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 4000);
    }
  };

  return (
    <footer className="bg-navy-950 text-slate-300 border-t border-slate-800/80 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Newsletter Subscription Bar */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-navy-900 to-slate-900 border border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 shrink-0">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white font-serif">Stay Updated!</h3>
              <p className="text-xs text-slate-400">
                Subscribe to our newsletter and never miss important legal updates and new courses.
              </p>
            </div>
          </div>

          <div className="w-full md:w-auto">
            {subscribed ? (
              <div className="px-6 py-2.5 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 rounded-xl text-xs font-semibold flex items-center gap-2">
                <Check className="w-4 h-4" />
                <span>Thank you for subscribing!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 w-full md:w-96">
                <input
                  type="email"
                  required
                  placeholder="Enter your email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-gold-500"
                />
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl font-bold bg-[#d9a24a] hover:bg-[#c8923a] text-[#070a10] shadow-md transition-all text-xs font-sans uppercase tracking-wider whitespace-nowrap cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5 text-[#070a10]" />
                  <span>Subscribe</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Links & Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 text-xs">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div
              onClick={() => setActiveTab('home')}
              className="flex items-center gap-3 cursor-pointer group inline-flex"
            >
              <img
                src="/images/legal_logo.png"
                alt="Legal With Sadia Logo"
                className="w-10 h-10 object-contain group-hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
              <div>
                <span className="font-serif text-lg font-bold text-white group-hover:text-gold-400 transition-colors whitespace-nowrap block">
                  LEGAL WITH SADIA
                </span>
                <p className="text-[10px] font-medium tracking-widest text-gold-400 uppercase whitespace-nowrap">
                  Advocate & Legal Mentor
                </p>
              </div>
            </div>

            <p className="text-slate-400 leading-relaxed max-w-sm">
              Empowering legal professionals and law students through quality education, verified case notes, and practical court training across Pakistan.
            </p>

            <div className="flex items-center space-x-3 pt-2">
              {[Facebook, Twitter, Linkedin, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-gold-400 hover:border-gold-500/50 flex items-center justify-center transition-colors"
                  aria-label="Social Link"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-serif">Quick Links</h4>
            <ul className="space-y-2 text-slate-400">
              {[
                { label: 'Courses', tab: 'courses' },
                { label: 'Notes Library', tab: 'notes' },
                { label: 'Internship Program', tab: 'internship' },
                { label: 'Legal Blog', tab: 'blog' },
                { label: 'About Us', tab: 'about' },
                { label: 'Contact Us', tab: 'contact' },
              ].map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => setActiveTab(link.tab as ActiveTab)}
                    className="hover:text-gold-400 transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Legal Notices */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-serif">Legal</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#" className="hover:text-gold-400 transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">Refund Policy</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">Disclaimer</a></li>
            </ul>
          </div>

          {/* Col 4: Contact Information */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-serif">Contact Info</h4>
            <div className="space-y-2.5 text-slate-400">
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                <span>+92 300 1234567</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gold-400 shrink-0" />
                <span>info@legalwithsadia.com</span>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0" />
                <span>Lahore, Pakistan</span>
              </div>
            </div>
          </div>

        </div>

        {/* Copyright Bar */}
        <div className="pt-6 border-t border-slate-900 text-center text-xs text-slate-500">
          <p>© 2024 Legal with Sadia. All Rights Reserved.</p>
        </div>

      </div>
    </footer>
  );
};
