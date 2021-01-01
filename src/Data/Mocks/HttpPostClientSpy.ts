import { HttpPostClient, HttpPostClientParams } from '@/Data/Protocols/Http/HttpPostClient';
import { HttpResponse, HttpStatusCode } from '@/Data/Protocols/Http/HttpResponse';

export default class HttpPostClientSpy implements HttpPostClient {
  body?: Record<string, unknown>;
  url?: string;
  data: HttpResponse = {
    statusCode: HttpStatusCode.ok,
  };

  async post(params: HttpPostClientParams): Promise<HttpResponse> {
    this.body = params.body;
    this.url = params.url;
    return Promise.resolve(this.data);
  }
}
