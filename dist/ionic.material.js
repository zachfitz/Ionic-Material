(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory((function webpackLoadOptionalExternalModule() { try { return require("angular"); } catch(e) {} }()));
	else if(typeof define === 'function' && define.amd)
		define(["angular"], factory);
	else if(typeof exports === 'object')
		exports["ionicMaterial"] = factory((function webpackLoadOptionalExternalModule() { try { return require("angular"); } catch(e) {} }()));
	else
		root["ionicMaterial"] = factory(root["angular"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

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
	        angular = __webpack_require__(1);
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
	    __webpack_require__(2)(app);
	    __webpack_require__(3)(app);

	    return 'ionic-material';
	})();


/***/ },
/* 1 */
/***/ function(module, exports) {

	if(typeof __WEBPACK_EXTERNAL_MODULE_1__ === 'undefined') {var e = new Error("Cannot find module \"angular\""); e.code = 'MODULE_NOT_FOUND'; throw e;}
	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	/*!
	 * Fork by Zach Fitzgerald and other contributors of Ionic Material
	 *
	 * Waves v0.5.4
	 * http://fian.my.id/Waves
	 *
	 * Copyright 2014 Alfiana E. Sibuea and other contributors
	 *
	 * Released under the MIT license
	 * https://github.com/fians/Waves/blob/master/LICENSE
	 *
	 */
	module.exports = function (angularApp) {

	    angularApp.factory('ionicMaterialInk', ink);

	    function ink (){
	        /*global document*/
	        var Ink = Ink || {};

	            // all DOM nodes
	            var $$;

	            // phantomJS throws an error when you try to use document.querySelectorAll.bind
	            if(document && document.querySelectorAll && document.querySelectorAll.bind){
	                try{
	                    // all DOM nodes
	                    $$ = document.querySelectorAll.bind(document);

	                } catch(e){}
	            } else{
	                    /**
	                     * mout.js 0.11.0 bind and slice polyfills (substitutes?)
	                     * TODO: pull out mout.js bind and slice molyfills and inject into material.ink
	                     */

	                    /**
	                     * Create slice of source array or array-like object
	                     */
	                    var slicePolyfill = function moutslicePolyfill(arr, start, end){
	                        var len = arr.length;
	                        /*jshint eqnull:true */
	                        if (start == null) {
	                            start = 0;
	                        } else if (start < 0) {
	                            start = Math.max(len + start, 0);
	                        } else {
	                            start = Math.min(start, len);
	                        }


	                        if (end == null) {

	                            end = len;
	                        } else if (end < 0) {
	                            end = Math.max(len + end, 0);
	                        } else {
	                            end = Math.min(end, len);
	                        }

	                        var result = [];
	                        while (start < end) {
	                            result.push(arr[start++]);
	                        }

	                        return result;
	                    };



	                    /**
	                     * Return a function that will execute in the given context, optionally adding any additional supplied parameters to the beginning of the arguments collection.
	                     * @param {Function} fn  Function.
	                     * @param {object} context   Execution context.
	                     * @param {rest} args    Arguments (0...n arguments).
	                     * @return {Function} Wrapped Function.
	                     */
	                    var bindPolyfill = function moutBind(fn, context, args){
	                        var argsArr = slicePolyfill(arguments, 2); //curried args
	                        return function(){
	                            return fn.apply(context, argsArr.concat(slicePolyfill(arguments)));
	                        };
	                    };

	                    $$ = bindPolyfill(document.querySelectorAll, document);
	                    /*jshint ignore:end */
	            }

	            if (!$$){
	                throw new Error('ionic material ink module could not create reference of DOM nodes');
	            }

	            // Find exact position of element
	            function isWindow(obj) {
	                return obj !== null && obj === obj.window;
	            }

	            function getWindow(elem) {
	                return isWindow(elem) ? elem : elem.nodeType === 9 && elem.defaultView;
	            }

	            function offset(elem) {
	                var docElem, win,
	                    box = {
	                        top: 0,
	                        left: 0
	                    },
	                    doc = elem && elem.ownerDocument;

	                docElem = doc.documentElement;

	                if (typeof elem.getBoundingClientRect !== typeof undefined) {
	                    box = elem.getBoundingClientRect();
	                }
	                win = getWindow(doc);
	                return {
	                    top: box.top + win.pageYOffset - docElem.clientTop,
	                    left: box.left + win.pageXOffset - docElem.clientLeft
	                };
	            }

	            function hexToRgb(hex) {
	                var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	                return result ? {
	                    r: parseInt(result[1], 16),
	                    g: parseInt(result[2], 16),
	                    b: parseInt(result[3], 16)
	                } : null;
	            }

	            function convertStyle(obj) {
	                var style = '';

	                for (var a in obj) {
	                    if (obj.hasOwnProperty(a)) {
	                        style += (a + ':' + obj[a] + ';');
	                    }
	                }

	                return style;
	            }

	            var Effect = {

	                // Effect delay
	                duration: 500,

	                show: function(e) {

	                    // Disable right click
	                    if (e.button === 2) {
	                        return false;
	                    }

	                    var el = this;

	                    // Create ripple
	                    var ripple = document.createElement('div');
	                    var customColor = this.dataset.inkColor;
	                    var customOpacity = this.dataset.inkOpacity;
	                    var hasCustomRipple = customColor || customOpacity;
	                    ripple.className = 'ink-ripple';
	                    el.appendChild(ripple);

	                    // Get click coordinate and element witdh
	                    var pos = offset(el);
	                    var relativeY = (e.pageY - pos.top);
	                    var relativeX = (e.pageX - pos.left);
	                    var scale = 'scale(' + ((el.clientWidth / 100) * 2.5) + ')';

	                    // Support for touch devices
	                    if ('touches' in e) {
	                        relativeY = (e.touches[0].pageY - pos.top);
	                        relativeX = (e.touches[0].pageX - pos.left);
	                    }

	                    // Attach data to element
	                    ripple.setAttribute('data-hold', Date.now());
	                    ripple.setAttribute('data-scale', scale);
	                    ripple.setAttribute('data-x', relativeX);
	                    ripple.setAttribute('data-y', relativeY);

	                    // Set ripple position
	                    var rippleStyle = {
	                        'top': relativeY + 'px',
	                        'left': relativeX + 'px'
	                    };

	                    ripple.className = ripple.className + ' ink-notransition';

	                    if (hasCustomRipple) {
	                        var colorRgb;
	                        if (customColor) {
	                            var fromHex = hexToRgb(customColor);
	                            colorRgb = fromHex.r + ',' + fromHex.g + ',' + fromHex.b;
	                        } else {
	                            colorRgb = '0,0,0';
	                        }
	                        if (!customOpacity) {
	                            customOpacity = 0.2;
	                        }
	                        var bg = 'rgba(' + colorRgb + ',' + customOpacity + ')';
	                        rippleStyle['background-color'] = bg;
	                    }

	                    ripple.setAttribute('style', convertStyle(rippleStyle));
	                    ripple.className = ripple.className.replace('ink-notransition', '');

	                    // Scale the ripple
	                    rippleStyle['-webkit-transform'] = scale;
	                    rippleStyle['-moz-transform'] = scale;
	                    rippleStyle['-ms-transform'] = scale;
	                    rippleStyle['-o-transform'] = scale;
	                    rippleStyle.transform = scale;
	                    rippleStyle.opacity = '1';

	                    rippleStyle['-webkit-transition-duration'] = Effect.duration + 'ms';
	                    rippleStyle['-moz-transition-duration'] = Effect.duration + 'ms';
	                    rippleStyle['-o-transition-duration'] = Effect.duration + 'ms';
	                    rippleStyle['transition-duration'] = Effect.duration + 'ms';

	                    ripple.setAttribute('style', convertStyle(rippleStyle));
	                },

	                hide: function() {

	                    var el = this;

	                    var width = el.clientWidth * 1.4;

	                    // Get first ripple
	                    var ripple = null;

	                    var childrenLength = el.children.length;

	                    for (var a = 0; a < childrenLength; a++) {
	                        if (el.children[a].className.indexOf('ink-ripple') !== -1) {
	                            ripple = el.children[a];
	                            continue;
	                        }
	                    }

	                    if (!ripple) {
	                        return false;
	                    }

	                    var relativeX = ripple.getAttribute('data-x');
	                    var relativeY = ripple.getAttribute('data-y');
	                    var scale = ripple.getAttribute('data-scale');

	                    // Get delay beetween mousedown and mouse leave
	                    var diff = Date.now() - Number(ripple.getAttribute('data-hold'));
	                    var delay = 500 - diff;

	                    if (delay < 0) {
	                        delay = 0;
	                    }

	                    // Fade out ripple after delay
	                    setTimeout(function() {

	                        var style = {
	                            'top': relativeY + 'px',
	                            'left': relativeX + 'px',
	                            'opacity': '0',

	                            // Duration
	                            '-webkit-transition-duration': Effect.duration + 'ms',
	                            '-moz-transition-duration': Effect.duration + 'ms',
	                            '-o-transition-duration': Effect.duration + 'ms',
	                            'transition-duration': Effect.duration + 'ms',
	                            '-webkit-transform': scale,
	                            '-moz-transform': scale,
	                            '-ms-transform': scale,
	                            '-o-transform': scale,
	                            'transform': scale,
	                        };

	                        ripple.setAttribute('style', convertStyle(style));

	                        setTimeout(function() {
	                            try {
	                                el.removeChild(ripple);
	                            } catch (e) {
	                                return false;
	                            }
	                        }, Effect.duration);
	                    }, delay);
	                },

	                // Little hack to make <input> can perform ink effect
	                wrapInput: function(elements) {

	                    for (var a = 0; a < elements.length; a++) {

	                        var el = elements[a];

	                        if (el.tagName.toLowerCase() === 'input') {

	                            var parent = el.parentNode;

	                            // If input already have parent just pass through
	                            if (parent.tagName.toLowerCase() === 'i' &&
	                                parent.className.indexOf('ink') !== -1 &&
	                                parent.className.indexOf('tab-item') !== -1 &&
	                                parent.className.indexOf('button-fab') !== -1 &&
	                                parent.className.indexOf('button-raised') !== -1 &&
	                                parent.className.indexOf('button-flat') !== -1 &&
	                                parent.className.indexOf('button-clear') !== -1 &&
	                                parent.className.indexOf('button') !== -1 &&
	                                parent.className.indexOf('item') !== -1) {
	                                return false;
	                            }

	                            // Put element class and style to the specified parent
	                            var wrapper = document.createElement('i');
	                            wrapper.className = el.className + ' ink-input-wrapper';

	                            var elementStyle = el.getAttribute('style');

	                            if (!elementStyle) {
	                                elementStyle = '';
	                            }

	                            wrapper.setAttribute('style', elementStyle);

	                            el.className = 'ink-button-input';
	                            el.removeAttribute('style');

	                            // Put element as child
	                            parent.replaceChild(wrapper, el);
	                            wrapper.appendChild(el);
	                        }
	                    }
	                }
	            };

	            Ink.displayEffect = function(options) {
	                options = options || {};

	                if ('duration' in options) {
	                    Effect.duration = options.duration;
	                }

	                //Wrap input inside <i> tag
	                var selectors = '.ink,.tab-item,.button-fab,.button-raised,.button-flat,.button-clear,a.item,.popup .button';
	                Effect.wrapInput($$(selectors));

	                Array.prototype.forEach.call($$(selectors), function(i) {
	                    if ('ontouchstart' in window) {
	                        i.addEventListener('touchstart', Effect.show, false);
	                        i.addEventListener('touchend', Effect.hide, false);
	                        i.addEventListener('touchcancel', Effect.hide, false);
	                    } else {
	                        i.addEventListener('mousedown', Effect.show, false);
	                        i.addEventListener('mouseup', Effect.hide, false);
	                        i.addEventListener('mouseleave', Effect.hide, false);
	                    }
	                });
	            };

	            return Ink;
	    }

	    ink.inject = [];
	};


/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = function(angularApp) {
	    angularApp.factory('ionicMaterialMotion', Motion);

	    function Motion() {
	        /*global document, window*/

	        'use strict';

	        /*============================================================================*/
	        /* HELPERS (non-exports)
	        /=============================================================================*
	        /   Abstract common lookups and manipulations in case better alternatives
	        /   arise or future cross-platform differences warrant separate handling
	        /=============================================================================*/

	        function getViewportHeight() {
	            return window.innerHeight;
	        }

	        function getBoundingClientRect(domNode) {
	            return domNode.getBoundingClientRect;
	        }

	        function showNotAnimatedElements(elements, total) {
	            // Load the elements without effect
	            for (var i = 0; i < total; i++) {
	                var child = elements[i];
	                child.className += ' in';
	                child.className += ' done';
	            }
	        }



	        /*============================================================================*/
	        /* MOTION (EXPORT)
	        /=============================================================================*
	        /   Animation methods for the library
	        /=============================================================================*/

	        var motion = {
	            blinds: blinds,
	            fadeSlideIn: fadeSlideIn,
	            fadeSlideInRight: fadeSlideInRight,
	            panInLeft: panInLeft,
	            pushDown: pushDown,
	            ripple: ripple,
	            slideUp: slideUp
	        };

	        function blinds(options) {

	            // Declare our defaults
	            var defaults = {
	                finishDelayThrottle: 2,
	                finishSpeedPercent: 0.5,
	                leftOffsetPercentage: 0.8,
	                selector: '.animate-blinds .item',
	                startVelocity: 1100
	            };

	            // Apply defaults if properties are not passed
	            if (typeof options === 'undefined') {
	                options = {};
	            }

	            options.finishDelayThrottle = options.finishDelayThrottle || defaults.finishDelayThrottle;
	            options.finishSpeedPercent = options.finishSpeedPercent || defaults.finishSpeedPercent;
	            options.leftOffsetPercentage = options.leftOffsetPercentage || defaults.leftOffsetPercentage;
	            options.startVelocity = options.startVelocity || defaults.startVelocity;

	            if (typeof options.selector == 'undefined') {
	                options.selector = defaults.selector;
	            }

	            // Fail early & silently log
	            var isInvalidSelector = typeof options.selector === 'undefined' || options.selector === '';

	            if (isInvalidSelector) {
	                console.log('invalid blinds selector');
	                return false;
	            }

	            var animateBlindsDom = document.querySelectorAll(options.selector);
	            var elementsCount = animateBlindsDom.length;
	            var elementAnimationCount = 0;

	            // Count the elements within the starting viewport so we're not exacting
	            // more effort than required...
	            //
	            // We use css visiblity: hidden instead of display: none so the elements
	            // maintain their DOM flow

	            var viewportHeight = getViewportHeight();
	            for (var i = 0; i < elementsCount; i++) {
	                if (animateBlindsDom[i].offsetTop < viewportHeight) {
	                    elementAnimationCount += 1;
	                    continue;
	                }
	                break;
	            }

	            // Sequentially animate with a delay based on proximity
	            var speed = options.startVelocity;
	            for (var i = 0; i < elementAnimationCount; i++) {
	                var child = animateBlindsDom[i];
	                var childOffset = child.getBoundingClientRect();
	                var offset = childOffset.left * options.leftOffsetPercentage + childOffset.top;
	                var delay = parseFloat(offset / speed).toFixed(2);
	                child.style.webkitTransitionDelay = delay + "s";
	                child.style.transitionDelay = delay + "s";
	                child.className += ' in';
	            }

	            // When we're done animating, switch the class to 'done'
	            setTimeout(function() {
	                for (var i = 0; i < elementAnimationCount; i++) {
	                    var child = animateBlindsDom[i];
	                    var childOffset = child.getBoundingClientRect();
	                    var offset = childOffset.left * options.leftOffsetPercentage + childOffset.top;
	                    var delay = parseFloat(offset / speed / options.finishDelayThrottle).toFixed(2);
	                    //child.querySelector('img').style.webkitTransitionDelay = delay + "s";
	                    //child.querySelector('img').style.transitionDelay = delay + "s";
	                    //child.querySelector('img').className += ' in';
	                    animateBlindsDom[i].className += ' done';
	                }

	            }, speed * options.finishSpeedPercent);

	            // Load the elements without effect
	            showNotAnimatedElements(animateBlindsDom, elementsCount);
	        }

	        function fadeSlideIn(options) {

	            // Declare our defaults
	            var defaults = {
	                finishDelayThrottle: 2,
	                finishSpeedPercent: 0.72,
	                leftOffsetPercentage: 0.8,
	                selector: '.animate-fade-slide-in .item',
	                startVelocity: 1100
	            };

	            // Apply defaults if properties are not passed
	            if (typeof options === 'undefined') {
	                options = {};
	            }

	            options.finishDelayThrottle = options.finishDelayThrottle || defaults.finishDelayThrottle;
	            options.finishSpeedPercent = options.finishSpeedPercent || defaults.finishSpeedPercent;
	            options.leftOffsetPercentage = options.leftOffsetPercentage || defaults.leftOffsetPercentage;
	            options.startVelocity = options.startVelocity || defaults.startVelocity;

	            if (typeof options.selector == 'undefined') {
	                options.selector = defaults.selector;
	            }

	            // Fail early & silently log
	            var isInvalidSelector = typeof options.selector === 'undefined' || options.selector === '';

	            if (isInvalidSelector) {
	                console.log('invalid fadeSlideIn selector');
	                return false;
	            }

	            var animateFadeSlideInDom = document.querySelectorAll(options.selector);
	            var elementsCount = animateFadeSlideInDom.length;
	            var elementAnimationCount = 0;

	            // Count the elements within the starting viewport so we're not exacting
	            // more effort than required...
	            //
	            // We use css visiblity: hidden instead of display: none so the elements
	            // maintain their DOM flow

	            var viewportHeight = getViewportHeight();
	            for (var i = 0; i < elementsCount; i++) {
	                if (animateFadeSlideInDom[i].offsetTop < viewportHeight) {
	                    elementAnimationCount += 1;
	                    continue;
	                }
	                break;
	            }

	            // Sequentially animate with a delay based on proximity
	            var speed = options.startVelocity;
	            for (var i = 0; i < elementAnimationCount; i++) {
	                var child = animateFadeSlideInDom[i];
	                var childOffset = child.getBoundingClientRect();
	                var offset = childOffset.left * options.leftOffsetPercentage + childOffset.top;
	                var delay = parseFloat(offset / speed).toFixed(2);
	                child.style.webkitTransitionDelay = delay + "s";
	                child.style.transitionDelay = delay + "s";
	                child.className += ' in';
	            }

	            // When we're done animating, switch the class to 'done'
	            setTimeout(function() {
	                for (var i = 0; i < elementAnimationCount; i++) {
	                    var child = animateFadeSlideInDom[i];
	                    var childOffset = child.getBoundingClientRect();
	                    var offset = childOffset.left * options.leftOffsetPercentage + childOffset.top;
	                    var delayValue = offset / speed / options.finishDelayThrottle;
	                    var delay = parseFloat(delayValue).toFixed(2);
	                }
	                animateFadeSlideInDom[0].className += ' done';

	            }, speed * options.finishSpeedPercent);

	            // Load the elements without effect
	            showNotAnimatedElements(animateFadeSlideInDom, elementsCount);
	        }

	        function fadeSlideInRight(options) {

	            // Declare our defaults
	            var defaults = {
	                finishDelayThrottle: 2,
	                finishSpeedPercent: 0.72,
	                leftOffsetPercentage: 0.8,
	                selector: '.animate-fade-slide-in-right .item',
	                startVelocity: 1100
	            };

	            // Apply defaults if properties are not passed
	            if (typeof options === 'undefined') {
	                options = {};
	            }

	            options.finishDelayThrottle = options.finishDelayThrottle || defaults.finishDelayThrottle;
	            options.finishSpeedPercent = options.finishSpeedPercent || defaults.finishSpeedPercent;
	            options.leftOffsetPercentage = options.leftOffsetPercentage || defaults.leftOffsetPercentage;
	            options.startVelocity = options.startVelocity || defaults.startVelocity;

	            if (typeof options.selector == 'undefined') {
	                options.selector = defaults.selector;
	            }

	            // Fail early & silently log
	            var isInvalidSelector = typeof options.selector === 'undefined' || options.selector === '';

	            if (isInvalidSelector) {
	                console.log('invalid fadeSlideInRight selector');
	                return false;
	            }

	            var animateSlideInRightDom = document.querySelectorAll(options.selector);
	            var elementsCount = animateSlideInRightDom.length;
	            var elementAnimationCount = 0;

	            // Count the elements within the starting viewport so we're not
	            // exacting more effort than required...
	            //
	            // We use css visiblity: hidden instead of display: none so the
	            // elements maintain their DOM flow

	            var viewportHeight = getViewportHeight();
	            for (var i = 0; i < elementsCount; i++) {
	                if (animateSlideInRightDom[i].offsetTop < viewportHeight) {
	                    elementAnimationCount += 1;
	                    continue;
	                }
	                break;
	            }

	            // Sequentially animate with a delay based on proximity
	            var speed = options.startVelocity;
	            for (var i = 0; i < elementAnimationCount; i++) {
	                var child = animateSlideInRightDom[i];
	                var childOffset = child.getBoundingClientRect();
	                var offset = childOffset.left * options.leftOffsetPercentage + childOffset.top;
	                var delay = parseFloat(offset / speed).toFixed(2);
	                child.style.webkitTransitionDelay = delay + "s";
	                child.style.transitionDelay = delay + "s";
	                child.className += ' in';
	            }

	            // When we're done animating, switch the class to 'done'
	            setTimeout(function() {
	                for (var i = 0; i < elementAnimationCount; i++) {
	                    var child = animateSlideInRightDom[i];
	                    var childOffset = child.getBoundingClientRect();
	                    var offset = childOffset.left * options.leftOffsetPercentage + childOffset.top;
	                    var delayValue = offset / speed / options.finishDelayThrottle;
	                    var delay = parseFloat(delayValue).toFixed(2);
	                }
	                animateSlideInRightDom[0].className += ' done';

	            }, speed * options.finishSpeedPercent);

	            // Load the elements without effect
	            showNotAnimatedElements(animateSlideInRightDom, elementsCount);

	        }

	        function ripple(options) {

	            // Declare our defaults
	            var defaults = {
	                finishDelayThrottle: 2,
	                finishSpeedPercent: 0.72,
	                leftOffsetPercentage: 0.8,
	                selector: '.animate-ripple .item',
	                startVelocity: 1100
	            };

	            // Apply defaults if properties are not passed
	            if (typeof options === 'undefined') {
	                options = {};
	            }

	            options.finishDelayThrottle = options.finishDelayThrottle || defaults.finishDelayThrottle;
	            options.finishSpeedPercent = options.finishSpeedPercent || defaults.finishSpeedPercent;
	            options.leftOffsetPercentage = options.leftOffsetPercentage || defaults.leftOffsetPercentage;
	            options.startVelocity = options.startVelocity || defaults.startVelocity;

	            if (typeof options.selector == 'undefined') {
	                options.selector = defaults.selector;
	            }

	            // Fail early & silently log
	            var isInvalidSelector = typeof options.selector === 'undefined' || options.selector === '';

	            if (isInvalidSelector) {
	                console.log('invalid ripple selector');
	                return false;
	            }

	            var animateRippleDom = document.querySelectorAll(options.selector);
	            var elementsCount = animateRippleDom.length;
	            var elementAnimationCount = 0;

	            // Count the elements within the starting viewport so we're not
	            // exacting more effort than required...
	            //
	            // We use css visiblity: hidden instead of display: none so the
	            // elements maintain their DOM flow

	            var viewportHeight = getViewportHeight();
	            for (var i = 0; i < animateRippleDom.length; i++) {
	                if (animateRippleDom[i].offsetTop < viewportHeight) {
	                    elementAnimationCount += 1;
	                    continue;
	                }
	                break;
	            }

	            // Sequentially animate with a delay based on proximity
	            var speed = options.startVelocity;
	            for (var i = 0; i < elementAnimationCount; i++) {
	                var child = animateRippleDom[i];
	                var childOffset = child.getBoundingClientRect();
	                var offset = childOffset.left * options.leftOffsetPercentage + childOffset.top;
	                var delay = parseFloat(offset / speed).toFixed(2);
	                child.style.webkitTransitionDelay = delay + "s";
	                child.style.transitionDelay = delay + "s";
	                child.className += ' in';
	            }

	            // When we're done animating, switch the class to 'done'
	            setTimeout(function() {
	                for (var i = 0; i < elementAnimationCount; i++) {
	                    var child = animateRippleDom[i];
	                    var childOffset = child.getBoundingClientRect();
	                    var offset = childOffset.left * options.leftOffsetPercentage + childOffset.top;
	                    var delayValue = offset / speed / options.finishDelayThrottle;
	                    var delay = parseFloat(delayValue).toFixed(2);
	                }
	                animateRippleDom[0].className += ' done';

	            }, speed * options.finishSpeedPercent);

	            // Load the elements without effect
	            showNotAnimatedElements(animateRippleDom, elementsCount);
	        }

	        function panInLeft(options) {

	            // We have a single option, so it may be passed as a string or property
	            if (typeof options === 'string') {
	                options = {
	                    selector: options
	                };
	            }

	            // Fail early & silently log
	            var isInvalidSelector = typeof options.selector === 'undefined' || options.selector === '';

	            if (isInvalidSelector) {
	                console.log('invalid pushDown selector');
	                return false;
	            }

	            var animatePanInLeftDom = document.querySelectorAll(options.selector);
	            var elementAnimationCount = animatePanInLeftDom.length;
	            for (var i = 0; i < elementAnimationCount; i++) {
	                var element = animatePanInLeftDom[i];
	                var classNameToRemove = 'animate-pan-in-left';
	                var indexOfClassNameToRemove = element.className.lastIndexOf(classNameToRemove);
	                element.className = element.className.substr(0, indexOfClassNameToRemove);
	            }
	        }

	        function pushDown(options) {

	            // We have a single option, so it may be passed as a string or property
	            if (typeof options === 'string') {
	                options = {
	                    selector: options
	                };
	            }

	            // Fail early & silently log
	            var isInvalidSelector = typeof options.selector === 'undefined' || options.selector === '';

	            if (isInvalidSelector) {
	                console.log('invalid pushDown selector');
	                return false;
	            }

	            var animatePushDownDom = document.querySelectorAll(options.selector);
	            var elementAnimationCount = animatePushDownDom.length;
	            for (var i = 0; i < elementAnimationCount; i++) {
	                var element = animatePushDownDom[i];
	                var classNameToRemove = options.selector.split('.')[1];
	                var indexOfClassNameToRemove = element.className.lastIndexOf(classNameToRemove);
	                element.className = element.className.substr(0, indexOfClassNameToRemove);
	            }
	        }

	        function slideUp(options) {

	            // We have a single option, so it may be passed as a string or property
	            if (typeof options === 'string') {
	                options = {
	                    selector: options
	                };
	            }

	            // Fail early & silently log
	            var isInvalidSelector = typeof options.selector === 'undefined' || options.selector === '';

	            if (isInvalidSelector) {
	                console.log('invalid pushDown selector');
	                return false;
	            }

	            var animateSlideUpDom = document.querySelectorAll(options.selector);
	            var elementAnimationCount = animateSlideUpDom.length;
	            for (var i = 0; i < elementAnimationCount; i++) {
	                var element = animateSlideUpDom[i];
	                var classNameToRemove = options.selector.split('.')[1];
	                var indexOfClassNameToRemove = element.className.lastIndexOf(classNameToRemove);
	                element.className = element.className.substr(0, indexOfClassNameToRemove);
	            }
	        }

	        /* Export object
	        /============================================================================*/
	        return motion;
	    }

	    Motion.$inject = [];
	};


/***/ }
/******/ ])
});
;