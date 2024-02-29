export interface IUser {
  firstName: string;
  lastName: string;
  age: string;
  email: string;
  tel: string;
}

export interface BaseQueryParams {
  active?: boolean | string;
  deleted?: boolean;
  id?: number | string;
  name?: string;
  size?: number;
  page?: number;
  query?: string;
  sortBy?: string;
  orderBy?: string;
}

export interface BaseProp {
  params?: any;
  searchParams?: any;
}

export interface BasePageProp<T> {
  params: T;
  searchParams: { [key: string]: string | string[] | undefined };
}
