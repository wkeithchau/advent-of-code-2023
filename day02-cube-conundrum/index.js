import { getInput } from '../utils/input.js'
import { checkGame, minimumCubes } from './cube.js'
import { parseGames } from './utils.js'

const INPUT = getInput(import.meta.url, '\n')
const DATA = parseGames(INPUT)

const part1 = () => {
  const condition = { red: 12, green: 13, blue: 14 }
  const results = {}
  let sum = 0
  for (let i = 1; i <= DATA.count; i += 1) {
    const name = String(i)
    const game = DATA[name]
    const possible = checkGame(game, condition)
    results[name] = possible
    if (possible === true) {
      sum += i
    }
  }

  console.log(`The sum of possible games is: ${sum}`)
}

const part2 = () => {
  const results = {}
  let sum = 0
  for (let i = 1; i <= DATA.count; i += 1) {
    const name = String(i)
    const game = DATA[name]
    const minimum = minimumCubes(game)
    results[name] = minimum
    const power = Object.values(minimum).reduce((a, b) => a * b, 1)
    sum += power
  }

  console.log(`The sum of the power of these sets is: ${sum}`)
}

part1()
part2()
