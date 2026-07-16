const Logo = ({ className = '' }) => {
  return (
    <svg
      viewBox="0 0 180 40"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="ALKESH logo"
    >
      <text
        x="0"
        y="30"
        fill="#c9a84c"
        fontFamily="'Altone', sans-serif"
        fontWeight="700"
        fontStyle="italic"
        fontSize="28"
        letterSpacing="3"
      >
        ALKESH
      </text>
    </svg>
  );
};

export default Logo;
