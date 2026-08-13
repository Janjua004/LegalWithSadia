import React, { useState } from 'react';
import { User, ActiveTab, Course, Note } from '../types';
import {
  LayoutDashboard,
  BookOpen,
  FileText,
  Award,
  Calendar,
  MessageSquare,
  User as UserIcon,
  Settings,
  LogOut,
  Download,
  Clock,
  CheckCircle,
  Crown,
  ArrowRight,
  TrendingUp,
  Search,
  Bell
} from 'lucide-react';

interface StudentDashboardProps {
  user: User;
  courses: Course[];
  notes: Note[];
  setActiveTab: (tab: ActiveTab) => void;
  onLogout: () => void;
}

export const StudentDashboard: React.FC<StudentDashboardProps> = ({
  user,
  courses,
  notes,
  setActiveTab,
  onLogout,
}) => {
  const [activeSideNav, setActiveSideNav] = useState<string>('dashboard');

  const sideNavItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'courses', label: 'My Courses', icon: BookOpen },
    { id: 'notes', label: 'My Notes', icon: FileText },
    { id: 'exams', label: 'My Exams', icon: Award },
    { id: 'assignments', label: 'Assignments', icon: Calendar },
    { id: 'messages', label: 'Messages', icon: MessageSquare },
    { id: 'profile', label: 'Profile', icon: UserIcon },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const continueCourses = [
    { title: 'Contract Drafting', progress: 60, lessons: '20 of 32 Lessons', level: 'Intermediate Level', image: courses[0]?.image },
    { title: 'Civil Procedure Code', progress: 30, lessons: '9 of 30 Lessons', level: 'Intermediate Level', image: courses[2]?.image },
    { title: 'Legal Research & Writing', progress: 75, lessons: '15 of 20 Lessons', level: 'Beginner Level', image: courses[1]?.image },
    { title: 'Constitutional Law', progress: 45, lessons: '18 of 40 Lessons', level: 'Advanced Level', image: courses[4]?.image },
  ];

  const deadlines = [
    { title: 'Research Paper – Contract Law', date: 'May 20, 2024', daysLeft: '5 Days Left', color: 'text-amber-600 bg-amber-50' },
    { title: 'Case Summary – Civil Law', date: 'May 25, 2024', daysLeft: '10 Days Left', color: 'text-blue-600 bg-blue-50' },
    { title: 'Internship Report', date: 'May 30, 2024', daysLeft: '15 Days Left', color: 'text-emerald-600 bg-emerald-50' },
    { title: 'Legal Ethics Assignment', date: 'Jun 05, 2024', daysLeft: '21 Days Left', color: 'text-purple-600 bg-purple-50' },
  ];

  return (
    <div className="bg-slate-100 min-h-screen">
      
      {/* Top Dashboard Header Bar */}
      <header className="bg-navy-950 text-white border-b border-slate-800 px-4 sm:px-8 py-3.5 sticky top-0 z-30 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div
            onClick={() => setActiveTab('home')}
            className="flex items-center gap-2 cursor-pointer"
          >
            <div className="w-8 h-8 rounded-lg bg-gold-500 flex items-center justify-center text-navy-950 font-bold font-serif text-sm">
              LS
            </div>
            <span className="font-serif font-bold text-lg hidden sm:inline">Legal with Sadia</span>
          </div>

          <div className="relative hidden md:block w-72">
            <input
              type="text"
              placeholder="Search courses, notes..."
              className="w-full pl-9 pr-3 py-1.5 bg-slate-900 border border-slate-800 rounded-full text-xs text-slate-200 focus:outline-none focus:border-gold-500"
            />
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative">
            <button className="p-2 text-slate-300 hover:text-white relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-red-500 text-white text-[10px] font-bold flex items-center justify-center">
                3
              </span>
            </button>
          </div>

          <div className="flex items-center gap-3 pl-3 border-l border-slate-800">
            <img
              src={user.avatar}
              alt={user.name}
              className="w-9 h-9 rounded-full object-cover border border-gold-500/50"
            />
            <div className="hidden sm:block text-left">
              <div className="text-xs font-bold text-white leading-tight">{user.name}</div>
              <div className="text-[10px] text-gold-400">Law Student</div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        
        {/* Left Dashboard Sidebar */}
        <aside className="w-64 bg-navy-950 text-slate-300 min-h-[calc(100vh-57px)] p-4 border-r border-slate-800 hidden md:flex flex-col justify-between shrink-0">
          <div className="space-y-1">
            {sideNavItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSideNav === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveSideNav(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-xs font-medium transition-all ${
                    isActive
                      ? 'bg-gold-500 text-navy-950 font-extrabold shadow-gold-glow'
                      : 'hover:bg-slate-900 text-slate-300 hover:text-white'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          <div className="space-y-4 pt-6">
            {/* Go Premium Banner */}
            <div className="p-4 rounded-2xl bg-gradient-to-b from-navy-900 to-slate-900 border border-gold-500/30 text-center space-y-2">
              <Crown className="w-8 h-8 text-gold-400 mx-auto" />
              <h4 className="text-xs font-bold text-white font-serif">Go Premium</h4>
              <p className="text-[10px] text-slate-400">Unlock exclusive notes, courses and practice exams.</p>
              <button className="w-full py-2 bg-gold-gradient-bg text-navy-950 rounded-xl text-xs font-bold shadow-sm">
                Upgrade Now
              </button>
            </div>

            <button
              onClick={onLogout}
              className="w-full flex items-center gap-3 px-4 py-2.5 text-xs font-semibold text-slate-400 hover:text-red-400 hover:bg-red-500/10 rounded-xl transition-colors"
            >
              <LogOut className="w-4 h-4" />
              <span>Logout Account</span>
            </button>
          </div>
        </aside>

        {/* Main Dashboard Content */}
        <main className="flex-1 p-4 sm:p-8 space-y-8 overflow-y-auto">
          
          {/* Welcome Banner */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 font-serif">
                Welcome back, {user.name.split(' ')[0]}! 👋
              </h1>
              <p className="text-xs sm:text-sm text-slate-600">
                Track your learning progress and continue your legal education journey.
              </p>
            </div>

            <div className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-slate-700 shadow-sm flex items-center gap-2 self-start sm:self-auto">
              <Calendar className="w-4 h-4 text-gold-600" />
              <span>Wednesday, May 15, 2024</span>
            </div>
          </div>

          {/* Stat Summary Widgets (4 Cards) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { title: 'Enrolled Courses', count: user.enrolledCoursesCount, icon: BookOpen, color: 'text-amber-600 bg-amber-50' },
              { title: 'Completed Lessons', count: user.completedLessons, icon: CheckCircle, color: 'text-emerald-600 bg-emerald-50' },
              { title: 'Notes Downloaded', count: user.notesDownloaded, icon: FileText, color: 'text-blue-600 bg-blue-50' },
              { title: 'Assignments', count: user.assignmentsCount, icon: Calendar, color: 'text-purple-600 bg-purple-50' },
            ].map((widget, i) => {
              const Icon = widget.icon;
              return (
                <div key={i} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-500 font-medium">{widget.title}</span>
                    <div className="text-2xl font-black text-slate-900 mt-1">{widget.count}</div>
                    <button
                      onClick={() => setActiveTab('courses')}
                      className="text-[11px] font-bold text-gold-600 hover:text-gold-700 mt-2 flex items-center gap-1"
                    >
                      <span>View all</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                  <div className={`w-12 h-12 rounded-2xl ${widget.color} flex items-center justify-center`}>
                    <Icon className="w-6 h-6" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Continue Learning & Recent Notes Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left Col: Continue Learning */}
            <div className="lg:col-span-7 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-5">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-slate-900 font-serif">Continue Learning</h3>
                <button
                  onClick={() => setActiveTab('courses')}
                  className="text-xs font-bold text-gold-600 hover:text-gold-700"
                >
                  View All
                </button>
              </div>

              <div className="space-y-4">
                {continueCourses.map((c, idx) => (
                  <div key={idx} className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 flex items-center gap-4">
                    <img
                      src={c.image || 'https://images.unsplash.com/photo-1450133064473-71024230f91b'}
                      alt={c.title}
                      className="w-16 h-16 rounded-lg object-cover border border-slate-300"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h4 className="text-sm font-bold text-slate-900 truncate">{c.title}</h4>
                        <span className="text-xs font-extrabold text-gold-600">{c.progress}%</span>
                      </div>
                      <p className="text-[11px] text-slate-500">{c.level} • {c.lessons}</p>
                      
                      {/* Progress slider bar */}
                      <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden mt-2">
                        <div
                          className="bg-gold-500 h-full rounded-full transition-all duration-500"
                          style={{ width: `${c.progress}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Col: Recent Notes */}
            <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-5">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-slate-900 font-serif">Recent Notes</h3>
                <button
                  onClick={() => setActiveTab('notes')}
                  className="text-xs font-bold text-gold-600 hover:text-gold-700"
                >
                  View All
                </button>
              </div>

              <div className="space-y-3">
                {notes.slice(0, 5).map((n) => (
                  <div key={n.id} className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 flex items-center justify-between">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-9 h-10 rounded-lg bg-red-50 text-red-600 flex items-center justify-center font-bold text-xs shrink-0">
                        PDF
                      </div>
                      <div className="min-w-0">
                        <h5 className="text-xs font-bold text-slate-900 truncate">{n.title}</h5>
                        <p className="text-[10px] text-slate-400">{n.pages} Pages • {n.updatedDate}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => setActiveTab('notes')}
                      className="p-2 text-slate-400 hover:text-gold-600 hover:bg-gold-50 rounded-lg"
                    >
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Upcoming Deadlines & Learning Progress Donut */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            <div className="lg:col-span-6 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <h3 className="text-base font-bold text-slate-900 font-serif">Upcoming Deadlines</h3>
              <div className="space-y-3">
                {deadlines.map((d, i) => (
                  <div key={i} className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between text-xs">
                    <div>
                      <h5 className="font-bold text-slate-900">{d.title}</h5>
                      <span className="text-[11px] text-slate-500">{d.date}</span>
                    </div>
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-extrabold ${d.color}`}>
                      {d.daysLeft}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <h3 className="text-base font-bold text-slate-900 font-serif">Overall Learning Progress</h3>
              <div className="flex flex-col sm:flex-row items-center gap-6 pt-2">
                
                {/* Donut Chart SVG */}
                <div className="relative w-36 h-36 flex items-center justify-center shrink-0">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                    <path
                      className="text-slate-100"
                      strokeWidth="3.8"
                      stroke="currentColor"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                      className="text-gold-500"
                      strokeDasharray="68, 100"
                      strokeWidth="3.8"
                      strokeLinecap="round"
                      stroke="currentColor"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                  </svg>
                  <div className="absolute text-center">
                    <span className="text-2xl font-black text-slate-900">68%</span>
                    <span className="text-[10px] text-slate-400 block font-semibold">Progress</span>
                  </div>
                </div>

                <div className="space-y-2 text-xs w-full">
                  <div className="flex items-center justify-between p-2 rounded-lg bg-emerald-50 text-emerald-800">
                    <span className="font-semibold">Completed Lessons</span>
                    <span className="font-bold">24</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-lg bg-amber-50 text-amber-800">
                    <span className="font-semibold">In Progress</span>
                    <span className="font-bold">16</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-lg bg-slate-100 text-slate-700">
                    <span className="font-semibold">Not Started</span>
                    <span className="font-bold">10</span>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </main>
      </div>

    </div>
  );
};
