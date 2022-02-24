const gulp = require("gulp");
const postcss = require("gulp-postcss");
const uglify = require("gulp-uglify");
const browserSync = require("browser-sync").create();

exports.default = async () => {
    browserSync.init({
        server: {
            baseDir: "./public",
            index: "index.html"
        }
    });

    const parseCSS = () => {
        return gulp.src("css/*.css")
        .pipe(postcss())
        .pipe(gulp.dest('./public/css'));
    }
    const parseJS = () => {
        return gulp.src("javascript/*.js")
        .pipe(uglify())
        .pipe(gulp.dest('./public'));
    }
    const parseHTML = () => {
        return gulp.src("html/*.html")
        .pipe(gulp.dest('./public'))
    }
    const reloadBrowser = async () => {
        browserSync.reload();
    }
    gulp.watch("css/*.css", { ignoreInitial: false }, gulp.series(parseCSS, reloadBrowser));
    gulp.watch("javascript/*.js", { ignoreInitial: false }, gulp.series(parseJS, reloadBrowser));
    gulp.watch("html/*.html", { ignoreInitial: false }, gulp.series(parseHTML, reloadBrowser));
}