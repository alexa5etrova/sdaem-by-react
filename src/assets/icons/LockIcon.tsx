import { DetailedHTMLProps, SVGAttributes } from "react";

interface LockIconProps extends DetailedHTMLProps<SVGAttributes<SVGAElement>, SVGAElement> {
  height?: string;
  width?: string;
}

const LockIcon = ({ height = "16", width = "20", className }: LockIconProps): JSX.Element => {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox="0 0 16 20"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M13.625 7.5H13V5C13 2.2425 10.7575 0 8 0C5.2425 0 3 2.2425 3 5V7.5H2.375C1.34167 7.5 0.5 8.34083 0.5 9.375V18.125C0.5 19.1592 1.34167 20 2.375 20H13.625C14.6583 20 15.5 19.1592 15.5 18.125V9.375C15.5 8.34083 14.6583 7.5 13.625 7.5ZM4.66667 5C4.66667 3.16167 6.16167 1.66667 8 1.66667C9.83833 1.66667 11.3333 3.16167 11.3333 5V7.5H4.66667V5ZM8.83333 13.935V15.8333C8.83333 16.2933 8.46083 16.6667 8 16.6667C7.53917 16.6667 7.16667 16.2933 7.16667 15.8333V13.935C6.67083 13.6458 6.33333 13.1142 6.33333 12.5C6.33333 11.5808 7.08083 10.8333 8 10.8333C8.91917 10.8333 9.66667 11.5808 9.66667 12.5C9.66667 13.1142 9.32917 13.6458 8.83333 13.935Z" />
    </svg>
  );
};

export default LockIcon;
