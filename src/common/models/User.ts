export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  isActivated: boolean;
  activationLink: string;
  role: ['user', 'shop'];
}
