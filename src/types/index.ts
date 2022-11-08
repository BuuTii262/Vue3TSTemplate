//User type
export type User = {
  name?: string;
  token: string;
  age: number;
};

//User state store
export type UserState = {
  user: User;
};

export type ResponseData = {
  err_code: number;
  err_msg: string;
  data: any;
};
