export interface Experience {
  id: string;
  role: string;
  company: string;
  logoText: string;
  period: string;
  location: string;
  tags: string[];
  description: string;
  points: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  period: string;
  location: string;
  majors: string;
  achievements?: string[];
}

export interface ProductHighlight {
  id: string;
  title: string;
  companyRef: string;
  description: string;
  impactMetrics: string[];
  skillsApplied: string[];
}

export interface SkillCategory {
  id: string;
  name: string;
  iconName: string;
  skills: string[];
}

export interface BuiltProduct {
  id: string;
  name: string;
  category: string;
  description: string;
}
