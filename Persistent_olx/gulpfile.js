
var gulp = require('gulp')
  , nodemon = require('gulp-nodemon')
  , browserSync = require('browser-sync').create();



var gulp = require('gulp')
  , nodemon = require('gulp-nodemon')
  , browserSync = require('browser-sync');

gulp.task('browser_Sync', function(){
    browserSync.init({
        server:{
            basedir: 'app'
        }
    })
    var stream = nodemon({ script: 'server.js'
          , ext: 'html js'
          , ignore: ['ignored.js']})
 
  stream
      .on('restart', function () {
        console.log('restarted!')
      })
      .on('crash', function() {
        console.error('Application has crashed!\n')
         stream.emit('restart', 10)  // restart the server in 10 seconds 
      })
})

gulp.task('watch',['browser_Sync'],function(){
    gulp.watch('app/*',browserSync.reload);
})