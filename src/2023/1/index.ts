import { getFileLinesAsArray } from '../../services/fileService'
import { GenericArrayService } from '../../services/genericArrayService'
import { NumberArrayService } from '../../services/numberArrayService'

export const getDayOnePartOneAnswer = async (fileLocation: string) => {
  const collaborations = new GenericArrayService(
    await getFileLinesAsArray(fileLocation)
  )

  let answer = 0
  collaborations.array.forEach((collaboration) => {
    const numbers = new GenericArrayService(Array.from(collaboration))
      .convertToNumbersArray()
      .removeNonNumbers().array

    const collaborationValue = Number(
      String(numbers[0]) + String(numbers[numbers.length - 1])
    )

    answer += Number(collaborationValue)
  })

  return answer
}

export const getDayOnePartTwoAnswer = async (fileLocation: string) => {
  const collaborations = new GenericArrayService(
    await getFileLinesAsArray(fileLocation)
  )

  let answer = 0
  collaborations.array.forEach((collaboration) => {
    const collaborationWithFirstNumberStringReplaced =
      convertPotentialCollaborationValueToNumericValues(collaboration)

    const collaborationWithLastNumberStringReplaced =
      getCollaborationWithLastNumberStringReplaced(collaboration)

    const numbersForFirstValue = new GenericArrayService(
      Array.from(collaborationWithFirstNumberStringReplaced)
    )
      .convertToNumbersArray()
      .removeNonNumbers().array

    const numbersForSecondValue = new GenericArrayService(
      Array.from(collaborationWithLastNumberStringReplaced)
    )
      .convertToNumbersArray()
      .removeNonNumbers().array

    const collaborationValue = Number(
      String(numbersForFirstValue[0]) +
        String(numbersForSecondValue[numbersForSecondValue.length - 1])
    )

    answer += Number(collaborationValue)
  })

  return answer
}

const convertPotentialCollaborationValueToNumericValues = (
  collaboration: string
) => {
  const indexesOfAllNumbersStringsAsc = new NumberArrayService([
    collaboration.indexOf('one'),
    collaboration.indexOf('two'),
    collaboration.indexOf('three'),
    collaboration.indexOf('four'),
    collaboration.indexOf('five'),
    collaboration.indexOf('six'),
    collaboration.indexOf('seven'),
    collaboration.indexOf('eight'),
    collaboration.indexOf('nine'),
  ])
    .removeNonNumbers()
    .removeNegativeNumbers()
    .sortAscending().array

  const indexOfFirstNumberString = indexesOfAllNumbersStringsAsc[0] as number

  const collaborationWithFirstNumberStringReplaced =
    replaceNumberStringToNumericValue(collaboration, indexOfFirstNumberString)

  return collaborationWithFirstNumberStringReplaced
}

const getCollaborationWithLastNumberStringReplaced = (
  collaboration: string
) => {
  const indexesOfAllNumbersStringsAsc = new NumberArrayService([
    collaboration.lastIndexOf('one'),
    collaboration.lastIndexOf('two'),
    collaboration.lastIndexOf('three'),
    collaboration.lastIndexOf('four'),
    collaboration.lastIndexOf('five'),
    collaboration.lastIndexOf('six'),
    collaboration.lastIndexOf('seven'),
    collaboration.lastIndexOf('eight'),
    collaboration.lastIndexOf('nine'),
  ])
    .removeNonNumbers()
    .removeNegativeNumbers()
    .sortAscending().array

  const indexOfLastNumberString = indexesOfAllNumbersStringsAsc[
    indexesOfAllNumbersStringsAsc.length - 1
  ] as number
  const collaborationWithLastNumberStringReplaced =
    replaceNumberStringToNumericValue(collaboration, indexOfLastNumberString)

  return collaborationWithLastNumberStringReplaced
}

const replaceNumberStringToNumericValue = (
  stringToReplace: string,
  indexOfNumberString: number
): string => {
  let returnValue = stringToReplace
  stringToNumberMap.forEach((value, key) => {
    const subStringFromKey = stringToReplace.substring(
      indexOfNumberString,
      indexOfNumberString + key.length
    )

    const isMatch = subStringFromKey === key

    if (isMatch) {
      returnValue = stringToReplace.replace(new RegExp(key, 'g'), value)
    }
  })

  return returnValue
}

const stringToNumberMap = new Map([
  ['one', '1'],
  ['two', '2'],
  ['three', '3'],
  ['four', '4'],
  ['five', '5'],
  ['six', '6'],
  ['seven', '7'],
  ['eight', '8'],
  ['nine', '9'],
])
