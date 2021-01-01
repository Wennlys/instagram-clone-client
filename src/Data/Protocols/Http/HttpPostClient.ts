import { HttpResponse } from '@/Data/Protocols/Http/HttpResponse';

export type HttpPostClientParams<T> = {
  url: string;
  body?: T;
};

export interface HttpPostClient<T, K> {
  post: (params: HttpPostClientParams<T>) => Promise<HttpResponse<K>>;
}
