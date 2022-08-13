import { DetailedHTMLProps, SVGAttributes } from "react";

interface TelegramIconProps extends DetailedHTMLProps<SVGAttributes<SVGAElement>, SVGAElement> {
  height?: string;
  width?: string;
}

const TelegramIcon = ({
  height = "14",
  width = "12",
  className,
}: TelegramIconProps): JSX.Element => {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox="0 0 14 12"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M13.0172 0.246571L0.704696 4.99449C-0.135581 5.33199 -0.13072 5.80074 0.55053 6.00977L3.71164 6.99588L11.0255 2.38129C11.3714 2.17088 11.6873 2.28407 11.4276 2.51463L5.50192 7.86255H5.50053L5.50192 7.86324L5.28386 11.1216C5.60331 11.1216 5.74428 10.975 5.92345 10.8021L7.45886 9.30907L10.6526 11.6681C11.2415 11.9924 11.6644 11.8257 11.8109 11.123L13.9075 1.2424C14.1221 0.381988 13.579 -0.00759572 13.0172 0.246571V0.246571Z" />
    </svg>
  );
};

export default TelegramIcon;
