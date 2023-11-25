import {
  DRAW,
  LOSS,
  PAPER,
  ROCK,
  RockPaperScissorsService,
  SCISSORS,
  WIN,
} from './rockPaperScissorsService'

describe('RockPaperScissorsService', () => {
  describe('getResultForGame', () => {
    it('returns DRAW for same answer', async () => {
      const rockPaperScissorsService = new RockPaperScissorsService()
      expect(rockPaperScissorsService.getResultForGame(ROCK, ROCK)).toEqual(
        DRAW
      )
      expect(rockPaperScissorsService.getResultForGame(PAPER, PAPER)).toEqual(
        DRAW
      )
      expect(
        rockPaperScissorsService.getResultForGame(SCISSORS, SCISSORS)
      ).toEqual(DRAW)
    })
    it('returns WIN', async () => {
      const rockPaperScissorsService = new RockPaperScissorsService()
      expect(rockPaperScissorsService.getResultForGame(SCISSORS, ROCK)).toEqual(
        WIN
      )
      expect(rockPaperScissorsService.getResultForGame(ROCK, PAPER)).toEqual(
        WIN
      )
      expect(
        rockPaperScissorsService.getResultForGame(PAPER, SCISSORS)
      ).toEqual(WIN)
    })
    it('returns LOSS', async () => {
      const rockPaperScissorsService = new RockPaperScissorsService()
      expect(rockPaperScissorsService.getResultForGame(ROCK, SCISSORS)).toEqual(
        LOSS
      )
      expect(rockPaperScissorsService.getResultForGame(PAPER, ROCK)).toEqual(
        LOSS
      )
      expect(
        rockPaperScissorsService.getResultForGame(SCISSORS, PAPER)
      ).toEqual(LOSS)
    })
  })
  describe('generateMyChoiceBasedOnDesiredResult', () => {
    it('returns opponents choice for DRAW', async () => {
      const rockPaperScissorsService = new RockPaperScissorsService()
      expect(
        rockPaperScissorsService.generateMyChoiceBasedOnDesiredResult(
          ROCK,
          DRAW
        )
      ).toEqual(ROCK)
      expect(
        rockPaperScissorsService.generateMyChoiceBasedOnDesiredResult(
          PAPER,
          DRAW
        )
      ).toEqual(PAPER)
      expect(
        rockPaperScissorsService.generateMyChoiceBasedOnDesiredResult(
          SCISSORS,
          DRAW
        )
      ).toEqual(SCISSORS)
    })
    it('returns winning choice for WIN', async () => {
      const rockPaperScissorsService = new RockPaperScissorsService()
      expect(
        rockPaperScissorsService.generateMyChoiceBasedOnDesiredResult(ROCK, WIN)
      ).toEqual(PAPER)
      expect(
        rockPaperScissorsService.generateMyChoiceBasedOnDesiredResult(
          PAPER,
          WIN
        )
      ).toEqual(SCISSORS)
      expect(
        rockPaperScissorsService.generateMyChoiceBasedOnDesiredResult(
          SCISSORS,
          WIN
        )
      ).toEqual(ROCK)
    })
  })
  describe('winningChoiceCalculator', () => {
    it('returns PAPER to beat ROCK', async () => {
      const rockPaperScissorsService = new RockPaperScissorsService()
      expect(rockPaperScissorsService.winningChoiceCalculator(ROCK)).toEqual(
        PAPER
      )
    })
    it('returns SCISSORS to beat PAPER', async () => {
      const rockPaperScissorsService = new RockPaperScissorsService()
      expect(rockPaperScissorsService.winningChoiceCalculator(PAPER)).toEqual(
        SCISSORS
      )
    })
    it('returns ROCK to beat SCISSORS', async () => {
      const rockPaperScissorsService = new RockPaperScissorsService()
      expect(
        rockPaperScissorsService.winningChoiceCalculator(SCISSORS)
      ).toEqual(ROCK)
    })
  })
  describe('losingChoiceCalculator', () => {
    it('returns PAPER loses to SCISSORS', async () => {
      const rockPaperScissorsService = new RockPaperScissorsService()
      expect(rockPaperScissorsService.winningChoiceCalculator(PAPER)).toEqual(
        SCISSORS
      )
    })
    it('returns SCISSORS loses to ROCK', async () => {
      const rockPaperScissorsService = new RockPaperScissorsService()
      expect(
        rockPaperScissorsService.winningChoiceCalculator(SCISSORS)
      ).toEqual(ROCK)
    })
    it('returns ROCK loses to PAPER', async () => {
      const rockPaperScissorsService = new RockPaperScissorsService()
      expect(rockPaperScissorsService.winningChoiceCalculator(ROCK)).toEqual(
        PAPER
      )
    })
  })
})
