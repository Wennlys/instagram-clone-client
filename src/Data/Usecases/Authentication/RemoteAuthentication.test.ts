import HttpPostClientSpy from '@/Data/Mocks/HttpClientSpy';
import RemoteAuthentication from '@/Data/Usecases/Authentication/RemoteAuthentication';

describe('RemoteAuthentication', () => {
  it('Calls HttpPostClient with correct URL', () => {
    const url = 'correct.url';
    const httpPostClient = new HttpPostClientSpy();
    const SUT = new RemoteAuthentication(url, httpPostClient);
    SUT.auth();
    expect(httpPostClient.url).toBe(url);
  });
});
