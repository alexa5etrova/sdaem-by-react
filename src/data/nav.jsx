export const CATEGORIES = [
  { name: "Квартиры", id: 1, path: "/flats" },
  { name: "Коттеджи и усадьбы", id: 2, path: "/cottages" },
  { name: "Бани и сауны", id: 3, path: "/saunas" },
  {
    name: "Авто напрокат",
    id: 4,
    path: "/cars",
  },
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
  { name: "Квартиры в Минске", id: 1, path: "/flats/minsk" },
  { name: "Квартиры в Гомеле", id: 2, path: "/flats/gomel" },
  { name: "Квартиры в Бресте", id: 3, path: "/flats/brest" },
  {
    name: "Квартиры в Витебске",
    id: 114,
    path: "/flats/vitebsk",
  },
  { name: "Квартиры в Гродно", id: 5, path: "/flats/grodno" },
  { name: "Квартиры в Могилеве", id: 6, path: "/flats/mogilev" },
];

export const CRUMBS = {
  news: [{ title: "Новости", id: 1, url: "/news" }],
};
