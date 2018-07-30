const config = {
  img_src: 'src',
  img_dest: 'dist',
  imgmin_quality: 70
}
const gulp = require('gulp')
const imagemin = require('gulp-imagemin')
const mozjpeg = require('imagemin-mozjpeg')
const pngquant = require('imagemin-pngquant')
const cache = require('gulp-cache') // 缓存压缩图片，避免重复压缩

gulp.task('imgmin', function () {
  gulp.src(`${config.img_src}/**/*.{jpg,jpeg,png}`)
    .pipe(cache(imagemin(
      [mozjpeg({ quality: config.imgmin_quality }), pngquant({ quality: config.imgmin_quality })])))
    .pipe(gulp.dest(config.img_dest))
})
