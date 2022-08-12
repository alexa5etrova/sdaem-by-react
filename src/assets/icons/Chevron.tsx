import { DetailedHTMLProps, SVGAttributes } from "react";

interface ChevronIconProps extends DetailedHTMLProps<SVGAttributes<SVGAElement>, SVGAElement> {
  height: string;
  width: string;
}

const ChevronIcon = ({ height = "9", width = "16" }: ChevronIconProps): JSX.Element => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 9 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 14.8574L7.57143 8.28599L0.999999 1.71456"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default ChevronIcon;
