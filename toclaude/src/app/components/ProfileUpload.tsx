import { useState } from "react";
import { useNavigate } from "react-router";
import { Upload } from "lucide-react";

export function ProfileUpload() {
  const navigate = useNavigate();
  const [githubUrl, setGithubUrl] = useState("");

  return (
    <div className="min-h-screen bg-[#0A0E1A] flex items-center justify-center px-4">
      <div className="w-full max-w-[640px]">
        <div className="text-center mb-8">
          <h2 className="font-['Space_Grotesk'] text-3xl mb-2 text-[#FAFAF8]">
            Connect your profile
          </h2>
          <p className="text-[#64748B] font-['Inter']">
            Upload your CV or paste your GitHub profile URL
          </p>
        </div>

        {/* Dropzone */}
        <div className="bg-[#0F1624] border-2 border-dashed border-[#2A3F5A] rounded-xl p-12 mb-6 text-center transition-all duration-200 hover:border-[rgba(245,158,11,0.19)] cursor-pointer">
          <Upload className="w-12 h-12 text-[#64748B] mx-auto mb-4" />
          <p className="text-[#FAFAF8] font-['Inter'] mb-2">
            Drop CV or paste GitHub URL
          </p>
          <p className="text-sm text-[#64748B] font-['Inter']">
            Supports PDF, DOC, DOCX up to 10MB
          </p>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-6">
          <div className="flex-1 h-[1px] bg-[#2A3F5A]" />
          <span className="text-sm text-[#64748B] font-['Inter']">OR</span>
          <div className="flex-1 h-[1px] bg-[#2A3F5A]" />
        </div>

        {/* GitHub URL Input */}
        <div className="mb-8">
          <label className="block text-sm text-[#64748B] font-['Inter'] mb-2">
            GitHub Profile
          </label>
          <input
            type="text"
            value={githubUrl}
            onChange={(e) => setGithubUrl(e.target.value)}
            placeholder="github.com/username"
            className="w-full bg-[#0F1624] border border-[#2A3F5A] rounded-lg px-4 py-3 text-[#FAFAF8] font-['JetBrains_Mono'] outline-none placeholder:text-[#64748B] focus:border-[#F59E0B] transition-colors"
          />
        </div>

        {/* Analyze Button */}
        <button
          onClick={() => navigate("/skill-gap")}
          className="w-full py-3 bg-[#F59E0B] text-[#0A0E1A] rounded-lg transition-all duration-300 hover:brightness-110 hover:shadow-[0_0_12px_rgba(245,158,11,0.19)]"
        >
          Analyze my profile →
        </button>
      </div>
    </div>
  );
}
