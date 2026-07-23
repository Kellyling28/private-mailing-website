import { CourseModule, FaqItem } from '../types';

export const COURSE_MODULES: CourseModule[] = [
  {
    id: 'm1',
    number: 1,
    title: 'Foundations of U.S. Postal Jurisprudence & Title 39',
    duration: '2h 15m',
    lessonsCount: 5,
    description: 'Deconstruct Title 39 of the United States Code and understand how historical postal charters establish unique statutory rights for physical correspondence.',
    topics: [
      'Constitutional origin of the Postal Clause (Article I, Section 8)',
      'Distinction between commercial carriers and statutory mail streams',
      'Historical interpretations of non-commercial postal privileges',
      'The foundational legal definitions of non-mailable vs. exempt mail'
    ]
  },
  {
    id: 'm2',
    number: 2,
    title: 'Postage Rate Reduction & Exemption Law',
    duration: '1h 45m',
    lessonsCount: 4,
    description: 'Learn the exact legal mechanics behind reduced postage rates, historical stamp notations, and statutory rules governing low-cost mailing.',
    topics: [
      'Standcall laws and low postage stamp protocols',
      'Proper endorsement and endorsement positioning standards',
      'Historical precedence for non-profit and private mail designations',
      'Step-by-step audit of postal worker training manuals & regulations'
    ]
  },
  {
    id: 'm3',
    number: 3,
    title: 'Private System Setup & Mailbox Sovereignty',
    duration: '2h 30m',
    lessonsCount: 6,
    description: 'How to privatize your personal and business mailing operations to safeguard identity, prevent unlawful search, and secure your mailbox.',
    topics: [
      'Setting up private mail receiving facilities (PMRFs) legally',
      'Establishing legal privacy boundaries on home & office receptacles',
      'Registered & Certified mail handling strategies under private status',
      'Protecting metadata and return address privacy protocols'
    ]
  },
  {
    id: 'm4',
    number: 4,
    title: 'Special Procedures, Dispute Resolution & Case Law',
    duration: '1h 50m',
    lessonsCount: 4,
    description: 'Master practical dispute resolution methods, interacting professionally with postal inspectors, and enforcing statutory rights.',
    topics: [
      'Constructive notice templates and legal correspondence guidelines',
      'Handling held or delayed mail through official administrative remedies',
      'Archived Federal case law reference library & citation index',
      'Cohort implementation checklist & step-by-step action guide'
    ]
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'Is this course legal in the United States?',
    answer: 'Yes, 100%. All strategies taught in Private Mailing Secrets are based strictly on published U.S. Statutes (Title 39 USC), historical Postal Service regulations, and documented Federal court precedent. We educate on existing laws, not illegal workarounds.',
    category: 'Legal'
  },
  {
    question: 'How much can I expect to save on physical mail?',
    answer: 'Depending on your volume and the specific postal classification used (e.g. standard correspondence, educational materials, or private system notices), members report reducing mailing costs significantly, sometimes by up to 80% or utilizing specific low-postage stamp designations permitted under law.',
    category: 'Postal'
  },
  {
    question: 'Who is Private Wealth Academy?',
    answer: 'Private Wealth Academy is a premier educational institution specializing in financial sovereignty, legal history, asset protection, and statutory rights. Our courses translate complex administrative laws into clear, actionable education for individuals and business owners.',
    category: 'Access'
  },
  {
    question: 'When does the current intake begin and how long do I have access?',
    answer: 'Intake 03 is currently accepting a maximum of 50 students to maintain high quality group support. Once enrolled, you receive instant, lifetime access to all course modules, updates, legal templates, and community discussion boards.',
    category: 'Cohort'
  },
  {
    question: 'Do I need a legal background to understand this material?',
    answer: 'No legal background is required. The course is structured progressively in plain English, with step-by-step video tutorials, downloadable template letters, and citation cheatsheets.',
    category: 'Access'
  }
];
