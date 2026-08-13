import React, { useState } from 'react';
import { Note } from '../types';
import { X, FileText, Download, ChevronLeft, ChevronRight, ShieldCheck, CheckCircle } from 'lucide-react';

interface PDFPreviewModalProps {
  note: Note | null;
  onClose: () => void;
  onDownload: (note: Note) => void;
}

export const PDFPreviewModal: React.FC<PDFPreviewModalProps> = ({
  note,
  onClose,
  onDownload,
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  if (!note) return null;

  const totalPreviewPages = note.previewPages.length || 3;

  return (
    <div className="fixed inset-0 z-50 bg-navy-950/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-2xl w-full shadow-2xl relative border border-slate-200 text-slate-900 flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-slate-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-12 rounded-lg bg-red-50 text-red-600 border border-red-200 flex flex-col items-center justify-center font-bold text-xs">
              PDF
            </div>
            <div>
              <h3 className="text-base font-bold font-serif line-clamp-1">{note.title}</h3>
              <p className="text-xs text-slate-500">{note.category} • {note.pages} Total Pages • Author: {note.author}</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-900 rounded-full"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* PDF Viewer Body */}
        <div className="flex-1 my-6 bg-slate-100 rounded-2xl p-6 border border-slate-300 overflow-y-auto flex flex-col items-center justify-center min-h-[300px]">
          <div className="w-full max-w-md bg-white rounded-xl shadow-lg border border-slate-200 p-8 space-y-4 text-center">
            
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-50 text-gold-700 text-xs font-bold border border-gold-300">
              <FileText className="w-3.5 h-3.5" />
              <span>Previewing Page {currentPage} of {totalPreviewPages}</span>
            </div>

            <div className="text-left font-serif space-y-3 pt-2">
              <h4 className="text-sm font-bold text-slate-900 border-b border-slate-100 pb-2">
                {note.previewPages[currentPage - 1] || `Sample Legal Page ${currentPage}`}
              </h4>

              <p className="text-xs text-slate-600 leading-relaxed">
                "According to Section 10 of the Contract Act 1872, all agreements are contracts if they are made by the free consent of parties competent to contract, for a lawful consideration and with a lawful object..."
              </p>

              <div className="p-3 bg-slate-50 rounded-lg text-[11px] text-slate-500 font-mono">
                [SCMR 2023 SC 412 - Enforceability of Written Commercial Agreements]
              </div>
            </div>

            <div className="pt-4 text-xs text-slate-400">
              Note: Download full high-resolution PDF document to view all {note.pages} pages.
            </div>
          </div>
        </div>

        {/* Footer controls */}
        <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <button
              disabled={currentPage <= 1}
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              className="p-2 rounded-xl border border-slate-300 disabled:opacity-40 hover:bg-slate-50 text-xs font-bold flex items-center gap-1"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous</span>
            </button>
            <span className="text-xs font-semibold text-slate-600">
              {currentPage} / {totalPreviewPages}
            </span>
            <button
              disabled={currentPage >= totalPreviewPages}
              onClick={() => setCurrentPage((p) => Math.min(totalPreviewPages, p + 1))}
              className="p-2 rounded-xl border border-slate-300 disabled:opacity-40 hover:bg-slate-50 text-xs font-bold flex items-center gap-1"
            >
              <span>Next</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <button
            onClick={() => {
              onDownload(note);
              onClose();
            }}
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl font-bold bg-navy-950 text-gold-400 hover:bg-slate-900 transition-all text-xs flex items-center justify-center gap-2 shadow-sm"
          >
            <Download className="w-4 h-4" />
            <span>Download PDF Note</span>
          </button>
        </div>

      </div>
    </div>
  );
};
