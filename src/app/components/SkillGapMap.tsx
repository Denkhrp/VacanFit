import { useState } from "react";
import { useNavigate } from "react-router";
import { HelpCircle, MapPin, Calendar, X } from "lucide-react";

const WHY_DATA: Record<string, { quotes: string[]; sources: string[] }> = {
  "TypeScript": {
    quotes: [
      '"Strong TypeScript skills required, including generics and decorators."',
      '"Must have: TypeScript 4+ with strict mode experience."',
    ],
    sources: ["Startup XYZ · Frontend Developer", "FinTech Inc · Frontend Engineer"],
  },
  "React Query": {
    quotes: [
      '"Experience with TanStack Query (React Query) for server state management."',
      '"Familiarity with data fetching patterns and caching strategies."',
    ],
    sources: ["Tech Corp · Junior React Dev", "FinTech Inc · Frontend Engineer"],
  },
  "REST API": {
    quotes: ['"Solid understanding of RESTful API design and consumption."'],
    sources: ["Startup XYZ · Frontend Developer"],
  },
  "Git Flow": {
    quotes: ['"Team uses Git Flow — branching, PRs, and code reviews are daily routine."'],
    sources: ["Digital Agency · Web Developer"],
  },
  "Unit Testing": {
    quotes: ['"Basic knowledge of Jest and React Testing Library is a plus."'],
    sources: ["Tech Corp · Junior React Dev"],
  },
};

const TESTIMONIALS = [
  {
    name: "Olena K.",
    role: "Junior Frontend @ Uklon",
    text: "Went from 0 offers in 3 months to landing my first role in 47 days. The roadmap was laser-focused on what actually mattered.",
    days: 47,
    avatar: "OK",
  },
  {
    name: "Dmytro P.",
    role: "React Dev @ Monobank",
    text: "The 'Why?' explanations changed everything. I finally understood what recruiters actually wanted instead of guessing.",
    days: 62,
    avatar: "DP",
  },
];

