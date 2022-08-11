export interface NewsModel {
  id: string;
  title: string;
  photo: string;
  date: string;
  short: string;
  body: string;
}

export interface NewsStateModel {
  news: NewsModel[];
  status: "loading" | "resolved" | "rejected" | null;
  error: string | null;
}
