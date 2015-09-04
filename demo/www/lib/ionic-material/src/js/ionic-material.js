/**
 * Ionic Material
 * "Bundle Index" / "Entryfile"
 * https://github.com/zachsoft/ionic-material
 *
 * Recommended: use a compiled version, especially in production!
 */

'use strict';

module.exports = (function(){

    var angular;

    try {
        angular = require('angular');
    } catch(err){ }

    if(!angular || !angular.version){
        /*global window: true*/
        angular = window.angular;
        /*global window: false*/
    }

    if(!angular || !angular.version){
        throw new Error('ionic-material could not load angular module :(');
    }

    // set up angular module
    var app = angular.module('ionic-material', ['ionic']);

    // Import Dependencies
    require('./lib/_ink')(app);
    require('./lib/_motion')(app);

    return 'ionic-material';
})();
