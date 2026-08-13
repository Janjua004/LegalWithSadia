import React, { useState } from 'react';
import { Course, ActiveTab } from '../types';
import { CourseCard } from './CourseCard';
import { Search, Filter, ArrowRight, BookOpen } from 'lucide-react';

interface CourseGridProps {
  courses: Course[];
  onSelectCourse: (course: Course) => void;
  onEnroll: (course: Course) => void;
  setActiveTab: (tab: ActiveTab) => void;
  isFullPage?: boolean;
}

export const CourseGrid: React.FC<CourseGridProps> = ({
  courses,
  onSelectCourse,
  onEnroll,
  setActiveTab,
  isFullPage = false,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedLevel, setSelectedLevel] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Civil Law', 'Criminal Law', 'Corporate Law', 'Contract Law', 'Legal Skills', 'Constitutional Law'];
  const levels = ['All', 'Beginner', 'Intermediate', 'Advanced'];

  const filteredCourses = courses.filter((c) => {
    const matchesCat = selectedCategory === 'All' || c.category === selectedCategory;
    const matchesLevel = selectedLevel === 'All' || c.level === selectedLevel;
    const matchesQuery =
      c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesLevel && matchesQuery;
  });

  const displayedCourses = isFullPage ? filteredCourses : filteredCourses.slice(0, 4);

  return (
    <section className={`py-16 ${isFullPage ? 'bg-slate-50 min-h-screen' : 'bg-slate-50'} border-b border-slate-200`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 pb-4 border-b border-slate-200">
          <div>
            <div className="flex items-center gap-2 text-gold-600 font-bold text-xs uppercase tracking-widest mb-1">
              <BookOpen className="w-4 h-4" />
              <span>{isFullPage ? 'Complete Course Catalog' : 'Featured Programs'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-serif">
              {isFullPage ? 'Explore All Courses' : 'Popular Courses'}
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Practical legal courses designed by practicing High Court advocates.
            </p>
          </div>

          {!isFullPage && (
            <button
              onClick={() => setActiveTab('courses')}
              className="mt-4 sm:mt-0 inline-flex items-center gap-2 text-sm font-bold text-gold-600 hover:text-gold-700 transition-colors group cursor-pointer"
            >
              <span>View All Courses</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          )}
        </div>

        {/* Filter Controls (Full Page View) */}
        {isFullPage && (
          <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200 shadow-sm mb-8 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
              
              {/* Search Bar */}
              <div className="md:col-span-6 relative">
                <input
                  type="text"
                  placeholder="Search courses by keyword, topic, or law section..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500"
                />
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              </div>

              {/* Level Select */}
              <div className="md:col-span-3">
                <select
                  value={selectedLevel}
                  onChange={(e) => setSelectedLevel(e.target.value)}
                  className="w-full px-3 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm font-medium text-slate-800 focus:outline-none focus:border-gold-500"
                >
                  {levels.map((lvl) => (
                    <option key={lvl} value={lvl}>
                      Level: {lvl}
                    </option>
                  ))}
                </select>
              </div>

              {/* Reset Filters */}
              <div className="md:col-span-3 flex justify-end">
                <button
                  onClick={() => {
                    setSelectedCategory('All');
                    setSelectedLevel('All');
                    setSearchQuery('');
                  }}
                  className="px-4 py-2.5 text-xs font-semibold text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors w-full md:w-auto"
                >
                  Reset Filters
                </button>
              </div>

            </div>

            {/* Category Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pt-2 pb-1 no-scrollbar">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mr-2 shrink-0">
                Categories:
              </span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                    selectedCategory === cat
                      ? 'bg-navy-950 text-gold-400 shadow-md'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Course Cards Grid */}
        {displayedCourses.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {displayedCourses.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                onSelectCourse={onSelectCourse}
                onEnroll={onEnroll}
              />
            ))}
          </div>
        ) : (
          <div className="bg-white p-12 rounded-2xl border border-slate-200 text-center space-y-3">
            <Filter className="w-10 h-10 text-slate-300 mx-auto" />
            <h3 className="text-lg font-bold text-slate-800">No courses match your filter</h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              Try adjusting your search query or selecting a different category from above.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSelectedLevel('All');
                setSearchQuery('');
              }}
              className="mt-2 px-4 py-2 bg-gold-500 text-navy-950 rounded-xl text-xs font-bold shadow-sm"
            >
              Show All Courses
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
