import { NumberArrayService } from './numberArrayService'

describe('NumberArrayService', () => {
  describe('getLargestNumber', () => {
    it('returns largest Number', async () => {
      const numberServiceArray = new NumberArrayService([
        1, 5, 2, 5, 2, 7, 3, 6, 2, 4, 1, 3,
      ])
      expect(numberServiceArray.getLargestNumber()).toEqual(7)
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

  describe('getLargestNumbers', () => {
    it('returns largest numbers', async () => {
      const numberArrayService = new NumberArrayService([1, 5, 6, 4])
      expect(numberArrayService.getLargestNumbers(2).array).toEqual([6, 5])
    })
  })

  describe('removeNonNumbers', () => {
    it('removes NaN values', async () => {
      const numberArrayService = new NumberArrayService([1, 5, NaN, 4])
      expect(numberArrayService.removeNonNumbers().array).toEqual([1, 5, 4])
    })
  })

  describe('removeNegativeNumbers', () => {
    it('removes Negative Numbers', async () => {
      const numberArrayService = new NumberArrayService([1, 5, -1, -100, 4])
      expect(numberArrayService.removeNegativeNumbers().array).toEqual([
        1, 5, 4,
      ])
    })
  })

  describe('covertToGenericArray', () => {
    it('coverts to Generic Array', async () => {
      const numberArrayService = new NumberArrayService([1, 5, NaN, 4])
      expect(numberArrayService.convertToGenericArray().array).toEqual([
        '1',
        '5',
        'NaN',
        '4',
      ])
    })
  })
})
