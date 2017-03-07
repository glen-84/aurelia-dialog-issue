const gulp = require("gulp");
const requireDir = require("require-dir");

requireDir("build/tasks");

gulp.task("default", gulp.series("build", "watch"));
