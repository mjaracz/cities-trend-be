export interface User {
  userId: number;
  username: string;
  password: string;
  startedDate: Date;
  birthDate: Date;
  roles: Role[];
}

export enum Role {
  standardUser = 'standardUser',
  premiumUser = 'premiumUser',
  admin = 'admin',
}
