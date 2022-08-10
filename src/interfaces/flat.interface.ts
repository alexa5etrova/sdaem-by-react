export interface PhotoModel {
  id: number;
  src: string;
  alt: string;
}
export interface PlacesModel {
  value: number;
  name: string;
}

export interface EquipmentModel {
  gasStove: boolean;
  microwave: boolean;
  dishes: boolean;
  dishwasher: boolean;
  oven: boolean;
  coffeeMashine: boolean;
}
export interface ContactsModel {
  photo: string;
  name: string;
  phone: string;
  email: string;
}

export interface FlatModel {
  id: number;
  price: number;
  city: string;
  address: string;
  metro: string;
  title: string;
  photoes: PhotoModel[];
  district: string;
  places: PlacesModel;
  rooms: string;
  period: string;
  sqM: string;
  status: "gold" | string;
  equipment: EquipmentModel;
  contacts: ContactsModel;
  description: string;
}
