import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import ShortenUrlForm from "../../components/ShortenUrlForm/ShortenUrlForm";
import UrlList from "../../components/UrlList/UrlList";
import { useAuth } from "../../context/AuthContext";
import {
  getMyUrls,
  deleteShortUrl,
} from "../../services/urlService";

function Dashboard() {
  const { user, token } = useAuth();

  const [urls, setUrls] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const fetchUrls = async () => {
    try {
      setLoading(true);

      const data = await getMyUrls(token, search);
      setUrls(data.urls);
    } catch (error) {
      console.error("Failed to fetch URLs:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (shortCode) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this URL?"
    );

    if (!confirmed) {
      return;
    }

    try {
      await deleteShortUrl(shortCode, token);
      await fetchUrls();
    } catch (error) {
      console.error("Failed to delete URL:", error);
      alert("Failed to delete URL.");
    }
  };

  useEffect(() => {
    fetchUrls();
  }, [search]);

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

        <ShortenUrlForm onUrlCreated={fetchUrls} />

        <div
          style={{
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >
          <input
            type="text"
            placeholder="Search URLs..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              fontSize: "16px",
              borderRadius: "6px",
              border: "1px solid #ccc",
              boxSizing: "border-box",
            }}
          />
        </div>

        <UrlList
          urls={urls}
          loading={loading}
          onDelete={handleDelete}
        />
      </main>
    </div>
  );
}

export default Dashboard;