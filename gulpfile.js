var pkg         = require('./package.json'),
    path        = require('path'),
    gulp        = require('gulp'),
    concat      = require('gulp-concat'),
    rename      = require('gulp-rename'),
    less        = require('gulp-less'),
    minifycss   = require('gulp-minify-css'),
    uglify      = require('gulp-uglify'),
    gutil       = require('gulp-util'),
    rev         = require('gulp-rev'),
    del         = require('del'),
    rimraf      = require('gulp-rimraf'),
    watch       = require('gulp-watch'),
    runSequence = require('run-sequence'),
    browsersync = require('browser-sync'),
    reload      = browsersync.reload;

gulp.task('clean', function(){
    gulp.src('./www/css', {read: false}).pipe(rimraf());
});

// clear temp files
gulp.task('clear:temp', ['clear:cache', 'clear:css']);
// clear css
gulp.task('clear:css', function(){
    del([
        './www/css/artatol-all.min.css',
        './www/css/artatol.css',
        './www/webtemp/*.css'
    ]);
});
// clear webtemp
gulp.task('clear:webtemp', function(){
    del([
        './www/webtemp/*.css'
    ]);
});
// clear cache
gulp.task('clear:cache', function(){
    del([
        './temp/cache/*'
    ]);
});

// browser-sync task for starting the server.
gulp.task('browsersync', function() {
    browsersync({
        proxy: "www.sandbox.localhost"
    });
});

// Reload all Browsers
gulp.task('bs-reload', function (done) {
    browsersync.reload();
    done();
});


// less to css
gulp.task('less', function () {
       return gulp.src('./www/less/compiler/artatol.less')
            .pipe(less().on('error', gutil.log))
            .pipe(gulp.dest('./www/css'));
});

// minify css
gulp.task('minifycss', function() {
    return gulp.src(['./www/css/*.css', './www/css/artatol.css'])
        .pipe(concat('all.css'))
        .pipe(minifycss({keepBreaks:false}))
        .pipe(rename('artatol-all.min.css'))
        // .pipe(rev())
        .pipe(gulp.dest('./www/css'));
});

// Watch Files For Changes, clear temp and reload
gulp.task('watch:all', ['browsersync'], function() {
    watchfile = ['./www/less/**/*.less', './www/css/**/*.css'];
    gulp.watch(watchfile, function() {
        runSequence('compile', 'bs-reload');
    });
    watchfoldersApp = ['.app/**/*'];
    gulp.watch(watchfoldersApp, function() {
        runSequence('clear:cache', 'bs-reload');
    });
});

// Gulp just watch and reload
gulp.task('watch:reload', ['browsersync'], function(done) {
    gulp.watch('./app/**/*', ['bs-reload']);
});

// init sequence test
gulp.task('compile', ['clear:temp'], function(done){
   runSequence('clean', 'less', 'minifycss', done);
});

// Default Task - take care of everything
gulp.task('default', ['compile', 'watch:all']);

// js minify and compile
gulp.task('compress', function() {
    gulp.src('lib/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist'))
});