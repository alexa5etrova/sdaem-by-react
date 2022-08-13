import { DetailedHTMLProps, SVGAttributes } from "react";

interface TileIconProps extends DetailedHTMLProps<SVGAttributes<SVGAElement>, SVGAElement> {
  height?: string;
  width?: string;
}

const TileIcon = ({ height = "15", width = "14", className }: TileIconProps): JSX.Element => {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox="0 0 15 14"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0.00390625" width="5.44444" height="5.44444" rx="1" />
      <rect x="0.00390625" y="8.55469" width="5.44444" height="5.44444" rx="1" />
      <rect x="8.55957" width="5.44444" height="5.44444" rx="1" />
      <rect x="8.55957" y="8.55469" width="5.44444" height="5.44444" rx="1" />
    </svg>
  );
};

export default TileIcon;
