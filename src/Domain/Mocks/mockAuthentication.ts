import { AuthenticationParams } from '@/Domain/Usecases/Authentication';
import faker from 'faker';

export const mockAuthentication = (): AuthenticationParams => ({
  email: faker.internet.email(),
  password: faker.internet.password(),
});
