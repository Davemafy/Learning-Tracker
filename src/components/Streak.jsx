import { CheckCheck, Flame, FlameKindlingIcon } from "lucide-react";

const Streak = ({ sidebarOpen }) => {
  return (
    <div
      className={`flex  flex-col gap-4 md:gap-8.75 py-6.25  md:p-0 md:py-10 sm:border-b border-grey font-semibold`}
    >
      <div className="flex items-center gap-2 opacity-50 f">
        <CheckCheck />
        <p>
          <span className={`${!sidebarOpen ? "hidden" : ""} md:inline`}>
            Logged Today
          </span>
          <span className="hidden md:inline"></span>
        </p>
      </div>
      <div className="flex items-center gap-2 opacity-50">
        <Flame />
        <p>
          <span className={`${!sidebarOpen ? "hidden" : ""} md:inline`}>
            0-day streak
          </span>
        </p>
      </div>
    </div>
  );
};

export default Streak;
