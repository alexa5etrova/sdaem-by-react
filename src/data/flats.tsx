import {
  CitiesSelectModel,
  DistrictSelectModel,
  EquipmentSelectModel,
  MetroSelectModel,
  RoomsSelectModel,
  SleepingPlacesSelectModel,
} from "../interfaces/filter.interface";
import { FlatsPerPageModel, SortViewModel } from "../interfaces/flat.interface";

export const CITIES: CitiesSelectModel[] = [
  { id: 1, name: "Минск", value: "minsk" },
  { id: 2, name: "Гродно", value: "grodno" },
  { id: 3, name: "Брест", value: "brest" },
  { id: 4, name: "Витебск", value: "vitebsk" },
  { id: 5, name: "Гомель", value: "gomel" },
  { id: 6, name: "Могилев", value: "mogilev" },
];
export const ROOMS: RoomsSelectModel[] = [
  { id: 1, name: "1 комн", value: "1" },
  { id: 2, name: "2 комн", value: "2" },
  { id: 3, name: "3 комн", value: "3" },
  { id: 4, name: "4 комн", value: "4" },
  { id: 5, name: "5 комн", value: "5" },
];
export const SLEEPING_PLACES: SleepingPlacesSelectModel[] = [
  { id: 1, name: "1", value: "1" },
  { id: 2, name: "2", value: "2" },
  { id: 3, name: "2+1", value: "3" },
  { id: 4, name: "2+2", value: "4" },
];

export const DISTRICT: DistrictSelectModel[] = [
  { id: 1, name: "Шабаны", value: "Шабаны" },
  { id: 2, name: "Академгородок", value: "Академгородок" },
  { id: 3, name: "Ангарская", value: "Ангарская" },
  { id: 4, name: "Аэродромная", value: "Аэродромная" },
  { id: 5, name: "Восток", value: "Восток" },
  { id: 6, name: "Веснянка", value: "Веснянка" },
];
export const METRO: MetroSelectModel[] = [
  { id: 1, name: "Автозаводская", value: "Автозаводская" },
  { id: 2, name: "Академия наук", value: "Академия наук" },
  { id: 3, name: "Борисовский тракт", value: "Борисовский тракт" },
  { id: 4, name: "Восток", value: "Восток" },
  { id: 5, name: "Грушевка", value: "Грушевка" },
  { id: 6, name: "Каменная горка", value: "Каменная горка" },
  { id: 7, name: "Институт культуры", value: "Институт культуры" },
];
export const EQUIPMENT: EquipmentSelectModel[] = [
  { id: 1, title: "Газовая плита", value: "gasStove" },
  { id: 2, title: "Духовка", value: "oven" },
  { id: 3, title: "Кофеварка", value: "coffeeMashine" },
  { id: 4, title: "Микроволновая печь", value: "microwave" },
  { id: 5, title: "Посуда", value: "dishes" },
  { id: 6, title: "Посудомоечная машина", value: "dishwasher" },
  { id: 7, title: "Микроволновая печь", value: "microwave" },
  { id: 8, title: "Газовая плита", value: "gasStove" },
  { id: 9, title: "Духовка", value: "oven" },
  { id: 10, title: "Кофеварка", value: "coffeeMashine" },
  { id: 11, title: "Микроволновая печь", value: "microwave" },
  { id: 12, title: "Посуда", value: "dishes" },
  { id: 13, title: "Посудомоечная машина", value: "dishwasher" },
  { id: 14, title: "Микроволновая печь", value: "microwave" },
  { id: 15, title: "Газовая плита", value: "gasStove" },
  { id: 16, title: "Духовка", value: "oven" },
  { id: 17, title: "Кофеварка", value: "coffeeMashine" },
  { id: 18, title: "Микроволновая печь", value: "microwave" },
  { id: 19, title: "Посуда", value: "dishes" },
  { id: 20, title: "Посудомоечная машина", value: "dishwasher" },
  { id: 21, title: "Микроволновая печь", value: "microwave" },
  { id: 22, title: "Газовая плита", value: "gasStove" },
  { id: 23, title: "Духовка", value: "oven" },
  { id: 24, title: "Кофеварка", value: "coffeeMashine" },
  { id: 25, title: "Микроволновая печь", value: "microwave" },
];

export const FLAT_PREVIEW_LENGTH: number = 188;
export const FLAT_PREVIEW_LIST_LENGTH: number = 265;

export const FLATS_PER_PAGE: FlatsPerPageModel = { tile: 6, list: 3 };

export const SORT_VIEW: SortViewModel[] = [
  { id: "1", name: "По умолчанию" },
  { id: "2", name: "По убыванию цены" },
  { id: "3", name: "По возрастанию цены" },
];
