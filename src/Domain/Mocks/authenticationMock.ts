import { AuthenticationParams } from '@/Domain/Usecases/Authentication';
import faker from 'faker';

export const authenticationMock = (): AuthenticationParams => ({
  email: faker.internet.email(),
  password: faker.internet.password(),
});
