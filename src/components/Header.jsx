import { MenuSquare } from "lucide-react";
import { useLocation } from "@tanstack/react-router";

function Header({ toogleSidebar }) {
  const pathname = useLocation({ select: (location) => location.pathname }).replace("/", "");
  const activeTab = pathname[0].toUpperCase() + pathname.slice(1)

  return (
    <header className={`flex items-center border-b border-grey`}>
      <div className="w-full z-10 flex items-center justify-between bg-inherit p-5 sm:p-7 md:p:8.25 px-8.25">
        <h2 className="text-2xl font-medium leading-6">{activeTab}</h2>
        <div className="md:hidden">
          <button onClick={toogleSidebar} className="p-2 cursor-pointer">
            <MenuSquare size={30} className="bg-[#0005] text-white rounded-md" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
