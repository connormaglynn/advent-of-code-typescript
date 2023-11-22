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
}
