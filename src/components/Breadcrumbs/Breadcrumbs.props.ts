import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface BreadcrumbsProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement> {
  crumbs: [{ id: number; url: string; title: string }];
}
