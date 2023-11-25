import { getDayThreePartOneAnswer } from './index'

describe('DAY 3', () => {
  it('Part 1', async () => {
    const answer = await getDayThreePartOneAnswer(
      __dirname + '/puzzle-3-input.txt'
    )
    expect(answer).toEqual(7848)
  })

  it('Part 1 - Sample', async () => {
    const answer = await getDayThreePartOneAnswer(
      __dirname + '/puzzle-3-input-sampled.txt'
    )
    expect(answer).toEqual(157)
  })
})
