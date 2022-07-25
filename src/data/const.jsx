export const COMPANY = {
  name: "ИП Шушкевич Андрей Викторович ",
  registration: "УНП 192602485 Минским горисполкомом ",
  registrationDate: "10.02.2016 ",
  address: "220068, РБ, г. Минск, ул. Осипенко, 21, кв.23",
  phone: "+375 29 621 48 33",
  email: "sdaem@sdaem.by",
  openHours: "08:00-22:00",
  telegram: "",
  whatsapp: "",
  viber: "",
  instagram: "",
  vk: "",
  facebook: "",
};

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

export const PAYMENTS_METHOD = [
  { src: "./images/visa.png", name: "Visa", id: 1 },
  { src: "./images/webpay.png", name: "Webpay", id: 2 },
  { src: "./images/verifiedByVisa.png", name: "Verified By Visa", id: 3 },
  { src: "./images/mastercard.png", name: "Master Card", id: 4 },
  { src: "./images/securecode.png", name: "Secure code", id: 5 },
  { src: "./images/verifiedByVisa.png", name: "Verified By Visa", id: 6 },
  { src: "./images/belkart.png", name: "Belkart", id: 7 },
];

export const NEWS_PREVIEW_LENGTH = 270;
export const NEWS_PER_PAGE = 9;
export const MESSAGE_SENT = {
  header: "Ваше письмо отправлено!",
  text: "Какое-то сообщение о том, что письмо отправлено, какое-то сообщение, что письмо отправлено.",
};
export const MESSAGE_SENT_FAILED = {
  header: "Сообщение не отправлено, произошла какая-то ошибка",
  text: "",
};
export const AUTH_SENT_FAILED = {
  header: "К сожалению, произошла ошибка",
  text: "",
};
export const SIGNUP_FAILED = {
  header: "К сожалению, произошла ошибка",
  text: "",
};

export const USER_AGREEMENT = {
  header: "Пользователь обязуется:",
  p1: "предоставлять достоверную и актуальную информацию при регистрации и добавлении объекта; ",
  p2: "добавлять фотографии объектов соответствующие действительности. Администрация сайта sdaem.by оставляет за собой право удалять любую информацию, размещенную пользователем, если сочтет, что информация не соответствует действительности, носит оскорбительный характер, нарушает права и законные интересы других граждан либо действующее законодательство Республики Беларусь.",
};
