import HttpPostClientSpy from '@/Data/Mocks/HttpPostClientSpy';
import { HttpStatusCode } from '@/Data/Protocols/Http/HttpResponse';
import RemoteAuthentication from '@/Data/Usecases/Authentication/RemoteAuthentication';
import { InvalidCredentialsError } from '@/Domain/Errors/InvalidCredentialsError';
import { UnexpectedError } from '@/Domain/Errors/UnexpectedError';
import { accountModelMock } from '@/Domain/Mocks/accountModelMock';
import { authenticationMock } from '@/Domain/Mocks/authenticationMock';
import { AccountModel } from '@/Domain/Models/AccountModel';
import { AuthenticationParams } from '@/Domain/Usecases/Authentication';
import faker from 'faker';

type SUTTypes = {
  SUT: RemoteAuthentication;
  httpPostClientSpy: HttpPostClientSpy<AuthenticationParams, AccountModel>;
};

function SUTFactory(url: string = faker.internet.url()): SUTTypes {
  const httpPostClientSpy = new HttpPostClientSpy<AuthenticationParams, AccountModel>();
  const SUT = new RemoteAuthentication(url, httpPostClientSpy);
  return {
    SUT,
    httpPostClientSpy,
  };
}

describe('RemoteAuthentication', () => {
  it('calls HttpPostClient with correct URL', async () => {
    const url = faker.internet.url();
    const { SUT, httpPostClientSpy } = SUTFactory(url);
    await SUT.auth(authenticationMock());
    expect(httpPostClientSpy.url).toBe(url);
  });

  it('calls HttpPostClient with correct body', async () => {
    const { SUT, httpPostClientSpy } = SUTFactory();
    const authParams = authenticationMock();
    await SUT.auth(authParams);
    expect(httpPostClientSpy.body).toEqual(authParams);
  });

  it('throws InvalidCredentialsError when HttpPostClient returns 401 statusCode', async () => {
    const { SUT, httpPostClientSpy } = SUTFactory();
    httpPostClientSpy.data = {
      statusCode: HttpStatusCode.unauthorized,
    };
    const promise = SUT.auth(authenticationMock());
    await expect(promise).rejects.toThrow(new InvalidCredentialsError());
  });

  it('throws UnexpectedError when HttpPostClient returns 400 statusCode', async () => {
    const { SUT, httpPostClientSpy } = SUTFactory();
    httpPostClientSpy.data = {
      statusCode: HttpStatusCode.badRequest,
    };
    const promise = SUT.auth(authenticationMock());
    await expect(promise).rejects.toThrow(new UnexpectedError());
  });

  it('throws UnexpectedError when HttpPostClient returns 404 statusCode', async () => {
    const { SUT, httpPostClientSpy } = SUTFactory();
    httpPostClientSpy.data = {
      statusCode: HttpStatusCode.notFound,
    };
    const promise = SUT.auth(authenticationMock());
    await expect(promise).rejects.toThrow(new UnexpectedError());
  });

  it('throws UnexpectedError when HttpPostClient returns 500 statusCode', async () => {
    const { SUT, httpPostClientSpy } = SUTFactory();
    httpPostClientSpy.data = {
      statusCode: HttpStatusCode.serverError,
    };
    const promise = SUT.auth(authenticationMock());
    await expect(promise).rejects.toThrow(new UnexpectedError());
  });

  it('return AccountModel when HttpPostClient returns 200 statusCode', async () => {
    const { SUT, httpPostClientSpy } = SUTFactory();
    const response = accountModelMock();
    httpPostClientSpy.data = {
      statusCode: HttpStatusCode.ok,
      body: response,
    };
    const account = await SUT.auth(authenticationMock());
    expect(account).toEqual(response);
  });
});
