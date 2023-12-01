import { SPELLED_NUMBERS } from './constants.js'

const NUMBER_TYPES = Object.keys(SPELLED_NUMBERS)

export const getCalibrationValue = (line) => {
  let iterator = 0
  let firstDigit
  do {
    const number = Number(line[iterator])
    if (Number.isNaN(number) === false) {
      firstDigit = number
    }
    iterator += 1
  } while (firstDigit === undefined && iterator <= line.length)

  iterator = line.length - 1
  let lastDigit
  do {
    const number = Number(line[iterator])
    if (Number.isNaN(number) === false) {
      lastDigit = number
    }
    iterator -= 1
  } while (lastDigit === undefined && iterator >= 0)

  const value = Number(`${firstDigit}${lastDigit}`)
  return value
}

const isNumber = (value) => {
  if (Number.isNaN(value) === false) {
    return true
  }
  return false
}

const findWordNumber = (word) => {
  const matchedType = NUMBER_TYPES.find((type) => word.includes(type))
  return matchedType
}

export const getAdvancedCalibrationValue = (line) => {
  let iterator = 0
  let word = ''
  let firstDigit
  do {
    let number = Number(line[iterator])
    if (isNumber(number) === true) {
      firstDigit = number
    }
    word += line[iterator]

    number = findWordNumber(word)
    if (number !== undefined) {
      firstDigit = SPELLED_NUMBERS[number]
    }
    iterator += 1
  } while (firstDigit === undefined && iterator <= line.length)

  iterator = line.length - 1
  word = ''
  let lastDigit
  do {
    let number = Number(line[iterator])
    if (isNumber(number) === true) {
      lastDigit = number
    }
    word = line[iterator] + word
    number = findWordNumber(word)
    if (number !== undefined) {
      lastDigit = SPELLED_NUMBERS[number]
    }
    iterator -= 1
  } while (lastDigit === undefined && iterator >= 0)

  const value = Number(`${firstDigit}${lastDigit}`)
  return value
}
