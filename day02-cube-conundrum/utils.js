const parseDraws = (draws) => {
  const parsedDraws = draws.split('; ').map((draw) => {
    const tally = {}
    const colourCounts = draw.split(', ')
    colourCounts.forEach((colourCount) => {
      const [count, colour] = colourCount.split(' ')
      tally[colour] = Number(count)
    })
    return tally
  })
  return parsedDraws
}

const parseLine = (line) => {
  let [gameName, draws] = line.split(': ')
  gameName = gameName.replace('Game ', '')
  draws = parseDraws(draws)

  return {
    name: gameName,
    draws,
  }
}

export const parseGames = (input) => {
  const games = {}
  input.forEach((line) => {
    const game = parseLine(line)
    games[game.name] = game.draws
  })
  games.count = input.length
  return games
}
