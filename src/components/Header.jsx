import { Menu, MenuSquare } from "lucide-react";
import { useLocation } from "@tanstack/react-router";

function Header({ sidebarOpen, toogleSidebar }) {
  const pathname = useLocation({ select: (location) => location.pathname }).replace("/", "");
  const activeTab = pathname[0].toUpperCase() + pathname.slice(1)

  return (
    <header className={`hidden items-center border-b border-grey`}>
      <div className="w-full z-10 flex items-center justify-between bg-inherit p-6.25 py-4 lg:py-6.75">
        <h2 className="text-2xl font-medium leading-6 ">{activeTab}</h2>
        <div className="lg:hidden">
          <button onClick={toogleSidebar} className="p-2 cursor-pointer">
            <Menu
              size={30}
              className={`p-0.5 py-1 border-[1.5px] ${sidebarOpen && "bg-black text-white"} rounded-md`}
            />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
