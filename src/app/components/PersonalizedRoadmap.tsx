import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";
import { Share2, Save, ChevronRight, Clock, ExternalLink } from "lucide-react";

const RESOURCES: Record<string, { label: string; url: string }[]> = {
  "Mastery of Server Components": [
    { label: "React Docs — Server Components", url: "https://react.dev" },
  ],
  "Hydration Strategies": [
    { label: "Josh W. Comeau — The Perils of Hydration", url: "https://joshwcomeau.com" },
  ],
  "Optimistic Updates": [
    { label: "TanStack Query Docs", url: "https://tanstack.com/query" },
  ],
  "Server Components vs Client Components": [
    { label: "Next.js Docs — Server vs Client", url: "https://nextjs.org/docs" },
  ],
  "Streaming with Suspense & Loading UI": [
    { label: "Vercel Blog — Streaming", url: "https://vercel.com/blog" },
  ],
  "Server Actions for Mutations": [
    { label: "Next.js Docs — Server Actions", url: "https://nextjs.org/docs" },
  ],
  "TanStack Query Integration": [
    { label: "TanStack Query Quickstart", url: "https://tanstack.com/query" },
  ],
  "Zustand for Global State": [
    { label: "Zustand GitHub", url: "https://github.com/pmndrs/zustand" },
  ],
  "Error Boundary Strategies": [
    { label: "React Error Boundaries", url: "https://react.dev" },
  ],
  "Mock Interviews": [
    { label: "Pramp.com — Free mock interviews", url: "https://pramp.com" },
  ],
  "Performance Optimization": [
    { label: "web.dev — Performance", url: "https://web.dev/performance" },
  ],
  "Final Project Deployment": [
    { label: "Vercel Deployment Guide", url: "https://vercel.com/docs" },
  ],
};

