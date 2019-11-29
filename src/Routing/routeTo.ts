const replaceParams = (path: string, params: any): string =>
  Object.keys(params).reduce(
    (accumulator, currentValue) => path.replace(`:${currentValue}`, params[currentValue]),
    path
  );

export const routeTo = (path: string, params: any = {}): string => replaceParams(path, params);