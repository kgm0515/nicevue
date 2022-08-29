import chalk from 'chalk'

const logger = {
  info(text: string) {
    console.log(text)
  },
  success(text: string) {
    console.log(chalk.hex('#00c48f')(text))
  },
  warning(text: string) {
    console.log(chalk.hex('#ff9800')(text))
  },
  error(text: string) {
    console.log(chalk.hex('#f44336')(text))
  },
}

export default logger