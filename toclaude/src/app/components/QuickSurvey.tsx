import { useState } from "react";
import { useNavigate } from "react-router";
import { ChevronDown } from "lucide-react";

export function QuickSurvey() {
  const navigate = useNavigate();
  const [stack, setStack] = useState("");
  const [level, setLevel] = useState("");
  const [region, setRegion] = useState("");
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const stacks = ["Frontend", "Backend", "Fullstack", "DevOps", "Data"];
  const levels = ["Student", "Self-taught", "Switching"];
  const regions = ["Ukraine", "EU", "Remote"];

  const isComplete = stack && level && region;

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
          className="w-full bg-[#0F1624] border border-[#2A3F5A] rounded-lg px-4 py-3 text-[#FAFAF8] font-['Inter'] flex items-center justify-between transition-all hover:border-[rgba(245,158,11,0.19)]"
        >
          <span className={value ? "text-[#FAFAF8]" : "text-[#64748B]"}>
            {value || `Select ${label.toLowerCase()}`}
          </span>
          <ChevronDown
            className={`w-4 h-4 text-[#F59E0B] transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>
        {isOpen && (
          <div className="absolute z-10 w-full mt-2 bg-[#0F1624] border border-[#2A3F5A] rounded-lg overflow-hidden shadow-xl animate-[slideDown_200ms_ease-out]">
            {options.map((option) => (
              <button
                key={option}
                onClick={() => {
                  onChange(option);
                  setOpenDropdown(null);
                }}
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
    <div className="min-h-screen bg-[#0A0E1A] flex items-center justify-center px-4">
      <div className="w-full max-w-[640px] bg-[#0F1624] border border-[#2A3F5A] rounded-xl p-8">
        {/* Step Indicator */}
        <div className="flex items-center gap-2 mb-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#F59E0B] flex items-center justify-center text-[#0A0E1A] font-['Space_Grotesk']">
              ✓
            </div>
            <span className="text-sm text-[#64748B] font-['Inter']">
              Choose method
            </span>
          </div>
          <div className="flex-1 h-[1px] bg-[#2A3F5A]" />
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#F59E0B] flex items-center justify-center text-[#0A0E1A] font-['Space_Grotesk']">
              2
            </div>
            <span className="text-sm text-[#F59E0B] font-['Inter']">
              Analysis
            </span>
          </div>
          <div className="flex-1 h-[1px] bg-[#2A3F5A]" />
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full border border-[#2A3F5A] flex items-center justify-center text-[#64748B] font-['Space_Grotesk']">
              3
            </div>
            <span className="text-sm text-[#64748B] font-['Inter']">
              Roadmap
            </span>
          </div>
        </div>

        <h2 className="font-['Space_Grotesk'] text-3xl mb-2 text-[#FAFAF8]">
          Tell us about yourself
        </h2>
        <p className="text-[#64748B] font-['Inter'] mb-8">
          This helps us match you with the right vacancies
        </p>

        {/* Form */}
        <div className="space-y-6 mb-8">
          <Dropdown
            label="Tech Stack"
            value={stack}
            options={stacks}
            onChange={setStack}
            id="stack"
          />
          <Dropdown
            label="Experience Level"
            value={level}
            options={levels}
            onChange={setLevel}
            id="level"
          />
          <Dropdown
            label="Preferred Region"
            value={region}
            options={regions}
            onChange={setRegion}
            id="region"
          />
        </div>

        {/* Submit Button */}
        <button
          onClick={() => navigate("/skill-gap")}
          disabled={!isComplete}
          className={`w-full py-3 rounded-lg transition-all duration-300 ${
            isComplete
              ? "bg-[#F59E0B] text-[#0A0E1A] hover:brightness-110 hover:shadow-[0_0_12px_rgba(245,158,11,0.19)]"
              : "bg-[#2A3F5A] text-[#64748B] cursor-not-allowed"
          }`}
        >
          Find my vacancies →
        </button>
      </div>
    </div>
  );
}
