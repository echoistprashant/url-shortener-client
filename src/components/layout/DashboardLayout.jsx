import { useState } from "react";

import Sidebar from "./Sidebar";
import Header from "./Header";
import MobileSidebar from "./MobileSidebar";

function DashboardLayout({ children }) {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F7F5F0]">
      <div className="flex">

        <Sidebar />
        <MobileSidebar
          open={mobileSidebarOpen}
          setOpen={setMobileSidebarOpen}
        />

        <div className="flex min-h-screen flex-1 flex-col">

          <Header onMenuClick={() => setMobileSidebarOpen(true)} />

          <main className="flex-1 px-10 py-8">
            {children}
          </main>

        </div>

      </div>
    </div>
  );
}

export default DashboardLayout;
