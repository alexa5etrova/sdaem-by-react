import { CompanyModel, FeedbackSentModel } from "../interfaces/company.interface";

export const MESSAGE_SENT: FeedbackSentModel = {
  header: "Ваше письмо отправлено!",
  text: "Какое-то сообщение о том, что письмо отправлено, какое-то сообщение, что письмо отправлено.",
};

export const MESSAGE_SENT_FAILED: FeedbackSentModel = {
  header: "Сообщение не отправлено, произошла какая-то ошибка",
  text: "",
};

export const COMPANY: CompanyModel = {
  name: "ИП Шушкевич Андрей Викторович ",
  registration: "УНП 192602485 Минским горисполкомом ",
  registrationDate: "10.02.2016 ",
  address: "220068, РБ, г. Минск, ул. Осипенко, 21, кв.23",
  phone: "+375 29 621 48 33",
  email: "sdaem@sdaem.by",
  openHours: "08:00-22:00",
  telegram: "",
  instagram: "",
  vk: "",
  facebook: "",
};
