import { getDayOnePartOneAnswer, getDayOnePartTwoAnswer } from './index'

describe('DAY 1', () => {
  it('returns answer for part 1', async () => {
    const answer = await getDayOnePartOneAnswer(
      __dirname + '/puzzle-1-input.txt'
    )
    expect(answer).toEqual(55172)
  })

  it('returns answer for part 1 - sampled', async () => {
    const answer = await getDayOnePartOneAnswer(
      __dirname + '/puzzle-1-input-sampled.txt'
    )
    expect(answer).toEqual(142)
  })

  it('returns answer for part 2', async () => {
    const answer = await getDayOnePartTwoAnswer(
      __dirname + '/puzzle-1-input.txt'
    )
    expect(answer).toEqual(281)
  })

  it('returns answer for part 2 - sampled', async () => {
    const answer = await getDayOnePartTwoAnswer(
      __dirname + '/puzzle-1-part-2-input-sampled.txt'
    )
    expect(answer).toEqual(281)
  })
})
