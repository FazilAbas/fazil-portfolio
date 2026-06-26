import { Experience, Education, SkillCategory, ProductHighlight, BuiltProduct } from "./types";

export const PERSONAL_INFO = {
  name: "Fazil A",
  title: "Associate Product Manager",
  subtitle: "Finance, Product Management & AI",
  headline: "Associate Product Manager — Finance, Product Management, AI | Ex-Zomato, VMock | SRCC Alum",
  email: "fazilabbaz@gmail.com",
  phone: "8075833967",
  linkedin: "https://www.linkedin.com/in/fazilabaz/",
  github: "https://github.com",
  tradingExperience: "5+ Years Trading",
  yearsOfExp: "4.5+ Years PM Exp",
  aboutQuote: "Moving towards 'being necessary' and expressing intention through my craft.",
  about: [
    "I am an Associate Product Manager at Pinaca Technologies, where I lead cross-functional teams to build advanced AI-powered data fusion, intelligence, and compliance platforms for BFSI and Law Enforcement Agencies.",
    "Prior to this, I served as a Product Business Analyst at VMock, driving product strategy and custom SaaS features for elite global academic institutions across four continents. At Zomato, I streamlined payment processes, monetary settlements, and optimized third-party logistics.",
    "My corporate experience is complemented by co-founding Facenote Learning (an EdTech bite-sized education startup), alongside over 5 years of active personal stock trading. Graduating in Commerce (Hons) with Finance & Economics majors from Shri Ram College of Commerce (SRCC), I am deeply passionate about deploying modern technical and AI tools to create high-leverage software products."
  ],
  footerText: "© 2026 Fazil A | All Rights Reserved.",
};

