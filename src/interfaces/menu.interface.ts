export interface LinksModel {
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
