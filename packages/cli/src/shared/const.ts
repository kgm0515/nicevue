import { resolve } from 'path'

// cli工具库相关------------------------------------------
export const CLI = resolve(__dirname, '../../')
export const CLI_PKG_DIR = resolve(CLI, './package.json')
export const CLI_PKG = require(CLI_PKG_DIR)
export const CWD = process.cwd()

// script的后缀名
export const SCRIPTS_EXTNAME = ['.tsx', '.ts', '.jsx', '.js']
