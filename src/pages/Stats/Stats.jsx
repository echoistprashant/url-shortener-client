import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getUrlStats } from "../../services/urlService";
import { useAuth } from "../../context/AuthContext";

function Stats() {
  const { shortCode } = useParams();
  const { token } = useAuth();

  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const data = await getUrlStats(shortCode, token);
        setStats(data);
      } catch (err) {
        console.error(err);

        if (err.response) {
          setError(err.response.data.detail);
        } else if (err.request) {
          setError("No response received from the server.");
        } else {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, [shortCode, token]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }

  return (
    <div>
      <h1>URL Statistics</h1>

      <p>
        <strong>Original URL:</strong> {stats.original_url}
      </p>

      <p>
        <strong>Short Code:</strong> {stats.short_code}
      </p>

      <p>
        <strong>Total Clicks:</strong> {stats.clicks}
      </p>

      <p>
        <strong>Expires At:</strong>{" "}
        {stats.expires_at ? stats.expires_at : "Never"}
      </p>

      <p>
        <strong>Status:</strong>{" "}
        {stats.is_expired ? "Expired" : "Active"}
      </p>
    </div>
  );
}

export default Stats;