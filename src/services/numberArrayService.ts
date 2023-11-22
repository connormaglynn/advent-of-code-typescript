export class NumberArrayService {
  array: number[]

  constructor(array: number[] = []) {
    this.array = array
  }

  getLargestItem() {
    this.sortAscending()
    return this.array[this.array.length - 1]
  }

  sortAscending() {
    this.array.sort((a, b) => {
      return a - b
    })
    return this
  }

  getTotalValue() {
    const initialValue = 0
    return this.array.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      initialValue
    )
  }
}
