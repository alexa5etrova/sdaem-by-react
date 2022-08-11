export interface LinksModel {
  name: string;
  id: number;
  path: string;
}
export interface SiteMapModel {
  name: string;
  id: number;
  path: string;
}

export interface CategoriesModel {
  name: string;
  id: number;
  path: string;
  value: "cars" | "flats" | "saunas" | "cottages";
}
export interface FlatCategoriesModel {
  name: string;
  id: number;
  path: string;
  total: number;
}
export interface CottagesCategoriesModel {
  name: string;
  id: number;
  path: string;
  total: number;
}
export interface PopularCategoriesModel {
  name: string;
  id: number;
  path: string;
}
