"use strict";

const Fiber = require("fibers");
const gulp = require("gulp");
const sass = require("gulp-sass");
const reports = require("gulp-sizereport");
const rename = require("gulp-rename");
const minify = require("gulp-clean-css");
sass.compiler = require("dart-sass");

gulp.task("sass", function() {
  return gulp
    .src("./sass/**/*.scss")
    .pipe(sass({ fiber: Fiber }).on("error", sass.logError))
    .pipe(gulp.dest("./styles"))
    .pipe(reports({ gzip: true }))
    .pipe(minify())
    .pipe(
      rename(function(path) {
        path.extname = ".min.css";
      })
    )
    .pipe(reports({ gzip: true }))
    .pipe(gulp.dest("./styles"));
});

gulp.task("sass:watch", function() {
  gulp.watch("./sass/**/*.scss", ["sass"]);
});
