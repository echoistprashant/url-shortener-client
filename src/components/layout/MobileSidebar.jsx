import { NavLink, useNavigate } from "react-router-dom";

import Logo from "../ui/Logo";

import { useAuth } from "../../context/AuthContext";


function MobileSidebar({
  open,
  setOpen,
}) {

  const { user, logout } = useAuth();
  const navigate = useNavigate();


  const navItems = [
    {
      name: "Dashboard",
      path: "/",
    },
  ];

  const handleLogout = () => {
    logout();
    setOpen(false);
    navigate("/login");
  };


  return (

    <>

      {/* Overlay */}

      {open && (

        <div
          onClick={() => setOpen(false)}
          className="
            fixed
            inset-0
            z-40
            bg-black/30
            backdrop-blur-sm
            lg:hidden
          "
        />

      )}



      {/* Sidebar */}

      <aside
        className={`
          fixed
          left-0
          top-0
          z-50
          h-full
          w-72
          border-r
          border-[#E6E3DB]
          bg-[#FAFAF8]
          transition-transform
          duration-300
          lg:hidden

          ${
            open
              ? "translate-x-0"
              : "-translate-x-full"
          }
        `}
      >


        {/* Logo */}

        <div
          className="
            flex
            items-center
            justify-between
            border-b
            border-[#E6E3DB]
            px-8
            py-8
          "
        >

          <Logo size="small" />


          <button
            onClick={() => setOpen(false)}
            className="
              rounded-lg
              px-3
              py-2
              text-[#6F757B]
              hover:bg-[#F0EEE7]
            "
          >
            ✕
          </button>


        </div>




        {/* Navigation */}

        <nav
          className="
            space-y-2
            p-6
          "
        >

          {navItems.map((item) => (

            <NavLink
              key={item.name}
              to={item.path}

              onClick={() => setOpen(false)}

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
            absolute
            bottom-0
            w-full
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

          <button
            onClick={handleLogout}
            className="
              mt-5
              w-full
              rounded-xl
              bg-[#A5CF83]
              px-4
              py-3
              text-sm
              font-semibold
              text-[#173404]
              transition
              hover:bg-[#96C873]
            "
          >
            Logout
          </button>

          </div>

        </div>


      </aside>

    </>

  );
}


export default MobileSidebar;