export function PersonalizedRoadmap() {
  const navigate = useNavigate();
  const [readiness, setReadiness] = useState(0);
  // Selected pace comes from Survey — shown as read-only
  const selectedPace = "30";

  useEffect(() => {
    const timer = setTimeout(() => setReadiness(74), 500);
    return () => clearTimeout(timer);
  }, []);

  const roadmapData = [
    {
      week: "01",
      theme: "Architecture & Scaling",
      tasks: ["Mastery of Server Components", "Hydration Strategies", "Optimistic Updates"],
      time: "2.5h/day",
    },
    {
      week: "02",
      theme: "Next.js 14 App Router",
      tasks: ["Server Components vs Client Components", "Streaming with Suspense & Loading UI", "Server Actions for Mutations"],
      time: "3h/day",
    },
    {
      week: "03",
      theme: "State Management",
      tasks: ["TanStack Query Integration", "Zustand for Global State", "Error Boundary Strategies"],
      time: "2h/day",
    },
    {
      week: "04",
      theme: "Final Preparation",
      tasks: ["Mock Interviews", "Performance Optimization", "Final Project Deployment"],
      time: "4h/day",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div className="min-h-screen bg-[#141B2B] font-['Inter'] flex">

      {/* LEFT SIDEBAR */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="w-[320px] bg-[#0A0E1A] flex flex-col p-8 sticky top-0 h-screen"
      >
        <div className="mb-8">
          <span className="text-[10px] font-['JetBrains_Mono'] text-[#64748B] uppercase tracking-widest font-bold">Analyzing</span>
          <h2 className="font-['Space_Grotesk'] text-2xl font-bold text-[#FAFAF8] mt-1 tracking-tight">Frontend Developer</h2>
          <p className="text-sm text-[#64748B] mt-1">Uklon • Kyiv</p>
          <div className="h-[1px] bg-[#1E2D40] w-full my-6" />
        </div>

        {/* Readiness */}
        <div className="mb-8">
          <span className="text-[10px] font-['JetBrains_Mono'] text-[#FAFAF8] uppercase tracking-widest font-bold">Your Readiness</span>
          <div className="flex items-baseline gap-1 mt-3">
            <motion.span className="text-6xl font-['Space_Grotesk'] font-bold text-[#F59E0B]">{readiness}</motion.span>
            <span className="text-xl font-bold text-[#F59E0B]">%</span>
          </div>
          <div className="mt-4 space-y-2">
            <div className="h-2 bg-[#1E2D40] rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${readiness}%` }}
                transition={{ duration: 1.5, ease: "circOut" }}
                className="h-full bg-[#F59E0B]"
              />
            </div>
            <p className="text-[12px] text-[#64748B] font-['JetBrains_Mono']">{100 - readiness}% to apply-ready</p>
          </div>
        </div>

        {/* Pace — read-only, set in Survey */}
        <div className="mb-8">
          <span className="text-[10px] font-['JetBrains_Mono'] text-[#64748B] uppercase tracking-widest font-bold block mb-3">Roadmap Duration</span>
          <div className="flex items-center gap-3 bg-[#0F1624] border border-[#2A3F5A] rounded-lg px-4 py-3">
            <div className="flex gap-1">
              {(["30", "60", "90"] as const).map((d) => (
                <span
                  key={d}
                  className={`px-3 py-1 text-sm font-['JetBrains_Mono'] rounded-md ${
                    d === selectedPace
                      ? "bg-[#F59E0B] text-[#0A0E1A] font-bold"
                      : "text-[#374151]"
                  }`}
                >
                  {d}d
                </span>
              ))}
            </div>
            <span className="text-[11px] font-['JetBrains_Mono'] text-[#64748B] ml-auto">Intensive · 4–5h/day</span>
          </div>
        </div>

        {/* Missing Skills */}
        <div className="flex-1">
          <span className="text-[10px] font-['JetBrains_Mono'] text-[#FAFAF8] uppercase tracking-widest font-bold block mb-4">Missing Skills</span>
          <ul className="space-y-3">
            {[
              { name: "TypeScript", color: "bg-[#EF4444]" },
              { name: "React Query", color: "bg-[#EF4444]" },
              { name: "REST API", color: "bg-[#F59E0B]" },
              { name: "Git Flow", color: "bg-[#F59E0B]" },
            ].map((s, i) => (
              <motion.li
                key={s.name}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 + i * 0.1 }}
                className="flex items-center gap-3 text-sm text-[#FAFAF8] font-medium"
              >
                <div className={`w-2 h-2 rounded-full ${s.color}`} />
                {s.name}
              </motion.li>
            ))}
          </ul>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => navigate("/dashboard")}
          className="w-full py-4 bg-[#F59E0B] text-[#0A0E1A] font-bold rounded-xl shadow-[0_10px_20px_rgba(245,158,11,0.2)] font-['Inter']"
        >
          Start Tracking
        </motion.button>
      </motion.div>

      {/* RIGHT CONTENT */}
      <div className="flex-1 bg-[#141B2B] flex flex-col">
        <header className="h-20 border-b border-[#1E2D40]/50 flex items-center justify-between px-10 sticky top-0 bg-[#141B2B]/80 backdrop-blur-md z-20">
          <div className="flex items-center gap-3">
            <div className="font-['Space_Grotesk'] text-lg font-bold">
              <span className="text-[#FAFAF8]">Vacan</span><span className="text-[#F59E0B]">Fit</span>
            </div>
            <div className="h-4 w-[1px] bg-[#1E2D40]" />
            <span className="text-sm text-[#64748B] font-medium tracking-tight">Roadmap View</span>
          </div>
          <div className="flex items-center gap-4">
            <motion.button
              whileHover={{ backgroundColor: "#2A3F5A" }}
              className="flex items-center gap-2 px-4 py-2 bg-[#1E2D40] text-[#FAFAF8] rounded-lg text-sm font-medium border border-[#2A3F5A] transition-colors"
            >
              <Save className="w-4 h-4" /> Save Roadmap
            </motion.button>
            <button className="flex items-center gap-2 text-[#64748B] hover:text-[#FAFAF8] transition-colors px-2">
              <Share2 className="w-4 h-4" /> <span className="text-sm font-medium">Share</span>
            </button>
          </div>
        </header>

        <motion.main
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex-1 p-10 flex gap-10 max-w-5xl"
        >
          <div className="relative w-1 flex flex-col items-center shrink-0">
            <motion.div initial={{ height: 0 }} animate={{ height: "100%" }} transition={{ duration: 1 }} className="absolute top-0 bottom-0 w-[2px] bg-[#0A0E1A]" />
            <div className="relative z-10 w-4 h-4 rounded-full bg-[#F59E0B] border-4 border-[#141B2B] shadow-[0_0_15px_#F59E0B] mt-24" />
          </div>

          <div className="flex-1 space-y-10 pb-20">
            {roadmapData.map((weekData) => (
              <motion.div
                key={weekData.week}
                variants={itemVariants}
                whileHover={{ x: 8 }}
                className="bg-[#1C2539] border border-[#2A3F5A]/30 rounded-2xl p-10 relative overflow-hidden group"
              >
                <span className="text-[11px] font-['JetBrains_Mono'] text-[#64748B] uppercase tracking-[0.2em] mb-3 block font-bold">Week {weekData.week}</span>
                <h3 className="font-['Space_Grotesk'] text-2xl font-bold text-[#FAFAF8] mb-8 tracking-tight">{weekData.theme}</h3>

                <ul className="space-y-5 mb-10 relative z-10">
                  {weekData.tasks.map((task, i) => (
                    <motion.li
                      key={i}
                      whileHover={{ x: 4 }}
                      className="flex items-start gap-4 group/item"
                    >
                      <ChevronRight className="w-4 h-4 text-[#F59E0B] opacity-70 group-hover/item:opacity-100 transition-all mt-0.5 shrink-0" />
                      <div className="flex-1">
                        {/* FIX 4 — larger task name */}
                        <span className="font-['JetBrains_Mono'] text-[15px] text-[#94A3B8] group-hover/item:text-[#FAFAF8] transition-colors leading-snug block mb-1.5">
                          {task}
                        </span>
                        {/* FIX 4 — visible resource links */}
                        {RESOURCES[task]?.map((r, ri) => (
                          <a
                            key={ri}
                            href={r.url}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1.5 text-[13px] font-['Inter'] text-[#F59E0B] hover:text-[#FBBF24] transition-colors"
                          >
                            <ExternalLink className="w-3 h-3" />
                            {r.label}
                          </a>
                        ))}
                      </div>
                    </motion.li>
                  ))}
                </ul>

                <div className="flex gap-3 relative z-10">
                  <div className="flex items-center gap-2 px-4 py-2 bg-[#0A0E1A]/40 rounded-lg border border-[#2A3F5A]/20">
                    <Clock className="w-4 h-4 text-[#FAFAF8]" />
                    <span className="text-[14px] font-['JetBrains_Mono'] text-[#FAFAF8]">{weekData.time}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.main>
      </div>
    </div>
  );
}