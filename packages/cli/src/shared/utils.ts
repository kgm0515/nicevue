/*
 * @Description:
 * @Version: 2.0
 * @Autor: 匡光淼
 * @Date: 2022-08-29 16:49:28
 * @LastEditors: 匡光淼
 * @LastEditTime: 2022-08-29 17:55:05
 */
import ora from 'ora'

/**
 * 开始执行任务
 * @param taskname
 * @param callback
 */
export async function startTask(taskname: string, callback: () => any) {
  const spinner = ora(`${taskname} start...`).start()
  await sleep(1000)
  try {
    await callback()
    spinner.succeed(`${taskname} succeed`)
  } catch (error) {
    console.log(error)
    spinner.fail(`${taskname} failed`)
  }
}

/**
 * @param minisceonds 毫秒
 * @returns
 */
export async function sleep(minisceonds: number = 1000): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, minisceonds)
  })
}
