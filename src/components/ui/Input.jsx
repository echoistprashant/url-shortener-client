function Input({
  label,
  error,
  className = "",
  ...props
}) {
  return (
    <div className="space-y-2">
      {label && (
        <label className="text-sm font-medium text-[#6F757B]">
          {label}
        </label>
      )}

      <input
        {...props}
        className={`
          w-full
          rounded-xl
          border
          border-[#E6E3DB]
          bg-white
          px-4
          py-3
          text-[#22262A]
          placeholder:text-[#A0A4AA]
          outline-none
          transition
          focus:border-[#A5CF83]
          focus:ring-2
          focus:ring-[#D8E9C8]
          ${className}
        `}
      />

      {error && (
        <p className="text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}

export default Input;