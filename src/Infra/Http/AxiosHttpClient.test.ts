import { httpPostRequestMock } from '@/Data/Mocks/httpRequestsMock';
import { AxiosHttpClient } from '@/Infra/Http/AxiosHttpClient';
import { axiosPostMock } from '@/Infra/Mocks/axiosMock';
import axios from 'axios';

jest.mock('axios');

type SUTTypes = {
  SUT: AxiosHttpClient;
  axiosResponseMock: jest.Mocked<typeof axios>;
};

const SUTFactory = (): SUTTypes => {
  return { SUT: new AxiosHttpClient(), axiosResponseMock: axiosPostMock() };
};

describe('AxiosHttpClient', () => {
  it('calls axios with correct url & body', async () => {
    const { SUT, axiosResponseMock } = SUTFactory();
    const request = httpPostRequestMock();
    await SUT.post(request);
    expect(axiosResponseMock.post).toHaveBeenCalledWith(request.url, request.body);
  });

  it('returns correct statusCode & body', async () => {
    const { SUT, axiosResponseMock } = SUTFactory();
    const promise = SUT.post(httpPostRequestMock());
    expect(promise).toEqual(axiosResponseMock.post.mock.results[0].value);
  });
});
