export type HttpPostClientParams = {
  url: string;
  body: Record<string, unknown>;
};

export interface HttpPostClient {
  post: (params: HttpPostClientParams) => Promise<void>;
}
