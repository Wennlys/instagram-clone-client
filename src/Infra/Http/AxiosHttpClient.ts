import { HttpPostClientParams } from '@/Data/Protocols/Http/HttpPostClient';
import { HttpResponse } from '@/Data/Protocols/Http/HttpResponse';
import axios from 'axios';

export class AxiosHttpClient {
  async post(params: HttpPostClientParams<unknown>): Promise<HttpResponse<unknown>> {
    const response = await axios.post(params.url, params.body);
    return {
      statusCode: response.status,
      body: response.data,
    };
  }
}
