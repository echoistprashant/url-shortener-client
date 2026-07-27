import { useState } from "react";

import { useAuth } from "../../context/AuthContext";
import { useToast } from "../../context/ToastContext";

import { createShortUrl } from "../../services/urlService";

function ShortenUrlForm({ onUrlCreated }) {
  const { token } = useAuth();
  const { showToast } = useToast();

  const [url, setUrl] = useState("");
  const [customAlias, setCustomAlias] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);
    setError("");

    try {
      const data = await createShortUrl(
        {
          url,
          custom_alias: customAlias || null,
        },
        token
      );

      setShortUrl(data.short_url);

      showToast("Short URL created successfully");

      await onUrlCreated();

      setUrl("");
      setCustomAlias("");

    } catch (error) {
      console.error(error);

      const message =
        error.response?.data?.detail ||
        "Failed to create short URL.";

      setError(message);

      showToast(message, "error");

    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="
        rounded-3xl
        border
        border-[#E6E3DB]
        bg-[#FAFAF8]
        p-8
      "
    >
      {/* Header */}

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-[#22262A]">
          Create new link
        </h2>

        <p className="mt-2 text-[#6F757B]">
          Shorten your URL and share it instantly.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        {/* Long URL */}

        <div>
          <label
            htmlFor="url"
            className="
              mb-2
              block
              text-sm
              font-medium
              text-[#6F757B]
            "
          >
            Long URL
          </label>

          <input
            id="url"
            type="url"
            placeholder="https://example.com"
            value={url}
            onChange={(event) => setUrl(event.target.value)}
            required
            className="
              w-full
              rounded-xl
              border
              border-[#E6E3DB]
              bg-white
              px-4
              py-3
              text-[#22262A]
              placeholder:text-[#9AA0A6]
              outline-none
              transition
              focus:border-[#A5CF83]
              focus:ring-2
              focus:ring-[#D8E9C8]
            "
          />
        </div>

        {/* Custom Alias */}

        <div>
          <label
            htmlFor="customAlias"
            className="
              mb-2
              block
              text-sm
              font-medium
              text-[#6F757B]
            "
          >
            Custom Alias

            <span className="ml-2 text-xs text-[#9AA0A6]">
              optional
            </span>
          </label>

          <input
            id="customAlias"
            type="text"
            placeholder="my-link"
            value={customAlias}
            onChange={(event) =>
              setCustomAlias(event.target.value)
            }
            className="
              w-full
              rounded-xl
              border
              border-[#E6E3DB]
              bg-white
              px-4
              py-3
              text-[#22262A]
              placeholder:text-[#9AA0A6]
              outline-none
              transition
              focus:border-[#A5CF83]
              focus:ring-2
              focus:ring-[#D8E9C8]
            "
          />
        </div>

        {/* Error */}

        {error && (
          <div
            className="
              rounded-xl
              border
              border-red-200
              bg-red-50
              px-4
              py-3
              text-sm
              text-red-600
            "
          >
            {error}
          </div>
        )}

        {/* Button */}

        <button
          type="submit"
          disabled={loading}
          className="
            w-full
            rounded-xl
            bg-[#A5CF83]
            py-3.5
            font-semibold
            text-[#173404]
            transition
            hover:bg-[#96C873]
            disabled:cursor-not-allowed
            disabled:opacity-50
          "
        >
          {loading
            ? "Creating..."
            : "Create Short Link"}
        </button>
      </form>

      {/* Success Result */}

      {shortUrl && (
        <div
          className="
            mt-8
            rounded-2xl
            border
            border-[#D8E9C8]
            bg-[#F3F8ED]
            p-5
          "
        >
          <h3
            className="
              text-lg
              font-semibold
              text-[#22262A]
            "
          >
            Short URL Created 🎉
          </h3>

          <a
            href={shortUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
              mt-3
              block
              break-all
              font-medium
              text-[#639922]
              hover:underline
            "
          >
            {shortUrl}
          </a>
        </div>
      )}
    </div>
  );
}

export default ShortenUrlForm;