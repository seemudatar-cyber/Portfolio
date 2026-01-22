
import { Project, Skill } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'mras',
    title: 'MRAS: Merchant Risk Assessment',
    description: 'A sophisticated risk evaluation engine for high-throughput merchant onboarding.',
    longDescription: 'The Merchant Risk Assessment System (MRAS) is a comprehensive risk scoring platform designed for payment processors and financial institutions. It evaluates merchant reliability by analyzing business profiles, transaction patterns, and compliance indicators to generate risk scores. The system helps onboarding teams make informed decisions about new merchant applications, flagging potential fraud risks while streamlining approvals for low-risk applicants. Built to handle high-volume processing with real-time scoring capabilities.',
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
    longDescription: 'This AI-powered compliance agent automates the complex B-Notice process required by IRS regulations for backup withholding. When taxpayer identification numbers fail verification, financial institutions must issue B-Notices and apply backup withholding. This tool streamlines that workflow by automating client profiling, tracking notice timelines, calculating withholding requirements, and generating compliant documentation. It reduces manual processing errors and ensures regulatory deadlines are met consistently.',
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
    longDescription: 'A real-time operational dashboard built for executive visibility into financial system health. This workbook consolidates telemetry from multiple payment providers and settlement systems, displaying key performance indicators like transaction success rates, processing latencies, and service availability. It enables leadership to monitor system stability, identify emerging issues before they escalate, and make data-driven decisions about provider relationships and infrastructure investments.',
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
  { name: 'Regulatory Compliance', category: 'tools' },
  { name: 'Enterprise Architecture', category: 'backend' },
  { name: 'Applied AI', category: 'ai' },
  { name: 'Cross-Functional Leadership', category: 'tools' },
];

export const PERSONAL_INFO = {
  name: "Seema Datar",
  role: "Director | Senior Engineering Leader",
  tagline: "Connect | Analyze | Enable",
  bio: "Exceptional software professional encompassing Payments technologies, settlement workflows, and data-driven solutions architecture. I drive business success through strategic relationships and high-integrity engineering.",
  impactSummary: "A curated record of strategic leadership at Microsoft and JPMorgan, specializing in restoring stability to complex systems, optimizing global ETL pipelines, and leading cross-org alignment for multi-rail settlement platforms.",
  location: "Kirkland, WA",
  github: "https://github.com/seemudatar-cyber",
  linkedin: "https://linkedin.com/in/seemadatar",
  email: "seesat@hotmail.com",
  resumeUrl: "#"
};
