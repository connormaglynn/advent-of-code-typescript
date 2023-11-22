import { GenericArrayService } from './genericArrayService'

describe('GenericArrayService', () => {
  describe('splitBySeperator', () => {
    it('returns largest item', async () => {
      const genericArrayService = new GenericArrayService(['1', ';', '7', '3'])
      expect(genericArrayService.splitBySeperator(';')).toEqual([
        ['1'],
        ['7', '3'],
      ])
    })
  })

  describe('convertToNumbersArray', () => {
    it('converts strings to numbers', async () => {
      const genericArrayService = new GenericArrayService(['1', '5', '6', '4'])
      expect(genericArrayService.convertToNumbersArray().array).toEqual([
        1, 5, 6, 4,
      ])
    })

    it('converts non-number strings to NaN', async () => {
      const genericArrayService = new GenericArrayService(['hello'])
      expect(genericArrayService.convertToNumbersArray().array).toEqual([NaN])
    })
  })
})
