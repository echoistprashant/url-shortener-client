import { Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../../context/AuthContext";

function Header({ onMenuClick }) {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header
      className="
        flex
        items-center
        justify-between
        border-b
        border-[#E6E3DB]
        bg-[#FAFAF8]
        px-5
        py-5
        sm:px-8
        sm:py-6
      "
    >
      {/* Left */}

      <div className="flex items-center gap-4">

        {/* Mobile Menu */}

        <button
          onClick={onMenuClick}
          className="
            rounded-xl
            p-2
            text-[#22262A]
            transition
            hover:bg-[#F0EEE7]
            lg:hidden
          "
        >
          <Menu size={24} />
        </button>

        <div>
          <h1
            className="
              text-xl
              font-bold
              text-[#22262A]
              sm:text-2xl
            "
          >
            Dashboard
          </h1>

          <p
            className="
              mt-1
              hidden
              text-[#6F757B]
              sm:block
            "
          >
            Manage all your shortened links from one place.
          </p>
        </div>

      </div>

      {/* Right */}

      <button
        onClick={handleLogout}
        className="
          rounded-xl
          bg-red-600
          px-4
          py-2.5
          text-sm
          font-semibold
          text-white
          transition
          hover:bg-red-700
          active:scale-95
          sm:px-5
          sm:py-3
        "
      >
        Logout
      </button>

    </header>
  );
}

export default Header;