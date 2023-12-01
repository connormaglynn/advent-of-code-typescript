import readline from 'readline'
import fs from 'fs'
import events from 'events'

export const getFileLinesAsArray = async (fileLocation: string) => {
  const lines: string[] = []

  const rl = readline.createInterface({
    input: fs.createReadStream(fileLocation),
    crlfDelay: Infinity,
  })

  try {
    rl.on('line', (line) => {
      lines.push(line)
    })
  } finally {
    await events.once(rl, 'close')
  }

  return lines
}
