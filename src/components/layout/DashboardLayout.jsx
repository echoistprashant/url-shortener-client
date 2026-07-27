import Sidebar from "./Sidebar";
import Header from "./Header";

function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#F7F5F0]">
      <div className="flex">

        <Sidebar />

        <div className="flex min-h-screen flex-1 flex-col">

          <Header />

          <main className="flex-1 px-10 py-8">
            {children}
          </main>

        </div>

      </div>
    </div>
  );
}

export default DashboardLayout;