export interface Lesson {
  id: string;
  title: string;
  duration: string;
  videoUrl?: string;
  isFreePreview?: boolean;
  completed?: boolean;
}

export interface Course {
  id: string;
  title: string;
  category: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
  lecturesCount: number;
  duration: string;
  price: number; // in PKR
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  image: string;
  description: string;
  syllabus: {
    sectionTitle: string;
    lessons: Lesson[];
  }[];
  instructor: {
    name: string;
    title: string;
    avatar: string;
    bio: string;
    rating: number;
    studentsCount: number;
  };
  highlights: string[];
  featured?: boolean;
}

export interface Note {
  id: string;
  title: string;
  category: 'Civil Law' | 'Criminal Law' | 'Corporate Law' | 'Constitutional Law' | 'Contract Law' | 'Legal Maxims' | 'Other';
  docType: 'Notes' | 'Case Summary' | 'Slides' | 'Checklists' | 'Templates';
  pages: number;
  price: number; // 0 if free
  isFree: boolean;
  fileSize: string;
  rating: number;
  downloadsCount: number;
  previewPages: string[];
  author: string;
  updatedDate: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'student' | 'admin' | 'mentor';
  avatar: string;
  enrolledCoursesCount: number;
  completedLessons: number;
  notesDownloaded: number;
  assignmentsCount: number;
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  summary: string;
  content: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  date: string;
  readTime: string;
  image: string;
  commentsCount: number;
}

export interface Internship {
  id: string;
  title: string;
  firm: string;
  location: string;
  type: 'Remote' | 'On-site' | 'Hybrid';
  duration: string;
  stipend: string;
  deadline: string;
  description: string;
  requirements: string[];
  spotsLeft: number;
}

export type ActiveTab = 'home' | 'courses' | 'notes' | 'internship' | 'blog' | 'about' | 'contact' | 'dashboard' | 'course-detail';
