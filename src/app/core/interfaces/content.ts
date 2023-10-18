export interface Content {
  Title: string;
  content: string;
}

export interface ApiResponse<T> {
  ok: boolean;
  status: number;
  data: T;
}

export interface ContentApiRepsonse extends ApiResponse<Content[]> {}
