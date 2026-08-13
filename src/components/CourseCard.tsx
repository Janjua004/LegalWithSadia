import React from 'react';
import { BookOpen, Star, PlayCircle, ShieldCheck } from 'lucide-react';
import { Course } from '../types';

interface CourseCardProps {
  course: Course;
  onSelectCourse: (course: Course) => void;
  onEnroll: (course: Course) => void;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course, onSelectCourse, onEnroll }) => {
  return (
    <div
      onClick={() => onSelectCourse(course)}
      className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col group cursor-pointer"
    >
      {/* Thumbnail & Badges */}
      <div className="relative h-48 w-full overflow-hidden bg-slate-900">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
          <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-navy-950/80 text-gold-400 backdrop-blur-md border border-gold-500/30">
            {course.category}
          </span>
          <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-500/90 text-white backdrop-blur-md">
            {course.level}
          </span>
        </div>

        {/* Floating Play Icon on Hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="w-12 h-12 rounded-full bg-gold-500 text-navy-950 flex items-center justify-center shadow-gold-glow scale-90 group-hover:scale-100 transition-transform">
            <PlayCircle className="w-7 h-7 fill-navy-950 text-gold-500" />
          </div>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-4 text-xs text-slate-500 mb-2">
            <span className="flex items-center gap-1">
              <BookOpen className="w-3.5 h-3.5 text-gold-600" />
              {course.lecturesCount} Lectures
            </span>
            <span>•</span>
            <span className="flex items-center gap-1 font-medium text-amber-600">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
              {course.rating} ({course.reviewsCount})
            </span>
          </div>

          <h3 className="text-base font-bold text-slate-900 group-hover:text-gold-600 transition-colors line-clamp-2 mb-2 font-serif">
            {course.title}
          </h3>

          <p className="text-xs text-slate-600 line-clamp-2 mb-4 leading-relaxed">
            {course.description}
          </p>
        </div>

        {/* Card Footer: Instructor & Price */}
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between mt-auto">
          <div className="flex items-center gap-2">
            <img
              src={course.instructor.avatar}
              alt={course.instructor.name}
              className="w-7 h-7 rounded-full object-cover border border-gold-500/40"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/images/instructor_sadia_1786525755534.jpg';
              }}
            />
            <span className="text-xs font-semibold text-slate-700">
              {course.instructor.name}
            </span>
          </div>

          <div className="text-right">
            <div className="text-sm font-extrabold text-slate-900">
              PKR {course.price.toLocaleString()}
            </div>
            {course.originalPrice && (
              <div className="text-[10px] text-slate-400 line-through">
                PKR {course.originalPrice.toLocaleString()}
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
