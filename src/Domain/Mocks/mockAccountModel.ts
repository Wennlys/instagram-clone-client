import { AccountModel } from '@/Domain/Models/AccountModel';
import faker from 'faker';

export const mockAccountModel = (): AccountModel => ({
  token: faker.random.uuid(),
});
