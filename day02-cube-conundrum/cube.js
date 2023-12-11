import { COLOURS } from './constants.js'

export const checkGame = (game, condition) => {
  let conditionPassed = true
  const conditionColours = Object.keys(condition)
  conditionColours.forEach((colour) => {
    const maxCount = condition[colour]
    game.forEach((draw) => {
      if (draw[colour] > maxCount) {
        conditionPassed = false
      }
    })
  })
  return conditionPassed
}

export const minimumCubes = (game) => {
  const minimum = {
    [COLOURS.red]: 0,
    [COLOURS.blue]: 0,
    [COLOURS.green]: 0,
  }
  const colours = Object.keys(minimum)
  game.forEach((draw) => {
    colours.forEach((colour) => {
      if (minimum[colour] < draw[colour]) {
        minimum[colour] = draw[colour]
      }
    })
  })
  return minimum
}
