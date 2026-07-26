import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { createShortUrl } from "../../services/urlService";

function ShortenUrlForm() {
  const { token } = useAuth();

  const [url, setUrl] = useState("");
  const [customAlias, setCustomAlias] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);

    try {
      const data = await createShortUrl(
        {
          url,
          custom_alias: customAlias || null,
        },
        token
      );

      setShortUrl(data.short_url);

      setUrl("");
      setCustomAlias("");
    } catch (error) {
      console.error(error);

      alert(
        error.response?.data?.detail ||
          "Failed to create short URL."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        marginTop: "30px",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "8px",
      }}
    >
      <h2>Create Short URL</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="url">Long URL</label>
          <br />

          <input
            id="url"
            type="url"
            placeholder="https://example.com"
            value={url}
            onChange={(event) => setUrl(event.target.value)}
            required
            style={{
              width: "100%",
              padding: "10px",
              marginTop: "8px",
            }}
          />
        </div>

        <br />

        <div>
          <label htmlFor="customAlias">
            Custom Alias (Optional)
          </label>
          <br />

          <input
            id="customAlias"
            type="text"
            placeholder="my-link"
            value={customAlias}
            onChange={(event) => setCustomAlias(event.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              marginTop: "8px",
            }}
          />
        </div>

        <br />

        <button type="submit" disabled={loading}>
          {loading ? "Creating..." : "Shorten URL"}
        </button>
      </form>

      {shortUrl && (
        <div
          style={{
            marginTop: "20px",
            padding: "15px",
            border: "1px solid green",
            borderRadius: "8px",
          }}
        >
          <h3>Short URL Created 🎉</h3>

          <a
            href={shortUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {shortUrl}
          </a>
        </div>
      )}
    </div>
  );
}

export default ShortenUrlForm;