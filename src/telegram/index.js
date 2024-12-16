import { Telegraf } from 'telegraf'
import config from '../config/index.js'
import initializeCommand from './command.js'

const bot = new Telegraf(config.TELEGRAM_TOKEN)

initializeCommand(bot)

export default bot