export const EXPERIENCES: Experience[] = [
  {
    id: "pinaca",
    role: "Associate Product Manager (APM) – AI Data & Financial Intelligence Platform",
    company: "PINACA TECHNOLOGIES",
    logoText: "PT",
    period: "July 2024 - Present",
    location: "Chennai, India",
    tags: ["FinTech", "Cybersecurity", "AI & ML", "Surveillance"],
    description: "Building AI-Enabled financial surveillance and intelligence platforms for BFSI and Law Enforcement Agencies.",
    points: [
      "Led a 20-member cross-functional team to deliver an AI-powered Data Fusion & Decision platform to solve fragmented investigations across BFSI and Law Enforcement Agencies (ED, ATS, ITD, NIA, IB etc.), enabling 25+ deployments, 50+ POCs, 100+ demos, and influencing ₹300Cr+ deal pipeline.",
      "Owned end-to-end productization of ML-driven workflows integrating Bank Statement Analyzer, Communication Intelligence (CDR/IPDR), Multimedia Analysis (image/audio/video), Digital Forensic Analyzer, OSINT, and AI Chatbot modules.",
      "Conceptualised and launched a Fraud Risk Management & Transaction Monitoring System to address AML/CFT gaps in mid-sized banks, unlocking ₹50L-1 Cr platform revenue across 5 banking clients.",
      "Directed a 40-member team to scale an External Digital Risk Protection & Fraud Threat Intelligence suite to combat brand abuse and digital threats, driving adoption across 30+ enterprises and generating ₹6–15 Cr ARR.",
      "Defined product strategy and roadmap for AI-powered modules by leveraging customer research, product analytics, and stakeholder inputs; translated requirements into PRDs, user stories, and prioritized backlogs."
    ]
  },
  {
    id: "vmock",
    role: "Business Analyst (Product) – AI Powered Career Platform",
    company: "VMOCK",
    logoText: "VM",
    period: "July 2022 - May 2024",
    location: "Gurgaon, India",
    tags: ["B2C SaaS", "AI Analytics", "Product Customization"],
    description: "Spearheaded product customization, user insights, and strategy for global career acceleration platform.",
    points: [
      "Spearheaded product customization and strategy, resolving 20% of total client requests and achieving the highest number of product launches (21%) in a team of 7, driving significant market expansion across 4 continents.",
      "Managed and scaled the highest number of clients (33% of total clientele) fostering trust and satisfaction in complex client relationships.",
      "Analysed 100+ product features/metrics to identify user pain points and derived insights on product friction/client churns, collaborating with 5+ internal teams to resolve issues, resulting in enhanced UX.",
      "Trained and mentored 4 Business Analysts, 1 Client Success Manager, and 3 Client Success Analysts, demonstrating functional product knowledge and leadership."
    ]
  },
  {
    id: "zomato",
    role: "Associate (CDT - Process & Customer Experience)",
    company: "ZOMATO",
    logoText: "ZO",
    period: "Sep. 2021 - July 2022",
    location: "Gurgaon, India",
    tags: ["Operations", "Payments", "Logistics"],
    description: "Managed high-throughput payment resolution and partner compliance at Zomato.",
    points: [
      "Streamlined payment process, monetary settlements and refunds amounting to ₹5 Crores+ to related parties - suppliers, customers and third-party service providers including delivery and payment partners.",
      "Performed root cause analysis and resolved vendor and customer escalations, payment disputes (chargebacks) and invoices/reports of multiple stakeholders.",
      "Responsible for 3PL Project: Scrutinized 1400+ unfulfilled orders worth ₹2.75L+ assigned to third-party logistics team over a span of 5 weeks.",
      "Identified breakpoints in order delivery, suggested improvements to overhaul logistics team performance and brought down unfulfilled orders rate below 0.3."
    ]
  },
  {
    id: "facenote",
    role: "Co-Founder (E-Learning Platform)",
    company: "FACENOTE LEARNING",
    logoText: "FL",
    period: "June 2021 - Aug. 2021",
    location: "Kochi, India",
    tags: ["0→1 Startup", "EdTech", "Marketing"],
    description: "Co-founded a bite-sized mobile learning platform to help students master concepts.",
    points: [
      "Synthesized end-to-end product-market launch including finance and budget functions, product development, marketing and sales-channel verticals.",
      "Autonomously hired and managed a team of 20 (teachers and academic content creators) and delivered output with 35% savings in time.",
      "Conducted market research and survey on target customers; ideated top-down marketing strategies as well as GTM strategy and executed market testing of product."
    ]
  },
  {
    id: "eplatform",
    role: "Analyst Intern (Risk Management)",
    company: "EPLATFORM TECH",
    logoText: "EP",
    period: "May 2021",
    location: "Gurgaon, India",
    tags: ["Compliance", "Risk Management", "KYC"],
    description: "Performed compliance auditing, electronic data review, and KYC risk management.",
    points: [
      "Performed auditing compliance risk analysis using TPM Software, data review and analysis to obtain key insights and managed customer/vendor electronic data.",
      "Scrutinized compliance data as per regulatory requirements of over 1000 customers and vendors, ensuring KYC compliance and communicating with Client (PHILIPS, India)."
    ]
  },
  {
    id: "traveltrivia",
    role: "Content Writer Intern (Product Marketing)",
    company: "TRAVEL TRIVIA (A.A.S. Flight Solutions)",
    logoText: "TT",
    period: "Jan. 2018 - Feb. 2019",
    location: "Gurgaon, India",
    tags: ["Content", "Marketing", "GTM"],
    description: "Produced high-quality tourism and marketing content to boost engagement.",
    points: [
      "Wrote 50+ 1200-word pieces of product marketing (tourism package) content; edited and optimized itineraries for tourist destinations."
    ]
  }
];

