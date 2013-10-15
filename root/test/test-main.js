var tests = [];
for (var file in window.__karma__.files) {
    if (window.__karma__.files.hasOwnProperty(file)) {
        if (/Spec\.js$/.test(file)) {
            tests.push(file);
        }
    }
}
window.BEST_GAMES = {
    //jsUrl: 'http://zt.2p.com/js/',
    jsUrl: 'http://ue.2pcdn.com/a/www/feature/best/2013/js/',
    apiUrl: 'http://127.0.0.1:8092/feature/bestof2013/'
}
requirejs.config({
    // Karma serves files from '/base'
    baseUrl: '/base/www/js',

    paths: {
        app: '../js/app',
        'select2': 'http://ue.2pcdn.com/a/lib/v2/js/select2/select2',
        mustache: 'http://ue.2pcdn.com/a/lib/v2/js/mustache',
        jquery: 'http://ue.2pcdn.com/a/lib/v2/js/jquery',
        'jquery.tabs': 'http://ue.2pcdn.com/a/lib/v2/js/jquery.tabs',
        'jquery.modal': 'http://ue.2pcdn.com/a/lib/v2/js/jquery.modal'
    },
    shim: {
        'jquery': {
            exports: 'jQuery'
        },
        'jquery.modal': {
            deps: ['jquery'],
            exports: '$.fn.modal'
        },
        'select2': {
            deps: ['jquery'],
            exports: '$.fn.select2'
        },
        'jquery.tabs': {
            deps: ['jquery'],
            exports: '$.fn.tabs'
        }
    },

    // ask Require.js to load these files (all our tests)
    deps: tests,

    // start test run, once Require.js is done
    callback: window.__karma__.start
});