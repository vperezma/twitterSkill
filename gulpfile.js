const gulp = require('gulp');
const zip = require('gulp-zip');
 
gulp.task('default', () => {
	return gulp.src('./*')
	.pipe(zip('skill_'+Date()+'.zip'))
	.pipe(gulp.dest('dist'));
});
