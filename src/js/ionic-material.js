/**
 * Ionic Material
 * "Bundle Index" / "Entryfile"
 * https://github.com/zachsoft/ionic-material
 *
 * Recommended: use a compiled version, especially in production!
 */

'use strict';

module.exports = (function(){
    // set up angular module
    var angular = require('angular');

    var app = angular.module('ionic-material', ['ionic']);

    // Import Dependencies
    require('./lib/_ink')(app);
    require('./lib/_motion')(app);

    return 'ionic-material';
})();
