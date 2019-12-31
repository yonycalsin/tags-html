var gulp = require("gulp");
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json")

var uglify = require("gulp-uglify");
var sourcemaps = require("gulp-sourcemaps");
var buffer = require("vinyl-buffer");
var del = require('del');

function clean(cb) {
    del(["dist/*.map"])
    cb()
}

function dev() {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest("dist"))
        .pipe(buffer())
        .pipe(sourcemaps.init({ loadMaps: true }))
        // .pipe(uglify())
        .pipe(sourcemaps.write('./'))
}
function build() {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest("dist"))
        .pipe(buffer())
        .pipe(sourcemaps.init({ loadMaps: false }))
        .pipe(uglify())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest("./dist"))
}
function message(cb, msg = `
    ========================
       Server dev started
    ========================
`) {
    return new Promise(function (resolve, reject) {
        console.log(msg);
        resolve()
    })
}
gulp.task("clean", clean)
gulp.task("default", function () {
    return gulp.watch('./**/*.ts', gulp.series(message, dev))
})

gulp.task("prod", gulp.series(build, clean, () => message(null, `
    ===============================
    Build Successfully completion !
    ==============================
`)))