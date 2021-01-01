import { HttpPostClient, HttpPostClientParams } from '@/Data/Protocols/Http/HttpPostClient';
import { HttpResponse, HttpStatusCode } from '@/Data/Protocols/Http/HttpResponse';

export default class HttpPostClientSpy<T, K> implements HttpPostClient<T, K> {
  body?: T;
  url?: string;
  data: HttpResponse<K> = {
    statusCode: HttpStatusCode.ok,
  };

  async post(params: HttpPostClientParams<T>): Promise<HttpResponse<K>> {
    this.body = params.body;
    this.url = params.url;
    return Promise.resolve(this.data);
  }
}
