import { HttpPostClient } from '@/Data/Protocols/Http/HttpPostClient';
import { AuthenticationParams } from '@/Domain/Usecases/Authentication';

export default class RemoteAuthentication {
  constructor(private readonly url: string, private readonly httpPostClient: HttpPostClient) {}

  async auth(params: AuthenticationParams): Promise<void> {
    return await this.httpPostClient.post({ url: this.url, body: params });
  }
}
