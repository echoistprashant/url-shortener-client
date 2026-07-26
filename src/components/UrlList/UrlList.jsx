import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { getMyUrls } from "../../services/urlService";

function UrlList() {
  const { token } = useAuth();

  const [urls, setUrls] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUrls();
  }, []);

  const fetchUrls = async () => {
    try {
      const data = await getMyUrls(token);
      setUrls(data.urls);
    } catch (error) {
      console.error("Failed to fetch URLs:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <p>Loading your URLs...</p>;
  }

  if (urls.length === 0) {
    return <p>You haven't created any short URLs yet.</p>;
  }

  return (
    <div
      style={{
        marginTop: "30px",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "8px",
      }}
    >
      <h2>My URLs</h2>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginTop: "20px",
        }}
      >
        <thead>
          <tr>
            <th align="left">Original URL</th>
            <th align="left">Short Code</th>
            <th align="left">Clicks</th>
            <th align="left">Expires</th>
          </tr>
        </thead>

        <tbody>
          {urls.map((url, index) => (
            <tr key={index}>
              <td>{url.original_url}</td>
              <td>{url.short_code}</td>
              <td>{url.clicks}</td>
              <td>{url.expires_at || "Never"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UrlList;