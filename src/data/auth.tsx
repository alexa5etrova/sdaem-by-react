import { AuthResponceModel, UserAgreeementModel } from "./../interfaces/auth.interface";

export const AUTH_SENT_FAILED: AuthResponceModel = {
  header: "К сожалению, произошла ошибка",
  text: "",
};
export const AUTH_OK: AuthResponceModel = {
  header: "Добро пожаловать!",
  text: "",
};
export const SIGNUP_FAILED: AuthResponceModel = {
  header: "К сожалению, произошла ошибка",
  text: "",
};

export const USER_AGREEMENT: UserAgreeementModel = {
  header: "Пользователь обязуется:",
  p1: "предоставлять достоверную и актуальную информацию при регистрации и добавлении объекта; ",
  p2: "добавлять фотографии объектов соответствующие действительности. Администрация сайта sdaem.by оставляет за собой право удалять любую информацию, размещенную пользователем, если сочтет, что информация не соответствует действительности, носит оскорбительный характер, нарушает права и законные интересы других граждан либо действующее законодательство Республики Беларусь.",
};
