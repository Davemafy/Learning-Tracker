import { Link, useLocation } from "@tanstack/react-router";
import { Book, Gauge, Settings, StickyNote } from "lucide-react";
import Streak from "./Streak";

const Sidebar = ({ sidebarOpen, closeSideBar}) => {
  const activeTab = useLocation({ select: (location) => location.pathname });

  return (
    <aside
      className={`flex transition sm:transition-none flex-col shrink-0 bg-inherit h-full fixed top-0 z-100 sm:static border-r border-grey w-fit md:w-60 ${!sidebarOpen ? "-translate-x-full sm:translate-0" : "sm:w-60"}`}
    >
      <h2
        className={`p-8.25 py-8.25 text-2xl font-medium ${!sidebarOpen ? "w-[2ch] md:w-fit truncate" : ""}`}
      >
        TO<span className="text-amber-4 600 font-black">DAY</span>
      </h2>
      <ul className="flex-1 flex flex-col gap-2 p-6.25  sm:px-4.5 md:px-5.75   sm:mt-0">
        <li onClick={closeSideBar}>
          <Link
            className={`flex gap-2 font-medium  p-4 rounded-2xl ${activeTab == "/dashboard" ? "bg-inherit" : "opacity-60"}`}
            to="/dashboard"
          >
            <Gauge />
            <p className={`${sidebarOpen ? "" : "sm:hidden"}  md:block`}>
              Dashboard
            </p>
          </Link>
        </li>
        <li onClick={closeSideBar}>
          <Link
            className={`flex gap-2 font-medium  p-4 rounded-2xl ${activeTab == "/courses" ? "bg-inherit" : "opacity-60"}`}
            to="/courses"
          >
            <Book />
            <p className={`${sidebarOpen ? "" : "sm:hidden"}  md:block`}>
              Courses
            </p>
          </Link>
        </li>
        <li onClick={closeSideBar}>
          <Link
            className={`flex gap-2 font-medium  p-4 rounded-2xl ${activeTab == "/notes" ? "bg-inherit" : "opacity-60"}`}
            to="/notes"
          >
            <StickyNote />
            <p className={`${sidebarOpen ? "" : "sm:hidden"} md:block`}>
              Notes
            </p>
          </Link>
        </li>
        <li className="mt-auto p-4">
          <Streak sidebarOpen={sidebarOpen} />
        </li>
        <li onClick={closeSideBar} className="">
          <Link
            className={`flex gap-2 font-medium  p-4 rounded-2xl ${activeTab == "/settings" ? "bg-inherit" : "opacity-60"}`}
            to="/settings"
          >
            <Settings />
            <p className={`${sidebarOpen ? "" : "sm:hidden"} md:block`}>
              Settings
            </p>
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
