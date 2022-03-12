const {src, dest, watch, series} = require ('gulp');

// SASS
const autoprefixer = require('autoprefixer');
const cssnano= require('cssnano');
const postcss = require('gulp-postcss');
const sass = require('gulp-sass') (require('sass'));
const sourcemaps = require('gulp-sourcemaps');

// images
const avif = require('gulp-avif');
const imagemin = require('gulp-imagemin')
const webp = require('gulp-webp');

function css() {
    return src('src/scss/style.scss')
        .pipe(sourcemaps.init())        
        .pipe( sass())
        .pipe( postcss([autoprefixer()]))  //add cssnano() to minify your code if you need it
        .pipe(sourcemaps.write('.'))    
        .pipe( dest('build/css'));
}

function images() {
    return src('src/images/**/*', css)
        .pipe(imagemin())
        .pipe(dest('build/images'))
}

function webpVersion(){
    return src('src/images/**/*.{png,jpg}')
        .pipe( webp())
        .pipe(dest('build/images'));
}

function avifVersion(){
    return src('src/images/**/*.{png,jpg}')
        .pipe( avif())
        .pipe(dest('build/images'));
}

function dev() {
    watch('src/scss/**/*.scss', css)
    watch('src/images/**/*', images)
}

exports.avifVersion = avifVersion;
exports.css = css;
exports.images = images;
exports.dev = dev;
exports.webpVersion = webpVersion;

exports.default = series( css, webpVersion, avifVersion, images, dev)