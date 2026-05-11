import { useState } from "react";
import { Share2, ExternalLink, Flame } from "lucide-react";

export function ProgressDashboard() {
  const [tasks, setTasks] = useState([
    {
      name: "Complete TypeScript basics tutorial",
      resource: "typescript-tutorial.dev",
      time: "4h",
      completed: true,
    },
    {
      name: "Build a typed Todo app",
      resource: "github.com/example",
      time: "6h",
      completed: true,
    },
    {
      name: "Practice with type guards",
      resource: "exercism.org",
      time: "3h",
      completed: false,
    },
    {
      name: "React Query core concepts",
      resource: "tanstack.com/query",
      time: "5h",
      completed: false,
    },
    {
      name: "Implement data fetching patterns",
      resource: "react-query-examples",
      time: "7h",
      completed: false,
    },
  ]);

  const toggleTask = (index: number) => {
    setTasks((prev) =>
      prev.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const completedCount = tasks.filter((t) => t.completed).length;
  const progressPercentage = (completedCount / tasks.length) * 100;

  return (
    <div className="min-h-screen bg-[#0A0E1A]">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-[240px] bg-[#0F1624] border-r border-[#1E2D40] py-6">
          <div className="px-6 mb-8">
            <div className="font-['Space_Grotesk']">
              <span className="text-[#FAFAF8]">Vacan</span>
              <span className="text-[#F59E0B]">Fit</span>
            </div>
          </div>

          <nav className="space-y-1 px-3">
            <button className="w-full flex items-center gap-3 px-3 py-2 text-[#F59E0B] border-l-2 border-[#F59E0B] bg-[#1E2D40] rounded-r font-['Inter']">
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                />
              </svg>
              Dashboard
            </button>
            <button className="w-full flex items-center gap-3 px-3 py-2 text-[#64748B] hover:text-[#FAFAF8] hover:bg-[#1E2D40] rounded font-['Inter'] transition-colors">
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
              </svg>
              Roadmap
            </button>
            <button className="w-full flex items-center gap-3 px-3 py-2 text-[#64748B] hover:text-[#FAFAF8] hover:bg-[#1E2D40] rounded font-['Inter'] transition-colors">
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
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
                <h1 className="font-['Space_Grotesk'] text-3xl text-[#FAFAF8] mb-1">
                  Week 1 of 4
                </h1>
                <p className="text-[#64748B] font-['Inter']">
                  TypeScript Fundamentals
                </p>
              </div>
              <div className="flex items-center gap-2 bg-[#0F1624] border border-[#2A3F5A] rounded-lg px-4 py-2">
                <Flame className="w-5 h-5 text-[#F59E0B]" />
                <span className="font-['Space_Grotesk'] text-[#FAFAF8]">
                  3 day streak
                </span>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mb-2">
              <div className="flex justify-between text-sm font-['Inter'] mb-2">
                <span className="text-[#64748B]">Week Progress</span>
                <span className="text-[#F59E0B]">
                  {Math.round(progressPercentage)}%
                </span>
              </div>
              <div className="h-2 bg-[#1E2D40] rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#F59E0B] transition-all duration-500"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
            </div>
          </div>

          {/* Task List */}
          <div className="space-y-3 mb-8">
            {tasks.map((task, index) => (
              <div
                key={index}
                className={`bg-[#0F1624] border border-[#2A3F5A] rounded-lg p-4 flex items-start gap-4 transition-all duration-200 ${
                  task.completed ? "opacity-60" : ""
                }`}
              >
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTask(index)}
                  className="mt-1 w-5 h-5 rounded border-[#2A3F5A] accent-[#F59E0B] cursor-pointer"
                />
                <div className="flex-1">
                  <div
                    className={`font-['Inter'] mb-1 ${
                      task.completed
                        ? "line-through text-[#64748B]"
                        : "text-[#FAFAF8]"
                    }`}
                  >
                    {task.name}
                  </div>
                  <a
                    href="#"
                    className={`text-sm inline-flex items-center gap-1 hover:underline ${
                      task.completed ? "text-[#64748B]" : "text-[#F59E0B]"
                    }`}
                  >
                    {task.resource}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <div className="text-sm text-[#64748B] font-['JetBrains_Mono']">
                  {task.time}
                </div>
              </div>
            ))}
          </div>

          {/* Footer Actions */}
          <div className="flex gap-4">
            <button className="flex-1 py-3 text-[#FAFAF8] border border-[#2A3F5A] rounded-lg transition-all duration-200 hover:border-[rgba(245,158,11,0.19)] flex items-center justify-center gap-2 font-['Inter']">
              <Share2 className="w-4 h-4" />
              Share progress
            </button>
            <button className="flex-1 py-3 bg-[#F59E0B] text-[#0A0E1A] rounded-lg transition-all duration-300 hover:brightness-110 hover:shadow-[0_0_12px_rgba(245,158,11,0.19)] font-['Inter']">
              View full roadmap
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
