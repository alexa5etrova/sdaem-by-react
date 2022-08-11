import { DetailedHTMLProps, HTMLAttributes } from "react";
import { CrumbsModel } from "../../interfaces/menu.interface";

export interface BreadcrumbsProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement> {
  crumbs: CrumbsModel[];
}
