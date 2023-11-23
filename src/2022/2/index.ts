import { getFileLinesAsArray } from '../../services/fileService'

export const getDayTwoPartOneAnswer = async (fileLocation: string) => {
  const input = await getFileLinesAsArray(fileLocation)

  let scoreTotal = 0
  input.forEach((game) => {
    const opponentChoice = game.split(
      ' '
    )[0] as ROCK_PAPER_SCISSORS_OPPONENT_CHOICE
    const myChoice = game.split(' ')[1] as ROCK_PAPER_SCISSORS_MY_CHOICE

    const opponentChoiceAsWord = ROCK_PAPER_SCISSORS_OPPONENT_CHOICE_MAP.get(
      opponentChoice
    ) as ROCK_PAPER_SCISSORS
    const myChoiceAsWord = ROCK_PAPER_SCISSORS_MY_CHOICE_MAP.get(
      myChoice
    ) as ROCK_PAPER_SCISSORS

    scoreTotal += rockPaperScissorsGameScoreCalculator(
      opponentChoiceAsWord,
      myChoiceAsWord
    )
  })

  return scoreTotal
}

export const getDayTwoPartTwoAnswer = async (fileLocation: string) => {
  const input = await getFileLinesAsArray(fileLocation)

  let scoreTotal = 0
  input.forEach((game) => {
    const opponentChoice = game.split(
      ' '
    )[0] as ROCK_PAPER_SCISSORS_OPPONENT_CHOICE
    const desiredResult = game.split(
      ' '
    )[1] as ROCK_PAPER_SCISSORS_DESIRED_RESULT

    const opponentChoiceAsWord = ROCK_PAPER_SCISSORS_OPPONENT_CHOICE_MAP.get(
      opponentChoice
    ) as ROCK_PAPER_SCISSORS
    const desiredResultAsWord = ROCK_PAPER_SCISSORS_DESIRED_RESULT_MAP.get(
      desiredResult
    ) as DESIRED_RESULT

    const myChoiceAsWord = generateMyChoiceBasedOnDesiredResult(
      opponentChoiceAsWord,
      desiredResultAsWord
    )

    scoreTotal += rockPaperScissorsGameScoreCalculator(
      opponentChoiceAsWord,
      myChoiceAsWord
    )
  })

  return scoreTotal
}

export enum ROCK_PAPER_SCISSORS_OPPONENT_CHOICE {
  ROCK = 'A',
  PAPER = 'B',
  SCISSORS = 'C',
}
export enum ROCK_PAPER_SCISSORS_MY_CHOICE {
  ROCK = 'X',
  PAPER = 'Y',
  SCISSORS = 'Z',
}

const ROCK_PAPER_SCISSORS_MY_CHOICE_MAP = new Map([
  ['X', 'ROCK'],
  ['Y', 'PAPER'],
  ['Z', 'SCISSORS'],
])

export enum ROCK_PAPER_SCISSORS_DESIRED_RESULT {
  X = 'LOSS',
  Y = 'DRAW',
  Z = 'WIN',
}

const ROCK_PAPER_SCISSORS_DESIRED_RESULT_MAP = new Map([
  ['X', 'LOSS'],
  ['Y', 'DRAW'],
  ['Z', 'WIN'],
])

export enum DESIRED_RESULT {
  X = 'LOSS',
  Y = 'DRAW',
  Z = 'WIN',
}

const ROCK_PAPER_SCISSORS_OPPONENT_CHOICE_MAP = new Map([
  ['A', 'ROCK'],
  ['B', 'PAPER'],
  ['C', 'SCISSORS'],
])

const ROCK_PAPER_SCISSORS_RESULT_VALUE_MAP = new Map([
  ['LOSS', 0],
  ['DRAW', 3],
  ['WIN', 6],
])

const ROCK_PAPER_SCISSORS_SHAPE_VALUE_MAP = new Map([
  ['ROCK', 1],
  ['PAPER', 2],
  ['SCISSORS', 3],
])

export const ROCK = 'ROCK'
export const PAPER = 'PAPER'
export const SCISSORS = 'SCISSORS'
export type ROCK_PAPER_SCISSORS = 'ROCK' | 'PAPER' | 'SCISSORS'

export const generateMyChoiceBasedOnDesiredResult = (
  opponentChoice: ROCK_PAPER_SCISSORS,
  desiredOutcome: DESIRED_RESULT
) => {
  if (desiredOutcome === 'WIN') return winningChoiceCalculator(opponentChoice)

  if (desiredOutcome === 'LOSS') return losingChoiceCalculator(opponentChoice)

  return opponentChoice
}

export const rockPaperScissorsGameScoreCalculator = (
  opponentChoice: ROCK_PAPER_SCISSORS,
  myChoice: ROCK_PAPER_SCISSORS
): number => {
  let score = ROCK_PAPER_SCISSORS_SHAPE_VALUE_MAP.get(myChoice) as number

  if (opponentChoice === myChoice) {
    score += ROCK_PAPER_SCISSORS_RESULT_VALUE_MAP.get('DRAW')!
    return score as number
  }

  if (
    (opponentChoice === SCISSORS && myChoice === ROCK) ||
    (opponentChoice === ROCK && myChoice === PAPER) ||
    (opponentChoice === PAPER && myChoice === SCISSORS)
  ) {
    score += ROCK_PAPER_SCISSORS_RESULT_VALUE_MAP.get('WIN')!
    return score as number
  }

  score += ROCK_PAPER_SCISSORS_RESULT_VALUE_MAP.get('LOSS')!
  return score as number
}

export const winningChoiceCalculator = (
  opponentChoice: ROCK_PAPER_SCISSORS
): ROCK_PAPER_SCISSORS => {
  if (opponentChoice === ROCK) return PAPER

  if (opponentChoice === PAPER) return SCISSORS

  return ROCK
}

export const losingChoiceCalculator = (
  opponentChoice: ROCK_PAPER_SCISSORS
): ROCK_PAPER_SCISSORS => {
  if (opponentChoice === ROCK) return SCISSORS

  if (opponentChoice === PAPER) return ROCK

  return PAPER
}
