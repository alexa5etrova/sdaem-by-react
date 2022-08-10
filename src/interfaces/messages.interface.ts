export interface MessagesModel {
  message: string;
  name: string;
  email: string;
}

export interface MessagesStateModel {
  messages: MessagesModel[];
  status: "loading" | "resolved" | "rejected" | null;
  error: string | null;
}
