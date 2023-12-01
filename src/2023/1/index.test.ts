import { getDayOnePartOneAnswer } from './index'

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
})
