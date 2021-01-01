import { HttpPostClient } from '@/Data/Protocols/Http/HttpPostClient';
import { HttpResponse, HttpStatusCode } from '@/Data/Protocols/Http/HttpResponse';
import { InvalidCredentialsError } from '@/Domain/Errors/InvalidCredentialsError';
import { AuthenticationParams } from '@/Domain/Usecases/Authentication';

export default class RemoteAuthentication {
  constructor(private readonly url: string, private readonly httpPostClient: HttpPostClient) {}

  async auth(params: AuthenticationParams): Promise<HttpResponse> {
    const response = await this.httpPostClient.post({ url: this.url, body: params });
    switch (response.statusCode) {
      case HttpStatusCode.unauthorized:
        throw new InvalidCredentialsError();
      default:
        return Promise.resolve(response);
    }
  }
}
