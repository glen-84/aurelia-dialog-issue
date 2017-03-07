const gulp = require("gulp");
const merge = require("merge2");
const ts = require("gulp-typescript");

// Build.
gulp.task("build:js", () => {
    const tsProject = ts.createProject("tsconfig.json");

    const tsResult = tsProject.src().pipe(tsProject());

    return merge([
        tsResult.dts.pipe(gulp.dest(tsProject.config.compilerOptions.outDir)),
        tsResult.js.pipe(gulp.dest(tsProject.config.compilerOptions.outDir))
    ]);
});

gulp.task("build:html", () => {
    return gulp.src("src/**/*.html")
        .pipe(gulp.dest("public/assets"));
});

gulp.task("build", gulp.series("build:js", "build:html"));
