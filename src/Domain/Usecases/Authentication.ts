import { AccountModel } from '@/Domain/Models/AccountModel';

type AuthenticationParams = {
  email: string;
  password: string;
};

export interface Authentication {
  auth: (params: AuthenticationParams) => Promise<AccountModel>;
}
