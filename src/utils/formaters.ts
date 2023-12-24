export const moneyFormat = (number: number) => {
  if (number === null || number === undefined) return null;
  return number?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
};
