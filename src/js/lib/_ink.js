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
