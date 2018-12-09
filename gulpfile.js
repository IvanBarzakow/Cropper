var gulp = require('gulp'),
    less = require('gulp-less'),
    path = require('path');

gulp.task('less', function () {
    return gulp.src('./styles/**/*.less')
        .pipe(less({
            paths: [ path.join(__dirname, 'less', 'includes') ]
        }))
        .pipe(gulp.dest('./styles'));
});