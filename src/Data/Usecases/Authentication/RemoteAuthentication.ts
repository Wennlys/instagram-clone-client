import { HttpPostClient } from '@/Data/Protocols/Http/HttpPostClient';
import { HttpStatusCode } from '@/Data/Protocols/Http/HttpResponse';
import { InvalidCredentialsError } from '@/Domain/Errors/InvalidCredentialsError';
import { UnexpectedError } from '@/Domain/Errors/UnexpectedError';
import { AccountModel } from '@/Domain/Models/AccountModel';
import { AuthenticationParams } from '@/Domain/Usecases/Authentication';

export default class RemoteAuthentication {
  constructor(
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient<AuthenticationParams, AccountModel>,
  ) {}

  async auth(params: AuthenticationParams): Promise<void> {
    const response = await this.httpPostClient.post({ url: this.url, body: params });
    switch (response.statusCode) {
      case HttpStatusCode.ok:
        break;
      case HttpStatusCode.unauthorized:
        throw new InvalidCredentialsError();
      default:
        throw new UnexpectedError();
    }
  }
}
