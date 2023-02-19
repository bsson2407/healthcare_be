/* eslint-disable prettier/prettier */

export const numberToColumn = (n) => {
  const res = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[n % 26];
  return n >= 26 ? numberToColumn(Math.floor(n / 26) - 1) + res : res;
};

export const funcIndexBmi = (height, weight) => {
  const tmp = Number(height) / 100;
  console.log('tmp', tmp);
  const indexBmi = Number(weight) / (tmp * tmp);

  return indexBmi;
};

export const getIdPageWithFbUrl = (url: string) => {
  if (url) {
    const str = url?.split('-')[url?.split('-')?.length - 1];
    const newStr = str?.replace('/', '');
    return newStr;
  }
  return '';
};
