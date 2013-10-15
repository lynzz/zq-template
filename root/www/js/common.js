if (!(window.console && console.log)) {
    (function() {
        var noop = function() {};
        var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'markTimeline', 'table', 'time', 'timeEnd', 'timeStamp', 'trace', 'warn'];
        var length = methods.length;
        var console = window.console = {};
        while (length--) {
            console[methods[length]] = noop;
        }
    }());
}
window.GLOBAL = {
    //jsUrl: 'http://zt.2p.com/js/',
    jsUrl: 'http://ue.2pcdn.com/a/www/feature/best/2013/js/',
    apiUrl: 'http://127.0.0.1:8092/feature/bestof2013/'
}
requirejs.config({
    baseUrl: GLOBAL.jsUrl + 'js/lib',
    paths: {
        app: '../app',
        jquery: 'http://ue.2pcdn.com/a/lib/v1/js/jquery',
        mustache: 'http://ue.2pcdn.com/a/lib/v2/js/mustache',
        'jquery.tabs': 'http://ue.2pcdn.com/a/lib/v2/js/jquery.tabs',
        'scrollable': 'http://ue.2pcdn.com/a/lib/v1/js/scrollable'
    },
    shim: {
        'jquery': {
            exports: 'jQuery'
        },
        'jquery.tabs': {
            deps: ['jquery'],
            exports: '$.fn.tabs'
        },
        'scrollable': {
            deps: ['jquery'],
            exports: '$.fn.scrollable'
        }
    }
});