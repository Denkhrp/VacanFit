import { useNavigate } from "react-router";
import { ChevronRight, Zap, LayoutGrid, BarChart3, Link as LinkIcon } from "lucide-react";

export function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0A0E1A] selection:bg-[#F59E0B]/30">
      {/* Navbar */}
      <nav className="border-b border-[#1E2D40] px-10">
        <div className="mx-auto max-w-[1440px] flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            {/* Navbar Logo Section */}
            <div className="flex items-center gap-2 font-['Space_Grotesk'] cursor-pointer" onClick={() => navigate("/")}>
              {/* Твій логотип замість галки */}
              <img 
                src="/logo.png" 
                alt="VacanFit Logo" 
                className="w-8 h-8 object-contain" 
              />
              
              <span className="text-[#FAFAF8] font-bold text-xl tracking-tight">
                Vacan<span className="text-[#F59E0B]">Fit</span>
              </span>
            </div>
            <div className="hidden md:flex items-center gap-8 text-sm text-[#64748B] font-['Inter']">
              <button className="hover:text-[#FAFAF8] transition-all duration-300">How it works</button>
              <button className="hover:text-[#FAFAF8] transition-all duration-300">Pricing</button>
              <button className="hover:text-[#FAFAF8] transition-all duration-300">Examples</button>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="px-4 py-2 text-[#FAFAF8] text-sm font-['Inter'] hover:text-[#F59E0B] transition-all duration-300">
              Log in
            </button>
            <button
              onClick={() => navigate("/onboarding")}
              className="px-6 py-2 bg-[#F59E0B] text-[#0A0E1A] rounded-md text-sm font-bold transition-all duration-300 hover:brightness-110 hover:shadow-[0_0_20px_rgba(245,158,11,0.25)]"
            >
              Get started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="mx-auto max-w-[1440px] px-10 pt-24 pb-16">
        {/* Badge */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#060A14] border border-[#1E2D40] rounded-full">
            <div className="w-2 h-2 bg-[#F59E0B] rounded-full shadow-[0_0_8px_#F59E0B]" />
            <span className="text-[13px] text-[#64748B] font-['Inter'] tracking-wide">
              2,847 vacancies analyzed this week
            </span>
          </div>
        </div>

        <div className="text-center mb-12">
          <h1 className="font-['Space_Grotesk'] text-[80px] leading-[0.95] mb-8 text-[#FAFAF8] font-bold tracking-tight">
            Don't just apply—
            <br />
            be the perfect <span className="text-[#F59E0B]">fit.</span>
          </h1>
          <p className="text-xl text-[#64748B] max-w-xl mx-auto font-['Inter'] leading-relaxed">
            Paste a vacancy. Get your skill gaps. Start a data-driven roadmap
            to your first dev role.
          </p>
        </div>

        {/* Input Section */}
        <div className="max-w-2xl mx-auto mb-10">
          <div className="group relative bg-[#060A14] rounded-xl border border-[#1E2D40] p-1.5 flex items-center gap-2 
                          transition-all duration-300 
                          hover:border-[#F59E0B]/50 hover:shadow-[0_0_25px_rgba(245,158,11,0.15)]
                          focus-within:border-[#F59E0B] focus-within:shadow-[0_0_30px_rgba(245,158,11,0.2)]">
            <div className="flex items-center gap-3 flex-1 px-4">
              <LinkIcon className="w-5 h-5 text-[#64748B] group-focus-within:text-[#F59E0B] transition-colors" />
              <input
                type="text"
                placeholder="Paste vacancy URL or text..."
                className="flex-1 bg-transparent py-4 text-[#FAFAF8] font-['Inter'] outline-none placeholder:text-[#64748B]"
              />
            </div>
            <button
              onClick={() => navigate("/onboarding")}
              className="px-8 py-4 bg-[#F59E0B] text-[#0A0E1A] rounded-lg flex items-center gap-2 
                        font-bold font-['Inter'] transition-all duration-300 
                        hover:brightness-125 hover:scale-[1.02] active:scale-95
                        hover:shadow-[0_0_20px_rgba(245,158,11,0.4)]"
            >
              Analyze
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Social Proof */}
        <div className="text-center mb-24">
          <div className="flex items-center justify-center gap-3">
            <div className="flex -space-x-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className={`w-8 h-8 rounded-full border-2 border-[#0A0E1A] bg-[#1E2D40] flex items-center justify-center overflow-hidden`}>
                   <div className={`w-full h-full bg-gradient-to-br ${i === 1 ? 'from-amber-400 to-orange-600' : i === 2 ? 'from-blue-400 to-indigo-600' : 'from-emerald-400 to-teal-600'}`} />
                </div>
              ))}
            </div>
            <span className="text-sm text-[#64748B] font-['Inter'] font-medium">
              Joined 1,200+ students this month
            </span>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, idx) => (
            <div 
              key={idx}
              className="group bg-[#060A14] border border-[#1E2D40] rounded-2xl p-8 transition-all duration-300 hover:border-[#F59E0B]/30 hover:translate-y-[-4px] relative overflow-hidden"
            >
              <div className="absolute top-6 right-8 text-[11px] text-[#64748B] font-['JetBrains_Mono'] tracking-widest opacity-50">
                STEP 0{idx + 1}
              </div>
              <div className="w-14 h-14 bg-[#1E2D40] rounded-xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-[#F59E0B]" />
              </div>
              <h3 className="font-['Space_Grotesk'] text-2xl mb-4 text-[#FAFAF8] font-bold">
                {feature.title}
              </h3>
              <p className="text-[#64748B] font-['Inter'] mb-8 leading-relaxed text-sm">
                {feature.description}
              </p>
              <button className="text-xs font-bold text-[#F59E0B] font-['JetBrains_Mono'] flex items-center gap-2 hover:gap-3 transition-all tracking-tighter">
                LEARN MORE
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const features = [
  {
    title: "Deep Analysis",
    description: "Our AI extracts hidden requirements from any job description, identifying technologies, patterns, and soft skills.",
    icon: Zap
  },
  {
    title: "Custom Roadmap",
    description: "A precision-engineered 30, 60, or 90-day plan designed to fill your specific gaps using world-class resources.",
    icon: LayoutGrid
  },
  {
    title: "Readiness Score",
    description: "Track your progress in real-time. Know exactly when your skills match the company's expectations perfectly.",
    icon: BarChart3
  }
];