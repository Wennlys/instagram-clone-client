import { HttpPostClientParams } from '@/Data/Protocols/Http/HttpPostClient';
import faker from 'faker';

export const httpPostRequestMock = (): HttpPostClientParams<unknown> => ({
  url: faker.internet.url(),
  body: faker.random.objectElement(),
});
