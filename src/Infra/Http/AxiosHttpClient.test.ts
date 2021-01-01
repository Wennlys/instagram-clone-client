import { AxiosHttpClient } from '@/Infra/Http/AxiosHttpClient';
import { httpRequestsMock } from '@/Infra/Http/Mocks/httpRequestsMock';
import axios from 'axios';

jest.mock('axios');
const axiosMock = axios as jest.Mocked<typeof axios>;

const SUTFactory = (): AxiosHttpClient => {
  return new AxiosHttpClient();
};

describe('AxiosHttpClient', () => {
  it('calls axios with correct url & body', async () => {
    const SUT = SUTFactory();
    const request = httpRequestsMock();
    await SUT.post(request);
    expect(axiosMock.post).toHaveBeenCalledWith(request.url, request.body);
  });
});
