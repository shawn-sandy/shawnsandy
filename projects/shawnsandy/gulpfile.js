"use strict";

var Fiber = require("fibers");
var gulp = require("gulp");
var sass = require("gulp-sass");
const reports = require("gulp-sizereport");
sass.compiler = require("dart-sass");

gulp.task("sass", function() {
  return gulp
    .src("./sass/**/*.scss")
    .pipe(sass({ fiber: Fiber }).on("error", sass.logError))
    .pipe(gulp.dest("./styles"))
    .pipe(reports({ gzip: true }));
});

gulp.task("sass:watch", function() {
  gulp.watch("./sass/**/*.scss", ["sass"]);
});
