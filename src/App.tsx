import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { ProductsBuiltSection } from "./components/ProductsBuiltSection";
import { ExperienceTimeline } from "./components/ExperienceTimeline";
import { ProjectsSection } from "./components/ProjectsSection";
import { AcademicCard } from "./components/AcademicCard";
import { CookieYesProjectPage } from "./components/CookieYesProjectPage";
import { AlphaPulseProjectPage } from "./components/AlphaPulseProjectPage";
import { GetAJobProjectPage } from "./components/GetAJobProjectPage";
import { PERSONAL_INFO } from "./data";
import { Compass } from "lucide-react";

function HomePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 w-full">
        <Hero />
        <ProductsBuiltSection />
        <ExperienceTimeline />
        <ProjectsSection />
        <AcademicCard />
      </main>
      <footer id="app-footer" className="bg-black border-t border-zinc-900 py-8 px-6 relative overflow-hidden text-zinc-500">
        <div className="absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-sky-500/10 to-transparent"></div>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 relative z-10">
          <div className="text-center md:text-left">
            <span className="font-display font-extrabold text-white text-base block hover:text-sky-400 transition-colors">
              {PERSONAL_INFO.name}
            </span>
            <span className="text-[11px] text-zinc-500 font-mono mt-0.5 block">
              Associate Product Manager
            </span>
          </div>
          <div className="text-center md:text-right">
            <span className="text-[11px] text-zinc-400 font-mono tracking-wider font-semibold">
              © 2026 Fazil A | All Rights Reserved.
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div id="full-portfolio-wrapper" className="min-h-screen bg-black text-zinc-100 flex flex-col selection:bg-sky-500/30 selection:text-sky-400">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project/cookieyes" element={<CookieYesProjectPage />} />
          <Route path="/project/alphapulse" element={<AlphaPulseProjectPage />} />
          <Route path="/project/getajob" element={<GetAJobProjectPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
