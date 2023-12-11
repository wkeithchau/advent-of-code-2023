import { getInput } from '../utils/input.js'
import { findGearRatios, findPartNumbers } from './partNumber.js'

const INPUT = getInput(import.meta.url, '\n')

const part1 = () => {
  const partNumbers = findPartNumbers(INPUT)
  const sum = partNumbers.reduce((a, b) => a + b)

  console.log(`The sum of the part numbers is: ${sum}`)
}

const part2 = () => {
  const gearRatios = findGearRatios(INPUT)
  const sum = gearRatios.reduce((a, b) => a + b)

  console.log(`The sum of all gear ratios is: ${sum}`)
}

part1()
part2()
