import { NumberArrayService } from './numberArrayService'

export class GenericArrayService {
  array: string[]

  constructor(array: string[] = []) {
    this.array = array
  }

  splitBySeperator(seperator: string) {
    const finalArray: Array<Array<string>> = [[]]
    this.array.forEach((item) => {
      if (item === seperator) {
        finalArray.push([])
      } else {
        const array = finalArray[finalArray.length - 1] as string[]
        array.push(item)
      }
    })

    return finalArray
  }

  splitInTheMiddle(): {
    leftSide: GenericArrayService
    rightSide: GenericArrayService
  } {
    const leftSide = new GenericArrayService(
      this.array.slice(0, this.array.length / 2)
    )
    const rightSide = new GenericArrayService(
      this.array.slice(this.array.length / 2, this.array.length)
    )

    return { leftSide, rightSide }
  }

  convertToNumbersArray() {
    const numbersArray: number[] = []
    this.array.forEach((item) => {
      numbersArray.push(Number(item))
    })
    return new NumberArrayService(numbersArray)
  }

  push(item: string) {
    this.array.push(item)
  }

  removeDuplicates() {
    this.array = [...new Set(this.array)]
    return this
  }

  sort() {
    this.array.sort()
    return this
  }

  reduceToMatchingItems(secondArray: string[]) {
    this.array = this.array.filter((item) => {
      return secondArray.includes(item)
    })
    return this
  }
}
