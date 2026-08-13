import { Course, Note, BlogPost, Internship, User } from '../types';

export const INSTRUCTOR_SADIA = {
  name: 'Adv. Sadia Hammad',
  title: 'Advocate High Court & Legal Education Consultant',
  avatar: '/images/hero_exact_advocate.png',
  bio: 'Practicing lawyer with 10+ years of experience in corporate law, constitutional litigation, and court advocacy. Mentor to over 5,000+ law students and young advocates across Pakistan.',
  rating: 4.9,
  studentsCount: 5200,
};

export const MOCK_USER: User = {
  id: 'usr_123',
  name: 'Sana A. Malik',
  email: 'sana.student@law.edu.pk',
  role: 'student',
  avatar: '/images/instructor_sadia_1786525755534.jpg',
  enrolledCoursesCount: 8,
  completedLessons: 24,
  notesDownloaded: 12,
  assignmentsCount: 2,
};

export const COURSES: Course[] = [
  {
    id: 'contract-drafting',
    title: 'Contract Drafting Masterclass',
    category: 'Contract Law',
    level: 'Intermediate',
    lecturesCount: 7,
    duration: '3h 25m',
    price: 2000,
    originalPrice: 3500,
    rating: 4.9,
    reviewsCount: 210,
    image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800',
    description: 'Learn the art of professional contract drafting with practical real-world examples and step-by-step guidance. Covers essential elements of valid agreements, boilerplate clauses, breach remedies, and risk mitigation.',
    highlights: [
      'Essentials of a valid enforceable contract',
      'Consideration and capacity in commercial law',
      'Drafting indemnities, warranties & confidentiality clauses',
      'Common drafting mistakes and how to avoid them',
      'Practical drafting exercises with live instructor review'
    ],
    instructor: INSTRUCTOR_SADIA,
    featured: true,
    syllabus: [
      {
        sectionTitle: 'Module 1: Foundations of Contract Law',
        lessons: [
          { id: 'cd-1', title: 'Introduction to Contract Drafting', duration: '20:15', isFreePreview: true, videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' },
          { id: 'cd-2', title: 'Essentials of a Valid Contract under 1872 Act', duration: '25:30', isFreePreview: false },
          { id: 'cd-3', title: 'Offer, Acceptance, and Consideration', duration: '18:45', isFreePreview: false }
        ]
      },
      {
        sectionTitle: 'Module 2: Practical Clause Construction',
        lessons: [
          { id: 'cd-4', title: 'Consideration & Capacity to Contract', duration: '22:10', isFreePreview: false },
          { id: 'cd-5', title: 'Drafting Different Clauses (NDAs, MOUs & Service Agreements)', duration: '30:25', isFreePreview: false },
          { id: 'cd-6', title: 'Common Mistakes in Commercial Drafting', duration: '19:40', isFreePreview: false },
          { id: 'cd-7', title: 'Practical Drafting Exercise & Case Analysis', duration: '30:00', isFreePreview: false }
        ]
      }
    ]
  },
  {
    id: 'legal-research-writing',
    title: 'Legal Research & Writing',
    category: 'Legal Skills',
    level: 'Beginner',
    lecturesCount: 8,
    duration: '4h 10m',
    price: 2500,
    originalPrice: 4000,
    rating: 4.8,
    reviewsCount: 175,
    image: '/images/course_legal_research_1786525683149.jpg',
    description: 'Master legal citations, case law research methodologies on Pakistan Law Decisions (PLD), SCMR, CLC, and draft compelling written arguments for courts.',
    highlights: [
      'Navigating law journals and digital legal databases',
      'IRAC framework (Issue, Rule, Application, Conclusion)',
      'Drafting written statements, plaints, and petitions',
      'Effective citation techniques and legal reasoning'
    ],
    instructor: INSTRUCTOR_SADIA,
    featured: true,
    syllabus: [
      {
        sectionTitle: 'Module 1: Research Methodology',
        lessons: [
          { id: 'lr-1', title: 'Introduction to Law Reports & Legal Databases', duration: '24:00', isFreePreview: true, videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4' },
          { id: 'lr-2', title: 'The IRAC Method of Legal Synthesis', duration: '31:15', isFreePreview: false },
          { id: 'lr-3', title: 'Finding Precedents & Ratio Decidendi', duration: '28:10', isFreePreview: false }
        ]
      }
    ]
  },
  {
    id: 'civil-procedure-code',
    title: 'Civil Procedure Code (CPC 1908)',
    category: 'Civil Law',
    level: 'Intermediate',
    lecturesCount: 9,
    duration: '5h 45m',
    price: 3000,
    originalPrice: 4500,
    rating: 4.9,
    reviewsCount: 310,
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800',
    description: 'A comprehensive step-by-step guide to the Code of Civil Procedure 1908. Understand jurisdiction, pleadings, trial procedures, temporary injunctions, and execution of decrees.',
    highlights: [
      'Res Judicata and Res Sub-Judice explained',
      'Order VI, VII & VIII - Plaint & Written Statement',
      'Order XXXIX Rules 1 & 2 Injunction Applications',
      'Appellate procedure, Revisions & Reviews'
    ],
    instructor: INSTRUCTOR_SADIA,
    featured: true,
    syllabus: [
      {
        sectionTitle: 'Module 1: Civil Court Jurisdiction & Suits',
        lessons: [
          { id: 'cpc-1', title: 'Pecuniary & Territorial Jurisdiction', duration: '28:15', isFreePreview: true },
          { id: 'cpc-2', title: 'Res Judicata (Section 11)', duration: '35:00', isFreePreview: false }
        ]
      }
    ]
  },
  {
    id: 'criminal-procedure-code',
    title: 'Criminal Procedure Code (CrPC 1898)',
    category: 'Criminal Law',
    level: 'Intermediate',
    lecturesCount: 10,
    duration: '6h 20m',
    price: 3000,
    originalPrice: 5000,
    rating: 4.9,
    reviewsCount: 290,
    image: 'https://images.unsplash.com/photo-1589994965851-a8f479c573a9?auto=format&fit=crop&q=80&w=800',
    description: 'In-depth analysis of criminal trial stages, FIR registration under Section 154, bail applications (pre-arrest & post-arrest), investigation, and cross-examination strategies.',
    highlights: [
      'FIR registration procedure & Remedies',
      'Section 497/498 Pre-arrest and Post-arrest Bail',
      'Framing of Charges & Recording Evidence',
      'Appellate Remedies before High Court'
    ],
    instructor: INSTRUCTOR_SADIA,
    featured: true,
    syllabus: [
      {
        sectionTitle: 'Module 1: Criminal Investigation & Arrest',
        lessons: [
          { id: 'cr-1', title: 'Registration of FIR & Police Powers', duration: '32:00', isFreePreview: true }
        ]
      }
    ]
  },
  {
    id: 'constitutional-law',
    title: 'Introduction to Constitutional Law',
    category: 'Constitutional Law',
    level: 'Beginner',
    lecturesCount: 8,
    duration: '4h 30m',
    price: 2500,
    originalPrice: 4000,
    rating: 4.8,
    reviewsCount: 140,
    image: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=800',
    description: 'Fundamental rights, writ jurisdiction under Article 199, separation of powers, and landmark constitutional judgments that shaped Pakistan jurisprudence.',
    highlights: [
      'Articles 8-28 Fundamental Rights deep dive',
      'Writ Jurisdiction: Habeas Corpus, Mandamus, Certiorari',
      'Supreme Court Suo Motu Jurisdiction under Article 184(3)'
    ],
    instructor: INSTRUCTOR_SADIA,
    featured: false,
    syllabus: []
  },
  {
    id: 'legal-ethics',
    title: 'Legal Ethics & Professionalism',
    category: 'Legal Skills',
    level: 'Beginner',
    lecturesCount: 6,
    duration: '3h 00m',
    price: 1500,
    originalPrice: 2500,
    rating: 5.0,
    reviewsCount: 95,
    image: 'https://images.unsplash.com/photo-1436450412740-6b988f486c6b?auto=format&fit=crop&q=80&w=800',
    description: 'Canons of professional conduct, advocate-client relationship, court decorum, duty to bench and bar, and ethics in legal practice.',
    highlights: [
      'Bar Council Canons of Professional Conduct',
      'Confidentiality & Conflict of Interest',
      'Court etiquette and decorum'
    ],
    instructor: INSTRUCTOR_SADIA,
    featured: false,
    syllabus: []
  }
];

export const NOTES: Note[] = [
  {
    id: 'note-1',
    title: 'Contract Act 1872 – Complete Notes',
    category: 'Contract Law',
    docType: 'Notes',
    pages: 46,
    price: 0,
    isFree: true,
    fileSize: '4.2 MB',
    rating: 4.9,
    downloadsCount: 1420,
    author: 'Adv. Sadia Hammad',
    updatedDate: 'May 10, 2024',
    previewPages: ['Page 1: Essentials of Contract', 'Page 2: Offer & Acceptance Rules', 'Page 3: Consideration Cases']
  },
  {
    id: 'note-2',
    title: 'Civil Procedure Code – Case Law Summary',
    category: 'Civil Law',
    docType: 'Case Summary',
    pages: 32,
    price: 300,
    isFree: false,
    fileSize: '3.1 MB',
    rating: 4.8,
    downloadsCount: 890,
    author: 'Adv. Sadia Hammad',
    updatedDate: 'May 8, 2024',
    previewPages: ['Page 1: Landmark Res Judicata Cases', 'Page 2: Temporary Injunction Rulings']
  },
  {
    id: 'note-3',
    title: 'Legal Maxims with Examples & Case Citations',
    category: 'Legal Maxims',
    docType: 'Notes',
    pages: 12,
    price: 0,
    isFree: true,
    fileSize: '1.5 MB',
    rating: 5.0,
    downloadsCount: 2150,
    author: 'Adv. Sadia Hammad',
    updatedDate: 'May 6, 2024',
    previewPages: ['Page 1: Audi Alteram Partem', 'Page 2: Damnum Sine Injuria']
  },
  {
    id: 'note-4',
    title: 'Criminal Procedure Code – Trial Checklists',
    category: 'Criminal Law',
    docType: 'Checklists',
    pages: 40,
    price: 300,
    isFree: false,
    fileSize: '5.0 MB',
    rating: 4.9,
    downloadsCount: 670,
    author: 'Adv. Sadia Hammad',
    updatedDate: 'May 2, 2024',
    previewPages: ['Bail Draft Checklist', 'Cross-Examination Points']
  },
  {
    id: 'note-5',
    title: 'Law of Torts – Quick Revision Notes',
    category: 'Civil Law',
    docType: 'Notes',
    pages: 28,
    price: 250,
    isFree: false,
    fileSize: '2.8 MB',
    rating: 4.7,
    downloadsCount: 540,
    author: 'Adv. Sadia Hammad',
    updatedDate: 'May 5, 2024',
    previewPages: ['Negligence Elements', 'Strict Liability Exceptions']
  },
  {
    id: 'note-6',
    title: 'Constitutional Law – Important Articles & Writs',
    category: 'Constitutional Law',
    docType: 'Slides',
    pages: 36,
    price: 0,
    isFree: true,
    fileSize: '3.9 MB',
    rating: 4.9,
    downloadsCount: 1890,
    author: 'Adv. Sadia Hammad',
    updatedDate: 'May 3, 2024',
    previewPages: ['Article 199 Breakdown', 'Fundamental Rights Summary']
  },
  {
    id: 'note-7',
    title: 'Company Law Fundamentals & Secretarial Compliance',
    category: 'Corporate Law',
    docType: 'Templates',
    pages: 30,
    price: 300,
    isFree: false,
    fileSize: '3.4 MB',
    rating: 4.8,
    downloadsCount: 430,
    author: 'Adv. Sadia Hammad',
    updatedDate: 'Apr 28, 2024',
    previewPages: ['Board Resolutions Template', 'Incorporation Checklist']
  },
  {
    id: 'note-8',
    title: 'Legal Ethics & Professionalism Notes',
    category: 'Legal Maxims',
    docType: 'Notes',
    pages: 18,
    price: 0,
    isFree: true,
    fileSize: '1.9 MB',
    rating: 4.8,
    downloadsCount: 1100,
    author: 'Adv. Sadia Hammad',
    updatedDate: 'Apr 25, 2024',
    previewPages: ['Duties to Court & Client']
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'blog-1',
    title: 'How to Start Your Legal Career as an Intern',
    category: 'CAREER GUIDE',
    summary: 'Internships are the vital first steps towards a successful legal career. Here is how you can make the absolute most of your law firm placement and court exposure...',
    content: `Building a successful legal career requires a solid foundation built during your law school years. Pursuing internships at reputed law chambers, corporate firms, and constitutional litigation practice groups gives law students practical exposure that textbook learning alone cannot match.

### Key Strategies for Law Interns:
1. **Master Legal Research Methods**: Familiarize yourself with SCMR, PLD, PTD, and PCrLJ reporters.
2. **Observe Courtroom Etiquette**: Arrive early at High Court & District Courts to observe senior counsel arguments.
3. **Take Detailed Case Notes**: Keep a daily journal of case numbers, judge questions, and effective cross-examination techniques.`,
    author: {
      name: 'Adv. Sadia Hammad',
      role: 'Founding Law Mentor',
      avatar: '/images/instructor_sadia_1786525755534.jpg'
    },
    date: 'May 10, 2024',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=800',
    commentsCount: 14
  },
  {
    id: 'blog-2',
    title: 'Important Supreme Court Judgments in 2024',
    category: 'LEGAL INSIGHTS',
    summary: 'A summary of landmark judgments delivered by the Supreme Court of Pakistan in 2024 regarding constitutional rights, arbitration, and commercial law...',
    content: `The judicial year 2024 has witnessed several historic rulings from the apex court. From defining scope of fundamental rights under Article 10A to clarifying arbitration enforcement mechanisms under international conventions.`,
    author: {
      name: 'Ahmed Raza',
      role: 'Senior Associate Advocate',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200'
    },
    date: 'May 5, 2024',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800',
    commentsCount: 28
  },
  {
    id: 'blog-3',
    title: 'Tips for Legal Research and Writing',
    category: 'STUDY TIPS',
    summary: 'Effective legal research and writing are essential skills for every law student. Here are practical tips to sharpen your brief writing...',
    content: `Precision, clarity, and brevity are the hallmarks of great legal writing. Learn how to structure plaints, written statements, and appellate grounds using the IRAC method.`,
    author: {
      name: 'Sarah Khan',
      role: 'Law Research Fellow',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200'
    },
    date: 'April 28, 2024',
    readTime: '4 min read',
    image: '/images/course_legal_research_1786525683149.jpg',
    commentsCount: 9
  }
];

export const INTERNSHIPS: Internship[] = [
  {
    id: 'int-1',
    title: 'High Court Litigation & Appellate Internship',
    firm: 'Sadia Hammad & Associates Law Chambers',
    location: 'Lahore / Islamabad',
    type: 'Hybrid',
    duration: '8 Weeks',
    stipend: 'PKR 15,000 / month',
    deadline: 'June 30, 2024',
    description: 'Work directly alongside High Court advocates on civil petitions, writ petitions, and corporate arbitration matters. Includes court drafting experience and legal research mentorship.',
    requirements: [
      'Enrolled LL.B student (3rd year or final year) / LL.M graduate',
      'Strong proficiency in legal research and English legal drafting',
      'Commitment of 20 hours per week'
    ],
    spotsLeft: 4
  },
  {
    id: 'int-2',
    title: 'Corporate & Contract Drafting Research Fellowship',
    firm: 'Legal with Sadia EdTech Division',
    location: 'Remote',
    type: 'Remote',
    duration: '12 Weeks',
    stipend: 'PKR 20,000 / month',
    deadline: 'July 15, 2024',
    description: 'Participate in drafting legal notes, case law summaries, commercial contract templates, and curriculum development under expert mentorship.',
    requirements: [
      'Demonstrated interest in commercial law & legal research',
      'Excellent academic track record in contract and corporate law'
    ],
    spotsLeft: 6
  }
];
