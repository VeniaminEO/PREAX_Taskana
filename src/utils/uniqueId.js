export const uniqueId = () => {
  return Date.now().toString(16) + Math.random().toString(16);
};
