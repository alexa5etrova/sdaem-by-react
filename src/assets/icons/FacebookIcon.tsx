import { DetailedHTMLProps, SVGAttributes } from "react";

interface FacebookIconProps extends DetailedHTMLProps<SVGAttributes<SVGAElement>, SVGAElement> {
  height?: string;
  width?: string;
}

const FacebookIcon = ({ height = "31", width = "31" }: FacebookIconProps): JSX.Element => {
  return (
    <svg width={width} height={height} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.8047 5.32031C10.2827 5.32031 5.80566 9.79731 5.80566 15.3193C5.80566 20.3093 9.46166 24.4453 14.2427 25.1983V18.2103H11.7027V15.3193H14.2427V13.1163C14.2427 10.6083 15.7357 9.22531 18.0187 9.22531C19.1127 9.22531 20.2587 9.42031 20.2587 9.42031V11.8793H18.9947C17.7547 11.8793 17.3667 12.6513 17.3667 13.4423V15.3173H20.1377L19.6947 18.2083H17.3667V25.1963C22.1477 24.4473 25.8037 20.3103 25.8037 15.3193C25.8037 9.79731 21.3267 5.32031 15.8047 5.32031V5.32031Z" />
    </svg>
  );
};

export default FacebookIcon;
