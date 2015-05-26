var pkg         = require('./package.json'),
    path        = require('path'),
    gulp        = require('gulp'),
    concat      = require('gulp-concat'),
    rename      = require('gulp-rename'),
    less        = require('gulp-less'),
    minifycss   = require('gulp-minify-css'),
    gutil       = require('gulp-util'),
    rev         = require('gulp-rev'),
    del         = require('del'),
    rimraf      = require('gulp-rimraf'),
    watch       = require('gulp-watch'),
    uglify      = require('gulp-uglify'),
    runSequence = require('run-sequence'),
    clean       = require('gulp-clean'),
    browsersync = require('browser-sync'),
    inject      = require('gulp-inject'),
    reload      = browsersync.reload;

// so far only limited functionality. No sequence support.
// start with clear:temp, continue with less, minifycss and eventually watch:reload

// less to css
gulp.task('less', function () {
    return gulp.src('./ui/less/artatol.less')
        .pipe(less().on('error', gutil.log))
        .pipe(rename('artatol-uikit.css'))
        .pipe(gulp.dest('./ui/css'));
});


// minify css
gulp.task('minifycss', function() {
    del([
        './www/css/artatol-all.min-*.css'
    ]);
    var cStream = gulp.src([
        './ui/css/*.css',
        './ui/css/artatol-uikit.css'
    ])
        .pipe(concat('all.css'))
        .pipe(minifycss({keepBreaks:false}))
        .pipe(rename('artatol-all.min.css'))
        .pipe(rev())
        .pipe(gulp.dest('./www/css'));
    gulp.src('./app/templates/@layout.latte')
        .pipe(inject(cStream, {
            read: false,
            ignorePath: 'www',
            transform: function(filepath) {
                return '<link href="' + filepath + '" rel="stylesheet" type="text/css">';
            }
        }))
        .pipe(gulp.dest('./app/templates/'));
});


gulp.task('js', function() {
    del([
        './www/js/artatol-all.min-*.js'
    ]);
    var jStream =  gulp.src([
        // jquery
        './vendor/components/jquery/jquery.js',
        // uikit core in order (version 2.20)
        './vendor/uikit/uikit/src/js/core/core.js',
        './vendor/uikit/uikit/src/js/core/touch.js',
        './vendor/uikit/uikit/src/js/core/utility.js',
        './vendor/uikit/uikit/src/js/core/smooth-scroll.js',
        './vendor/uikit/uikit/src/js/core/scrollspy.js',
        './vendor/uikit/uikit/src/js/core/toggle.js',
        './vendor/uikit/uikit/src/js/core/alert.js',
        './vendor/uikit/uikit/src/js/core/button.js',
        './vendor/uikit/uikit/src/js/core/dropdown.js',
        './vendor/uikit/uikit/src/js/core/grid.js',
        './vendor/uikit/uikit/src/js/core/modal.js',
        './vendor/uikit/uikit/src/js/core/nav.js',
        './vendor/uikit/uikit/src/js/core/offcanvas.js',
        './vendor/uikit/uikit/src/js/core/switcher.js',
        './vendor/uikit/uikit/src/js/core/tab.js',
        './vendor/uikit/uikit/src/js/core/cover.js',
        // OPTIONAL uikit js components - SELECT HERE
        './vendor/uikit/uikit/src/js/components/grid.js',
        './vendor/uikit/uikit/src/js/components/sticky.js',
        './vendor/uikit/uikit/src/js/components/tooltip.js',
        './vendor/uikit/uikit/src/js/components/notify.js',
        // nette js
        './ui/js/nette.ajax.js',
        './ui/js/netteForms.js',
        //other filese dependent on order
        './ui/js/artatol.js'
    ])
        .pipe(concat('all.js'))
        .pipe(rename('artatol-all.min.js'))
        .pipe(uglify())
        .pipe(rev())
        .pipe(gulp.dest('./www/js'));
    gulp.src('./app/templates/@layout.latte')
        .pipe(inject(jStream, {
            read: false,
            ignorePath: 'www',
            transform: function(filepath) {
                return '<script src="' + filepath +'"></script>';
            }
        }))
        .pipe(gulp.dest('./app/templates/'));

});


// init sequence - load uikit, process custom less, project css. Compile JS files. Compress and minify. Inject to @layout.

gulp.task('compile', function(callback) {
    runSequence('less','minifycss','js',callback);
});