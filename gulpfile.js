var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var postcss = require('gulp-postcss');
var cleanCSS = require('gulp-clean-css');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');
var changed = require('gulp-changed');
var del = require('del');

var paths = {
    styles: {
        src: 'src/sass/**/*.scss',
        dest: 'dist/css/'
    },
    docStyle: {
        src: 'doc/**/*.scss',
        dest: 'doc/'
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
        // 删除所有注释
        cssnano({ "discardComments": { "removeAll": true } })
    ];
    return gulp.src(paths.styles.src)
        .pipe(changed(paths.styles.dest))
        .pipe(sass())
        .pipe(postcss(plugins))
        // .pipe(cleanCSS({ debug: true, level:2 }, (details) => {
        //     console.log(`${details.name}: ${details.stats.originalSize}`);
        //     console.log(`${details.name}: ${details.stats.minifiedSize}`);
        // }))
        // pass in options to the stream
        .pipe(rename({
            // basename: 'style',
            suffix: '.min'
        }))
        .pipe(gulp.dest(paths.styles.dest));
}

/*
 * Doc
 */
function docStyle() {
    var plugin = [
        autoprefixer(),
        // 删除所有注释
        cssnano({ "discardComments": { "removeAll": true } })
    ];
    return gulp.src(paths.docStyle.src)
        // .pipe(changed(paths.docStyle.dest))
        .pipe(sass())
        .pipe(postcss(plugin))
        // pass in options to the stream
        .pipe(rename({
            // basename: 'style',
            suffix: '.min'
        }))
        .pipe(gulp.dest(paths.docStyle.dest));
}

function watch() {
    gulp.watch(paths.styles.src, styles);
    gulp.watch(paths.docStyle.src, docStyle);
}

/*
 * Specify if tasks run in series or parallel using `gulp.series` and `gulp.parallel`
 */
var build = gulp.series(gulp.parallel(styles, docStyle, watch));

/*
 * You can use CommonJS `exports` module notation to declare tasks
 */
exports.clean = clean;
exports.styles = styles;
exports.docStyle = docStyle;
exports.watch = watch;
exports.build = build;

/*
 * Define default task that can be called by just running `gulp` from cli
 */
exports.default = build;