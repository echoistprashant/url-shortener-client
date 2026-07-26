import { useState } from "react";

function UrlList({ urls, loading, onDelete }) {
  const [copiedCode, setCopiedCode] = useState(null);

  const handleCopy = async (shortCode) => {
    try {
      const shortUrl = `${window.location.origin}/${shortCode}`;

      await navigator.clipboard.writeText(shortUrl);

      setCopiedCode(shortCode);

      setTimeout(() => {
        setCopiedCode(null);
      }, 2000);
    } catch (error) {
      console.error("Failed to copy:", error);
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
            <th align="left">Actions</th>
          </tr>
        </thead>

        <tbody>
          {urls.map((url) => (
            <tr key={url.short_code}>
              <td>{url.original_url}</td>
              <td>{url.short_code}</td>
              <td>{url.clicks}</td>
              <td>{url.expires_at || "Never"}</td>

              <td>
                <button
                  onClick={() => handleCopy(url.short_code)}
                  style={{
                    marginRight: "10px",
                    padding: "6px 12px",
                    cursor: "pointer",
                  }}
                >
                  {copiedCode === url.short_code ? "Copied ✓" : "Copy"}
                </button>

                <button
                  onClick={() => onDelete(url.short_code)}
                  style={{
                    padding: "6px 12px",
                    backgroundColor: "#dc3545",
                    color: "#fff",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UrlList;