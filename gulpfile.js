var gulp=require("gulp");
var less=require("less");
var $=require('gulp-load-plugins')();
var cleancss=require("gulp-clean-css");
var concat=require("gulp-concat");
//less文件编译成css文件并压缩
gulp.task('less',function () {
    return gulp.src('app/style/*.less')
        .pipe($.less())
        // .pipe(cleancss())//压缩
        .pipe(gulp.dest('dist/css'));
});
/*压缩JS文件*/
gulp.task("concatjs",function () {
    return gulp.src("js/*.js")
        .pipe(concat("all.js"))
        .pipe(gulp.dest("dist/js/"))
});
/*压缩图片*/
gulp.task('images', function() {
    return gulp.src('img/*')
        .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
        .pipe(gulp.dest('dist/images'))
        .pipe(notify({ message: 'Images task complete' }));
});
/*当改变代码的时候改变*/
gulp.task("dist",function () {
    gulp.watch("app/style/*.less",['less']);//编译和压缩CSS文件
});