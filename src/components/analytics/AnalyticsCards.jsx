function AnalyticsCards({ stats }) {
  return (
    <div
      className="
        grid
        gap-6
        md:grid-cols-3
      "
    >
      {/* Total Clicks */}

      <div
        className="
          rounded-3xl
          border
          border-[#E6E3DB]
          bg-[#FAFAF8]
          p-6
          transition
          hover:shadow-md
        "
      >
        <p
          className="
            text-sm
            font-medium
            text-[#6F757B]
          "
        >
          Total Clicks
        </p>

        <h2
          className="
            mt-4
            text-5xl
            font-bold
            text-[#22262A]
          "
        >
          {stats.clicks}
        </h2>

        <p
          className="
            mt-3
            text-sm
            text-[#6F757B]
          "
        >
          Total visits received by this short link.
        </p>
      </div>

      {/* Status */}

      <div
        className="
          rounded-3xl
          border
          border-[#E6E3DB]
          bg-[#FAFAF8]
          p-6
          transition
          hover:shadow-md
        "
      >
        <p
          className="
            text-sm
            font-medium
            text-[#6F757B]
          "
        >
          Status
        </p>

        <h2
          className={`
            mt-4
            text-3xl
            font-bold
            ${
              stats.is_expired
                ? "text-red-600"
                : "text-green-600"
            }
          `}
        >
          {stats.is_expired ? "🔴 Expired" : "🟢 Active"}
        </h2>

        <p
          className="
            mt-4
            text-sm
            text-[#6F757B]
          "
        >
          {stats.is_expired
            ? "This short link has expired."
            : "This short link is currently active."}
        </p>
      </div>

      {/* Expiration */}

      <div
        className="
          rounded-3xl
          border
          border-[#E6E3DB]
          bg-[#FAFAF8]
          p-6
          transition
          hover:shadow-md
        "
      >
        <p
          className="
            text-sm
            font-medium
            text-[#6F757B]
          "
        >
          Expiration
        </p>

        <h2
          className="
            mt-4
            text-2xl
            font-bold
            text-[#22262A]
          "
        >
          {stats.expires_at
            ? new Date(stats.expires_at).toLocaleDateString()
            : "Never"}
        </h2>

        <p
          className="
            mt-4
            text-sm
            text-[#6F757B]
          "
        >
          {stats.expires_at
            ? "Expiry date for this short link."
            : "This short link does not expire."}
        </p>
      </div>
    </div>
  );
}

export default AnalyticsCards;