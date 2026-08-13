import React, { useState } from 'react';
import { Course, Lesson, ActiveTab } from '../types';
import {
  Play,
  PlayCircle,
  Pause,
  CheckCircle,
  Clock,
  BookOpen,
  Award,
  Star,
  ChevronDown,
  ChevronUp,
  Download,
  Share2,
  Heart,
  ShieldCheck,
  ArrowLeft,
  Volume2
} from 'lucide-react';

interface CourseDetailProps {
  course: Course;
  onEnroll: (course: Course) => void;
  setActiveTab: (tab: ActiveTab) => void;
}

export const CourseDetail: React.FC<CourseDetailProps> = ({
  course,
  onEnroll,
  setActiveTab,
}) => {
  const [activeTab, setActiveDetailTab] = useState<'overview' | 'curriculum' | 'instructor' | 'reviews'>('overview');
  const [currentLesson, setCurrentLesson] = useState<Lesson>(
    course.syllabus[0]?.lessons[0] || {
      id: 'preview',
      title: 'Introduction Lecture',
      duration: '20:15',
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    }
  );
  const [isPlaying, setIsPlaying] = useState(false);
  const [expandedModules, setExpandedModules] = useState<number[]>([0]);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const toggleModule = (idx: number) => {
    if (expandedModules.includes(idx)) {
      setExpandedModules(expandedModules.filter((i) => i !== idx));
    } else {
      setExpandedModules([...expandedModules, idx]);
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      
      {/* Top Header Breadcrumb & Bar */}
      <div className="bg-navy-950 text-white py-6 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <button
              onClick={() => setActiveTab('courses')}
              className="inline-flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-gold-400 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Courses</span>
            </button>
            <div className="text-xs text-slate-400">
              <span>Home</span> &gt; <span>Courses</span> &gt; <span className="text-gold-400">{course.title}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Video Player & Overview Tabs */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Interactive Video Player Viewport */}
            <div className="relative rounded-2xl overflow-hidden bg-navy-950 border-2 border-slate-800 shadow-2xl group">
              {isPlaying && currentLesson.videoUrl ? (
                <video
                  src={currentLesson.videoUrl}
                  controls
                  autoPlay
                  className="w-full h-[260px] sm:h-[400px] object-cover"
                />
              ) : (
                <div className="relative w-full h-[260px] sm:h-[400px]">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-navy-950/60 backdrop-blur-[2px]" />

                  {/* Center Big Play Button */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                    <button
                      onClick={() => setIsPlaying(true)}
                      className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gold-gradient-bg text-navy-950 flex items-center justify-center shadow-gold-glow hover:scale-110 active:scale-95 transition-all duration-300 group-hover:shadow-gold-glow-lg"
                    >
                      <Play className="w-8 h-8 fill-navy-950 translate-x-0.5" />
                    </button>
                    <p className="mt-4 text-xs sm:text-sm font-bold text-white tracking-wide">
                      Click to Watch Lecture Preview
                    </p>
                    <p className="text-[11px] text-gold-400 font-medium mt-1">
                      Current: {currentLesson.title} ({currentLesson.duration})
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Title & Stats */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-gold-50 text-gold-700 border border-gold-400/40">
                  {course.category}
                </span>
                <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                  <Star className="w-4 h-4 fill-amber-400" />
                  <span>{course.rating}</span>
                  <span className="text-slate-400 text-xs font-normal">({course.reviewsCount} Reviews)</span>
                </div>
              </div>

              <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 font-serif">
                {course.title}
              </h1>

              {/* Navigation Tabs (Overview, Curriculum, Instructor, Reviews) */}
              <div className="flex items-center gap-6 border-b border-slate-200 pt-2 text-sm font-semibold">
                {(['overview', 'curriculum', 'instructor', 'reviews'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveDetailTab(tab)}
                    className={`pb-3 capitalize transition-colors ${
                      activeTab === tab
                        ? 'text-gold-600 border-b-2 border-gold-500 font-bold'
                        : 'text-slate-500 hover:text-slate-900'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Tab Contents */}
              {activeTab === 'overview' && (
                <div className="space-y-6 pt-2 text-slate-700 text-sm leading-relaxed">
                  <p>{course.description}</p>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="space-y-1">
                      <span className="text-[11px] text-slate-400 font-semibold block uppercase">Level</span>
                      <span className="font-bold text-slate-900">{course.level}</span>
                    </div>
                    <div className="space-y-1">
                      <span className="text-[11px] text-slate-400 font-semibold block uppercase">Lectures</span>
                      <span className="font-bold text-slate-900">{course.lecturesCount} Modules</span>
                    </div>
                    <div className="space-y-1">
                      <span className="text-[11px] text-slate-400 font-semibold block uppercase">Duration</span>
                      <span className="font-bold text-slate-900">{course.duration}</span>
                    </div>
                    <div className="space-y-1">
                      <span className="text-[11px] text-slate-400 font-semibold block uppercase">Certificate</span>
                      <span className="font-bold text-emerald-600">Included</span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-slate-900 mb-3 font-serif">What You Will Learn</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {course.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs font-medium text-slate-700">
                          <CheckCircle className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'instructor' && (
                <div className="pt-2 flex items-start gap-4">
                  <img
                    src={course.instructor.avatar}
                    alt={course.instructor.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-gold-500/50 shadow-md"
                  />
                  <div>
                    <h3 className="text-base font-bold text-slate-900">{course.instructor.name}</h3>
                    <p className="text-xs text-gold-600 font-semibold">{course.instructor.title}</p>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed max-w-lg">{course.instructor.bio}</p>
                  </div>
                </div>
              )}

              {activeTab === 'reviews' && (
                <div className="pt-2 space-y-4">
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-extrabold text-slate-900">4.9 out of 5</div>
                      <div className="flex items-center text-amber-400 my-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-amber-400" />
                        ))}
                      </div>
                      <div className="text-xs text-slate-500">Based on 210 verified student ratings</div>
                    </div>
                  </div>
                </div>
              )}
            </div>

          </div>

          {/* Right Column: Enrollment Card & Syllabus Accordion */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Enrollment Pricing Card */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-md space-y-5 sticky top-24">
              <div className="flex items-baseline justify-between">
                <div>
                  <span className="text-2xl font-black text-slate-900">PKR {course.price.toLocaleString()}</span>
                  {course.originalPrice && (
                    <span className="text-xs text-slate-400 line-through ml-2">PKR {course.originalPrice.toLocaleString()}</span>
                  )}
                </div>
                <span className="px-2.5 py-1 rounded-md text-[10px] font-extrabold bg-emerald-100 text-emerald-800">
                  40% OFF
                </span>
              </div>

              <button
                onClick={() => onEnroll(course)}
                className="w-full py-3.5 rounded-xl font-extrabold text-navy-950 bg-gold-gradient-bg shadow-gold-glow hover:brightness-110 transition-all flex items-center justify-center gap-2 cursor-pointer text-sm"
              >
                <span>Enroll Now</span>
              </button>

              <button
                onClick={() => setIsWishlisted(!isWishlisted)}
                className={`w-full py-2.5 rounded-xl font-semibold text-xs border transition-all flex items-center justify-center gap-2 ${
                  isWishlisted
                    ? 'border-red-500 text-red-600 bg-red-50'
                    : 'border-slate-300 text-slate-700 hover:bg-slate-50'
                }`}
              >
                <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-red-500 text-red-500' : ''}`} />
                <span>{isWishlisted ? 'Saved to Wishlist' : 'Add to Wishlist'}</span>
              </button>

              <div className="pt-4 border-t border-slate-100 space-y-2 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-gold-600" />
                  <span>Full Lifetime Access</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-gold-600" />
                  <span>Official Certificate of Completion</span>
                </div>
                <div className="flex items-center gap-2">
                  <Download className="w-4 h-4 text-gold-600" />
                  <span>Downloadable Case Notes Included</span>
                </div>
              </div>
            </div>

            {/* Expandable Syllabus Accordion Sidebar */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <h3 className="text-base font-bold text-slate-900 flex items-center justify-between font-serif">
                <span>Course Syllabus</span>
                <span className="text-xs text-slate-500 font-normal">{course.lecturesCount} Lectures</span>
              </h3>

              <div className="space-y-2">
                {course.syllabus.map((mod, modIdx) => {
                  const isExpanded = expandedModules.includes(modIdx);
                  return (
                    <div key={modIdx} className="border border-slate-200 rounded-xl overflow-hidden">
                      <button
                        onClick={() => toggleModule(modIdx)}
                        className="w-full p-3 bg-slate-50 text-left font-bold text-xs text-slate-800 flex items-center justify-between hover:bg-slate-100 transition-colors"
                      >
                        <span className="line-clamp-1">{mod.sectionTitle}</span>
                        {isExpanded ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
                      </button>

                      {isExpanded && (
                        <div className="divide-y divide-slate-100 bg-white">
                          {mod.lessons.map((les) => (
                            <div
                              key={les.id}
                              onClick={() => {
                                setCurrentLesson(les);
                                setIsPlaying(true);
                              }}
                              className={`p-3 text-xs flex items-center justify-between cursor-pointer transition-colors ${
                                currentLesson.id === les.id
                                  ? 'bg-gold-50 font-bold text-gold-700'
                                  : 'hover:bg-slate-50 text-slate-700'
                              }`}
                            >
                              <div className="flex items-center gap-2">
                                <PlayCircle className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                                <span className="line-clamp-1">{les.title}</span>
                              </div>
                              <span className="text-[10px] text-slate-400 font-mono">{les.duration}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
