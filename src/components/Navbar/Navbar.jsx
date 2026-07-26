import { useAuth } from "../../context/AuthContext";

function Navbar() {
  const { user } = useAuth();

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "16px 32px",
        borderBottom: "1px solid #ddd",
      }}
    >
      <h2>URL Shortener</h2>

      <div>
        <span style={{ marginRight: "20px" }}>
          Welcome, {user?.username}
        </span>

        <button>
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;