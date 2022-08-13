import { DetailedHTMLProps, SVGAttributes } from "react";

interface ChevronIconProps extends DetailedHTMLProps<SVGAttributes<SVGAElement>, SVGAElement> {
  height?: string;
  width?: string;
}

const ChevronIcon = ({ height = "19", width = "18", className }: ChevronIconProps): JSX.Element => {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox="0 0 19 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 6.75L9.5 11.25L14 6.75"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default ChevronIcon;
