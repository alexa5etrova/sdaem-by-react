import { DetailedHTMLProps, HTMLAttributes } from "react";
import { LinksModel } from "./../../interfaces/menu.interface";

export interface DropdownProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement> {
  links: LinksModel[];
  closeMenu: void;
}
