import {
  convertInputIntoWordsThenPlayGame,
  getDayTwoPartOneAnswer,
  PAPER,
  ROCK,
  ROCK_PAPER_SCISSORS_MY_CHOICE,
  ROCK_PAPER_SCISSORS_OPPONENT_CHOICE,
  rockPaperScissorsGameScoreCalculator,
  SCISSORS,
} from './index'

describe('DAY 2', () => {
  it('returns answer for part 1', async () => {
    const answer = await getDayTwoPartOneAnswer(
      __dirname + '/puzzle-2-input.txt'
    )
    expect(answer).toEqual(13446)
  })

  it('returns answer for part 1 - sampled', async () => {
    const answer = await getDayTwoPartOneAnswer(
      __dirname + '/puzzle-2-input-sampled.txt'
    )
    expect(answer).toEqual(15)
  })
})

describe('rockPaperScissorsGameScoreCalculator', () => {
  it('returns 4 for a DRAW with ROCK', async () => {
    expect(rockPaperScissorsGameScoreCalculator(ROCK, ROCK)).toEqual(4)
  })
  it('returns 5 for a DRAW with PAPER', async () => {
    expect(rockPaperScissorsGameScoreCalculator(PAPER, PAPER)).toEqual(5)
  })
  it('returns 6 for a DRAW with SCISSORS', async () => {
    expect(rockPaperScissorsGameScoreCalculator(SCISSORS, SCISSORS)).toEqual(6)
  })
  it('returns 7 for a WIN with ROCK', async () => {
    expect(rockPaperScissorsGameScoreCalculator(SCISSORS, ROCK)).toEqual(7)
  })
  it('returns 8 for a WIN with PAPER', async () => {
    expect(rockPaperScissorsGameScoreCalculator(ROCK, PAPER)).toEqual(8)
  })
  it('returns 9 for a WIN with SCISSORS', async () => {
    expect(rockPaperScissorsGameScoreCalculator(PAPER, SCISSORS)).toEqual(9)
  })
  it('returns 1 for a LOSS with ROCK', async () => {
    expect(rockPaperScissorsGameScoreCalculator(PAPER, ROCK)).toEqual(1)
  })
  it('returns 2 for a LOSS with PAPER', async () => {
    expect(rockPaperScissorsGameScoreCalculator(SCISSORS, PAPER)).toEqual(2)
  })
  it('returns 3 for a LOSS with SCISSORS', async () => {
    expect(rockPaperScissorsGameScoreCalculator(ROCK, SCISSORS)).toEqual(3)
  })
})

describe('convertInputIntoWordsThenPlayGame', () => {
  it('returns 4 for a DRAW with ROCK', async () => {
    expect(
      convertInputIntoWordsThenPlayGame(
        ROCK_PAPER_SCISSORS_OPPONENT_CHOICE.ROCK,
        ROCK_PAPER_SCISSORS_MY_CHOICE.ROCK
      )
    ).toEqual(4)
  })
  it('returns 5 for a DRAW with PAPER', async () => {
    expect(
      convertInputIntoWordsThenPlayGame(
        ROCK_PAPER_SCISSORS_OPPONENT_CHOICE.PAPER,
        ROCK_PAPER_SCISSORS_MY_CHOICE.PAPER
      )
    ).toEqual(5)
  })
  it('returns 6 for a DRAW with SCISSORS', async () => {
    expect(
      convertInputIntoWordsThenPlayGame(
        ROCK_PAPER_SCISSORS_OPPONENT_CHOICE.SCISSORS,
        ROCK_PAPER_SCISSORS_MY_CHOICE.SCISSORS
      )
    ).toEqual(6)
  })
  it('returns 7 for a WIN with ROCK', async () => {
    expect(
      convertInputIntoWordsThenPlayGame(
        ROCK_PAPER_SCISSORS_OPPONENT_CHOICE.SCISSORS,
        ROCK_PAPER_SCISSORS_MY_CHOICE.ROCK
      )
    ).toEqual(7)
  })
  it('returns 8 for a WIN with PAPER', async () => {
    expect(
      convertInputIntoWordsThenPlayGame(
        ROCK_PAPER_SCISSORS_OPPONENT_CHOICE.ROCK,
        ROCK_PAPER_SCISSORS_MY_CHOICE.PAPER
      )
    ).toEqual(8)
  })
  it('returns 9 for a WIN with SCISSORS', async () => {
    expect(
      convertInputIntoWordsThenPlayGame(
        ROCK_PAPER_SCISSORS_OPPONENT_CHOICE.PAPER,
        ROCK_PAPER_SCISSORS_MY_CHOICE.SCISSORS
      )
    ).toEqual(9)
  })
  it('returns 1 for a LOSS with ROCK', async () => {
    expect(
      convertInputIntoWordsThenPlayGame(
        ROCK_PAPER_SCISSORS_OPPONENT_CHOICE.PAPER,
        ROCK_PAPER_SCISSORS_MY_CHOICE.ROCK
      )
    ).toEqual(1)
  })
  it('returns 2 for a LOSS with PAPER', async () => {
    expect(
      convertInputIntoWordsThenPlayGame(
        ROCK_PAPER_SCISSORS_OPPONENT_CHOICE.SCISSORS,
        ROCK_PAPER_SCISSORS_MY_CHOICE.PAPER
      )
    ).toEqual(2)
  })
  it('returns 3 for a LOSS with SCISSORS', async () => {
    expect(
      convertInputIntoWordsThenPlayGame(
        ROCK_PAPER_SCISSORS_OPPONENT_CHOICE.ROCK,
        ROCK_PAPER_SCISSORS_MY_CHOICE.SCISSORS
      )
    ).toEqual(3)
  })
})