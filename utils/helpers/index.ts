import { BaseQueryParams } from "../types";
import router from "next/router";

export const setURLQueryParams = (
  query: BaseQueryParams,
  id?: string | number
): void => {
  const { ...others } = query;
  const qParams = new URLSearchParams();
  if (others) {
    Object.entries(others).forEach((ele) => {
      const key = ele[0];
      const val: any = ele[1];
      if (val) {
        qParams.append(key, val);
      } else {
        qParams.delete(key);
      }
    });
  }
  if (id) {
    router.push(`${id}?${qParams}`, undefined, { scroll: false });
  } else {
    router.push(`?${qParams}`, undefined, { scroll: false });
  }
};
