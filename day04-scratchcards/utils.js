export const parseCards = (input) => {
  const cards = input.map((line) => {
    const [cardNumber, card] = line.split(/:\s+/)
    let [winningNumbers, numbers] = card.split(' | ')
    winningNumbers = winningNumbers.split(/\s+/).map((n) => Number(n))
    numbers = numbers.split(/\s+/).map((n) => Number(n))
    return {
      cardNumber: Number(cardNumber.replace('Card ', '')),
      winningNumbers,
      numbers,
    }
  })
  return cards
}
