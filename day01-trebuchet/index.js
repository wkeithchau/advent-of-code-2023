import { getInput } from '../utils/input.js'
import {
  getAdvancedCalibrationValue,
  getCalibrationValue,
} from './calibration.js'

const INPUT = getInput(import.meta.url, '\n')
const DATA = INPUT.map((data) => String(data))

const part1 = () => {
  const calibrationValues = DATA.map((line) => getCalibrationValue(line))
  const sum = calibrationValues.reduce((a, b) => a + b, 0)
  console.log(`The sum of all calibration values is: ${sum}`)
}

const part2 = () => {
  const calibrationValues = DATA.map((line) =>
    getAdvancedCalibrationValue(line)
  )
  const sum = calibrationValues.reduce((a, b) => a + b, 0)
  console.log(`The sum of all advanced calibration values is: ${sum}`)
}

part1()
part2()
