export type ROCK_PAPER_SCISSORS = 'ROCK' | 'PAPER' | 'SCISSORS'
export const ROCK = 'ROCK'
export const PAPER = 'PAPER'
export const SCISSORS = 'SCISSORS'

export const WIN = 'WIN'
export const LOSS = 'LOSS'
export const DRAW = 'DRAW'

export type ROCK_PAPER_SCISSORS_RESULT = 'WIN' | 'LOSS' | 'DRAW'

export class RockPaperScissorsService {
  getResultForGame = (
    opponentChoice: ROCK_PAPER_SCISSORS,
    myChoice: ROCK_PAPER_SCISSORS
  ): ROCK_PAPER_SCISSORS_RESULT => {
    if (opponentChoice === myChoice) {
      return DRAW
    }

    if (
      (opponentChoice === SCISSORS && myChoice === ROCK) ||
      (opponentChoice === ROCK && myChoice === PAPER) ||
      (opponentChoice === PAPER && myChoice === SCISSORS)
    ) {
      return WIN
    }

    return LOSS
  }

  winningChoiceCalculator = (
    opponentChoice: ROCK_PAPER_SCISSORS
  ): ROCK_PAPER_SCISSORS => {
    if (opponentChoice === ROCK) return PAPER

    if (opponentChoice === PAPER) return SCISSORS

    return ROCK
  }

  losingChoiceCalculator = (
    opponentChoice: ROCK_PAPER_SCISSORS
  ): ROCK_PAPER_SCISSORS => {
    if (opponentChoice === ROCK) return SCISSORS

    if (opponentChoice === PAPER) return ROCK

    return PAPER
  }

  generateMyChoiceBasedOnDesiredResult = (
    opponentChoice: ROCK_PAPER_SCISSORS,
    desiredOutcome: ROCK_PAPER_SCISSORS_RESULT
  ): ROCK_PAPER_SCISSORS => {
    if (desiredOutcome === WIN)
      return this.winningChoiceCalculator(opponentChoice)

    if (desiredOutcome === LOSS)
      return this.losingChoiceCalculator(opponentChoice)

    return opponentChoice
  }
}
