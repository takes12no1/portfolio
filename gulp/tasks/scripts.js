var gulp = require('gulp'),
    webpack = require('webpack');

gulp.task('scripts', function (callback) {
    webpack(require('../../webpack.config.js'), function (err, stats) {
        if (err) {
            console.log("webpack error");
            console.log(err.toString());
        }
        console.log(stats);
        console.log("no webpack errors");
        callback();
    });
});