import React, { useState } from 'react';
import { Note } from '../types';
import { FileText, Search, Download, Eye, Filter, CheckSquare, Square, FileCheck, BookOpen, Layers } from 'lucide-react';

interface NotesLibraryProps {
  notes: Note[];
  onPreviewNote: (note: Note) => void;
  onDownloadNote: (note: Note) => void;
}

export const NotesLibrary: React.FC<NotesLibraryProps> = ({
  notes,
  onPreviewNote,
  onDownloadNote,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedDocType, setSelectedDocType] = useState<string>('All');
  const [priceFilter, setPriceFilter] = useState<'All' | 'Free' | 'Premium'>('All');
  const [sortBy, setSortBy] = useState<'newest' | 'popular' | 'pages'>('newest');

  const categories = ['All', 'Civil Law', 'Criminal Law', 'Corporate Law', 'Constitutional Law', 'Contract Law', 'Legal Maxims'];
  const docTypes = ['All', 'Notes', 'Case Summary', 'Slides', 'Checklists', 'Templates'];

  const filteredNotes = notes.filter((note) => {
    const matchesCat = selectedCategory === 'All' || note.category === selectedCategory;
    const matchesDoc = selectedDocType === 'All' || note.docType === selectedDocType;
    const matchesPrice =
      priceFilter === 'All'
        ? true
        : priceFilter === 'Free'
        ? note.isFree
        : !note.isFree;
    const matchesQuery =
      note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.category.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCat && matchesDoc && matchesPrice && matchesQuery;
  });

  // Sorting
  const sortedNotes = [...filteredNotes].sort((a, b) => {
    if (sortBy === 'popular') return b.downloadsCount - a.downloadsCount;
    if (sortBy === 'pages') return b.pages - a.pages;
    return b.id.localeCompare(a.id); // newest default
  });

  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Banner Header */}
        <div className="bg-navy-950 rounded-3xl p-8 sm:p-10 mb-10 text-white relative overflow-hidden border border-slate-800 shadow-xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-gold-500/10 rounded-full blur-3xl" />
          
          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 text-gold-400 text-xs font-semibold mb-3 border border-gold-500/20">
              <FileCheck className="w-3.5 h-3.5" />
              <span>Verified Legal Repository</span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold font-serif mb-2">
              Legal Notes Library
            </h1>
            <p className="text-slate-300 text-sm leading-relaxed">
              Browse exam-ready legal summaries, case law digests, constitutional article breakdowns, and court drafting checklists created by Advocate Sadia Hammad.
            </p>
          </div>
        </div>

        {/* Main Content Layout (Sidebar + Notes Grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Filter Sidebar */}
          <div className="lg:col-span-3 space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6 sticky top-24">
              
              {/* Category Filter */}
              <div>
                <h3 className="text-sm font-bold text-slate-900 mb-3 flex items-center justify-between font-serif">
                  <span>Categories</span>
                  <span className="text-[11px] font-semibold text-slate-400">({categories.length})</span>
                </h3>
                <div className="space-y-1">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`w-full text-left px-3 py-2 rounded-xl text-xs font-medium transition-all flex items-center justify-between ${
                        selectedCategory === cat
                          ? 'bg-gold-50 text-gold-700 font-bold border border-gold-400/40 shadow-sm'
                          : 'text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      <span>{cat === 'All' ? 'All Categories' : cat}</span>
                      {selectedCategory === cat && <CheckSquare className="w-3.5 h-3.5 text-gold-600" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Document Type Filter */}
              <div className="pt-4 border-t border-slate-100">
                <h3 className="text-sm font-bold text-slate-900 mb-3 font-serif">
                  Document Type
                </h3>
                <div className="space-y-1">
                  {docTypes.map((type) => (
                    <button
                      key={type}
                      onClick={() => setSelectedDocType(type)}
                      className={`w-full text-left px-3 py-2 rounded-xl text-xs font-medium transition-all flex items-center justify-between ${
                        selectedDocType === type
                          ? 'bg-gold-50 text-gold-700 font-bold border border-gold-400/40 shadow-sm'
                          : 'text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      <span>{type === 'All' ? 'All Document Types' : type}</span>
                      {selectedDocType === type && <CheckSquare className="w-3.5 h-3.5 text-gold-600" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div className="pt-4 border-t border-slate-100">
                <h3 className="text-sm font-bold text-slate-900 mb-3 font-serif">
                  Price
                </h3>
                <div className="space-y-2">
                  {(['All', 'Free', 'Premium'] as const).map((p) => (
                    <label
                      key={p}
                      onClick={() => setPriceFilter(p)}
                      className="flex items-center gap-2 text-xs font-medium text-slate-700 cursor-pointer hover:text-slate-900 select-none"
                    >
                      <div className={`w-4 h-4 rounded flex items-center justify-center border ${priceFilter === p ? 'bg-gold-500 border-gold-600 text-navy-950' : 'border-slate-300'}`}>
                        {priceFilter === p && <div className="w-1.5 h-1.5 bg-navy-950 rounded-full" />}
                      </div>
                      <span>{p === 'All' ? 'All Prices' : p}</span>
                    </label>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Right Section: Header Controls & Notes Cards Grid */}
          <div className="lg:col-span-9 space-y-6">
            
            {/* Top Toolbar */}
            <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
              {/* Search input */}
              <div className="relative w-full sm:w-96">
                <input
                  type="text"
                  placeholder="Search notes, case laws, topics..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-gold-500"
                />
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
              </div>

              {/* Sort By Dropdown */}
              <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                <span className="text-xs font-bold text-slate-500 shrink-0">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e: any) => setSortBy(e.target.value)}
                  className="bg-slate-50 border border-slate-300 text-xs font-semibold rounded-xl px-3 py-2 text-slate-800 focus:outline-none focus:border-gold-500"
                >
                  <option value="newest">Newest First</option>
                  <option value="popular">Most Downloaded</option>
                  <option value="pages">Page Count</option>
                </select>
              </div>
            </div>

            {/* Notes Document Grid */}
            {sortedNotes.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {sortedNotes.map((note) => (
                  <div
                    key={note.id}
                    className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div>
                      {/* Document Red PDF Header Icon */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-14 h-16 rounded-xl bg-red-50 border border-red-200 flex flex-col items-center justify-center text-red-600 shadow-sm group-hover:scale-105 transition-transform">
                          <FileText className="w-8 h-8" />
                          <span className="text-[9px] font-extrabold uppercase mt-0.5 tracking-wider">PDF</span>
                        </div>

                        <span className={`px-2.5 py-1 rounded-full text-[10px] font-extrabold tracking-wide uppercase ${
                          note.isFree
                            ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                            : 'bg-amber-50 text-amber-700 border border-amber-200'
                        }`}>
                          {note.isFree ? 'Free' : 'Premium'}
                        </span>
                      </div>

                      {/* Title & Metadata */}
                      <h3 className="text-sm font-bold text-slate-900 group-hover:text-gold-600 transition-colors line-clamp-2 mb-2 font-serif">
                        {note.title}
                      </h3>

                      <div className="flex items-center gap-3 text-[11px] text-slate-500 font-medium mb-4">
                        <span className="flex items-center gap-1">
                          <BookOpen className="w-3.5 h-3.5 text-slate-400" />
                          {note.pages} Pages
                        </span>
                        <span>•</span>
                        <span>{note.fileSize}</span>
                      </div>
                    </div>

                    {/* Footer Actions */}
                    <div className="pt-4 border-t border-slate-100 space-y-3">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-500 font-medium">Price:</span>
                        <span className="font-extrabold text-slate-900">
                          {note.isFree ? <span className="text-emerald-600 font-bold">FREE</span> : `PKR ${note.price}`}
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <button
                          onClick={() => onPreviewNote(note)}
                          className="w-full py-2 rounded-xl text-xs font-semibold bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors flex items-center justify-center gap-1.5"
                        >
                          <Eye className="w-3.5 h-3.5 text-slate-500" />
                          <span>Preview</span>
                        </button>
                        <button
                          onClick={() => onDownloadNote(note)}
                          className="w-full py-2 rounded-xl text-xs font-bold bg-navy-950 text-gold-400 hover:bg-slate-900 shadow-sm transition-all flex items-center justify-center gap-1.5"
                        >
                          <Download className="w-3.5 h-3.5" />
                          <span>Download</span>
                        </button>
                      </div>
                    </div>

                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white p-12 rounded-2xl border border-slate-200 text-center space-y-3">
                <FileText className="w-12 h-12 text-slate-300 mx-auto" />
                <h3 className="text-lg font-bold text-slate-800">No notes found</h3>
                <p className="text-xs text-slate-500 max-w-sm mx-auto">
                  Try clearing your search keyword or switching categories in the sidebar.
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory('All');
                    setSelectedDocType('All');
                    setPriceFilter('All');
                    setSearchQuery('');
                  }}
                  className="px-4 py-2 bg-navy-950 text-gold-400 rounded-xl text-xs font-bold"
                >
                  Reset All Filters
                </button>
              </div>
            )}

          </div>

        </div>
      </div>
    </div>
  );
};
