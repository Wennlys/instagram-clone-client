import { HttpPostClient, HttpPostClientParams } from '@/Data/Protocols/Http/HttpPostClient';

export default class HttpPostClientSpy implements HttpPostClient {
  url?: string;

  async post(params: HttpPostClientParams): Promise<void> {
    this.url = params.url;
    return Promise.resolve();
  }
}
