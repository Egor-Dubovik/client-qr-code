export type Role = 'USER' | 'ADMIN' | 'SHOP';

export interface User {
  id: number;
  fullName: string;
  email: string;
  password: string;
  isActivated: boolean;
  activationLink: string;
  role: Role;
}
