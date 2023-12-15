import { getInput } from '../utils/input.js'
import { calculateCardPoints, scoreCards } from './card.js'
import { parseCards } from './utils.js'

const INPUT = getInput(import.meta.url, '\n')
const DATA = parseCards(INPUT)

const part1 = () => {
  const cardPoints = DATA.map((card) => calculateCardPoints(card))
  const totalPoints = cardPoints.reduce((a, b) => a + b)

  console.log(`The total amount of points from the cards are: ${totalPoints}`)
}

const part2 = () => {
  const cardCount = scoreCards(DATA)

  console.log(`The total number of scratchcards is: ${cardCount}`)
}

part1()
part2()
