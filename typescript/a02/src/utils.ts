export const stringDateToDate = (dateString: string) => {
  const arrNum = dateString.split("/").map((value: string): number => {
    return parseInt(value);
  });

  const convertedDate = new Date(arrNum[2], arrNum[1] - 1, arrNum[0]);
  return convertedDate;
};
