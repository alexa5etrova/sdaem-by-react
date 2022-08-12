export interface UserModel {
  login?: string;
  email: string;
  password?: string;
  id?: string;
  rememberMe?: boolean;
  pswdRepeat?: string;
  reCaptcha?: boolean;
}

export interface AuthStateModel {
  user: UserModel;
  status: "loading" | "resolved" | "rejected" | null;
  error: string | null;
  isAuth: boolean;
  accessToken: string;
}

export interface AuthResponceModel {
  header: string;
  text: string;
}
export interface UserAgreeementModel {
  header: string;
  p1: string;
  p2: string;
}
