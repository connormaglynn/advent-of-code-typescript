import * as console from 'console'
import * as readline from 'readline'
import * as fs from 'fs'
import * as events from 'events'

export const calorieCounter = async () => {
  try {
    const rl = readline.createInterface({
      input: fs.createReadStream(__dirname + '/puzzle-1-input.txt'),
      crlfDelay: Infinity,
    })

    let largestCalories = 0
    let currentElfsCalories = 0
    rl.on('line', (line) => {
      if (line !== '') {
        currentElfsCalories += parseInt(line)
        return
      }
      if (currentElfsCalories > largestCalories) {
        largestCalories = currentElfsCalories
        currentElfsCalories = 0
        console.log(`Largest Calories Now: ${largestCalories}`)
        return
      }
    })

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    await events.once(rl, 'close')

    return largestCalories
  } catch (err) {
    console.error(err)
    return
  }
}
