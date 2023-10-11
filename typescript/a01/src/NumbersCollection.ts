export class NumbersCollection {
  constructor(public data: number[]) {}

  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }

  swap(leftIndex: number, rightIndex: number): void {
    // left > right MAIOR TEM QUE IR PARA O FINAL
    const leftHand = this.data[rightIndex]; //rightIndex é o menor valor
    this.data[rightIndex] = this.data[leftIndex]; // rightIndex é a ultima posição e tem que receber o MAIOR VALOR (leftIndex)
    this.data[leftIndex] = leftHand;
  }
}
