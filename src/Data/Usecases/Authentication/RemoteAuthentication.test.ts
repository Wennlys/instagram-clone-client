import HttpPostClientSpy from '@/Data/Mocks/HttpClientSpy';
import RemoteAuthentication from '@/Data/Usecases/Authentication/RemoteAuthentication';
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
    await SUT.auth();
    expect(httpPostClientSpy.url).toBe(url);
  });
});