export const EDUCATION_LIST: Education[] = [
  {
    id: "cfa",
    institution: "CFA Institute, USA",
    degree: "Chartered Financial Analyst (CFA Level 1)",
    period: "May 2026 - Present",
    location: "USA / Online",
    majors: "Finance, Quantitative Analysis & Portfolio Management",
    achievements: [
      "Coursework: Equity, Fixed Income, Derivatives, Alternative Investments, Portfolio Management, Financial Statement Analysis, Economics, and Quantitative Methods."
    ]
  },
  {
    id: "srcc",
    institution: "Shri Ram College of Commerce (SRCC), University of Delhi",
    degree: "Bachelor's in Commerce Hons. (B. Com Hons.)",
    period: "July 2018 - June 2021",
    location: "New Delhi, India",
    majors: "Majors in Finance and Economics",
    achievements: [
      "Graduated with a stellar CGPA grade of 8.18 / 10.00.",
      "Core coursework includes: Advanced Accounting, Auditing, Income Tax/GST, Marketing, Economics, Financial Reporting & Analysis, and Financial Management.",
      "Event Coordinator | Wings of Fire, SRCC (July 2019 - May 2020): Led a team of 75+ students to execute CA Confluence 2020 involving 1200+ participants, Adhyetha (Research Paper Competition), and Caso De Competetencia (Case Study Competition) with 400+ participants across India.",
      "Finalist of GENESIS (Business Plan Competition) conducted by The Commerce Society, SRCC & IIT Delhi.",
      "Finalist of SOCIO BEE 5.0, SAMARPAN (Business Plan Competition) conducted by National Service Scheme (NSS), SRCC."
    ]
  },
  {
    id: "ca-foundation",
    institution: "Institute of Chartered Accountants of India (ICAI)",
    degree: "Chartered Accountancy: Foundation Level Exam",
    period: "August 2018",
    location: "India",
    majors: "Accounting & Auditing Fundamentals",
    achievements: ["Successfully completed the foundational level examination of Chartered Accountancy (CA) course."]
  },
  {
    id: "higher-secondary",
    institution: "ASMM Higher Secondary School",
    degree: "Higher Secondary Examination",
    period: "May 2018",
    location: "Kerala, India",
    majors: "Commerce stream",
    achievements: ["Graduated with an outstanding CGPA of 10.00 / 10.00."]
  },
  {
    id: "secondary",
    institution: "Vasavi Vidyalaya",
    degree: "Secondary School Examination (CBSE)",
    period: "May 2016",
    location: "Kerala, India",
    majors: "General Studies",
    achievements: ["Graduated with a CGPA of 9.40 / 10.00."]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "ai-product",
    name: "AI & Product Strategy",
    iconName: "Briefcase",
    skills: [
      "Prompt Engineering",
      "LLM Evaluation",
      "AI-assisted Prototyping",
      "Market Research",
      "Product Strategy (Vision, PRD, Roadmap)",
      "Product Development",
      "Stakeholder Management",
      "GTM Strategy",
      "Performance Monitoring"
    ]
  },
  {
    id: "finance",
    name: "Financial Expertise",
    iconName: "TrendingUp",
    skills: [
          "Financial Modeling & Valuation",
          "Equity Research",
          "Investor Presentation",
          "Bloomberg Terminal",
          "E-Filing & ITR",
          "Tally ERP",
          "Accounting & Auditing",
          "Alternative Investments",
          "Portfolio Management"
    ]
  },
  {
    id: "tech-skills",
    name: "Technical & Systems",
    iconName: "ShieldAlert",
    skills: [
      "Advanced Excel",
      "Power BI",
      "Mixpanel",
      "CleverTap",
      "Python",
      "SQL Data Querying",
      "R Programming",
      "Data Analytics",
      "Wireframing (Whimsical, Figma, Balsamiq)",
      "JIRA",
      "Notion"
    ]
  }
];

export const PRODUCT_HIGHLIGHTS: ProductHighlight[] = [
  {
    id: "bfsi-intelligence",
    title: "AI-Powered Data Fusion & Surveillance Platform",
    companyRef: "PINACA TECHNOLOGIES",
    description: "Led development of cognitive search indices and activity-audit dashboards, allowing security analysts to query bank-wide transactions and flag anomalies.",
    impactMetrics: [
      "Enabled 25+ deployments, 50+ POCs, and 100+ demos",
      "Influenced a substantial ₹300Cr+ deal pipeline"
    ],
    skillsApplied: ["AI Search Engines", "Enterprise Security Design", "UAT Sprints", "Wireframing"]
  },
  {
    id: "career-acceleration",
    title: "AI-Powered Career Platform customizations",
    companyRef: "VMOCK",
    description: "Re-engineered configuration frameworks for Ivy League client setups, transforming resume-feedback delivery into a self-serve platform.",
    impactMetrics: [
      "Spearheaded custom releases across 4 continents representing 21% of launches",
      "Directly managed & retained 33% of core platform clientele"
    ],
    skillsApplied: ["Core Resume-AI feedback setups", "Enterprise customizations", "Client Relationship Management"]
  },
  {
    id: "zomato-payment",
    title: "High-Throughput Payout & Logistics Resolution Flow",
    companyRef: "ZOMATO",
    description: "Designed a streamlined process linking ops feedback directly with internal tools to diagnose payment failures and manage unfulfilled orders.",
    impactMetrics: [
      "Managed settlements & refunds exceeding ₹5 Crores+",
      "Slashed unfulfilled orders rate below 0.3 for third-party logistics (3PL)"
    ],
    skillsApplied: ["Payment Operations", "Root Cause Analysis", "Logistics Metrics"]
  }
];

