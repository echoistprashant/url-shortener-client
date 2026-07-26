import Navbar from "../../components/Navbar/Navbar";
import ShortenUrlForm from "../../components/ShortenUrlForm/ShortenUrlForm";
import { useAuth } from "../../context/AuthContext";

function Dashboard() {
  const { user } = useAuth();

  return (
    <div>
      <Navbar />

      <main
        style={{
          maxWidth: "1000px",
          margin: "40px auto",
          padding: "0 20px",
        }}
      >
        <h1>Dashboard</h1>

        <div
          style={{
            marginTop: "20px",
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "8px",
          }}
        >
          <h2>Welcome, {user?.username} 👋</h2>

          <p>
            <strong>Email:</strong> {user?.email}
          </p>

          <p>
            <strong>User ID:</strong> {user?.id}
          </p>
        </div>

        <ShortenUrlForm />
      </main>
    </div>
  );
}

export default Dashboard;