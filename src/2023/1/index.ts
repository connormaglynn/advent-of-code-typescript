import { getFileLinesAsArray } from '../../services/fileService'
import { GenericArrayService } from '../../services/genericArrayService'

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
