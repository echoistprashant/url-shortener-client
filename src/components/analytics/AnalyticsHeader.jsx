function AnalyticsHeader({
  title = "Analytics",
  subtitle = "View detailed insights for your shortened URL.",
}) {
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
      <h1
        className="
          text-3xl
          font-bold
          text-[#22262A]
        "
      >
        {title}
      </h1>

      <p
        className="
          mt-2
          text-[#6F757B]
        "
      >
        {subtitle}
      </p>
    </div>
  );
}

export default AnalyticsHeader;