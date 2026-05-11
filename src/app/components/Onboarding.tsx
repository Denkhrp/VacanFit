import { useState } from "react";
import { useNavigate } from "react-router";
import { Github, Linkedin } from "lucide-react";

export function Onboarding() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<"profile" | "survey" | null>(null);

  const handleContinue = () => {
    if (selected === "profile") {
      navigate("/profile-upload");
    } else if (selected === "survey") {
      navigate("/survey");
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0E1A] flex items-center justify-center px-4">
      <div className="w-full max-w-[640px] bg-[#0F1624] border border-[#2A3F5A] rounded-xl p-8">
        {/* Step Indicator */}
        <div className="flex items-center gap-2 mb-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#F59E0B] flex items-center justify-center text-[#0A0E1A] font-['Space_Grotesk']">
              1
            </div>
            <span className="text-sm text-[#F59E0B] font-['Inter']">
              Choose method
            </span>
          </div>
          <div className="flex-1 h-[1px] bg-[#2A3F5A]" />
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full border border-[#2A3F5A] flex items-center justify-center text-[#64748B] font-['Space_Grotesk']">
              2
            </div>
            <span className="text-sm text-[#64748B] font-['Inter']">
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
          How would you like to start?
        </h2>
        <p className="text-[#64748B] font-['Inter'] mb-8">
          Choose the best way to analyze your skills
        </p>

        {/* Options */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <button
            onClick={() => setSelected("profile")}
            className={`p-6 border rounded-xl transition-all duration-200 text-left ${
              selected === "profile"
                ? "border-[#F59E0B] bg-[#1E2D40]"
                : "border-[#2A3F5A] bg-[#0F1624] hover:border-[rgba(245,158,11,0.19)]"
            }`}
          >
            <div className="flex gap-3 mb-4">
              <Github className="w-5 h-5 text-[#F59E0B]" />
              <Linkedin className="w-5 h-5 text-[#F59E0B]" />
            </div>
            <h3 className="font-['Space_Grotesk'] text-lg mb-2 text-[#FAFAF8]">
              I have LinkedIn/GitHub
            </h3>
            <p className="text-sm text-[#64748B] font-['Inter']">
              Upload your CV or connect your professional profiles for instant
              analysis
            </p>
          </button>

          <button
            onClick={() => setSelected("survey")}
            className={`p-6 border rounded-xl transition-all duration-200 text-left ${
              selected === "survey"
                ? "border-[#F59E0B] bg-[#1E2D40]"
                : "border-[#2A3F5A] bg-[#0F1624] hover:border-[rgba(245,158,11,0.19)]"
            }`}
          >
            <div className="w-10 h-10 bg-[#1E2D40] rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-5 h-5 text-[#F59E0B]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <h3 className="font-['Space_Grotesk'] text-lg mb-2 text-[#FAFAF8]">
              Start fresh — quick survey
            </h3>
            <p className="text-sm text-[#64748B] font-['Inter']">
              Answer a few questions about your experience and goals
            </p>
          </button>
        </div>

        {/* Continue Button */}
        <button
          onClick={handleContinue}
          disabled={!selected}
          className={`w-full py-3 rounded-lg transition-all duration-300 ${
            selected
              ? "bg-[#F59E0B] text-[#0A0E1A] hover:brightness-110 hover:shadow-[0_0_12px_rgba(245,158,11,0.19)]"
              : "bg-[#2A3F5A] text-[#64748B] cursor-not-allowed"
          }`}
        >
          Continue →
        </button>
      </div>
    </div>
  );
}
