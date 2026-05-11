import { useState } from "react";
import { Share2, ExternalLink, Flame } from "lucide-react";

// FIX 3 — Activity grid data (last 5 weeks, 7 days each)
const generateActivityGrid = () => {
  const weeks: boolean[][] = [];
  for (let w = 0; w < 5; w++) {
    const days: boolean[] = [];
    for (let d = 0; d < 7; d++) {
      // simulate: recent weeks more active
      days.push(Math.random() > (w < 2 ? 0.2 : 0.55));
    }
    weeks.push(days);
  }
  // last 3 days of current week always active (streak)
  weeks[4][4] = true;
  weeks[4][5] = true;
  weeks[4][6] = true;
  return weeks;
};

const ACTIVITY_GRID = generateActivityGrid();
const DAY_LABELS = ["M", "T", "W", "T", "F", "S", "S"];

export function ProgressDashboard() {
  const [tasks, setTasks] = useState([
    { name: "Complete TypeScript basics tutorial", resource: "typescript-tutorial.dev", time: "4h", completed: true },
    { name: "Build a typed Todo app", resource: "github.com/example", time: "6h", completed: true },
    { name: "Practice with type guards", resource: "exercism.org", time: "3h", completed: false },
    { name: "React Query core concepts", resource: "tanstack.com/query", time: "5h", completed: false },
    { name: "Implement data fetching patterns", resource: "react-query-examples.dev", time: "7h", completed: false },
  ]);

  const toggleTask = (index: number) => {
    setTasks((prev) => prev.map((task, i) => i === index ? { ...task, completed: !task.completed } : task));
  };

  const completedCount = tasks.filter((t) => t.completed).length;
  const progressPercentage = (completedCount / tasks.length) * 100;

  return (
    <div className="min-h-screen bg-[#0A0E1A]">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-[240px] bg-[#0F1624] border-r border-[#1E2D40] py-6">
          <div className="px-6 mb-8">
            <div className="font-['Space_Grotesk'] text-lg font-bold">
              <span className="text-[#FAFAF8]">Vacan</span>
              <span className="text-[#F59E0B]">Fit</span>
            </div>
          </div>
          <nav className="space-y-1 px-3">
            <button className="w-full flex items-center gap-3 px-3 py-2 text-[#F59E0B] border-l-2 border-[#F59E0B] bg-[#1E2D40] rounded-r font-['Inter'] text-sm">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
              Dashboard
            </button>
            <button className="w-full flex items-center gap-3 px-3 py-2 text-[#64748B] hover:text-[#FAFAF8] hover:bg-[#1E2D40] rounded font-['Inter'] text-sm transition-colors">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              Roadmap
            </button>
            <button className="w-full flex items-center gap-3 px-3 py-2 text-[#64748B] hover:text-[#FAFAF8] hover:bg-[#1E2D40] rounded font-['Inter'] text-sm transition-colors">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Vacancies
            </button>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h1 className="font-['Space_Grotesk'] text-3xl text-[#FAFAF8] mb-1">Week 1 of 4</h1>
                <p className="text-[#64748B] font-['Inter']">TypeScript Fundamentals</p>
              </div>

              {/* FIX 3 — Streak with flame icon (kept) but enhanced */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 bg-[#0F1624] border border-[#2A3F5A] rounded-lg px-4 py-2">
                  <Flame className="w-5 h-5 text-[#F59E0B]" />
                  <div>
                    <span className="font-['Space_Grotesk'] text-[#FAFAF8] text-sm font-bold">3 day streak</span>
                    <p className="text-[11px] font-['JetBrains_Mono'] text-[#64748B]">keep it up!</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mb-2">
              <div className="flex justify-between font-['Inter'] mb-2">
                {/* FIX 4 — larger progress label */}
                <span className="text-[14px] text-[#64748B]">Week Progress</span>
                <span className="text-[14px] text-[#F59E0B] font-['JetBrains_Mono']">{Math.round(progressPercentage)}%</span>
              </div>
              <div className="h-2 bg-[#1E2D40] rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#F59E0B] transition-all duration-500"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
            </div>
          </div>

          {/* Activity Grid — GitHub contribution style */}
          <div className="bg-[#0F1624] border border-[#2A3F5A] rounded-xl p-4 mb-6 inline-block">
            <div className="flex items-center justify-between gap-4 mb-3">
              <span className="text-[11px] font-['JetBrains_Mono'] text-[#64748B] uppercase tracking-widest">Learning Activity</span>
              <span className="text-[11px] font-['JetBrains_Mono'] text-[#F59E0B]">Last 5 weeks</span>
            </div>
            {/* Day labels row */}
            <div className="flex gap-[3px] mb-[3px] ml-0">
              {DAY_LABELS.map((d, i) => (
                <div key={i} className="w-[14px] text-center text-[9px] font-['JetBrains_Mono'] text-[#374151]">{d}</div>
              ))}
            </div>
            {/* Grid: rows = weeks, cols = days */}
            <div className="flex flex-col gap-[3px]">
              {ACTIVITY_GRID.map((week, wi) => (
                <div key={wi} className="flex gap-[3px]">
                  {week.map((active, di) => {
                    const isStreakDay = wi === 4 && di >= 4;
                    return (
                      <div
                        key={di}
                        title={`${DAY_LABELS[di]}, week ${wi + 1}`}
                        className={`w-[14px] h-[14px] rounded-[3px] transition-colors ${
                          isStreakDay
                            ? "bg-[#F59E0B]"
                            : active
                            ? "bg-[#F59E0B]/40"
                            : "bg-[#1E2D40]"
                        }`}
                      />
                    );
                  })}
                </div>
              ))}
            </div>
            {/* Legend */}
            <div className="flex items-center gap-2 mt-3 justify-end">
              <span className="text-[9px] font-['JetBrains_Mono'] text-[#374151]">Less</span>
              {["bg-[#1E2D40]", "bg-[#F59E0B]/20", "bg-[#F59E0B]/40", "bg-[#F59E0B]/70", "bg-[#F59E0B]"].map((c, i) => (
                <div key={i} className={`w-[12px] h-[12px] rounded-[2px] ${c}`} />
              ))}
              <span className="text-[9px] font-['JetBrains_Mono'] text-[#374151]">More</span>
            </div>
          </div>

          {/* Task List */}
          <div className="space-y-3 mb-8">
            {tasks.map((task, index) => (
              <div
                key={index}
                className={`bg-[#0F1624] border border-[#2A3F5A] rounded-lg p-4 flex items-start gap-4 transition-all duration-200 ${task.completed ? "opacity-60" : "hover:border-[rgba(245,158,11,0.3)]"}`}
              >
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTask(index)}
                  className="mt-1 w-5 h-5 rounded border-[#2A3F5A] accent-[#F59E0B] cursor-pointer"
                />
                <div className="flex-1">
                  {/* FIX 4 — larger task name font */}
                  <div className={`font-['Inter'] text-[15px] mb-1.5 ${task.completed ? "line-through text-[#64748B]" : "text-[#FAFAF8]"}`}>
                    {task.name}
                  </div>
                  {/* FIX 4 — brighter resource link */}
                  <a
                    href="#"
                    className={`text-[13px] inline-flex items-center gap-1.5 transition-colors font-['Inter'] ${
                      task.completed ? "text-[#64748B]" : "text-[#F59E0B] hover:text-[#FBBF24]"
                    }`}
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    {task.resource}
                  </a>
                </div>
                {/* FIX 4 — larger time estimate */}
                <div className="text-[14px] text-[#94A3B8] font-['JetBrains_Mono'] font-medium">
                  {task.time}
                </div>
              </div>
            ))}
          </div>

          {/* Footer Actions */}
          <div className="flex gap-4">
            <button className="flex-1 py-3 text-[#FAFAF8] border border-[#2A3F5A] rounded-lg transition-all duration-200 hover:border-[rgba(245,158,11,0.3)] flex items-center justify-center gap-2 font-['Inter']">
              <Share2 className="w-4 h-4" /> Share progress
            </button>
            <button className="flex-1 py-3 bg-[#F59E0B] text-[#0A0E1A] font-bold rounded-lg transition-all duration-300 hover:brightness-110 hover:shadow-[0_0_20px_rgba(245,158,11,0.3)] font-['Inter']">
              View full roadmap
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}