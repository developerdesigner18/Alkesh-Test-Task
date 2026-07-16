const DiamondIcon = ({ className = '' }) => {
  return (
    <svg
      viewBox="0 0 60 60"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M30 2L58 30L30 58L2 30L30 2Z"
        stroke="currentColor"
        strokeWidth="1"
      />
      <rect
        x="13"
        y="13"
        width="34"
        height="34"
        stroke="currentColor"
        strokeWidth="1"
        transform="rotate(45 30 30)"
      />
      <path
        d="M30 14L46 30L30 46L14 30L30 14Z"
        stroke="currentColor"
        strokeWidth="1"
      />
    </svg>
  );
};

export default DiamondIcon;
