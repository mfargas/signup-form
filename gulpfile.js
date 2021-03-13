const gulp = require('gulp');
const sass = require('gulp-sass');
const del = require('del');

gulp.task('styles', () => {
    return gulp.src('stylesheets/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./stylesheets/css/'));
});

gulp.task('clean', () => {
    return del([
        'stylesheets/css/style.css',
    ]);
});

gulp.task('default', gulp.series(['clean', 'styles']));

// exports.default = defaultTask