const gulp = require("gulp");
const postcss = require("gulp-postcss");
const uglify = require("gulp-uglify");
const browserSync = require("browser-sync").create();
const concat = require("gulp-concat");
const del = require("del");

const clean = async () => {
    return del(['public']);
}

exports.clean = clean;

const compileCSS = async () => {
    return gulp.src("css/*.css")
    .pipe(postcss())
    .pipe(concat("main.css"))
    .pipe(gulp.dest('./public/css'));
}
exports.compileCSS = compileCSS;

const compileJS = async () => {
    return gulp.src("javascript/*.js")
    .pipe(uglify())
    .pipe(gulp.dest('./public'));
}
exports.compileJS = compileJS;

const compileHTML = async () => {
    return gulp.src("html/*.html")
    .pipe(gulp.dest('./public'))
}
exports.compileHTML = compileHTML;

const compileAll = gulp.parallel(
            compileCSS,
            compileHTML,
            compileJS
        );
exports.compileAll = compileAll;

const watch = async () => {
    browserSync.init({
        server: {
            baseDir: "./public",
            index: "index.html"
        }
    });
    const reloadBrowser = async () => {
        browserSync.reload();
    }
    gulp.watch("css/*.css", gulp.series(compileCSS, reloadBrowser));
    gulp.watch("javascript/*.js", gulp.series(compileJS, reloadBrowser));
    gulp.watch("html/*.html", gulp.series(compileHTML, reloadBrowser));
}

exports.watch = watch;

exports.default = gulp.series(clean, compileAll, watch)