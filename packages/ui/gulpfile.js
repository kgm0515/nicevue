/*
 * @Description:
 * @Version: 2.0
 * @Autor: 匡光淼
 * @Date: 2022-08-26 18:07:06
 * @LastEditors: 匡光淼
 * @LastEditTime: 2022-08-26 20:22:50
 */
const { series, src, dest } = require('gulp')
const gulpLess = require('gulp-less')
const autoPrefixer = require('gulp-autoprefixer')
const cleanCss = require('gulp-clean-css')
const fs = require('fs-extra')

// 删除dist/style文件夹
const cleanStyle = async (cb) => {
  fs.removeSync('./dist/style')
  cb()
}

// 编译css
function compile() {
  return src('./style/**/*.less').pipe(gulpLess()).pipe(autoPrefixer()).pipe(cleanCss()).pipe(dest('./dist/style'))
}

module.exports = {
  buildTask: series(cleanStyle, compile)
}
