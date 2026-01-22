
import { Project, Skill } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'mras',
    title: 'MRAS: Merchant Risk Assessment',
    description: 'A sophisticated risk evaluation engine for high-throughput merchant onboarding.',
    longDescription: 'The Merchant Risk Assessment System (MRAS) leverages data-driven insights to score merchant reliability. Built with a focus on compliance and fraud prevention, it demonstrates my ability to architect scalable solutions for complex financial risk domains.',
    tags: ['Risk Analysis', 'Payments', 'Security', 'Architecture'],
    githubUrl: 'https://github.com/seemudatar-cyber',
    liveUrl: 'https://merchant-risk-score.replit.app/',
    imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800',
    stats: { stars: 12, forks: 4 }
  },
  {
    id: 'b-notice',
    title: 'B-Notice Compliance Agent',
    description: 'AI-driven compliance automation for complex tax and regulatory workflows.',
    longDescription: 'A direct-tax initiative enabling automated backup withholding and reporting. This agent integrates client profiling and financial reconciliation to streamline B-Notice compliance, reducing manual error rates by architecting scalable data-driven tax logic.',
    tags: ['Compliance', 'AI Agent', 'Tax Logic', 'Automation'],
    githubUrl: 'https://github.com/seemudatar-cyber',
    liveUrl: 'https://b-notice-compliance.replit.app',
    imageUrl: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800',
    stats: { stars: 8, forks: 2 }
  },
  {
    id: 'finance-metrics',
    title: 'Finance Metrics Dashboard',
    description: 'High-visibility operational workbook for real-time telemetry and monitoring.',
    longDescription: 'An Azure-powered monitoring workbook providing real-time operational visibility. It supports executive-level decision-making through data-driven insights into provider performance, financial reliability, and service health.',
    tags: ['Telemetry', 'Azure', 'Analytics', 'Dashboards'],
    githubUrl: 'https://github.com/seemudatar-cyber',
    liveUrl: 'https://financemetrics.lovable.app',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    stats: { stars: 15, forks: 5 }
  }
];

export const SKILLS: Skill[] = [
  { name: 'Payments & Settlements', category: 'backend' },
  { name: 'Financial Reconciliation', category: 'backend' },
  { name: 'Data Analysis & Telemetry', category: 'ai' },
  { name: 'Azure Technologies', category: 'tools' },
  { name: 'Compliance & Risk (SOX)', category: 'tools' },
  { name: 'Enterprise Architecture', category: 'backend' },
  { name: 'Machine Learning Apps', category: 'ai' },
  { name: 'Cross-Functional Leadership', category: 'tools' },
];

export const PERSONAL_INFO = {
  name: "Seema Datar",
  role: "Director | Senior Engineering Leader",
  tagline: "Connect | Analyze | Enable",
  bio: "Exceptional software professional with 23 years of experience encompassing Payments technologies, settlement workflows, and data-driven solutions architecture. I drive business success through strategic relationships and high-integrity engineering.",
  impactSummary: "A curated record of strategic leadership at Microsoft and JPMorgan, specializing in restoring stability to complex systems, optimizing global ETL pipelines, and leading cross-org alignment for multi-rail settlement platforms.",
  location: "Kirkland, WA",
  github: "https://github.com/seemudatar-cyber",
  linkedin: "https://linkedin.com/in/seemadatar",
  email: "seesat@hotmail.com",
  resumeUrl: "#"
};
