export interface UserModel {
  login: string;
  email: string;
  password?: string;
  id: string;
  rememberMe?: boolean;
}

export interface AuthStateModel {
  user: UserModel;
  status: "loading" | "resolved" | "rejected" | null;
  error: string | null;
  isAuth: boolean;
  accessToken: string;
}
