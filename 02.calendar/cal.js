#!/usr/bin/env node

const minimist = require('minimist')

function main () {
  const today = new Date()
  let [year, monthIndex] = [today.getUTCFullYear(), today.getUTCMonth()]

  const argv = minimist(process.argv.slice(2), {
    default: {
      y: year,
      m: monthIndex + 1
    }
  })
  year = argv.y
  monthIndex = argv.m - 1

  const dates = generateDates(year, monthIndex)
  consoleOut(dates)
}

function generateDates (year, monthIndex) {
  const dateFrom = new Date(year, monthIndex, 2)
  const dateTo = new Date(year, monthIndex + 1, 1)

  const millisecondPerDate = 86400000
  const rangeOfDay = (dateTo.getTime() - dateFrom.getTime()) / millisecondPerDate

  const dates = []

  for (let dateIndex = 2; dateIndex <= rangeOfDay + 2; dateIndex++) {
    const date = new Date(year, monthIndex, dateIndex)
    dates.push(date)
  }

  return dates
}

function consoleOut (dates) {
  const firstDate = dates[0]

  console.log(`      ${firstDate.getUTCMonth() + 1}月 ${firstDate.getUTCFullYear()}`)
  console.log('日 月 火 水 木 金 土')

  const space = '   '
  process.stdout.write(space.repeat(firstDate.getUTCDay()))

  dates.forEach(
    function (date) {
      const formattedDate = `${(' ' + date.getUTCDate()).slice(-2)} `
      process.stdout.write(formattedDate)
      if (date.getUTCDay() === 6) { console.log(' ') }
    }
  )
}

main()
