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
window.ctx = 'http://2p.com';
var BASE_URL = 'http://zt.2p.com/';
//var BASE_URL = 'http://ue.2pcdn.com/a/hearthstone/index/2013/';
requirejs.config({
    baseUrl: BASE_URL + 'js/lib',
    paths: {
        app: '../app',
        jquery: 'http://ue.2pcdn.com/a/lib/v1/js/jquery',
        //'jq.tabs': 'http://ue.2pcdn.com/a/lib/v1/js/jq.tabs',
        config: 'http://ue.2pcdn.com/a/www/index/2012/js/a/config',
        moment: 'http://ue.2pcdn.com/a/lib/v2/js/moment',
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