import React from "react";
import { motion } from "motion/react";
import { FileText, ArrowUpRight } from "lucide-react";

// Import generated premium project slide assets
import zomatoRetentionImage from "../assets/images/zomato_retention_slide_1780940588942.png";
import districtCrmImage from "../assets/images/district_crm_slide_1780940606582.png";
import salaryseImage from "../assets/images/salaryse_benefits_1780939941992.png";
import linnkAtlasImage from "../assets/images/linnk_atlas_ai_1780993073500.png";

export const ProjectsSection: React.FC = () => {
  const projects = [
    {
      id: "Linnk Atlas AI v1.0",
      title: "Linnk Atlas AI v1.0",
      description: "A comprehensive, high-fidelity Product Requirements Document (PRD) for Linnk Atlas — a staffing sales intelligence layer that aggregates fragmented signals to prioritize leads and support outreach preparation.",
      image: linnkAtlasImage,
      pdfPath: "/Linnk_Atlas_AI_v1_0_PRD.pdf",
      accent: "from-sky-600/10 via-zinc-900/5 to-transparent",
      borderColor: "group-hover:border-sky-500/40",
      glowColor: "rgba(56,189,248,0.15)",
    },
    {
      id: "How Can Zomato Improve User Retention",
      title: "How Can Zomato Improve User Retention",
      description: "A comprehensive Product Requirement Document analyzing Zomato retention cohorts, critical gamification mechanics, and activation-stage user flows.",
      image: zomatoRetentionImage,
      pdfPath: "/PRD_Zomato_User_Retention.pdf",
      accent: "from-red-650/10 via-zinc-900/5 to-transparent",
      borderColor: "group-hover:border-red-500/40",
      glowColor: "rgba(239,68,68,0.15)",
    },
    {
      id: "District CRM Growth & Lifecycle Orchestration Concept",
      title: "District CRM Growth & Lifecycle Orchestration Concept",
      description: "Deep-dive teardown of Zomato's newly launched District app, focusing on automated push notifications, CRM triggers, and user lifecycle maps.",
      image: districtCrmImage,
      pdfPath: "/District_CRM_Growth_Lifecycle_Orchestration_Concept.pdf",
      accent: "from-teal-600/10 via-zinc-900/5 to-transparent",
      borderColor: "group-hover:border-teal-500/40",
      glowColor: "rgba(20,184,166,0.15)",
    },
    {
      id: "SalarySe Flexi Benefits",
      title: "SalarySe Flexi Benefits",
      description: "A strategic overview of salary flexi-allowance systems, employee financial tax advantages, and technical integration blueprints for corporate onboarding.",
      image: salaryseImage,
      pdfPath: "/SalarySe_Flexi_Benefits_Maximize_Salary.pdf",
      accent: "from-emerald-600/10 via-zinc-900/5 to-transparent",
      borderColor: "group-hover:border-emerald-500/40",
      glowColor: "rgba(16,185,129,0.15)",
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 bg-black border-t border-zinc-900 relative overflow-hidden text-white"
    >
      {/* Dynamic background ambient lights */}
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-sky-500/5 rounded-full filter blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-indigo-500/5 rounded-full filter blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header exact replication from Komal screenshot (centered "My Projects" heading) */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
            My <span className="text-sky-400">Projects</span>
          </h2>
          <p className="font-sans text-sm md:text-base text-zinc-400 max-w-xl mx-auto leading-relaxed">
            In-depth product strategy breakdowns and UX teardowns. Click any card to open the case study PDF.
          </p>
        </div>

        {/* Widescreen presentation cards grid - Optimized symmetric 2x2 grid or single-col mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="group relative cursor-pointer"
            >
              {/* Outer Glow container */}
              <div className="absolute -inset-1 bg-gradient-to-r from-zinc-800 to-zinc-900 rounded-[22px] opacity-10 group-hover:opacity-30 blur-md transition-all duration-500"></div>

              {/* Clickable Card Link */}
              <a
                href={project.pdfPath}
                target="_blank"
                rel="noreferrer"
                className="block relative bg-zinc-950/90 border border-zinc-800 group-hover:border-sky-500/40 rounded-2xl overflow-hidden p-2.5 transition-all duration-500 shadow-2xl overflow-hidden"
              >
                {/* Sleek tablet/screen inner gradient frame matching screenshot */}
                <div className="relative rounded-xl overflow-hidden aspect-[16/9] border border-zinc-900 group-hover:border-zinc-800 transition-colors duration-500 bg-zinc-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-[1.025] transition-all duration-700"
                  />

                  {/* Glassy overlay trigger on hover */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 gap-3">
                    <div className="w-12 h-12 rounded-full bg-sky-400 text-black flex items-center justify-center shadow-lg transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                      <FileText className="w-6 h-6 font-bold" />
                    </div>
                    <span className="font-display font-bold text-white tracking-wide text-center translate-y-3 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                      Open Project PDF
                    </span>
                    <span className="text-xs text-zinc-400 tracking-wider">
                      Opens in browser tab
                    </span>
                  </div>
                </div>

                {/* Info Bar right beneath the frame - Simple, modern labels */}
                <div className="mt-3.5 px-3 pb-2 flex flex-col justify-between h-[80px]">
                  <div>
                    <h3 className="font-display text-sm font-bold text-zinc-200 group-hover:text-sky-400 transition-colors duration-300 leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-xs text-zinc-500 mt-1.5 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex items-center justify-end gap-1 text-xs text-zinc-500 group-hover:text-sky-450 transition-all font-mono mt-2 self-end">
                    <span>PDF</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
