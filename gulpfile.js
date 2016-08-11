var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var imagemin = require('gulp-imagemin');
var uglify = require('gulp-uglify');

var paths = {
    dist: 'dist/',
    images: ['img/*.{png,jpeg,jpg}', 'images/*.{png,jpeg,jpg}', '!node_modules/**','!bower_components/**'],
    scripts: ['js/*.js', '!node_modules/**', '!bower_components/**'],
    styles: ['css/*.css', '!node_modules/**', '!bower_components/**'],
    bower: ['bower_components/bootstrap/dist/css/bootstrap.min.css',
    'bower_components/jasny-bootstrap/dist/css/jasny-bootstrap.min.css',
    'bower_components/jquery/dist/jquery.min.js',
    'bower_components/bootstrap/dist/js/bootstrap.min.js',
    'bower_components/jasny-bootstrap/dist/js/jasny-bootstrap.min.js',
    'bower_components/knockout/dist/knockout.js'],
    misc: ['*.html', '*.md','!node_modules/**', '!bower_components/**']
};

gulp.task('images', function() {
    return gulp.src(paths.images, {cwd: './**'})
    .pipe(imagemin())
    .pipe(gulp.dest(paths.dist))
});

gulp.task('scripts', function() {
    return gulp.src(paths.scripts, {cwd: './**'})
    .pipe(uglify())
    .pipe(gulp.dest(paths.dist))
});

gulp.task('styles', function() {
    return gulp.src(paths.styles, {cwd: './**'})
    .pipe(cleanCSS())
    .pipe(gulp.dest(paths.dist))
});

gulp.task('bower', function() {
    return gulp.src(paths.bower, {cwd: './**'})
    .pipe(gulp.dest(paths.dist))
});

gulp.task('misc', function() {
    return gulp.src(paths.misc, {cwd: './**'})
    .pipe(gulp.dest(paths.dist))
});

gulp.task('default', ['images', 'scripts', 'styles', 'bower', 'misc']);