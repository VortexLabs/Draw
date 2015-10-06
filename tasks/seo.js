'use strict';

var gulp    = require('gulp');

// Add SEO - HTML snapshots
gulp.task('seo', function(done) {

  // run process
  var child = require('child_process').spawn(
    'casperjs', ['seo-snapshots.js']
  );

  child.on('close', done);
  child.on('error', function reportError () {
    console.log('FATAL ERROR: casperjs failed to start!');
  });
});
