'use strict';

var elixir = require('laravel-elixir');

var bowerPath = '../bower_components';

elixir(function(mix) {
  mix.sass('app.scss', 'dist/css', 'src/sass');
  mix.scripts('app.js', 'dist/js', 'src/js');

  mix.copy('bower_components/font-awesome/scss', 'src/vendor/font-aweseome');
  mix.copy('bower_components/font-aweseome/fonts',  'dist/fonts');

});