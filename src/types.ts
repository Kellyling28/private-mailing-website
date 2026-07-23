export interface CourseModule {
  id: string;
  number: number;
  title: string;
  duration: string;
  lessonsCount: number;
  description: string;
  topics: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'Legal' | 'Postal' | 'Access' | 'Cohort';
}

export type ModalType = 'curriculum' | 'faqs' | 'enroll' | null;
