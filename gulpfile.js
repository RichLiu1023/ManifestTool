var gulp = require('gulp');
var manifest = require('gulp-manifest');
gulp.task('build', function () {
    gulp.src(['public/**'], {base: 'public'})
        .pipe(manifest({
            prefix: "",//path prefix
            suffix: "",//path suffix
            hash: true,
            preferOnline: true,
            timestamp: true,
            exclude: [],
            cache: [],
            network: ['*'],
            filename: 'app.manifest',
            exclude: 'app.manifest'
        }))
        .pipe(gulp.dest('public'));
});