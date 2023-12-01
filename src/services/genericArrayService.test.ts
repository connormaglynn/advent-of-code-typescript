import { GenericArrayService } from './genericArrayService'

describe('GenericArrayService', () => {
  describe('splitBySeperator', () => {
    it('splits array by seperator', async () => {
      const genericArrayService = new GenericArrayService(['1', ';', '7', '3'])
      expect(genericArrayService.splitBySeperator(';')).toEqual([
        ['1'],
        ['7', '3'],
      ])
    })
  })

  describe('splitInTheMiddle', () => {
    it('returns two arrays of even length', async () => {
      const genericArrayService = new GenericArrayService(['1', '2', '3', '4'])
      expect(genericArrayService.splitInTheMiddle()).toEqual({
        leftSide: { array: ['1', '2'] },
        rightSide: { array: ['3', '4'] },
      })
    })

    it('returns two arrays of off odd length', async () => {
      const genericArrayService = new GenericArrayService([
        '1',
        '2',
        '3',
        '4',
        '5',
      ])
      expect(genericArrayService.splitInTheMiddle()).toEqual({
        leftSide: { array: ['1', '2'] },
        rightSide: { array: ['3', '4', '5'] },
      })
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

  describe('convertToSingleString', () => {
    it('converts array to string', async () => {
      const genericArrayService = new GenericArrayService(['1', '5', '6', '4'])
      expect(genericArrayService.convertToSingleString()).toEqual('1564')
    })
  })

  describe('removeDuplicates', () => {
    it('returns a new array with no duplicates', async () => {
      const genericArrayService = new GenericArrayService([
        '1',
        '2',
        '3',
        '4',
        '1',
        '2',
        '3',
        '4',
      ])
      expect(genericArrayService.removeDuplicates().array).toEqual([
        '1',
        '2',
        '3',
        '4',
      ])
    })
  })

  describe('reduceToMatchingItems', () => {
    it('reduces the array to only matching items', async () => {
      const genericArrayService = new GenericArrayService([
        '1',
        '2',
        '3',
        '4',
        '1',
        '2',
        '3',
        '4',
      ])
      expect(
        genericArrayService.reduceToMatchingItems(['1', '2']).array
      ).toEqual(['1', '2', '1', '2'])
    })

    it('is case sensitive', async () => {
      const genericArrayService = new GenericArrayService(['a'])
      expect(genericArrayService.reduceToMatchingItems(['A']).array).toEqual([])
    })
  })
})
