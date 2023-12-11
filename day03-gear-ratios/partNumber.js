import { SYMBOLS } from './constants.js'

const isUnique = (value, index, array) => {
  return array.indexOf(value) === index
}

const isSymbol = (char) => {
  if (Number.isNaN(Number(char)) === true && char !== SYMBOLS.empty) {
    return true
  }
  return false
}

const checkAdjacentSymbol = (input, lineNo, charNo) => {
  for (let nextLine = lineNo - 1; nextLine <= lineNo + 1; nextLine += 1) {
    if (nextLine >= 0 && nextLine < input.length) {
      const line = input[nextLine]
      for (let nextChar = charNo - 1; nextChar <= charNo + 1; nextChar += 1) {
        if (nextChar >= 0 && nextChar < line.length) {
          const char = line[nextChar]
          if (isSymbol(char) === true) {
            return true
          }
        }
      }
    }
  }
  return false
}

export const findPartNumbers = (input) => {
  const partNumbers = []
  for (let lineNo = 0; lineNo < input.length; lineNo += 1) {
    const line = input[lineNo]
    let number = ''
    let completeNumber = false
    let adjacentSymbol = false
    for (let charNo = 0; charNo < line.length; charNo += 1) {
      const char = line[charNo]
      if (Number.isNaN(Number(char)) === false) {
        number += char
        if (checkAdjacentSymbol(input, lineNo, charNo) === true) {
          adjacentSymbol = true
        }
      } else if (number !== '') {
        completeNumber = true
      }
      if (charNo + 1 === line.length) {
        completeNumber = true
      }
      if (completeNumber === true) {
        if (adjacentSymbol === true) {
          partNumbers.push(Number(number))
        }
        number = ''
        completeNumber = false
        adjacentSymbol = false
      }
    }
  }
  return partNumbers
}

const isGear = (char) => {
  if (char === SYMBOLS.gear) {
    return true
  }
  return false
}

const findAdjacentGears = (input, lineNo, charNo) => {
  const gears = []
  for (let nextLine = lineNo - 1; nextLine <= lineNo + 1; nextLine += 1) {
    if (nextLine >= 0 && nextLine < input.length) {
      const line = input[nextLine]
      for (let nextChar = charNo - 1; nextChar <= charNo + 1; nextChar += 1) {
        if (nextChar >= 0 && nextChar < line.length) {
          const char = line[nextChar]
          if (isGear(char) === true) {
            gears.push([nextLine, nextChar])
          }
        }
      }
    }
  }
  return gears
}

export const findGearRatios = (input) => {
  const possibleGearNumbers = []
  for (let lineNo = 0; lineNo < input.length; lineNo += 1) {
    const line = input[lineNo]
    let number = ''
    let completeNumber = false
    let adjacentGears = []
    for (let charNo = 0; charNo < line.length; charNo += 1) {
      const char = line[charNo]
      if (Number.isNaN(Number(char)) === false) {
        number += char
        adjacentGears.push(...findAdjacentGears(input, lineNo, charNo))
      } else if (number !== '') {
        completeNumber = true
      }
      if (charNo + 1 === line.length) {
        completeNumber = true
      }
      if (completeNumber === true) {
        if (adjacentGears.length !== 0) {
          adjacentGears = adjacentGears.map((gear) => JSON.stringify(gear))
          adjacentGears = adjacentGears.filter((gear, index) =>
            isUnique(gear, index, adjacentGears)
          )

          adjacentGears.forEach((gear) => {
            possibleGearNumbers.push({
              number: Number(number),
              gear,
            })
          })
        }
        number = ''
        completeNumber = false
        adjacentGears = []
      }
    }
  }

  let gearRefs = {}
  possibleGearNumbers.forEach((data) => {
    if (gearRefs[data.gear] === undefined) {
      gearRefs[data.gear] = [data.number]
    } else {
      gearRefs[data.gear].push(data.number)
    }
  })
  gearRefs = Object.values(gearRefs).filter((refs) => refs.length === 2)
  gearRefs = gearRefs.map((refs) => refs.reduce((a, b) => a * b))

  return gearRefs
}
