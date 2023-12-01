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
    const collaborationWithCollaborationValueAsNumericValues =
      convertPotentialCollaborationValueToNumericValues(collaboration)

    const numbers = new GenericArrayService(
      Array.from(collaborationWithCollaborationValueAsNumericValues)
    )
      .convertToNumbersArray()
      .removeNonNumbers().array

    const collaborationValue = Number(
      String(numbers[0]) + String(numbers[numbers.length - 1])
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
    .sortAscending()
    .removeNegativeNumbers().array

  const indexOfFirstNumberString = indexesOfAllNumbersStringsAsc[0] as number

  const collaborationWithFirstNumberStringReplaced =
    replaceNumberStringToNumericValue(collaboration, indexOfFirstNumberString)

  const indexesOfAllNumbersStringsAsc2 = new NumberArrayService([
    collaborationWithFirstNumberStringReplaced.indexOf('one'),
    collaborationWithFirstNumberStringReplaced.indexOf('two'),
    collaborationWithFirstNumberStringReplaced.indexOf('three'),
    collaborationWithFirstNumberStringReplaced.indexOf('four'),
    collaborationWithFirstNumberStringReplaced.indexOf('five'),
    collaborationWithFirstNumberStringReplaced.indexOf('six'),
    collaborationWithFirstNumberStringReplaced.indexOf('seven'),
    collaborationWithFirstNumberStringReplaced.indexOf('eight'),
    collaborationWithFirstNumberStringReplaced.indexOf('nine'),
  ])
    .removeNonNumbers()
    .sortAscending()
    .removeNegativeNumbers().array

  const indexOfLastNumberString = indexesOfAllNumbersStringsAsc2[
    indexesOfAllNumbersStringsAsc2.length - 1
  ] as number
  const collaborationWithFirstAndLastNumberStringReplaced =
    replaceNumberStringToNumericValue(
      collaborationWithFirstNumberStringReplaced,
      indexOfLastNumberString
    )

  return collaborationWithFirstAndLastNumberStringReplaced
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
      returnValue = stringToReplace.replace(key, value)
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
