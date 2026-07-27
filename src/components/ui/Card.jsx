function Card({ children, className = "" }) {
  return (
    <div
      className={`
        rounded-3xl
        border
        border-[#E6E3DB]
        bg-[#FAFAF8]
        p-12
        ${className}
      `}
    >
      {children}
    </div>
  );
}

export default Card;