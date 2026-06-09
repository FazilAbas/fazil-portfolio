import React, { useState } from "react";
import { motion } from "motion/react";
import { Linkedin, Mail, ShieldCheck, Cpu, Layout, TrendingUp, ArrowDown, FileText } from "lucide-react";
import { PERSONAL_INFO } from "../data";
import { ResumeModal } from "./ResumeModal";

// Profile image from assets
import profileImage from "../assets/images/fazil_photo.jpg";

export const Hero: React.FC = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const domains = [
    { name: "Product Management", icon: Layout },
    { name: "AI", icon: Cpu },
  ];

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden bg-black text-white"
    >
      {/* Dark premium grid underlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293733_1px,transparent_1px),linear-gradient(to_bottom,#1f293733_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-40"></div>
      
      {/* Underlay glow from matching vibrant blue */}
      <div className="absolute top-1/4 right-[5%] w-[450px] h-[450px] bg-sky-500/10 rounded-full filter blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-[5%] w-80 h-80 bg-sky-600/10 rounded-full filter blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left column: Profile Text Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col justify-center"
        >
          {/* Greeting */}
          <motion.p
            variants={itemVariants}
            className="font-sans text-lg md:text-xl font-normal text-zinc-400 tracking-wide"
          >
            Hello, I'm
          </motion.p>

          {/* Name Display */}
          <motion.h1
            variants={itemVariants}
            className="font-display text-5xl md:text-7xl font-extrabold tracking-tight text-white mt-1 mb-2"
          >
            {PERSONAL_INFO.name}
          </motion.h1>

          {/* Title Position */}
          <motion.h2
            variants={itemVariants}
            className="font-display text-2xl md:text-3.5xl font-bold tracking-tight mb-5"
          >
            <span className="text-sky-400">Associate Product Manager</span>
            <span className="block text-zinc-300 text-base md:text-lg font-medium mt-1">Building AI, FinTech & SaaS Products</span>
          </motion.h2>

          {/* Domain Badges */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-2 mb-6"
          >
            {domains.map((domain) => {
              const Icon = domain.icon;
              return (
                <div
                  key={domain.name}
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/60 text-zinc-300 text-xs font-semibold hover:border-sky-500/40 transition-colors duration-250"
                >
                  <Icon className="w-3.5 h-3.5 text-sky-400" />
                  <span>{domain.name}</span>
                </div>
              );
            })}
          </motion.div>

          {/* Bio text block */}
          <motion.div
            variants={itemVariants}
            className="font-sans text-zinc-350 text-[14px] md:text-[14.5px] leading-relaxed max-w-2xl mb-8 space-y-4"
          >
            <p>
              I’m <strong>Fazil A</strong>, an Associate Product Manager at Pinaca Technologies, where I'm building AI Enabled financial and intelligence platforms for BFSI and Law Enforcement Agencies.
            </p>
            <p>
              For almost 5 years, I've worked across B2C and B2B SaaS, consumer marketplace, and startup environments, solving complex product and business problems at scale.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-zinc-350 my-3">
              <li>
                At VMock, I worked on a global career-acceleration platform (B2C SaaS), focusing on product customization and delivery, feature development, client management, and data-driven improvements.
              </li>
              <li>
                At Zomato, I operated in customer and operations roles, solving payment, vendor, customer, and process-centric problems at scale.
              </li>
              <li>
                Co-founded an EdTech startup (Facenote Learning), gaining hands-on exposure to 0 to 1 build, GTM, and team management.
              </li>
            </ul>
            <p>
              I do intraday and swing-trading for over 5 years now, and hold a Bachelor’s in Commerce (Hons.) with majors in Finance and Economics from <strong>Shri Ram College of Commerce (SRCC), Delhi University</strong>.
            </p>
            <p className="text-sky-400/90">
              Open to roles at the intersection of Product, AI, Data, Finance, and Technology, where I enjoy solving complex problems and building high-impact solutions that create measurable business impact.
            </p>
          </motion.div>

          {/* Social connections & primary interaction button */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-5"
          >
            {/* Social Icons with circular borders exactly matching Komal page screenshot */}
            <div className="flex items-center gap-3">
              <a
                id="hero-linkedin-circular"
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="group p-3 border border-sky-400/40 hover:border-sky-400 bg-transparent rounded-full text-sky-400 hover:bg-sky-400/10 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5 text-sky-400" />
              </a>
              <a
                id="hero-mail-circular"
                href={`mailto:${PERSONAL_INFO.email}`}
                className="group p-3 border border-sky-400/40 hover:border-sky-400 bg-transparent rounded-full text-sky-400 hover:bg-sky-400/10 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center"
                title="Send Email"
              >
                <Mail className="w-5 h-5 text-sky-400" />
              </a>
            </div>
          </motion.div>

          {/* Quick Metrics display */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-3 gap-6 max-w-lg mt-10 border-t border-zinc-800 pt-6"
          >
            <div>
              <span className="font-display text-2xl font-bold text-sky-400 block tracking-tight">4.5+ Years</span>
              <span className="text-[10px] text-zinc-400 font-mono uppercase tracking-wider block mt-1">PM Experience</span>
            </div>
            <div>
              <span className="font-display text-2xl font-bold text-sky-400 block tracking-tight">SRCC</span>
              <span className="text-[10px] text-zinc-400 font-mono uppercase tracking-wider block mt-1">Delhi University</span>
            </div>
            <div>
              <span className="font-display text-2xl font-bold text-sky-400 block tracking-tight">13+</span>
              <span className="text-[10px] text-zinc-400 font-mono uppercase tracking-wider block mt-1">Products & Platforms</span>
            </div>
          </motion.div>

        </motion.div>

        {/* Right column: Image display area */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end items-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="relative z-10 w-full max-w-[340px] md:max-w-[380px] aspect-square rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900/40 p-2 hover:shadow-[0_0_30px_rgba(56,189,248,0.15)] hover:border-sky-500/50 transition-all duration-500 group"
          >
            {/* Real portrait photo (with vibrant original colors, zero grayscale filters) */}
            <div className="w-full h-full rounded-xl overflow-hidden relative bg-zinc-950">
              <img
                id="hero-portrait-img"
                src={profileImage}
                alt="Fazil A Portfolio Portrait"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-103 transition-all duration-500"
              />
            </div>

            {/* Glowing corner highlights */}
            <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-sky-400/50 rounded-tl"></div>
            <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-sky-400/50 rounded-tr"></div>
            <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-sky-400/50 rounded-bl"></div>
            <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-sky-400/50 rounded-br"></div>
          </motion.div>

          {/* Elegant subtle bottom fade */}
          <div className="absolute bottom-[-5%] inset-x-0 h-16 bg-gradient-to-t from-black to-transparent pointer-events-none z-15"></div>
        </div>

      </div>

      {/* Interactive PDF-level Resume Viewer */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </section>
  );
};
