import { expect } from 'chai'

import { findGearRatios, findPartNumbers } from './partNumber.js'

describe('Day03 - Gear Ratios', function () {
  let input

  before(function () {
    input = [
      '467..114..',
      '...*......',
      '..35..633.',
      '......#...',
      '617*......',
      '.....+.58.',
      '..592.....',
      '......755.',
      '...$.*....',
      '.664.598..',
    ]
  })
  describe('findPartNumbers', function () {
    it('Sample 1', function () {
      const partNumbers = findPartNumbers(input)
      const expectNumbers = [467, 35, 633, 617, 592, 755, 664, 598]
      expect(partNumbers).to.have.members(expectNumbers)
    })
  })

  describe('findGearRatios', function () {
    it('Sample 1', function () {
      const gearRatios = findGearRatios(input)
      const expectNumbers = [16345, 451490]
      expect(gearRatios).to.have.members(expectNumbers)
    })
  })
})
