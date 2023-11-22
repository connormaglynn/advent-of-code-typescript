import readline from 'readline'
import fs from 'fs'
import events from 'events'

export const getFileLinesAsArray = async (fileLocation: string) => {
  const lines: string[] = []

  const rl = readline.createInterface({
    input: fs.createReadStream(fileLocation),
    crlfDelay: Infinity,
  })

  rl.on('line', (line) => {
    lines.push(line)
  })

  await events.once(rl, 'close')

  return lines
}
