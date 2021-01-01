import { HttpPostClientParams } from '@/Data/Protocols/Http/HttpPostClient';
import axios from 'axios';

export class AxiosHttpClient {
  async post(params: HttpPostClientParams<unknown>): Promise<void> {
    await axios.post(params.url);
  }
}
