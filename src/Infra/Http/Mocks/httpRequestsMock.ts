import { HttpPostClientParams } from '@/Data/Protocols/Http/HttpPostClient';
import faker from 'faker';

export const httpRequestsMock = (): HttpPostClientParams<unknown> => ({
  url: faker.internet.url(),
  body: faker.random.objectElement(),
});
