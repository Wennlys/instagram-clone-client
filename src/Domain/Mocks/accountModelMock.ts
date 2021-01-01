import { AccountModel } from '@/Domain/Models/AccountModel';
import faker from 'faker';

export const accountModelMock = (): AccountModel => ({
  token: faker.random.uuid(),
});
