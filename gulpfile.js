// Load plugins
var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var htmlmin = require('gulp-htmlmin');
var imagemin = require('gulp-imagemin');
var replace = require('gulp-replace');
var uglify = require('gulp-uglify');

// Define paths
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
    'bower_components/knockout/dist/knockout.js',
    'bower_components/oauth-signature/dist/oauth-signature.min.js'],
    misc: ['*.md','!node_modules/**', '!bower_components/**']
};

// Get Google API key
var googleApiKey = process.env.google_api_key

// Minify HTML and add Google API key
gulp.task('html', function() {
  return gulp.src('index.html')
    .pipe(replace('YOUR_API_KEY', googleApiKey))
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest(paths.dist))
});

// Minify JS
gulp.task('scripts', function() {
    return gulp.src(paths.scripts, {cwd: './**'})
    .pipe(uglify())
    .pipe(gulp.dest(paths.dist))
});

// Minify CSS
gulp.task('styles', function() {
    return gulp.src(paths.styles, {cwd: './**'})
    .pipe(cleanCSS())
    .pipe(gulp.dest(paths.dist))
});

// Copy bower dependencies
gulp.task('bower', function() {
    return gulp.src(paths.bower, {cwd: './**'})
    .pipe(gulp.dest(paths.dist))
});

// Optimize images
gulp.task('images', function() {
    return gulp.src(paths.images, {cwd: './**'})
    .pipe(imagemin())
    .pipe(gulp.dest(paths.dist))
});

// Copy readme
gulp.task('copy', function() {
    return gulp.src(paths.misc, {cwd: './**'})
    .pipe(gulp.dest(paths.dist))
});

gulp.task('default', ['html', 'scripts', 'styles', 'bower', 'images','copy']);
