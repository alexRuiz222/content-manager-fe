export interface UserRegister {
  Username: string;
  Password: string;
  Email: string;
  RoleId: number;
}

export interface UserRegisterResponse {
  ok: Boolean;
  status: number;
  message: string;
  data: UserRegister;
  token: string;
}
