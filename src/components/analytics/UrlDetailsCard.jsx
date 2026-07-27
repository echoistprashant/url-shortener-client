function UrlDetailsCard({ stats }) {
  return (
    <div
      className="
        rounded-3xl
        border
        border-[#E6E3DB]
        bg-[#FAFAF8]
        p-8
        space-y-8
      "
    >
      {/* Original URL */}

      <div>
        <h3
          className="
            text-lg
            font-semibold
            text-[#22262A]
          "
        >
          Original URL
        </h3>

        <p
          className="
            mt-3
            break-all
            rounded-xl
            border
            border-[#E6E3DB]
            bg-white
            p-4
            text-[#6F757B]
          "
        >
          {stats.original_url}
        </p>
      </div>

      {/* Short Link */}

      <div>
        <h3
          className="
            text-lg
            font-semibold
            text-[#22262A]
          "
        >
          Short Link
        </h3>

        <a
          href={`${window.location.origin}/${stats.short_code}`}
          target="_blank"
          rel="noopener noreferrer"
          className="
            mt-3
            block
            break-all
            rounded-xl
            border
            border-[#E6E3DB]
            bg-white
            p-4
            font-medium
            text-[#639922]
            transition
            hover:bg-[#F7F5F0]
            hover:underline
          "
        >
          {window.location.origin}/{stats.short_code}
        </a>
      </div>

      {/* Short Code */}

      <div>
        <h3
          className="
            text-lg
            font-semibold
            text-[#22262A]
          "
        >
          Short Code
        </h3>

        <div
          className="
            mt-3
            inline-flex
            items-center
            rounded-xl
            bg-[#A5CF83]
            px-5
            py-3
            font-semibold
            text-[#173404]
          "
        >
          {stats.short_code}
        </div>
      </div>
    </div>
  );
}

export default UrlDetailsCard;