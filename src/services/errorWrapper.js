// return format = [data, error]
export const handleAsyncFunction = async (fn) => {
  try {
    const data = await fn();
    return [data, null];
  } catch (error) {
    return [null, error];
  }
};
