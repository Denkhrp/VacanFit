import { useNavigate } from "react-router";

export function SkillGapMap() {
  const navigate = useNavigate();

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
    },
    {
      company: "Tech Corp",
      role: "Junior React Dev",
      match: 68,
      tags: ["React", "Git", "Testing"],
    },
    {
      company: "Digital Agency",
      role: "Web Developer",
      match: 82,
      tags: ["JavaScript", "React", "CSS"],
    },
    {
      company: "FinTech Inc",
      role: "Frontend Engineer",
      match: 71,
      tags: ["TypeScript", "React Query", "API"],
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
          {/* Left Panel - Readiness Score */}
          <div className="w-[400px] bg-[#0F1624] border border-[#2A3F5A] rounded-xl p-6">
            <div className="text-center mb-8">
              <div className="text-[64px] text-[#F59E0B] font-['Space_Grotesk'] mb-2">
                74%
              </div>
              <p className="text-[#64748B] font-['Inter']">
                Market Readiness Score
              </p>
            </div>

            {/* Progress Bar */}
            <div className="h-2 bg-[#1E2D40] rounded-full mb-8 overflow-hidden">
              <div
                className="h-full bg-[#F59E0B] transition-all duration-1000"
                style={{ width: "74%" }}
              />
            </div>

            {/* Skills List */}
            <div className="space-y-4">
              <h3 className="font-['Space_Grotesk'] text-sm text-[#FAFAF8] mb-4">
                Skill Comparison
              </h3>
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex items-center gap-2 mb-2">
                    <div
                      className={`w-2 h-2 rounded-full ${
                        skill.status === "red"
                          ? "bg-red-500"
                          : skill.status === "amber"
                            ? "bg-[#F59E0B]"
                            : "bg-[#64748B]"
                      }`}
                    />
                    <span className="text-sm text-[#FAFAF8] font-['Inter']">
                      {skill.name}
                    </span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <div className="flex-1">
                      <div className="h-1.5 bg-[#1E2D40] rounded-full overflow-hidden">
                        <div
                          className="h-full bg-[#64748B] transition-all duration-1000"
                          style={{ width: `${skill.userLevel}%` }}
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="h-1.5 bg-[#1E2D40] rounded-full overflow-hidden">
                        <div
                          className={`h-full transition-all duration-1000 ${
                            skill.status === "red"
                              ? "bg-red-500"
                              : skill.status === "amber"
                                ? "bg-[#F59E0B]"
                                : "bg-[#64748B]"
                          }`}
                          style={{ width: `${skill.requiredLevel}%` }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between text-xs text-[#64748B] font-['JetBrains_Mono'] mt-1">
                    <span>You: {skill.userLevel}%</span>
                    <span>Required: {skill.requiredLevel}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Panel - Vacancies */}
          <div className="flex-1 space-y-4">
            {vacancies.map((vacancy, index) => (
              <div
                key={index}
                className="bg-[#0F1624] border border-[#2A3F5A] rounded-xl p-6 transition-all duration-200 hover:border-[rgba(245,158,11,0.19)]"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-['Space_Grotesk'] text-xl text-[#FAFAF8] mb-1">
                      {vacancy.role}
                    </h3>
                    <p className="text-[#64748B] font-['Inter']">
                      {vacancy.company}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl text-[#F59E0B] font-['Space_Grotesk']">
                      {vacancy.match}%
                    </div>
                    <p className="text-xs text-[#64748B] font-['Inter']">
                      match
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 flex-wrap">
                  {vacancy.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-[#1E2D40] text-[#FAFAF8] text-sm rounded-full font-['Inter']"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}

            <button
              onClick={() => navigate("/roadmap")}
              className="w-full py-4 bg-[#F59E0B] text-[#0A0E1A] rounded-lg transition-all duration-300 hover:brightness-110 hover:shadow-[0_0_12px_rgba(245,158,11,0.19)]"
            >
              Generate my Roadmap →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
