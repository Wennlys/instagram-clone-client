import HttpPostClientSpy from '@/Data/Mocks/HttpPostClientSpy';
import { HttpStatusCode } from '@/Data/Protocols/Http/HttpResponse';
import RemoteAuthentication from '@/Data/Usecases/Authentication/RemoteAuthentication';
import { InvalidCredentialsError } from '@/Domain/Errors/InvalidCredentialsError';
import { mockAuthentication } from '@/Domain/Mocks/mockAuthentication';
import faker from 'faker';

type SUTTypes = {
  SUT: RemoteAuthentication;
  httpPostClientSpy: HttpPostClientSpy;
};

function SUTFactory(url: string = faker.internet.url()): SUTTypes {
  const httpPostClientSpy = new HttpPostClientSpy();
  const SUT = new RemoteAuthentication(url, httpPostClientSpy);
  return {
    SUT,
    httpPostClientSpy,
  };
}

describe('RemoteAuthentication', () => {
  it('Calls HttpPostClient with correct URL', async () => {
    const url = faker.internet.url();
    const { SUT, httpPostClientSpy } = SUTFactory(url);
    await SUT.auth(mockAuthentication());
    expect(httpPostClientSpy.url).toBe(url);
  });

  it('Calls HttpPostClient with correct body', async () => {
    const { SUT, httpPostClientSpy } = SUTFactory();
    const authParams = mockAuthentication();
    await SUT.auth(authParams);
    expect(httpPostClientSpy.body).toEqual(authParams);
  });

  it('Throws InvalidCredentialsError when HttpPostClient returns 401 statusCode', async () => {
    const { SUT, httpPostClientSpy } = SUTFactory();
    httpPostClientSpy.data = {
      statusCode: HttpStatusCode.unauthorized,
    };
    const promise = SUT.auth(mockAuthentication());
    await expect(promise).rejects.toThrow(new InvalidCredentialsError());
  });
});
