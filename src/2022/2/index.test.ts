import {
  getDayTwoPartOneAnswer,
  getDayTwoPartTwoAnswer,
  rockPaperScissorsGameScoreCalculator,
} from './index'
import { PAPER, ROCK, SCISSORS } from '../../services/rockPaperScissorsService'

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

  it('returns answer for part 2', async () => {
    const answer = await getDayTwoPartTwoAnswer(
      __dirname + '/puzzle-2-input.txt'
    )
    expect(answer).toEqual(13509)
  })

  it('returns answer for part 2 - sampled', async () => {
    const answer = await getDayTwoPartTwoAnswer(
      __dirname + '/puzzle-2-input-sampled.txt'
    )
    expect(answer).toEqual(12)
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
