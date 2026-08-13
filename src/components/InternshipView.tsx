import React, { useState } from 'react';
import { Internship, ActiveTab } from '../types';
import { Briefcase, MapPin, Clock, DollarSign, CheckCircle2, ArrowRight, Award, ShieldCheck, X } from 'lucide-react';

interface InternshipViewProps {
  internships: Internship[];
  setActiveTab: (tab: ActiveTab) => void;
}

export const InternshipView: React.FC<InternshipViewProps> = ({ internships, setActiveTab }) => {
  const [selectedInternship, setSelectedInternship] = useState<Internship | null>(null);
  const [appliedSuccess, setAppliedSuccess] = useState(false);
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    setAppliedSuccess(true);
    setTimeout(() => {
      setAppliedSuccess(false);
      setSelectedInternship(null);
      setApplicantName('');
      setApplicantEmail('');
    }, 3000);
  };

  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner */}
        <div className="bg-navy-950 rounded-3xl p-8 sm:p-12 mb-10 text-white relative overflow-hidden border border-slate-800 shadow-xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/10 text-gold-400 text-xs font-semibold mb-3 border border-gold-500/20">
              <Briefcase className="w-4 h-4 text-gold-400" />
              <span>Courtroom & Chambers Training</span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold font-serif mb-3">
              Legal Internship Program
            </h1>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Bridge the gap between academic theory and actual law practice. Gain real High Court litigation experience, contract drafting mentorship, and case briefing skills.
            </p>
          </div>
        </div>

        {/* Why Join Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            { title: 'Direct Mentor Guidance', desc: 'Work under senior High Court advocates and receive personal feedback on court pleadings.' },
            { title: 'Stipend & Certificate', desc: 'Competitive monthly stipend with an official internship certificate upon successful completion.' },
            { title: 'Career Placement Assistance', desc: 'Top performing interns receive recommendations for law chamber associate positions.' }
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
              <div className="w-10 h-10 rounded-xl bg-gold-50 text-gold-600 flex items-center justify-center font-bold">
                0{i + 1}
              </div>
              <h3 className="text-base font-bold text-slate-900 font-serif">{item.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Open Positions Grid */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-slate-900 font-serif">Open Positions</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {internships.map((job) => (
              <div key={job.id} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div>
                      <span className="text-xs font-semibold text-gold-600 uppercase tracking-wider">{job.firm}</span>
                      <h3 className="text-lg font-bold text-slate-900 font-serif mt-0.5">{job.title}</h3>
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-navy-950 text-gold-400">
                      {job.type}
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">{job.description}</p>

                  <div className="grid grid-cols-2 gap-2 text-xs text-slate-500 font-medium mb-4">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-gold-600" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-gold-600" />
                      <span>{job.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <DollarSign className="w-3.5 h-3.5 text-gold-600" />
                      <span>{job.stipend}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-red-600 font-semibold">
                      <span>Deadline: {job.deadline}</span>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Requirements:</span>
                    {job.requirements.map((req, rIdx) => (
                      <div key={rIdx} className="flex items-start gap-1.5 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{req}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-semibold">{job.spotsLeft} Spots Available</span>
                  <button
                    onClick={() => setSelectedInternship(job)}
                    className="px-5 py-2.5 rounded-xl text-xs font-bold bg-gold-gradient-bg text-navy-950 shadow-gold-glow hover:brightness-110 transition-all flex items-center gap-1.5"
                  >
                    <span>Apply Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Application Modal */}
        {selectedInternship && (
          <div className="fixed inset-0 z-50 bg-navy-950/80 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl relative border border-slate-200">
              <button
                onClick={() => setSelectedInternship(null)}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-900 rounded-full"
              >
                <X className="w-5 h-5" />
              </button>

              {appliedSuccess ? (
                <div className="py-8 text-center space-y-3">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 font-serif">Application Submitted!</h3>
                  <p className="text-xs text-slate-600">
                    Thank you, {applicantName}. Our chambers team will review your CV and contact you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleApply} className="space-y-4">
                  <div>
                    <span className="text-xs font-bold text-gold-600 uppercase tracking-widest">Apply For</span>
                    <h3 className="text-lg font-bold text-slate-900 font-serif">{selectedInternship.title}</h3>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={applicantName}
                      onChange={(e) => setApplicantName(e.target.value)}
                      placeholder="Enter your full name"
                      className="w-full px-3 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-gold-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={applicantEmail}
                      onChange={(e) => setApplicantEmail(e.target.value)}
                      placeholder="name@law.edu.pk"
                      className="w-full px-3 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-gold-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Year of Study / Institution</label>
                    <input
                      type="text"
                      placeholder="e.g. LL.B 4th Year, Punjab University Law College"
                      className="w-full px-3 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-gold-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Link to CV / Portfolio</label>
                    <input
                      type="url"
                      placeholder="https://drive.google.com/..."
                      className="w-full px-3 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-gold-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl font-bold bg-gold-gradient-bg text-navy-950 shadow-gold-glow hover:brightness-110 transition-all text-xs uppercase tracking-wider"
                  >
                    Submit Application
                  </button>
                </form>
              )}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
