import { HttpPostClient } from '@/Data/Protocols/Http/HttpPostClient';

export default class RemoteAuthentication {
  constructor(private readonly url: string, private readonly httpPostClient: HttpPostClient) {}

  async auth(): Promise<void> {
    return await this.httpPostClient.post(this.url);
  }
}
