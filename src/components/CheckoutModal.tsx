import React, { useState } from 'react';
import { Course, Note } from '../types';
import { X, Mail, Copy, Check, MessageSquare, ShieldCheck, Sparkles } from 'lucide-react';

interface CheckoutModalProps {
  item: Course | Note | null;
  onClose: () => void;
  onSuccess: (item: Course | Note) => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  item,
  onClose,
  onSuccess,
}) => {
  const [copied, setCopied] = useState(false);
  const demoEmail = 'legalwithsadia@gmail.com';

  if (!item) return null;

  const price = item.price;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(demoEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleMailTo = () => {
    const subject = encodeURIComponent(`Purchase Request: ${item.title}`);
    const body = encodeURIComponent(
      `Hello Advocate Sadia Hammad Team,\n\nI would like to enroll/purchase the following premium resource:\n- Item: ${item.title}\n- Price: PKR ${price.toLocaleString()}\n\nPlease guide me with the enrollment procedure.\n\nThank you!`
    );
    window.location.href = `mailto:${demoEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="fixed inset-0 z-50 bg-navy-950/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl relative border border-slate-200 text-slate-900">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-900 rounded-full transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-6 text-center sm:text-left">
          
          {/* Badge & Title */}
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-100 text-gold-800 text-xs font-bold mb-2">
              <Sparkles className="w-3.5 h-3.5 text-gold-600" />
              <span>Premium Resource Access</span>
            </div>

            <h3 className="text-xl font-bold font-serif text-slate-900 line-clamp-2">
              {item.title}
            </h3>

            <div className="text-2xl font-black text-slate-900 mt-1.5">
              PKR {price.toLocaleString()}
            </div>
          </div>

          {/* Email Purchase Notice Box */}
          <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-4">
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Online automatic payment gateways are disabled. To purchase or enroll in this premium course, please contact us directly via our official email address below:
            </p>

            {/* Email Address Display Box */}
            <div className="flex items-center justify-between gap-2 p-3 bg-white border border-slate-300 rounded-xl shadow-sm">
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="w-8 h-8 rounded-lg bg-gold-50 text-gold-600 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm font-bold text-slate-900 truncate">
                  {demoEmail}
                </span>
              </div>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center gap-1.5 transition-colors shrink-0 cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-600">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-2.5 pt-2">
            <button
              onClick={handleMailTo}
              className="w-full py-3.5 rounded-xl font-bold bg-gold-500 hover:bg-gold-600 text-navy-950 shadow-md transition-all text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer"
            >
              <Mail className="w-4 h-4" />
              <span>Send Email Request Now</span>
            </button>

            <button
              onClick={() => {
                onSuccess(item);
                onClose();
              }}
              className="w-full py-2.5 rounded-xl font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 transition-all text-xs flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Request Instant Access (Demo Mode)</span>
            </button>
          </div>

          {/* Guarantee Footer */}
          <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-500 pt-1">
            <ShieldCheck className="w-3.5 h-3.5 text-gold-600" />
            <span>Direct Support from Advocate Sadia Hammad's Team</span>
          </div>

        </div>

      </div>
    </div>
  );
};

