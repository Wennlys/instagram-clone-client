import { HttpPostClient } from '@/Data/Protocols/Http/HttpPostClient';

export default class HttpPostClientSpy implements HttpPostClient {
  url?: string;

  async post(url: string): Promise<void> {
    this.url = url;
    return Promise.resolve();
  }
}
