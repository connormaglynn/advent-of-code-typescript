export class NumberArrayService {
  array: number[]

  constructor(array: number[] = []) {
    this.array = array
  }

  getLargestNumber() {
    this.sortAscending()
    return this.array[this.array.length - 1]
  }

  getLargestNumbers(amount: number) {
    this.sortAscending()
    let counter = 1
    const largestNumbers = new NumberArrayService()
    while (counter <= amount) {
      const largeNumber = this.array[this.array.length - counter] as number
      largestNumbers.push(largeNumber)
      counter++
    }

    return largestNumbers
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

  push(item: number) {
    this.array.push(item)
  }
}
