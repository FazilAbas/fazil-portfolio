import React, { useRef } from "react";
import { motion } from "motion/react";
import { 
  Database, 
  LineChart, 
  Radio, 
  Video, 
  Eye, 
  Search, 
  FileText, 
  MessageSquare, 
  Activity, 
  ShieldAlert, 
  Lock, 
  CreditCard, 
  GraduationCap, 
  BookOpen,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  Cpu
} from "lucide-react";
import { BUILT_PRODUCTS } from "../data";

// Helper to resolve appropriate icon for each product category
const getProductIcon = (id: string) => {
  switch (id) {
    case "investigation-data-fusion":
      return Database;
    case "bank-statement-analytics":
      return LineChart;
    case "telecom-intelligence":
      return Radio;
    case "multimedia-intelligence":
      return Video;
    case "smart-cctv":
      return Eye;
    case "osint-platform":
      return Search;
    case "document-analysis":
      return FileText;
    case "conversational-intelligence":
      return MessageSquare;
    case "digital-forensics":
      return Activity;
    case "fraud-risk-management":
      return ShieldAlert;
    case "digital-risk-protection":
      return Lock;
    case "payment-operations":
      return CreditCard;
    case "career-acceleration-platform":
      return GraduationCap;
    case "facenote-elearning":
      return BookOpen;
    default:
      return Cpu;
  }
};

export const ProductsBuiltSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.75;
      scrollRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="products" className="py-16 bg-black border-t border-zinc-900 overflow-hidden relative">
      {/* Decorative ambient gradient backing */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-sky-500/5 rounded-full filter blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Interactive scroll triggers header element */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-8 gap-4">
          <div>
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight text-white">
              Products I Have Built and Managed
            </h2>
            <p className="text-zinc-400 text-sm mt-1.5 max-w-xl">
              14 corporate SaaS, FinTech, and Enterprise platforms driving high-leverage business value.
            </p>
          </div>

          {/* Precision Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll("left")}
              className="p-2.5 rounded-full border border-zinc-800 bg-zinc-900/40 text-zinc-400 hover:text-sky-400 hover:border-sky-500/40 active:scale-95 transition-all duration-200"
              aria-label="Scroll Left"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-2.5 rounded-full border border-zinc-800 bg-zinc-900/40 text-zinc-400 hover:text-sky-400 hover:border-sky-500/40 active:scale-95 transition-all duration-200"
              aria-label="Scroll Right"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Container */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scroll-smooth cursor-grab active:cursor-grabbing"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {BUILT_PRODUCTS.map((prod, index) => {
            const Icon = getProductIcon(prod.id);
            return (
              <motion.div
                key={prod.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.4) }}
                className="min-w-[290px] md:min-w-[380px] max-w-[380px] snap-start border border-zinc-900 bg-gradient-to-b from-zinc-950 to-zinc-900/40 p-5 rounded-2xl flex flex-col justify-between hover:border-sky-500/30 group transition-all duration-300 relative overflow-hidden"
              >
                {/* Visual hover corner accent lines */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-sky-450/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                <div>
                  {/* Icon & Category Tag details */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-sky-400 group-hover:bg-sky-500/10 group-hover:border-sky-500/30 transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] uppercase tracking-wider font-mono font-medium text-sky-400/90 bg-sky-500/5 px-2 py-0.5 rounded border border-sky-500/10 truncate max-w-[160px]" title={prod.category}>
                      {prod.category.split("|")[0].trim()}
                    </span>
                  </div>

                  {/* Title & Description details */}
                  <h3 className="font-display text-md font-bold text-white tracking-tight mb-2 group-hover:text-sky-400 transition-colors duration-300 min-h-[44px] flex items-center">
                    {prod.name}
                  </h3>
                  
                  <span className="text-[11px] text-zinc-500 font-mono block mb-3 border-b border-zinc-900 pb-2">
                    {prod.category}
                  </span>

                  <p className="text-zinc-400 text-xs leading-relaxed group-hover:text-zinc-350 transition-colors duration-300">
                    {prod.description}
                  </p>
                </div>

                {/* Aesthetic footer signature decoration */}
                <div className="mt-4 pt-3 border-t border-zinc-900 flex justify-between items-center text-[10px] text-zinc-600 font-mono group-hover:text-zinc-500 transition-colors">
                  <span>Product SKU-{(index + 1).toString().padStart(2, "0")}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
