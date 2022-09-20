/*
 * @Description:
 * @Version: 2.0
 * @Autor: 匡光淼
 * @Date: 2022-09-19 19:24:47
 * @LastEditors: 匡光淼
 * @LastEditTime: 2022-09-20 09:14:08
 */
const path = require('path')
const fs = require('fs')

/**
 * 创建软连接
 * target 目标文件
 * path 创建软链对应的地址
 */
fs.symlink(path.resolve(__dirname + '/target/'), path.resolve(__dirname + '/test'), (err) => {
  console.log(err, '出错了')
})
