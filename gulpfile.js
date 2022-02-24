const gulp = require("gulp");
const postcss = require("gulp-postcss");
const uglify = require("gulp-uglify");
const browserSync = require("browser-sync").create();
const del = require("del");

exports.clean = async () => {
    return del(['public']);
}

exports.parseCSS = async () => {
    return gulp.src("css/*.css")
    .pipe(postcss())
    .pipe(gulp.dest('./public/css'));
}

exports.parseJS = async () => {
    return gulp.src("javascript/*.js")
    .pipe(uglify())
    .pipe(gulp.dest('./public'));
}

exports.parseHTML = async () => {
    return gulp.src("html/*.html")
    .pipe(gulp.dest('./public'))
}

exports.parseAll = gulp.parallel(
            exports.parseCSS,
            exports.parseHTML,
            exports.parseJS
        );

exports.watch = async () => {
    browserSync.init({
        server: {
            baseDir: "./public",
            index: "index.html"
        }
    });
    const reloadBrowser = async () => {
        browserSync.reload();
    }
    // Reload browser once to get all new files in public
    reloadBrowser();

    gulp.watch("css/*.css", gulp.series(exports.parseCSS, reloadBrowser));
    gulp.watch("javascript/*.js", gulp.series(exports.parseJS, reloadBrowser));
    gulp.watch("html/*.html", gulp.series(exports.parseHTML, reloadBrowser));
}

exports.default = gulp.series(exports.clean, exports.parseAll, exports.watch)