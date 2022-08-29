/*
 * @Description:
 * @Version: 2.0
 * @Autor: 匡光淼
 * @Date: 2022-08-29 16:15:32
 * @LastEditors: 匡光淼
 * @LastEditTime: 2022-08-29 16:27:52
 */
import fs from 'fs'
import path from 'path'

export function genRoute() {
  const uiSrc = path.join(process.cwd(), '../', 'ui', 'src')
  console.log('-----------', uiSrc)

  const compDirs = fs.readdirSync(uiSrc).filter((dir) => fs.statSync(path.join(uiSrc, dir)).isDirectory())
  const compObject = {}
  compDirs.forEach((compName) => {
    ;['zh', 'en'].forEach((mdName) => {
      const tempPath = path.join(path.join(uiSrc, compName), 'docs', mdName) + '.md'
      if (fs.existsSync(tempPath)) {
        compObject[`${compName}-${mdName}`] = tempPath
      }
    })
  })
  console.log('获取所有组件说明文档信息', compObject)
}
