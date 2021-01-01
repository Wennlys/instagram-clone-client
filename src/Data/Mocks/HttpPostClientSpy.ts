import { HttpPostClient, HttpPostClientParams } from '@/Data/Protocols/Http/HttpPostClient';

export default class HttpPostClientSpy implements HttpPostClient {
  body?: Record<string, unknown>;
  url?: string;

  async post(params: HttpPostClientParams): Promise<void> {
    this.body = params.body;
    this.url = params.url;
    return Promise.resolve();
  }
}
