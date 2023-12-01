import { expect } from 'chai'

import {
  getAdvancedCalibrationValue,
  getCalibrationValue,
} from './calibration.js'

describe('Day01 - Trebuchet', function () {
  let sample1
  let sample2
  before(function () {
    sample1 = ['1abc2', 'pqr3stu8vwx', 'a1b2c3d4e5f', 'treb7uchet']
    sample2 = [
      'two1nine',
      'eightwothree',
      'abcone2threexyz',
      'xtwone3four',
      '4nineeightseven2',
      'zoneight234',
      '7pqrstsixteen',
    ]
  })
  describe('getCalibrationValue', function () {
    it('Line 1', function () {
      const value = getCalibrationValue(sample1[0])
      expect(value).to.equal(12)
    })

    it('Line 2', function () {
      const value = getCalibrationValue(sample1[1])
      expect(value).to.equal(38)
    })

    it('Line 3', function () {
      const value = getCalibrationValue(sample1[2])
      expect(value).to.equal(15)
    })

    it('Line 4', function () {
      const value = getCalibrationValue(sample1[3])
      expect(value).to.equal(77)
    })
  })

  describe('getAdvancedCalibrationValue', function () {
    it('Line 1', function () {
      const value = getAdvancedCalibrationValue(sample2[0])
      expect(value).to.equal(29)
    })

    it('Line 2', function () {
      const value = getAdvancedCalibrationValue(sample2[1])
      expect(value).to.equal(83)
    })

    it('Line 3', function () {
      const value = getAdvancedCalibrationValue(sample2[2])
      expect(value).to.equal(13)
    })

    it('Line 4', function () {
      const value = getAdvancedCalibrationValue(sample2[3])
      expect(value).to.equal(24)
    })

    it('Line 5', function () {
      const value = getAdvancedCalibrationValue(sample2[4])
      expect(value).to.equal(42)
    })

    it('Line 6', function () {
      const value = getAdvancedCalibrationValue(sample2[5])
      expect(value).to.equal(14)
    })

    it('Line 7', function () {
      const value = getAdvancedCalibrationValue(sample2[6])
      expect(value).to.equal(76)
    })
  })
})
