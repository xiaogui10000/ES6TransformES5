var gulp = require("gulp");
var babel = require("gulp-babel");
gulp.task("default", function() {
			return gulp.src("ES6src/*.js") // ES6 源码存放的路径 
			.pipe(babel()) 
			.pipe(gulp.dest("ES5src")); //转换成 ES5 存放的路径 
			});
			

//如果要生成 Soucemap， 则用 gulp-sourcemaps，
//var gulp = require("gulp");
//var sourcemaps = require("gulp-sourcemaps");
//var babel = require("gulp-babel");
//var concat = require("gulp-concat");
//gulp.task("default", function () { 
//	return gulp.src("ES6src/*.js") 
//	.pipe(sourcemaps.init()) 
//	.pipe(babel()) 
//	.pipe(concat("all.js")) 
//	.pipe(sourcemaps.write(".")) 
//	.pipe(gulp.dest("ES5src")); 
//});
// 