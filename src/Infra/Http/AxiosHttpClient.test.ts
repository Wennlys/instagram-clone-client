import { AxiosHttpClient } from '@/Infra/Http/AxiosHttpClient';
import { httpPostRequestMock } from '@/Infra/Http/Mocks/httpRequestsMock';
import axios from 'axios';
import faker from 'faker';

jest.mock('axios');
const axiosMock = axios as jest.Mocked<typeof axios>;
const axiosResponseMock = {
  data: faker.random.objectElement(),
  status: faker.random.number(),
};
axiosMock.post.mockResolvedValue(axiosResponseMock);

const SUTFactory = (): AxiosHttpClient => {
  return new AxiosHttpClient();
};

describe('AxiosHttpClient', () => {
  it('calls axios with correct url & body', async () => {
    const SUT = SUTFactory();
    const request = httpPostRequestMock();
    await SUT.post(request);
    expect(axiosMock.post).toHaveBeenCalledWith(request.url, request.body);
  });

  it('returns correct statusCode & body', async () => {
    const SUT = SUTFactory();
    const response = await SUT.post(httpPostRequestMock());
    expect(response).toEqual({
      statusCode: axiosResponseMock.status,
      body: axiosResponseMock.data,
    });
  });
});
