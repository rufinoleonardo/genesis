"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringDateToDate = void 0;
const stringDateToDate = (dateString) => {
    const arrNum = dateString.split("/").map((value) => {
        return parseInt(value);
    });
    const convertedDate = new Date(arrNum[2], arrNum[1] - 1, arrNum[0]);
    return convertedDate;
};
exports.stringDateToDate = stringDateToDate;
