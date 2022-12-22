const ChevronIcon = ({ className, color, width = "20", height = "20" }) => {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox="0 0 9 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 14.8574L7.57143 8.28599L0.999999 1.71456"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
export default ChevronIcon;
