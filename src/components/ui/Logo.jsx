function Logo({ size = "default" }) {
  const iconSize =
    size === "small"
      ? "h-9 w-9"
      : size === "large"
      ? "h-14 w-14"
      : "h-11 w-11";

  const titleSize =
    size === "small"
      ? "text-2xl"
      : size === "large"
      ? "text-4xl"
      : "text-3xl";

  const subtitleSize =
    size === "small"
      ? "text-xs"
      : "text-sm";

  return (
    <div className="flex items-center gap-3">
      <svg
        viewBox="0 0 64 64"
        className={iconSize}
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Leaf */}
        <path
          d="
            M52 12
            C43 12 30 18 22 30
            C16 39 15 48 21 54
            C27 60 37 59 46 51
            C56 42 58 26 52 12
            Z
          "
          fill="#A5CF83"
        />

        {/* Main vein */}
        <path
          d="
            M23 48
            C30 38 39 28 50 18
          "
          stroke="#5F9138"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        {/* Side vein */}
        <path
          d="
            M34 34
            L29 27
          "
          stroke="#5F9138"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* Side vein */}
        <path
          d="
            M40 29
            L35 22
          "
          stroke="#5F9138"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>

      <div>
        <h1
          className={`${titleSize} font-bold tracking-tight text-[#22262A]`}
        >
          LinkLeaf
        </h1>

        <p className={`${subtitleSize} text-[#6F757B]`}>
          Simple links. Better insights.
        </p>
      </div>
    </div>
  );
}

export default Logo;