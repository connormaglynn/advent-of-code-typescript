import { getDayOnePartOneAnswer, getDayOnePartTwoAnswer } from './index'

describe('DAY 1', () => {
  it('returns answer for part 1', async () => {
    const answer = await getDayOnePartOneAnswer(
      __dirname + '/puzzle-1-input.txt'
    )
    expect(answer).toEqual(71934)
  })

  it('returns answer for part 1 - sampled', async () => {
    const answer = await getDayOnePartOneAnswer(
      __dirname + '/puzzle-1-input-sampled.txt'
    )
    expect(answer).toEqual(3)
  })

  it('returns answer for part 2 - answer', async () => {
    const answer = await getDayOnePartTwoAnswer(
      __dirname + '/puzzle-1-input.txt'
    )
    expect(answer).toEqual(211447)
  })

  it('returns answer for part 2 - sampled', async () => {
    const answer = await getDayOnePartTwoAnswer(
      __dirname + '/puzzle-1-input-sampled.txt'
    )
    expect(answer).toEqual(6)
  })
})
