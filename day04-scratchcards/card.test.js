import { expect } from 'chai'

import { calculateCardPoints, scoreCards } from './card.js'

describe('Day04 - Scratchcards', function () {
  let sample1

  before(function () {
    sample1 = [
      {
        cardNumber: 1,
        winningNumbers: [41, 48, 83, 86, 17],
        numbers: [83, 86, 6, 31, 17, 9, 48, 53],
      },
      {
        cardNumber: 2,
        winningNumbers: [13, 32, 20, 16, 61],
        numbers: [61, 30, 68, 82, 17, 32, 24, 19],
      },
      {
        cardNumber: 3,
        winningNumbers: [0, 1, 21, 53, 59, 44],
        numbers: [69, 82, 63, 72, 16, 21, 14, 1],
      },
      {
        cardNumber: 4,
        winningNumbers: [41, 92, 73, 84, 69],
        numbers: [59, 84, 76, 51, 58, 5, 54, 83],
      },
      {
        cardNumber: 5,
        winningNumbers: [87, 83, 26, 28, 32],
        numbers: [88, 30, 70, 12, 93, 22, 82, 36],
      },
      {
        cardNumber: 6,
        winningNumbers: [31, 18, 13, 56, 72],
        numbers: [74, 77, 10, 23, 35, 67, 36, 11],
      },
    ]
  })

  describe('calculateCardPoints', function () {
    it('Card 1', function () {
      const card = sample1[0]
      const points = calculateCardPoints(card)
      expect(points).to.equal(8)
    })

    it('Card 2', function () {
      const card = sample1[1]
      const points = calculateCardPoints(card)
      expect(points).to.equal(2)
    })

    it('Card 3', function () {
      const card = sample1[2]
      const points = calculateCardPoints(card)
      expect(points).to.equal(2)
    })

    it('Card 4', function () {
      const card = sample1[3]
      const points = calculateCardPoints(card)
      expect(points).to.equal(1)
    })

    it('Card 5', function () {
      const card = sample1[4]
      const points = calculateCardPoints(card)
      expect(points).to.equal(0)
    })

    it('Card 6', function () {
      const card = sample1[5]
      const points = calculateCardPoints(card)
      expect(points).to.equal(0)
    })
  })

  describe('scoreCards', function () {
    it('Sample 1', function () {
      const cardCount = scoreCards(sample1)
      expect(cardCount).to.equal(30)
    })
  })
})
