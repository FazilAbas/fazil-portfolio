import React, { useState, useEffect } from "react";
import { Menu, X, FileText, Download, ArrowUpRight } from "lucide-react";
import { ResumeModal } from "./ResumeModal";
import { downloadFile } from "../utils";
import { useTracking } from "./TrackingProvider";

export const Navbar: React.FC = () => {
  const { track } = useTracking();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Simple active scroll detection
      const sections = ["home", "experience", "projects", "education"];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home", id: "home" },
    { name: "Experience", href: "#experience", id: "experience" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Education", href: "#education", id: "education" },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-black/95 backdrop-blur-md border-b border-zinc-800/80 py-3.5 shadow-lg"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo - Only Fazil A is visible */}
        <a
          id="nav-logo"
          href="#home"
          className="group font-display text-xl font-bold tracking-tight text-white hover:text-sky-400 transition-colors duration-200"
        >
          Fazil A
        </a>

        {/* Desktop Nav Links */}
        <nav id="desktop-nav" className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.id}
              id={`nav-link-${link.id}`}
              href={link.href}
              className={`font-sans text-sm font-medium transition-all duration-200 hover:text-white ${
                activeSection === link.id
                  ? "text-sky-400 font-semibold relative after:absolute after:bottom-[-6px] after:left-0 after:right-0 after:h-[2px] after:bg-sky-500 after:rounded-full"
                  : "text-zinc-400"
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Resume Trigger and Actions button */}
        <div className="hidden lg:flex items-center gap-3.5">
          <button
            id="nav-resume-btn-desktop"
            onClick={() => { track("resume_view", "resume", "View Resume (Desktop Nav)"); setIsResumeOpen(true); }}
            className="group flex items-center gap-2 bg-sky-400 text-black font-extrabold px-5 py-2 rounded-full text-sm hover:bg-sky-300 transition-all duration-300 shadow-[0_0_15px_rgba(56,189,248,0.25)] hover:shadow-[0_0_20px_rgba(56,189,248,0.45)] cursor-pointer active:scale-95 text-left"
          >
            <FileText className="w-4 h-4 text-black group-hover:rotate-6 transition-transform" />
            <span>View Resume</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-black/70" />
          </button>

          {/* Real direct download file link */}
          <button
            id="nav-resume-download-direct"
            onClick={() => { track("resume_download", "resume", "Download Resume (Desktop Nav)"); downloadFile("/Fazil_A_Resume.pdf", "Fazil_A_Resume.pdf"); }}
            className="group flex items-center gap-1.5 bg-transparent border border-zinc-700 hover:border-sky-450 hover:bg-zinc-900/60 text-zinc-300 hover:text-white px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 cursor-pointer"
            title="Download PDF resume"
          >
            <Download className="w-4 h-4 text-zinc-400 group-hover:-translate-y-0.5 transition-transform" />
            <span>Download</span>
          </button>
        </div>

        {/* Mobile menu controls */}
        <div className="flex items-center gap-3 lg:hidden">
            <button
              id="nav-resume-btn-mobile-shortcut"
              onClick={() => { track("resume_view", "resume", "View Resume (Mobile Nav)"); setIsResumeOpen(true); }}
              className="p-2 border border-zinc-805 hover:border-sky-500 bg-zinc-900 text-sky-400 rounded-full transition-colors shadow-md flex items-center justify-center cursor-pointer"
              title="View Resume"
            >
            <FileText className="w-4 h-4" />
          </button>
          
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-zinc-400 hover:text-white transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-drawer"
          className="lg:hidden absolute top-full left-0 right-0 bg-black/98 border-b border-zinc-800 shadow-xl py-6 px-6 slide-in-top"
        >
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.id}
                id={`mobile-nav-link-${link.id}`}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`font-sans text-base font-semibold py-1 border-b border-zinc-900 ${
                  activeSection === link.id
                    ? "text-sky-450 font-bold"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-3 mt-6 border-t border-zinc-905 pt-6">
            <button
              id="nav-resume-btn-mobile"
              onClick={() => {
                setMobileMenuOpen(false);
                track("resume_view", "resume", "View Resume (Mobile Drawer)");
                setIsResumeOpen(true);
              }}
              className="w-full flex items-center justify-center gap-2 bg-sky-450 text-black py-3 rounded-xl font-extrabold transition-all duration-300 cursor-pointer"
            >
              <FileText className="w-5 h-5" />
              <span>View Resume</span>
            </button>

            <button
              id="nav-resume-download-mobile"
              onClick={() => {
                setMobileMenuOpen(false);
                track("resume_download", "resume", "Download Resume (Mobile Drawer)");
                downloadFile("/Fazil_A_Resume.pdf", "Fazil_A_Resume.pdf");
              }}
              className="w-full flex items-center justify-center gap-2 bg-transparent border border-zinc-805 hover:bg-zinc-900 text-zinc-200 py-3 rounded-xl font-bold transition-all duration-300 cursor-pointer"
            >
              <Download className="w-5 h-5 text-zinc-400" />
              <span>Download Resume</span>
            </button>
          </div>
        </div>
      )}

      {/* Interactive PDF-fidelity Resume Viewer Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </header>
  );
};
