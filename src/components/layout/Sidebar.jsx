import { NavLink } from "react-router-dom";

import Logo from "../ui/Logo";

import { useAuth } from "../../context/AuthContext";

function Sidebar() {
  const { user } = useAuth();

  const navItems = [
    {
      name: "Dashboard",
      path: "/",
    },
    {
      name: "Analytics",
      path: "/stats",
    },
    {
      name: "Settings",
      path: "/settings",
    },
  ];

  return (
    <aside
      className="
        hidden
        w-72
        border-r
        border-[#E6E3DB]
        bg-[#FAFAF8]
        lg:flex
        lg:flex-col
      "
    >
      {/* Logo */}

      <div
        className="
          border-b
          border-[#E6E3DB]
          px-8
          py-8
        "
      >
        <Logo size="small" />
      </div>

      {/* Navigation */}

      <nav
        className="
          flex-1
          space-y-2
          p-6
        "
      >
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `
              flex
              items-center
              rounded-xl
              px-4
              py-3
              text-sm
              font-medium
              transition

              ${
                isActive
                  ? "bg-[#A5CF83] text-[#173404]"
                  : "text-[#6F757B] hover:bg-[#F0EEE7]"
              }
              `
            }
          >
            {item.name}
          </NavLink>
        ))}
      </nav>

      {/* User */}

      <div
        className="
          border-t
          border-[#E6E3DB]
          p-6
        "
      >
        <div
          className="
            rounded-2xl
            bg-white
            p-4
          "
        >
          <p
            className="
              font-semibold
              text-[#22262A]
            "
          >
            {user?.username || "User"}
          </p>

          <p
            className="
              mt-1
              truncate
              text-sm
              text-[#6F757B]
            "
          >
            {user?.email}
          </p>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;