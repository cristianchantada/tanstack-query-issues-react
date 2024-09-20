export const sleep = (millisecons: number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, millisecons);
  });
};