import { useState } from "react";
import { useNavigate } from "react-router";
import { ChevronDown, Zap, BookOpen, Coffee } from "lucide-react";

export function QuickSurvey() {
  const navigate = useNavigate();
  const [stack, setStack] = useState("");
  const [level, setLevel] = useState("");
  const [region, setRegion] = useState("");
  const [pace, setPace] = useState<"30" | "60" | "90" | "">("");
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const stacks = ["Frontend", "Backend", "Fullstack", "DevOps", "Data"];
  const levels = ["Student", "Self-taught", "Switching"];
  const regions = ["Ukraine", "EU", "Remote"];

  const isComplete = stack && level && region && pace;

  const paceOptions = [
    {
      id: "30",
      label: "30 days",
      sublabel: "Intensive",
      description: "4–5h/day, fast track",
      icon: <Zap className="w-5 h-5" />,
    },
    {
      id: "60",
      label: "60 days",
      sublabel: "Balanced",
      description: "2–3h/day, steady pace",
      icon: <BookOpen className="w-5 h-5" />,
    },
    {
      id: "90",
      label: "90 days",
      sublabel: "Relaxed",
      description: "1–2h/day, no rush",
      icon: <Coffee className="w-5 h-5" />,
    },
  ];

  const Dropdown = ({
    label,
    value,
    options,
    onChange,
    id,
  }: {
    label: string;
    value: string;
    options: string[];
    onChange: (val: string) => void;
    id: string;
  }) => {
    const isOpen = openDropdown === id;
    return (
      <div className="relative">
        <label className="block text-sm text-[#64748B] font-['Inter'] mb-2">
          {label}
        </label>
        <button
          onClick={() => setOpenDropdown(isOpen ? null : id)}
          className="w-full bg-[#0F1624] border border-[#2A3F5A] rounded-lg px-4 py-3 text-[#FAFAF8] font-['Inter'] flex items-center justify-between transition-all hover:border-[rgba(245,158,11,0.4)]"
        >
          <span className={value ? "text-[#FAFAF8]" : "text-[#64748B]"}>
            {value || `Select ${label.toLowerCase()}`}
          </span>
          <ChevronDown
            className={`w-4 h-4 text-[#F59E0B] transition-transform ${isOpen ? "rotate-180" : ""}`}
          />
        </button>
        {isOpen && (
          <div className="absolute z-10 w-full mt-2 bg-[#0F1624] border border-[#2A3F5A] rounded-lg overflow-hidden shadow-xl">
            {options.map((option) => (
              <button
                key={option}
                onClick={() => { onChange(option); setOpenDropdown(null); }}
                className="w-full px-4 py-3 text-left text-[#FAFAF8] font-['Inter'] hover:bg-[#1E2D40] transition-colors"
              >
                {option}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#0A0E1A] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-[640px] bg-[#0F1624] border border-[#2A3F5A] rounded-xl p-8">

        {/* Step Indicator */}
        <div className="flex items-center gap-2 mb-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#F59E0B] flex items-center justify-center text-[#0A0E1A] font-['Space_Grotesk'] text-sm font-bold">✓</div>
            <span className="text-sm text-[#64748B] font-['Inter']">Choose method</span>
          </div>
          <div className="flex-1 h-[1px] bg-[#2A3F5A]" />
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#F59E0B] flex items-center justify-center text-[#0A0E1A] font-['Space_Grotesk'] text-sm font-bold">2</div>
            <span className="text-sm text-[#F59E0B] font-['Inter']">Analysis</span>
          </div>
          <div className="flex-1 h-[1px] bg-[#2A3F5A]" />
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full border border-[#2A3F5A] flex items-center justify-center text-[#64748B] font-['Space_Grotesk'] text-sm">3</div>
            <span className="text-sm text-[#64748B] font-['Inter']">Roadmap</span>
          </div>
        </div>

        <h2 className="font-['Space_Grotesk'] text-3xl mb-2 text-[#FAFAF8]">Tell us about yourself</h2>
        <p className="text-[#64748B] font-['Inter'] mb-8">This helps us match you with the right vacancies</p>

        <div className="space-y-6 mb-8">
          <Dropdown label="Tech Stack" value={stack} options={stacks} onChange={setStack} id="stack" />
          <Dropdown label="Experience Level" value={level} options={levels} onChange={setLevel} id="level" />
          <Dropdown label="Preferred Region" value={region} options={regions} onChange={setRegion} id="region" />

          {/* FIX 1 — Pace / Intensity Selector */}
          <div>
            <label className="block text-sm text-[#64748B] font-['Inter'] mb-2">
              Learning pace
            </label>
            <div className="grid grid-cols-3 gap-3">
              {paceOptions.map((option) => {
                const isActive = pace === option.id;
                return (
                  <button
                    key={option.id}
                    onClick={() => setPace(option.id as "30" | "60" | "90")}
                    className={`flex flex-col items-start gap-2 p-4 rounded-lg border transition-all duration-200 text-left ${
                      isActive
                        ? "border-[#F59E0B] bg-[#F59E0B]/5 shadow-[0_0_16px_rgba(245,158,11,0.1)]"
                        : "border-[#2A3F5A] bg-[#0A0E1A] hover:border-[rgba(245,158,11,0.4)]"
                    }`}
                  >
                    <div className={`${isActive ? "text-[#F59E0B]" : "text-[#64748B]"} transition-colors`}>
                      {option.icon}
                    </div>
                    <div>
                      <div className={`font-['Space_Grotesk'] text-sm font-bold ${isActive ? "text-[#F59E0B]" : "text-[#FAFAF8]"}`}>
                        {option.label}
                      </div>
                      <div className="text-xs text-[#64748B] font-['Inter'] mt-0.5">{option.sublabel}</div>
                      <div className="text-[11px] font-['JetBrains_Mono'] text-[#4B5563] mt-1">{option.description}</div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <button
          onClick={() => navigate("/skill-gap")}
          disabled={!isComplete}
          className={`w-full py-3 rounded-lg font-['Inter'] font-medium transition-all duration-300 ${
            isComplete
              ? "bg-[#F59E0B] text-[#0A0E1A] hover:brightness-110 hover:shadow-[0_0_20px_rgba(245,158,11,0.3)]"
              : "bg-[#2A3F5A] text-[#64748B] cursor-not-allowed"
          }`}
        >
          Find my vacancies →
        </button>
      </div>
    </div>
  );
}