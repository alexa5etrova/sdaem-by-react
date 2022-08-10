import { EquipmentModel } from "./flat.interface";

export interface FilterValues {
  city: string;
  rooms: string;
  priceMin: string;
  priceMax: string;
  places: string;
  district: string;
  metro: string;
  checked?: string[];
}

export interface EquipmentSelectModel {
  id: number;
  title: string;
  value: string;
}

export interface DistrictSelectModel {
  id: number;
  name: string;
}
export interface MetroSelectModel {
  id: number;
  name: string;
}
export interface SleepingPlacesSelectModel {
  id: number;
  name: string;
  value: string;
}
export interface RoomsSelectModel {
  id: number;
  name: string;
  value: string;
}
export interface CitiesSelectModel {
  id: number;
  name: string;
  value: string;
}
