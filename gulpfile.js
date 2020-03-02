var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');
var changed = require('gulp-changed');
var del = require('del');

var paths = {
    styles: {
        src: 'src/sass/**/*.scss',
        dest: 'dist/css/'
    }
};

/* Not all tasks need to use streams, a gulpfile is just another node program
 * and you can use all packages available on npm, but it must return either a
 * Promise, a Stream or take a callback and call it
 */
function clean() {
    // You can use multiple globbing patterns as you would with `gulp.src`,
    // for example if you are using del 2.0 or above, return its promise
    return del(['dist']);
}

/*
 * Define our tasks using plain functions
 */
function styles() {
    var plugins = [
        autoprefixer(),
        // cssnano({
        //     // 预设
        //     "preset": [
        //         "default",
        //         // 删除所有注释
        //         { "discardComments": { "removeAll": true } }
        //     ]
        // })
        // cssnano({ "discardComments": { "removeAll": true } })
    ];
    return gulp.src(paths.styles.src)
        .pipe(changed(paths.styles.dest))
        .pipe(sass())
        .pipe(postcss(plugins))
        // pass in options to the stream
        // .pipe(rename({
        //     // basename: 'style',
        //     suffix: '.min'
        // }))
        .pipe(gulp.dest(paths.styles.dest));
}

function stylesMin() {
    var plugins = [
        autoprefixer(),
        // cssnano({
        //     // 预设
        //     "preset": [
        //         "default",
        //         // 删除所有注释
        //         { "discardComments": { "removeAll": true } }
        //     ]
        // })
        cssnano({ "discardComments": { "removeAll": true } })
    ];
    return gulp.src(paths.styles.src)
        .pipe(changed(paths.styles.dest))
        .pipe(sass())
        .pipe(postcss(plugins))
        // pass in options to the stream
        .pipe(rename({
            // basename: 'style',
            suffix: '.min'
        }))
        .pipe(gulp.dest(paths.styles.dest));
}

function watch() {
    gulp.watch(paths.styles.src, styles);
}

function build() {
    gulp.watch(paths.styles.src, stylesMin);
}

/*
 * Specify if tasks run in series or parallel using `gulp.series` and `gulp.parallel`
 */
// var build = gulp.series(clean, gulp.parallel(styles, scripts, images, sprite, ajax, fonts, watch));
// var build = gulp.series(styles);

/*
 * You can use CommonJS `exports` module notation to declare tasks
 */
exports.clean = clean;
exports.styles = styles;
exports.watch = watch;
exports.build = build;

/*
 * Define default task that can be called by just running `gulp` from cli
 */
exports.default = build;