import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, ShieldCheck, CheckCircle } from 'lucide-react';

export const ContactView: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('Course Inquiry');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFullName('');
      setEmail('');
      setMessage('');
    }, 4000);
  };

  const contactInfo = [
    { icon: Phone, title: 'Phone', text: '+92 300 1234567', subtext: 'Mon - Fri, 9:00 AM - 6:00 PM (PKT)' },
    { icon: Mail, title: 'Email', text: 'info@legalwithsadia.com', subtext: 'We respond within 24 hours' },
    { icon: MapPin, title: 'Address', text: 'Lahore, Pakistan', subtext: 'Serving students nationwide' },
    { icon: Clock, title: 'Office Hours', text: 'Monday - Friday', subtext: '9:00 AM - 6:00 PM (PKT)' },
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      
      {/* Page Header */}
      <div className="bg-navy-950 text-white py-12 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold font-serif mb-2">Contact Us</h1>
          <p className="text-slate-300 text-sm">
            Home &gt; Contact
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-slate-900 font-serif">
                We'd Love to Hear from You!
              </h2>
              <p className="text-xs text-slate-600 leading-relaxed">
                Have questions regarding course enrollment, notes library access, or law internships? Our team is here to support your legal education journey.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, idx) => {
                const Icon = info.icon;
                return (
                  <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-gold-50 text-gold-600 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-extrabold text-slate-400 uppercase tracking-wider">{info.title}</h4>
                      <div className="text-sm font-bold text-slate-900 mt-0.5">{info.text}</div>
                      <div className="text-[11px] text-slate-500 mt-0.5">{info.subtext}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Interactive Form */}
          <div className="lg:col-span-7 bg-white p-8 rounded-3xl border border-slate-200 shadow-md">
            <h3 className="text-xl font-bold text-slate-900 font-serif mb-6">Send Us a Message</h3>

            {submitted ? (
              <div className="py-12 text-center space-y-3">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 font-serif">Message Sent Successfully!</h4>
                <p className="text-xs text-slate-600">
                  Thank you, {fullName}. Advocate Sadia Hammad's team will respond to your query at {email} within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Enter your full name"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-gold-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-gold-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Subject *</label>
                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-gold-500"
                  >
                    <option value="Course Inquiry">Course Inquiry</option>
                    <option value="Notes Access">Notes Access & Downloads</option>
                    <option value="Internship Program">Internship Program Application</option>
                    <option value="Technical Support">Technical & Login Support</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Your Message *</label>
                  <textarea
                    rows={5}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your message here..."
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-gold-500"
                  />
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                  <button
                    type="submit"
                    className="px-8 py-3 rounded-xl font-bold bg-gold-gradient-bg text-navy-950 shadow-gold-glow hover:brightness-110 transition-all flex items-center justify-center gap-2 text-xs uppercase tracking-wider cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>

                  <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Your information is 100% safe with us.</span>
                  </div>
                </div>
              </form>
            )}

          </div>

        </div>
      </div>
    </div>
  );
};
