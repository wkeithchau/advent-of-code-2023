export const calculateCardPoints = (card) => {
  const matchingNumbers = card.numbers.filter((num) =>
    card.winningNumbers.includes(num)
  )
  let points = 0
  if (matchingNumbers.length !== 0) {
    points = Math.pow(2, matchingNumbers.length - 1)
  }
  return points
}

const scoreCard = (cardLedger, card) => {
  const matchingNumbers = card.numbers.filter((num) =>
    card.winningNumbers.includes(num)
  )
  const cardNumbers = []
  for (let i = 1; i <= matchingNumbers.length; i += 1) {
    for (let j = 0; j < card.count; j += 1) {
      cardNumbers.push(card.cardNumber + i)
    }
  }
  return cardNumbers
}

const addCardsToCollection = (cardLedger, cardNumbers) => {
  const cards = JSON.parse(JSON.stringify(cardLedger))
  for (let i = 0; i < cardNumbers.length; i += 1) {
    const cardNumber = cardNumbers[i]
    cards[cardNumber - 1].count += 1
  }
  return cards
}

export const scoreCards = (cardLedger) => {
  let cards = JSON.parse(JSON.stringify(cardLedger))
  for (let i = 0; i < cards.length; i += 1) {
    const card = cards[i]
    card.count = 1
  }
  let index = 0
  while (index < cards.length) {
    const card = cards[index]
    const cardNumbers = scoreCard(cards, card)
    cards = addCardsToCollection(cards, cardNumbers)
    index += 1
  }
  const cardCount = cards.map((c) => c.count).reduce((a, b) => a + b)
  return cardCount
}
