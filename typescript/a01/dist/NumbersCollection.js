"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumbersCollection = void 0;
class NumbersCollection {
    constructor(data) {
        this.data = data;
    }
    get length() {
        return this.data.length;
    }
    compare(leftIndex, rightIndex) {
        return this.data[leftIndex] > this.data[rightIndex];
    }
    swap(leftIndex, rightIndex) {
        // left > right MAIOR TEM QUE IR PARA O FINAL
        const leftHand = this.data[rightIndex]; //rightIndex é o menor valor
        this.data[rightIndex] = this.data[leftIndex]; // rightIndex é a ultima posição e tem que receber o MAIOR VALOR (leftIndex)
        this.data[leftIndex] = leftHand;
    }
}
exports.NumbersCollection = NumbersCollection;
