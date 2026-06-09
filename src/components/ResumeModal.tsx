import React, { useEffect } from "react";
import { X, Download, FileText, Mail, Phone, Linkedin } from "lucide-react";
import { downloadFile } from "../utils";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  // Listen for the escape key to close the modal
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (isOpen && event.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-black/95 backdrop-blur-md flex items-center justify-center p-2 md:p-6 font-sans"
      onClick={onClose}
    >
      <div 
        className="relative bg-zinc-950 border border-zinc-800 rounded-2xl w-full max-w-5xl shadow-2xl flex flex-col h-[88vh] md:h-[92vh] animate-in fade-in zoom-in-95 duration-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Controls Bar - Clean, Simple, Single-focused */}
        <div className="flex items-center justify-between border-b border-zinc-900 bg-zinc-950/95 px-4 md:px-5 py-3 flex-shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-sky-950 flex items-center justify-center border border-sky-900/40">
              <FileText className="w-4.5 h-4.5 text-sky-450" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-white tracking-tight leading-tight">
                Fazil_A_Resume.pdf
              </h2>
              <p className="text-[10px] text-zinc-500 font-mono tracking-wider">
                Full Curriculum Vitae • Live Display
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Direct Download Action Button */}
            <button
              onClick={() => downloadFile("/Fazil_A_Resume.pdf", "Fazil_A_Resume.pdf")}
              className="group flex items-center gap-1.5 bg-sky-400 text-black text-xs font-extrabold px-3.5 py-1.5 rounded-lg hover:bg-sky-300 hover:shadow-[0_0_12px_rgba(56,189,248,0.3)] transition-all cursor-pointer border-0"
              title="Download PDF document locally"
            >
              <Download className="w-3.5 h-3.5 text-black" />
              <span>Download PDF</span>
            </button>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-1.5 hover:bg-zinc-900 text-zinc-400 hover:text-white rounded-lg transition-colors border border-zinc-900"
              title="Close Viewer [Esc]"
            >
              <X className="w-4.5 h-4.5" />
            </button>
          </div>
        </div>

        {/* Content Area - Floating White Paper Sheet mimicking the PDF precisely */}
        <div className="flex-1 bg-zinc-900/40 overflow-y-auto p-3 sm:p-5 md:p-8 flex justify-center items-start">
          
          <div className="bg-white text-black w-full max-w-[820px] rounded shadow-xl border border-zinc-300 p-6 md:p-9 font-sans selection:bg-sky-100 selection:text-sky-900 text-left">
            
            {/* --- HEADER --- */}
            <div className="mb-4">
              <div className="flex flex-row justify-between items-baseline gap-2 mb-1">
                <h1 className="text-xl md:text-2xl font-bold text-black tracking-tight uppercase leading-none">Fazil A</h1>
                <div className="flex flex-wrap items-center gap-x-2 text-[10px] sm:text-xs text-sky-600 font-semibold text-right">
                  <a href="mailto:fazilabbaz@gmail.com" className="hover:underline flex items-center gap-1">
                    <Mail className="w-3 h-3 text-sky-600 inline" /> fazilabbaz@gmail.com
                  </a>
                  <span className="text-zinc-300">|</span>
                  <span className="flex items-center gap-1 text-zinc-700">
                    <Phone className="w-3 h-3 text-zinc-500 inline" /> 8075833967
                  </span>
                  <span className="text-zinc-300">|</span>
                  <a href="https://www.linkedin.com/in/fazilabaz/" target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-1">
                    <Linkedin className="w-3 h-3 text-sky-600 inline" /> LinkedIn
                  </a>
                </div>
              </div>
              
              <p className="text-[9.5px] font-bold text-zinc-700 uppercase tracking-wide">
                Associate Product Manager (APM) | CFA L1 Candidate | SRCC
              </p>
            </div>

            {/* --- SECTION: EXPERIENCE --- */}
            <div className="mb-4">
              <h3 className="text-[10px] font-bold tracking-wider text-black uppercase">EXPERIENCE</h3>
              <div className="w-full h-[0.5px] bg-black mt-1 mb-2"></div>
              
              <div className="space-y-3">
                {/* PINACA */}
                <div>
                  <div className="flex flex-row justify-between items-baseline gap-4">
                    <span className="text-[10px] font-bold text-black leading-tight">
                      Associate Product Manager (APM) – AI Data & Financial Intelligence Platform | PINACA TECHNOLOGIES, Chennai
                    </span>
                    <span className="text-[9.5px] font-bold text-zinc-800 font-mono flex-shrink-0 text-right whitespace-nowrap">
                      July 2024 - Present
                    </span>
                  </div>
                  <ul className="mt-1 list-none space-y-1 pl-2 text-[9px] text-zinc-800 leading-normal">
                    <li className="relative pl-3.5">
                      <span className="absolute left-0 top-[1px] text-zinc-800 font-bold">•</span>
                      Led a <strong>20-member</strong> cross-functional team to deliver an <strong>AI-powered Data Fusion & Decision platform</strong> to solve fragmented investigations across BFSI and Law Enforcement Agencies (ED, ATS, ITD, NIA, IB etc.), enabling <strong>25+ deployments, 50+ POCs, 100+ demos</strong>, and influencing <strong>₹300Cr+</strong> deal pipeline.
                    </li>
                    <li className="relative pl-3.5">
                      <span className="absolute left-0 top-[1px] text-zinc-800 font-bold">•</span>
                      Owned end-to-end productization of <strong>ML-driven workflows</strong> integrating <strong>Bank Statement Analyzer, Communication Intelligence (CDR/IPDR), Multimedia Analysis (image/audio/video), Digital Forensic Analyzer, OSINT, and AI Chatbot</strong> modules.
                    </li>
                    <li className="relative pl-3.5">
                      <span className="absolute left-0 top-[1px] text-zinc-800 font-bold">•</span>
                      Conceptualised and launched a <strong>Fraud Risk Management & Transaction Monitoring System</strong> to address AML/CFT gaps in mid-sized banks, unlocking <strong>₹50L-1 Cr</strong> platform revenue across <strong>5 banking clients</strong>.
                    </li>
                    <li className="relative pl-3.5">
                      <span className="absolute left-0 top-[1px] text-zinc-800 font-bold">•</span>
                      Directed a <strong>40-member team</strong> to scale an <strong>External Digital Risk Protection & Fraud Threat Intelligence suite</strong> to combat brand abuse and digital threats, driving adoption across <strong>30+ enterprises</strong> and generating <strong>₹6–15 Cr ARR</strong>.
                    </li>
                    <li className="relative pl-3.5">
                      <span className="absolute left-0 top-[1px] text-zinc-800 font-bold">•</span>
                      Defined product strategy and roadmap for AI-powered modules by leveraging customer research, product analytics, and stakeholder inputs; translated requirements into <strong>PRDs, user stories, and prioritized backlogs</strong> to accelerate feature delivery and adoption.
                    </li>
                  </ul>
                </div>

                {/* VMOCK */}
                <div>
                  <div className="flex flex-row justify-between items-baseline gap-4">
                    <span className="text-[10px] font-bold text-black leading-tight">
                      Business Analyst (Product) – AI Powered Career Acceleration Platform | VMOCK, Gurgaon
                    </span>
                    <span className="text-[9.5px] font-bold text-zinc-800 font-mono flex-shrink-0 text-right whitespace-nowrap">
                      July 2022 - May 24
                    </span>
                  </div>
                  <ul className="mt-1 list-none space-y-1 pl-2 text-[9px] text-zinc-800 leading-normal">
                    <li className="relative pl-3.5">
                      <span className="absolute left-0 top-[1px] text-zinc-800 font-bold">•</span>
                      Spearheaded product customization and strategy, resolving <strong>20% of total client requests</strong> and achieving the <strong>highest number of product launches (21%)</strong> in a <strong>team of 7</strong>, driving significant market expansion across <strong>4 continents</strong>.
                    </li>
                    <li className="relative pl-3.5">
                      <span className="absolute left-0 top-[1px] text-zinc-800 font-bold">•</span>
                      Managed and scaled the <strong>highest number of clients (33% of total clientele)</strong> fostering trust and satisfaction in complex client relationships.
                    </li>
                    <li className="relative pl-3.5">
                      <span className="absolute left-0 top-[1px] text-zinc-800 font-bold">•</span>
                      Analysed <strong>100+ product features/metrics</strong> to identify user pain points and derived insights on product friction/client churns, collaborating with <strong>5+ internal teams</strong> to resolve end-user issues and prioritize feature development, resulting in enhanced user experience.
                    </li>
                    <li className="relative pl-3.5">
                      <span className="absolute left-0 top-[1px] text-zinc-800 font-bold">•</span>
                      Trained and mentored <strong>4 Business Analysts, 1 Client Success Manager, and 3 Client Success Analysts</strong>, demonstrating exceptional functional product knowledge and leadership skills.
                    </li>
                  </ul>
                </div>

                {/* ZOMATO */}
                <div>
                  <div className="flex flex-row justify-between items-baseline gap-4">
                    <span className="text-[10px] font-bold text-black leading-tight">
                      Associate (CDT - Process & Customer Experience) | ZOMATO, Gurgaon
                    </span>
                    <span className="text-[9.5px] font-bold text-zinc-800 font-mono flex-shrink-0 text-right whitespace-nowrap">
                      Sep. 2021 - July 2022
                    </span>
                  </div>
                  <ul className="mt-1 list-none space-y-1 pl-2 text-[9px] text-zinc-800 leading-normal">
                    <li className="relative pl-3.5">
                      <span className="absolute left-0 top-[1px] text-zinc-800 font-bold">•</span>
                      Streamlined payment process, monetary settlements and refunds amounting to <strong>₹5 Crores+</strong> to related parties - suppliers, customers and third-party service providers including delivery and payment partners.
                    </li>
                    <li className="relative pl-3.5">
                      <span className="absolute left-0 top-[1px] text-zinc-800 font-bold">•</span>
                      Performed root cause analysis and resolved vendor and customer escalations, payment disputes (chargebacks) and invoices/reports of multiple stakeholders.
                    </li>
                    <li className="relative pl-3.5">
                      <span className="absolute left-0 top-[1px] text-zinc-800 font-bold">•</span>
                      Responsible for <strong>3PL Project</strong>: Scrutinized <strong>1400+ unfulfilled orders worth ₹2.75L+</strong> assigned to third-party logistics team over a span of <strong>5 weeks</strong> -
                      <ul className="mt-0.5 list-none space-y-0.5 text-[8.5px] text-zinc-700">
                        <li className="relative pl-3">
                          <span className="absolute left-0 top-[1px] text-zinc-650">o</span>
                          Identified breakpoints in order delivery, suggested improvements and training to overhaul logistic team’s performance; arrived at delivery partner’s pay-outs
                        </li>
                        <li className="relative pl-3">
                          <span className="absolute left-0 top-[1px] text-zinc-650">o</span>
                          Brought down unfulfilled orders rate further below <strong>0.3</strong>
                        </li>
                      </ul>
                    </li>
                    <li className="relative pl-3.5">
                      <span className="absolute left-0 top-[1px] text-zinc-800 font-bold">•</span>
                      Leveraged ties with restaurant and delivery partners, enhanced service quality by relaying feedback, escalating performance issues and ensuring compliance with KPI.
                    </li>
                  </ul>
                </div>

                {/* FACENOTE */}
                <div>
                  <div className="flex flex-row justify-between items-baseline gap-4">
                    <span className="text-[10px] font-bold text-black leading-tight">
                      Co-Founder (E-Learning Platform) | FACENOTE LEARNING, Kochi
                    </span>
                    <span className="text-[9.5px] font-bold text-zinc-800 font-mono flex-shrink-0 text-right whitespace-nowrap">
                      June 2021 - Aug. 2021
                    </span>
                  </div>
                  <ul className="mt-1 list-none space-y-1 pl-2 text-[9px] text-zinc-800 leading-normal">
                    <li className="relative pl-3.5">
                      <span className="absolute left-0 top-[1px] text-zinc-800 font-bold">•</span>
                      Synthesized end-to-end product-market launch including finance and budget functions, product development, marketing and sales-channel verticals.
                    </li>
                    <li className="relative pl-3.5">
                      <span className="absolute left-0 top-[1px] text-zinc-800 font-bold">•</span>
                      Autonomously hired and managed a <strong>team of 20</strong> (teachers and academic content creators) and delivered output with <strong>35% savings in time</strong>.
                    </li>
                    <li className="relative pl-3.5">
                      <span className="absolute left-0 top-[1px] text-zinc-800 font-bold">•</span>
                      Conducted market research and survey on target customers; ideated top-down marketing strategies as well as bottom-up approaches at community and priority-market levels; built GTM strategy and executed market testing of product.
                    </li>
                  </ul>
                </div>

                {/* EPLATFORM TECH */}
                <div>
                  <div className="flex flex-row justify-between items-baseline gap-4">
                    <span className="text-[10px] font-bold text-black leading-tight">
                      Analyst Intern (Risk Management) | EPLATFORM TECH, Gurgaon
                    </span>
                    <span className="text-[9.5px] font-bold text-zinc-800 font-mono flex-shrink-0 text-right whitespace-nowrap">
                      May 2021
                    </span>
                  </div>
                  <ul className="mt-1 list-none space-y-1 pl-2 text-[9px] text-zinc-800 leading-normal">
                    <li className="relative pl-3.5">
                      <span className="absolute left-0 top-[1px] text-zinc-800 font-bold">•</span>
                      Performed auditing compliance risk analysis using TPM Software, data review and analysis to obtain key insights and managed customer/vendor electronic data.
                    </li>
                    <li className="relative pl-3.5">
                      <span className="absolute left-0 top-[1px] text-zinc-800 font-bold">•</span>
                      Scrutinized compliance data as per regulatory requirements of <strong>over 1000 customers and vendors</strong>, ensured KYC compliance of customers and communicated the same with Client (<strong>PHILIPS, India</strong>) as well as third-party connections.
                    </li>
                  </ul>
                </div>

                {/* TRAVEL TRIVIA */}
                <div>
                  <div className="flex flex-row justify-between items-baseline gap-4">
                    <span className="text-[10px] font-bold text-black leading-tight">
                      Content Writer Intern (Product Marketing) | TRAVEL TRIVIA (A.A.S. Flight Solutions), Gurgaon
                    </span>
                    <span className="text-[9.5px] font-bold text-zinc-800 font-mono flex-shrink-0 text-right whitespace-nowrap">
                      2018 - 2019
                    </span>
                  </div>
                  <ul className="mt-1 list-none space-y-1 pl-2 text-[9px] text-zinc-800 leading-normal">
                    <li className="relative pl-3.5">
                      <span className="absolute left-0 top-[1px] text-zinc-800 font-bold">•</span>
                      Wrote <strong>50+ 1200-word pieces</strong> of product marketing (tourism package) content; edited and optimized itinerary for tourist destinations.
                    </li>
                  </ul>
                </div>

              </div>
            </div>

            {/* --- SECTION: EDUCATION --- */}
            <div className="mb-4">
              <h3 className="text-[10px] font-bold tracking-wider text-black uppercase">EDUCATION</h3>
              <div className="w-full h-[0.5px] bg-black mt-1 mb-2"></div>
              
              <div className="space-y-3">
                {/* CFA */}
                <div>
                  <div className="flex flex-row justify-between items-baseline gap-4">
                    <span className="text-[10px] font-bold text-black leading-tight">
                      Chartered Financial Analyst (CFA Level 1) | CFA Institute, USA
                    </span>
                    <span className="text-[9.5px] font-bold text-zinc-800 font-mono flex-shrink-0 text-right whitespace-nowrap">
                      May. 2026 - Present
                    </span>
                  </div>
                  <ul className="mt-1 list-none space-y-1 pl-2 text-[9px] text-zinc-800 leading-normal">
                    <li className="relative pl-3.5">
                      <span className="absolute left-0 top-[1px] text-zinc-800 font-bold">•</span>
                      Coursework: Equity, Fixed Income, Derivatives, Alt. Investments, Portfolio Management, Financial Statement Analysis, Economics, Quantitative Methods
                    </li>
                  </ul>
                </div>

                {/* SRCC */}
                <div>
                  <div className="flex flex-row justify-between items-baseline gap-4">
                    <span className="text-[10px] font-bold text-black leading-tight">
                      Bachelor’s in Commerce Hons. (B. Com Hons.) | Shri Ram College of Commerce (SRCC), University of Delhi
                    </span>
                    <span className="text-[9.5px] font-bold text-zinc-800 font-mono flex-shrink-0 text-right whitespace-nowrap">
                      July 2018 - June 2021
                    </span>
                  </div>
                  <ul className="mt-1 list-none space-y-1 pl-2 text-[9px] text-zinc-800 leading-normal">
                    <li className="relative pl-3.5">
                      <span className="absolute left-0 top-[1px] text-zinc-800 font-bold">•</span>
                      Grade: <strong>8.18/10.00</strong> | Majors: Finance and Economics
                    </li>
                    <li className="relative pl-3.5">
                      <span className="absolute left-0 top-[1px] text-zinc-800 font-bold">•</span>
                      Coursework: Accounting, Auditing, Income Tax/GST, Marketing, Economics, Financial Reporting & Analysis and Financial Management
                    </li>
                  </ul>
                </div>

                {/* ICAI */}
                <div>
                  <div className="flex flex-row justify-between items-baseline gap-4">
                    <span className="text-[10px] font-bold text-black leading-tight">
                      Chartered Accountancy: Foundation Level Exam | Institute of Chartered Accountants of India (ICAI)
                    </span>
                    <span className="text-[9.5px] font-bold text-zinc-800 font-mono flex-shrink-0 text-right whitespace-nowrap">
                      August 2018
                    </span>
                  </div>
                </div>

                {/* Higher Secondary */}
                <div>
                  <div className="flex flex-row justify-between items-baseline gap-4">
                    <span className="text-[10px] font-bold text-black leading-tight">
                      Higher Secondary Examination | ASMM Higher Secondary School, Kerala | CGPA: 10/10
                    </span>
                    <span className="text-[9.5px] font-bold text-zinc-800 font-mono flex-shrink-0 text-right whitespace-nowrap">
                      May 2018
                    </span>
                  </div>
                </div>

                {/* Secondary SSE */}
                <div>
                  <div className="flex flex-row justify-between items-baseline gap-4">
                    <span className="text-[10px] font-bold text-black leading-tight">
                      Secondary School Examination (CBSE) | Vasavi Vidyalaya, Kerala | CGPA: 9.4
                    </span>
                    <span className="text-[9.5px] font-bold text-zinc-800 font-mono flex-shrink-0 text-right whitespace-nowrap">
                      May 2016
                    </span>
                  </div>
                </div>

              </div>
            </div>

            {/* --- SECTION: SKILLS & EXPERTISE --- */}
            <div className="mb-4">
              <h3 className="text-[10px] font-bold tracking-wider text-black uppercase">SKILLS & EXPERTISE</h3>
              <div className="w-full h-[0.5px] bg-black mt-1 mb-2"></div>
              
              <ul className="list-none space-y-1 pl-2 text-[9px] text-zinc-800 leading-normal">
                <li className="relative pl-3.5">
                  <span className="absolute left-0 font-bold text-zinc-800">•</span>
                  <strong>AI</strong>: ChatGPT, Claude, Gemini, Lovable, Replit, Perplexity, Cursor, GitHub Copilot, NotebookLM, Prompt Engineering, LLM Evaluation, AI-assisted Prototyping
                </li>
                <li className="relative pl-3.5">
                  <span className="absolute left-0 font-bold text-zinc-800">•</span>
                  <strong>Product</strong>: Market Research, Product Strategy (Vision, PRD, Roadmap), Product Development, Stakeholder Management, GTM Strategy, Performance Monitoring
                </li>
                <li className="relative pl-3.5">
                  <span className="absolute left-0 font-bold text-zinc-800">•</span>
                  <strong>Financial Expertise</strong>: Financial Modeling & Valuation, Equity Research, Investor Presentation, Bloomberg, E-Filing, ITR and Tally ERP
                </li>
                <li className="relative pl-3.5">
                  <span className="absolute left-0 font-bold text-zinc-800">•</span>
                  <strong>Technical Skills</strong>: Advanced Excel, Power BI, Mixpanel, CleverTap, Python, SQL, R, Data Analytics, Wireframing (Whimsical, Figma, Balsamiq), JIRA, Notion
                </li>
                <li className="relative pl-3.5">
                  <span className="absolute left-0 font-bold text-zinc-800">•</span>
                  <strong>Languages</strong>: English (Proficient), Malayalam (Native), Tamil (Native), Hindi (Basic)
                </li>
              </ul>
            </div>

            {/* --- SECTION: CERTIFICATIONS & WORKSHOPS --- */}
            <div className="mb-4">
              <h3 className="text-[10px] font-bold tracking-wider text-black uppercase">CERTIFICATIONS & WORKSHOPS</h3>
              <div className="w-full h-[0.5px] bg-black mt-1 mb-2"></div>
              
              <ul className="list-none space-y-1 pl-2 text-[9px] text-zinc-800 leading-normal">
                <li className="relative pl-3.5">
                  <span className="absolute left-0 font-bold text-zinc-800">•</span>
                  Product-Led Growth (PLG) Fundamentals (ProductLed)
                </li>
                <li className="relative pl-3.5">
                  <span className="absolute left-0 font-bold text-zinc-800">•</span>
                  Corporate Valuation (EDUCBA): Prepared DDM and DCF models, relative valuation (Enterprise & Equity Valuation) and fundamental analysis of stock
                </li>
                <li className="relative pl-3.5">
                  <span className="absolute left-0 font-bold text-zinc-800">•</span>
                  Capital IQ Fundamentals, Reading Financial Statements, Bloomberg Essentials (CORPORATE FINANCE INSTITUTE)
                </li>
                <li className="relative pl-3.5">
                  <span className="absolute left-0 font-bold text-zinc-800">•</span>
                  Data Analytics with R Programming (AICPA-CIMA): Built Linear Regression Model and Logistic Regression Model, Performed EDA & Visualization
                </li>
                <li className="relative pl-3.5">
                  <span className="absolute left-0 font-bold text-zinc-800">•</span>
                  Financial Modeling using Excel (BAY STREET SCHOOL); Equity: Technical Analysis (STOCK WIZARD ACADEMY)
                </li>
                <li className="relative pl-3.5">
                  <span className="absolute left-0 font-bold text-zinc-800">•</span>
                  Modules: Public Policy, Policy and Impact Consulting, National Education Case Study - Global Governance Initiative’s 2 days Masterclass
                </li>
              </ul>
            </div>

            {/* --- SECTION: ACHIEVEMENTS & RESPONSIBILITIES --- */}
            <div>
              <h3 className="text-[10px] font-bold tracking-wider text-black uppercase">ACHIEVEMENTS & POSITIONS OF RESPONSIBILITIES</h3>
              <div className="w-full h-[0.5px] bg-black mt-1 mb-2"></div>
              
              <div className="space-y-2">
                <div>
                  <div className="flex flex-row justify-between items-baseline gap-4">
                    <span className="text-[10px] font-bold text-black leading-tight">
                      Event Coordinator | Wings of Fire, Shri Ram College of Commerce
                    </span>
                    <span className="text-[9.5px] font-bold text-zinc-800 font-mono flex-shrink-0 text-right whitespace-nowrap">
                      July 2019 - May 2020
                    </span>
                  </div>
                  <ul className="mt-1 list-none space-y-1 pl-2 text-[9px] text-zinc-800 leading-normal">
                    <li className="relative pl-3.5">
                      <span className="absolute left-0 font-bold text-zinc-800">•</span>
                      Led a team of <strong>75+ students</strong> to execute CA Confluence 2020 involving <strong>1200+ participants</strong>, Adhyetha (Research Paper Competition) and Caso De Competetencia (Case Study Competition) involving <strong>400+ participants</strong> across India.
                    </li>
                  </ul>
                </div>

                <ul className="list-none space-y-1 pl-2 text-[9px] text-zinc-800 leading-normal">
                  <li className="relative pl-3.5">
                    <span className="absolute left-0 font-bold text-zinc-800">•</span>
                    Finalist of <strong>GENESIS</strong> (Business Plan Competition) conducted by <strong>The Commerce Society, SRCC & IIT Delhi</strong>
                  </li>
                  <li className="relative pl-3.5">
                    <span className="absolute left-0 font-bold text-zinc-800">•</span>
                    Finalist of <strong>SOCIO BEE 5.0</strong>, <strong>SAMARPAN</strong> (Business Plan Competition) conducted by <strong>NATIONAL SERVICE SCHEME (NSS), SRCC</strong>
                  </li>
                </ul>
              </div>
            </div>

          </div>
          
        </div>

      </div>
    </div>
  );
};
