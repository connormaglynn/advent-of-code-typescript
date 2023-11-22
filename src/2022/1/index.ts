import { getFileLinesAsArray } from '../../services/fileService'
import { GenericArrayService } from '../../services/genericArrayService'

export const getDayOnePartOneAnswer = async (fileLocation: string) => {
  const input = new GenericArrayService(await getFileLinesAsArray(fileLocation))

  const elfsCalories = input.splitBySeperator('')

  const allTotalCalories = new GenericArrayService()
  elfsCalories.forEach((elfCalories) => {
    const totalElfCalories = new GenericArrayService(elfCalories)
      .convertToNumbersArray()
      .getTotalValue()
    allTotalCalories.push(String(totalElfCalories))
  })

  return allTotalCalories.convertToNumbersArray().getLargestNumber()
}

export const getDayOnePartTwoAnswer = async (fileLocation: string) => {
  const input = new GenericArrayService(await getFileLinesAsArray(fileLocation))

  const elfsCalories = input.splitBySeperator('')

  const allTotalCalories = new GenericArrayService()
  elfsCalories.forEach((elfCalories) => {
    const totalElfCalories = new GenericArrayService(elfCalories)
      .convertToNumbersArray()
      .getTotalValue()
    allTotalCalories.push(String(totalElfCalories))
  })

  return allTotalCalories
    .convertToNumbersArray()
    .getLargestNumbers(3)
    .getTotalValue()
}
