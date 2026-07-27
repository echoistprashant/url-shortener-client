import { useToast } from "../../context/ToastContext";

function ActionButtons({ stats }) {
  const { showToast } = useToast();

  const handleCopy = async () => {
    try {
      const shortUrl = `${window.location.origin}/${stats.short_code}`;

      await navigator.clipboard.writeText(shortUrl);

      showToast("Short link copied successfully");
    } catch (error) {
      console.error(error);

      showToast("Failed to copy link", "error");
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
      <h2
        className="
          text-xl
          font-semibold
          text-[#22262A]
        "
      >
        Actions
      </h2>

      <p
        className="
          mt-2
          text-[#6F757B]
        "
      >
        Manage and access your shortened link.
      </p>

      <div
        className="
          mt-6
          flex
          flex-wrap
          gap-4
        "
      >
        {/* Copy */}

        <button
          onClick={handleCopy}
          className="
            rounded-xl
            bg-[#A5CF83]
            px-6
            py-3
            font-medium
            text-[#173404]
            transition
            hover:bg-[#96C873]
          "
        >
          Copy Short Link
        </button>

        {/* Open Original */}

        <a
          href={stats.original_url}
          target="_blank"
          rel="noopener noreferrer"
          className="
            rounded-xl
            border
            border-[#E6E3DB]
            bg-white
            px-6
            py-3
            font-medium
            text-[#22262A]
            transition
            hover:bg-[#F7F5F0]
          "
        >
          Open Original URL
        </a>

        {/* Open Short Link */}

        <a
          href={`${window.location.origin}/${stats.short_code}`}
          target="_blank"
          rel="noopener noreferrer"
          className="
            rounded-xl
            border
            border-[#A5CF83]
            bg-[#F7FBF3]
            px-6
            py-3
            font-medium
            text-[#639922]
            transition
            hover:bg-[#EEF7E7]
          "
        >
          Open Short Link
        </a>
      </div>
    </div>
  );
}

export default ActionButtons;