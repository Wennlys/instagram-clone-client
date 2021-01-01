import { HttpPostClient } from '@/Data/Protocols/Http/HttpPostClient';
import { HttpStatusCode } from '@/Data/Protocols/Http/HttpResponse';
import { InvalidCredentialsError } from '@/Domain/Errors/InvalidCredentialsError';
import { UnexpectedError } from '@/Domain/Errors/UnexpectedError';
import { AccountModel } from '@/Domain/Models/AccountModel';
import { Authentication, AuthenticationParams } from '@/Domain/Usecases/Authentication';

export default class RemoteAuthentication implements Authentication {
  constructor(
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient<AuthenticationParams, AccountModel>,
  ) {}

  async auth(params: AuthenticationParams): Promise<AccountModel> {
    const response = await this.httpPostClient.post({ url: this.url, body: params });
    switch (response.statusCode) {
      case HttpStatusCode.ok:
        return response.body;
      case HttpStatusCode.unauthorized:
        throw new InvalidCredentialsError();
      default:
        throw new UnexpectedError();
    }
  }
}
