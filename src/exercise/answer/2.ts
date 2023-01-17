/** Convert below code to typescript code */

export type IParams = {
  first: number;
  second: number;
};
export const addTwoNumbers = (params: IParams): number => {
  return params.first + params.second;
};
