export const UseToastController = () => {
  const milliseconds = 1000;
  const closeTimeInSeconds = 4 * milliseconds;
  return {
    States: {
      closeTimeInSeconds,
    },
  };
};