export const BUILT_PRODUCTS: BuiltProduct[] = [
  {
    id: "investigation-data-fusion",
    name: "AI-Powered Investigation & Data Fusion Platform",
    category: "Big Data | AI | Intelligence Platform",
    description: "Unified intelligence platform enabling Law Enforcement Agencies to ingest, analyze, and correlate multi-modal data including telecom records, bank statements, documents, multimedia, OSINT, and forensic evidence into actionable investigative insights, accelerating suspect identification, entity profiling, and evidence-driven decision-making."
  },
  {
    id: "bank-statement-analytics",
    name: "Financial Intelligence & Bank Statement Analytics Platform",
    category: "FinTech | Financial Intelligence",
    description: "AI-assisted financial investigation platform enabling fund-flow analysis, counterparty discovery, transaction monitoring, red-flag detection, and forensic reporting from bank statements."
  },
  {
    id: "telecom-intelligence",
    name: "Telecom Intelligence & Communication Analytics Platform",
    category: "Telecom Analytics | Intelligence",
    description: "Advanced communication intelligence platform processing CDR, IPDR, SDR, TDR, and ILD datasets to generate 90+ investigative insights, relationship mapping, location intelligence, and communication patterns."
  },
  {
    id: "multimedia-intelligence",
    name: "Multimedia Intelligence Platform (Audio/Video/Image Analyzer)",
    category: "AI | Computer Vision",
    description: "AI-powered multimedia analysis platform for image, audio, and video intelligence, supporting face detection, object recognition, transcription, diarization, and evidence extraction."
  },
  {
    id: "smart-cctv",
    name: "Smart CCTV Monitoring & Video Intelligence System",
    category: "Video Analytics | Surveillance",
    description: "Real-time CCTV monitoring platform leveraging computer vision and AI models for continuous surveillance, anomaly detection, and situational awareness."
  },
  {
    id: "osint-platform",
    name: "Open-Source Intelligence (OSINT) Platform",
    category: "Cyber Intelligence | OSINT",
    description: "Unified OSINT platform aggregating and analyzing publicly available information across websites, social media, domains, and digital footprints to support investigations and threat analysis."
  },
  {
    id: "document-analysis",
    name: "Intelligent Document Analysis Platform",
    category: "AI | NLP",
    description: "Multilingual document intelligence platform providing AI-powered summarization, risk assessment, entity extraction, keyword intelligence, and document understanding."
  },
  {
    id: "conversational-intelligence",
    name: "Conversational Intelligence Assistant",
    category: "Generative AI",
    description: "LLM-powered assistant enabling natural-language interaction across investigative datasets, reports, documents, and intelligence repositories."
  },
  {
    id: "digital-forensics",
    name: "Digital Forensics Intelligence Platform",
    category: "Digital Forensics",
    description: "Platform for analysis and correlation of digital forensic evidence from mobile devices, storage systems, and extracted forensic artifacts."
  },
  {
    id: "fraud-risk-management",
    name: "Fraud Risk Management & Transaction Monitoring Platform",
    category: "FinTech | AML",
    description: "AML/CFT transaction monitoring platform that detects suspicious activities, monitors red-flag indicators, generates alerts, and supports regulatory compliance for financial institutions."
  },
  {
    id: "digital-risk-protection",
    name: "Digital Risk Protection & Threat Intelligence Platform",
    category: "Cybersecurity | Threat Intelligence",
    description: "Enterprise threat intelligence platform monitoring websites, social media, dark web, phishing campaigns, brand abuse, impersonation, and digital fraud risks."
  },
  {
    id: "payment-operations",
    name: "Payment Operations & Settlement Dashboard",
    category: "FinTech | Operations",
    description: "Operations intelligence dashboard designed to streamline high-volume payment settlements, refunds, dispute resolution, and reconciliation workflows across multiple stakeholders."
  },
  {
    id: "career-acceleration-platform",
    name: "AI-Powered Career Acceleration Platform",
    category: "EdTech SaaS",
    description: "Global B2C SaaS platform used by 40+ leading universities, including Harvard, Stanford, and Wharton, enabling students to create ATS-optimized resumes, improve career readiness, and increase employability through AI-driven resume intelligence, benchmarking, and personalized recommendations."
  },
  {
    id: "facenote-elearning",
    name: "Facenote E-Learning Platform",
    category: "EdTech",
    description: "Mobile and web-based learning platform designed to deliver remote education, content management, and student engagement experiences."
  }
];
