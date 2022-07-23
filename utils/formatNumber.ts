/* eslint-disable new-cap */

export const formatNumber = (number: number) => {
  return Intl.NumberFormat('en-US', { style: 'decimal' }).format(number);
};
