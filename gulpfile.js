const gulp = require("gulp")
const refresh = require("gulp-refresh")
const rename = require("gulp-rename")
const sass = require("gulp-sass")
const terser = require("gulp-terser")

sass.compiler = require('node-sass');

gulp.task("default", function() {
    return gulp
      .src("*.js")
      .pipe(terser())
      .pipe(rename({ extname: ".min.js" }))
      .pipe(gulp.dest('./build/'))
      .pipe(refresh());
  });

gulp.task("scssToCss", function() {
    return gulp
      .src("*.scss")
      .pipe(sass())
      .pipe(gulp.dest('./styles/'))
      .pipe(refresh());
  });

  gulp.task("watch", function() {
      gulp.watch("*.js", gulp.series("default"));
      gulp.watch("*.scss", gulp.series("scssToCss"));
  });
