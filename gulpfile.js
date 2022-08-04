var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
// Static server


gulp.task('serve', function() {

    browserSync.init({

        server: "./"

    });

    // gulp.watch("./script.js").on('change', browserSync.reload);


    gulp.watch("**/*.js", cb => {
        browserSync.reload();
        cb();
    });
    gulp.watch("**/*.css",  cb => {
        browserSync.reload();
        cb();
    });
    gulp.watch("**/*.html", cb => {
        browserSync.reload();
        cb();
    });


});

gulp.task('default', gulp.series('serve'));