export const debounce = (
  fn: (value: string) => void,
  timeout: number
): ((value: string) => void) => {
  let timer: null | NodeJS.Timeout = null;

  return (value: string) => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn(value);
      clearTimeout(timeout);
    }, timeout);
  };
};
