function Button({
  children,
  type = "button",
  className = "",
  ...props
}) {
  return (
    <button
      type={type}
      {...props}
      className={`
        w-full
        rounded-xl
        bg-[#A5CF83]
        py-3.5
        font-semibold
        text-[#173404]
        transition-all
        duration-200
        hover:bg-[#96C873]
        hover:cursor-pointer
        active:scale-[0.98]
        disabled:cursor-not-allowed
        disabled:opacity-50
        ${className}
      `}
    >
      {children}
    </button>
  );
}

export default Button;