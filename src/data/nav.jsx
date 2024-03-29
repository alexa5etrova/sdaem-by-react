export const CATEGORIES = [
  { name: "Квартиры", id: 1, path: "/flats", value: "flats" },
  { name: "Коттеджи и усадьбы", id: 2, path: "/cottages", value: "cottages" },
  { name: "Бани и сауны", id: 3, path: "/saunas", value: "saunas" },
  { name: "Авто напрокат", id: 4, path: "/cars", value: "cars" },
];

export const SITEMAP = [
  { name: "Главная", id: 1, path: "/" },
  { name: "Новости", id: 2, path: "/news" },
  { name: "Размещение и тарифы", id: 3, path: "/add" },
  {
    name: "Объявления на карте",
    id: 4,
    path: "/map",
  },
  { name: "Контакты", id: 5, path: "/contacts" },
];

export const FLAT_CATEGORIES = [
  { name: "Квартиры в Минске", id: 1, path: "/flats?city=minsk", total: 2556 },
  { name: "Квартиры в Гомеле", id: 2, path: "/flats?city=gomel", total: 235 },
  { name: "Квартиры в Бресте", id: 3, path: "/flats?city=brest", total: 56 },
  {
    name: "Квартиры в Витебске",
    id: 4,
    path: "/flats?city=vitebsk",
    total: 56,
  },
  { name: "Квартиры в Гродно", id: 5, path: "/flats?city=grodno", total: 56 },
  { name: "Квартиры в Могилеве", id: 6, path: "/flats?city=mogilev", total: 56 },
];
export const COTTAGES_CATEGORIES = [
  { name: "Агроусадьбы", id: 1, path: "/cottages?type=farms", total: 2556 },
  { name: "Коттеджи", id: 2, path: "/cottages?type=cottages", total: 235 },
  { name: "Загородный комплекс", id: 3, path: "/cottages?type=suburb", total: 56 },
  {
    name: "Базы отдыха",
    id: 4,
    path: "/cottages?type=tourbase",
    total: 56,
  },
  { name: "Кемпинги", id: 5, path: "/flats?type=camps", total: 56 },
  { name: "Глэмпинги", id: 6, path: "/flats?type=glampings", total: 56 },
];
export const POPULAR = [
  { name: "Коттеджи и усадьбы на о. Брасласких ", id: 1, path: "/cottages?location=braslavskih" },
  { name: "Коттеджи и усадьбы (жилье) на Нарочи", id: 2, path: "/cottages?location=naroch" },
  {
    name: "Коттеджи и усадьбы (жилье) у воды,на берегу, на озере",
    id: 3,
    path: "/cottages?location=lake",
  },
];

export const CRUMBS = {
  news: [{ title: "Новости", id: 1, url: "/news" }],
};
