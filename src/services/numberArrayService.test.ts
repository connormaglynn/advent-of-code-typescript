import { NumberArrayService } from './numberArrayService'

describe('NumberArrayService', () => {
  describe('getLargestItem', () => {
    it('returns largest item', async () => {
      const numberServiceArray = new NumberArrayService([
        1, 5, 2, 5, 2, 7, 3, 6, 2, 4, 1, 3,
      ])
      expect(numberServiceArray.getLargestItem()).toEqual(7)
    })
  })

  describe('sortAscending', () => {
    it('sorts numbers into ascending order', async () => {
      const numberArrayService = new NumberArrayService([1, 5, 2])
      expect(numberArrayService.sortAscending().array).toEqual([1, 2, 5])
    })
  })

  describe('getTotalValue', () => {
    it('returns total value', async () => {
      const numberArrayService = new NumberArrayService([1, 5, 6, 4])
      expect(numberArrayService.getTotalValue()).toEqual(16)
    })
  })
})