export function SkillGapMap() {
  const navigate = useNavigate();
  const [whyOpen, setWhyOpen] = useState<string | null>(null);

  const skills = [
    { name: "TypeScript", userLevel: 40, requiredLevel: 85, status: "red" },
    { name: "React Query", userLevel: 30, requiredLevel: 80, status: "red" },
    { name: "REST API", userLevel: 65, requiredLevel: 85, status: "amber" },
    { name: "Git Flow", userLevel: 70, requiredLevel: 90, status: "amber" },
    { name: "Unit Testing", userLevel: 45, requiredLevel: 75, status: "grey" },
  ];

  const vacancies = [
    {
      company: "Startup XYZ",
      role: "Frontend Developer",
      match: 74,
      tags: ["React", "TypeScript", "REST API"],
      // FIX 5 — Remote badge + published date
      remote: true,
      published: "2 days ago",
      whyMatch: "Your React score is high. TypeScript is the main gap.",
    },
    {
      company: "Tech Corp",
      role: "Junior React Dev",
      match: 68,
      tags: ["React", "Git", "Testing"],
      remote: false,
      published: "5 days ago",
      whyMatch: "Good Git score. Testing skills need work.",
    },
    {
      company: "Digital Agency",
      role: "Web Developer",
      match: 82,
      tags: ["JavaScript", "React", "CSS"],
      remote: true,
      published: "Today",
      whyMatch: "Best match — your JS and React levels align well.",
    },
    {
      company: "FinTech Inc",
      role: "Frontend Engineer",
      match: 71,
      tags: ["TypeScript", "React Query", "API"],
      remote: false,
      published: "1 week ago",
      whyMatch: "Two critical gaps: TypeScript and React Query.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0A0E1A] py-12 px-10">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-8">
          <h1 className="font-['Space_Grotesk'] text-4xl mb-2 text-[#FAFAF8]">
            Your Skill Gap Map
          </h1>
          <p className="text-[#64748B] font-['Inter']">
            Based on 4 matching vacancies in your target market
          </p>
        </div>

        <div className="flex gap-6">
          {/* Left Panel */}
          <div className="w-[400px] bg-[#0F1624] border border-[#2A3F5A] rounded-xl p-6 self-start">
            <div className="text-center mb-8">
              <div className="text-[64px] text-[#F59E0B] font-['Space_Grotesk'] leading-none mb-2">74%</div>
              <p className="text-[#64748B] font-['Inter']">Market Readiness Score</p>
            </div>

            <div className="h-2 bg-[#1E2D40] rounded-full mb-8 overflow-hidden">
              <div className="h-full bg-[#F59E0B] transition-all duration-1000" style={{ width: "74%" }} />
            </div>

            <div className="space-y-5">
              <h3 className="font-['Space_Grotesk'] text-sm text-[#FAFAF8] mb-4">Skill Comparison</h3>
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${
                        skill.status === "red" ? "bg-red-500"
                        : skill.status === "amber" ? "bg-[#F59E0B]"
                        : "bg-[#64748B]"
                      }`} />
                      {/* FIX 4 — larger font for skill name */}
                      <span className="text-[15px] text-[#FAFAF8] font-['Inter'] font-medium">{skill.name}</span>
                    </div>
                    {/* FIX 2 — Why? button */}
                    <button
                      onClick={() => setWhyOpen(whyOpen === skill.name ? null : skill.name)}
                      className="flex items-center gap-1 text-[11px] font-['JetBrains_Mono'] text-[#64748B] hover:text-[#F59E0B] transition-colors"
                    >
                      <HelpCircle className="w-3.5 h-3.5" /> Why?
                    </button>
                  </div>

                  {/* Why popover */}
                  {whyOpen === skill.name && WHY_DATA[skill.name] && (
                    <div className="mb-3 bg-[#0A0E1A] border border-[#F59E0B]/30 rounded-lg p-4 relative">
                      <button
                        onClick={() => setWhyOpen(null)}
                        className="absolute top-3 right-3 text-[#64748B] hover:text-[#FAFAF8]"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                      <p className="text-[11px] font-['JetBrains_Mono'] text-[#F59E0B] uppercase tracking-widest mb-2">From vacancies</p>
                      {WHY_DATA[skill.name].quotes.map((q, i) => (
                        <div key={i} className="mb-2">
                          <p className="text-[12px] font-['Inter'] text-[#FAFAF8] italic leading-relaxed">{q}</p>
                          <p className="text-[11px] text-[#64748B] font-['JetBrains_Mono'] mt-1">— {WHY_DATA[skill.name].sources[i]}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="flex gap-2 items-center">
                    <div className="flex-1">
                      <div className="h-1.5 bg-[#1E2D40] rounded-full overflow-hidden">
                        <div className="h-full bg-[#64748B] transition-all duration-1000" style={{ width: `${skill.userLevel}%` }} />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="h-1.5 bg-[#1E2D40] rounded-full overflow-hidden">
                        <div className={`h-full transition-all duration-1000 ${
                          skill.status === "red" ? "bg-red-500"
                          : skill.status === "amber" ? "bg-[#F59E0B]"
                          : "bg-[#64748B]"
                        }`} style={{ width: `${skill.requiredLevel}%` }} />
                      </div>
                    </div>
                  </div>
                  {/* FIX 4 — larger meta font */}
                  <div className="flex justify-between text-[13px] text-[#64748B] font-['JetBrains_Mono'] mt-1">
                    <span>You: {skill.userLevel}%</span>
                    <span>Required: {skill.requiredLevel}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Panel */}
          <div className="flex-1 space-y-4">
            {vacancies.map((vacancy, index) => (
              <div
                key={index}
                className="bg-[#0F1624] border border-[#2A3F5A] rounded-xl p-6 transition-all duration-200 hover:border-[rgba(245,158,11,0.35)] group"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-['Space_Grotesk'] text-xl text-[#FAFAF8] mb-1">{vacancy.role}</h3>
                    <p className="text-[#64748B] font-['Inter'] text-sm">{vacancy.company}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl text-[#F59E0B] font-['Space_Grotesk']">{vacancy.match}%</div>
                    <p className="text-xs text-[#64748B] font-['Inter']">match</p>
                  </div>
                </div>

                {/* FIX 5 — Remote + Date badges */}
                <div className="flex items-center gap-2 mb-3">
                  {vacancy.remote && (
                    <span className="flex items-center gap-1 px-2.5 py-1 bg-[#0A3D2E] border border-[#0D5C3E] text-[#34D399] text-[11px] font-['JetBrains_Mono'] rounded-full">
                      <MapPin className="w-3 h-3" /> Remote
                    </span>
                  )}
                  <span className="flex items-center gap-1 px-2.5 py-1 bg-[#1E2D40] border border-[#2A3F5A] text-[#64748B] text-[11px] font-['JetBrains_Mono'] rounded-full">
                    <Calendar className="w-3 h-3" /> {vacancy.published}
                  </span>
                </div>

                <div className="flex gap-2 flex-wrap mb-4">
                  {vacancy.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-[#1E2D40] text-[#FAFAF8] text-sm rounded-full font-['Inter']">{tag}</span>
                  ))}
                </div>

                {/* FIX 2 — Why match hint */}
                <p className="text-[12px] font-['JetBrains_Mono'] text-[#64748B] group-hover:text-[#94A3B8] transition-colors">
                  ↳ {vacancy.whyMatch}
                </p>
              </div>
            ))}

            {/* FIX 2 — Student testimonials */}
            <div className="bg-[#0F1624] border border-[#2A3F5A] rounded-xl p-6">
              <p className="text-[11px] font-['JetBrains_Mono'] text-[#F59E0B] uppercase tracking-widest mb-4">Students who got their offer</p>
              <div className="space-y-4">
                {TESTIMONIALS.map((t, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-9 h-9 rounded-full bg-[#1E2D40] border border-[#2A3F5A] flex items-center justify-center text-[11px] font-['Space_Grotesk'] text-[#F59E0B] shrink-0">
                      {t.avatar}
                    </div>
                    <div>
                      <p className="text-[13px] font-['Inter'] text-[#FAFAF8] leading-relaxed italic">"{t.text}"</p>
                      <div className="flex items-center gap-3 mt-1.5">
                        <span className="text-[12px] font-['Inter'] text-[#64748B]">{t.name} · {t.role}</span>
                        <span className="text-[11px] font-['JetBrains_Mono'] text-[#F59E0B]">✓ offer in {t.days}d</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => navigate("/roadmap")}
              className="w-full py-4 bg-[#F59E0B] text-[#0A0E1A] font-['Inter'] font-bold rounded-lg transition-all duration-300 hover:brightness-110 hover:shadow-[0_0_20px_rgba(245,158,11,0.3)]"
            >
              Generate my Roadmap →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}