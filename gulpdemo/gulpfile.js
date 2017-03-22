var gulp = require('gulp');
var less=require("gulp-less")
var uglify=require("gulp-uglify")
var concat = require('gulp-concat');
var cssmin = require('gulp-cssmin');
var domSrc = require('gulp-dom-src');
var cheerio = require('gulp-cheerio');
var sourcemaps = require('gulp-sourcemaps');
var imagemin = require('gulp-imagemin'); 

var path="src/"
var watcher = gulp.watch(path+'css/*.less', ['default']);
watcher.on('change', function(event) {
  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
});
gulp.task('one', function() {
        gulp.src('./src/css/*.less')
        .pipe(less())
        .pipe(gulp.dest('./src/css'))
});

gulp.task('default', ['one']);


gulp.task('build', function() {

    gulp.src('src/img/*')
        .pipe(gulp.dest('dist/src/img'))
    gulp.src('view/*.html')
    .pipe(sourcemaps.init())
    .pipe(sourcemaps.write('../maps', {
      mapSources: function(sourcePath, file) {
        // source paths are prefixed with '../src/' 1  12
        var name=sourcePath.replace(".html","")
        domSrc({file:'./view/'+sourcePath,selector:'link',attribute:'href'})
	    	.pipe(concat(name+'.min.css'))
	        .pipe(cssmin())
	        .pipe(gulp.dest('dist/src/css/'));

	    domSrc({file:'./view/'+sourcePath,selector:'script',attribute:'src'})
	        .pipe(concat(name+'.min.js'))
	        .pipe(uglify())
	        .pipe(gulp.dest('dist/src/js/'));
	    gulp.src('./view/'+sourcePath)
	        .pipe(cheerio(function ($) {
	            $('script').remove();
	            $('link').remove();
	            $('body').append('<script src="../src/js/'+name+'.min.js?random='+parseInt(Math.random()*1000000000000)+'"></script>');
	            $('head').append('<link rel="stylesheet" href="../src/css/'+name+'.min.css?random='+parseInt(Math.random()*1000000000000)+'">');
	        }))
	        .pipe(gulp.dest('dist/view'));

      }
    }))

});