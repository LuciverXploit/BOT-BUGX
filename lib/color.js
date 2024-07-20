const chalk = require('chalk')

const color = (text, color) => {
return !color ? chalk.green(text) : chalk.keyword(color)(text)
}

const mylog = (text, color) => {
return !color ? chalk.greenBright('[ BOTMD ] ') + chalk.magentaBright(text) : chalk.greenBright('[ BOTMD ] ') + chalk.keyword(color)(text)
}

module.exports = { color, mylog }