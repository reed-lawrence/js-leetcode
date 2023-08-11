export interface TestCase<T extends (...args: any[]) => any, TReturn = ReturnType<T>> {
  args: Parameters<T>;
  answer: TReturn;
  comparer?: (a: TReturn, b: TReturn) => boolean;
}