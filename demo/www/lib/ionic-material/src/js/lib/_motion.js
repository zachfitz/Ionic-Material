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
