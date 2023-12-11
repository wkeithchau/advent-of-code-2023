import { expect } from 'chai'

import { checkGame, minimumCubes } from './cube.js'

describe('Day02 - Cube Conundrum', function () {
  let sample1
  let condition

  before(function () {
    sample1 = {
      1: [{ blue: 3, red: 4 }, { red: 1, green: 2, blue: 6 }, { green: 2 }],
      2: [
        { blue: 1, green: 2 },
        { green: 3, blue: 4, red: 1 },
        { green: 1, blue: 1 },
      ],
      3: [
        { green: 8, blue: 6, red: 20 },
        { blue: 5, red: 4, green: 13 },
        { green: 5, red: 1 },
      ],
      4: [
        { green: 1, red: 3, blue: 6 },
        { green: 3, red: 6 },
        { green: 3, blue: 15, red: 14 },
      ],
      5: [
        { red: 6, blue: 1, green: 3 },
        { blue: 2, red: 1, green: 2 },
      ],
      count: 5,
    }
    condition = { red: 12, green: 13, blue: 14 }
  })

  describe('checkGame', function () {
    it('Game 1', function () {
      const game = sample1['1']
      const possible = checkGame(game, condition)
      expect(possible).to.be.true
    })

    it('Game 2', function () {
      const game = sample1['2']
      const possible = checkGame(game, condition)
      expect(possible).to.be.true
    })

    it('Game 3', function () {
      const game = sample1['3']
      const possible = checkGame(game, condition)
      expect(possible).to.be.false
    })

    it('Game 4', function () {
      const game = sample1['4']
      const possible = checkGame(game, condition)
      expect(possible).to.be.false
    })

    it('Game 5', function () {
      const game = sample1['5']
      const possible = checkGame(game, condition)
      expect(possible).to.be.true
    })
  })

  describe('minimumCubes', function () {
    it('Game 1', function () {
      const game = sample1['1']
      const minimum = minimumCubes(game, condition)
      expect(minimum.red).to.equal(4)
      expect(minimum.green).to.equal(2)
      expect(minimum.blue).to.equal(6)
    })

    it('Game 2', function () {
      const game = sample1['2']
      const minimum = minimumCubes(game, condition)
      expect(minimum.red).to.equal(1)
      expect(minimum.green).to.equal(3)
      expect(minimum.blue).to.equal(4)
    })

    it('Game 3', function () {
      const game = sample1['3']
      const minimum = minimumCubes(game, condition)
      expect(minimum.red).to.equal(20)
      expect(minimum.green).to.equal(13)
      expect(minimum.blue).to.equal(6)
    })

    it('Game 4', function () {
      const game = sample1['4']
      const minimum = minimumCubes(game, condition)
      expect(minimum.red).to.equal(14)
      expect(minimum.green).to.equal(3)
      expect(minimum.blue).to.equal(15)
    })

    it('Game 5', function () {
      const game = sample1['5']
      const minimum = minimumCubes(game, condition)
      expect(minimum.red).to.equal(6)
      expect(minimum.green).to.equal(3)
      expect(minimum.blue).to.equal(2)
    })
  })
})
