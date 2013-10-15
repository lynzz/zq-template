/*global module:false*/
module.exports = function(grunt) {

    grunt.initConfig({

        requirejs: {
            std: {
                options: {
                    appDir: 'www',
                    baseUrl: 'js/lib',
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
                    },
                    fileExclusionRegExp: /^web-server\.js/,
                    dir: 'www-built',
                    modules: [
                        //First set up the common build layer.
                        {
                            //module names are relative to baseUrl
                            name: '../common',
                            //List common dependencies here. Only need to list
                            //top level dependencies, "include" will find
                            //nested dependencies.
                            include: [
                                'jquery',
                                'app/base/util'
                            ],
                            exclude: [

                            ]
                        },
                        //Now set up a build layer for each page, but exclude
                        //the common one. "exclude" will exclude nested
                        //the nested, built dependencies from "common". Any
                        //"exclude" that includes built modules should be
                        //listed before the build layer that wants to exclude it.
                        //"include" the appropriate "app/main*" module since by default
                        //it will not get added to the build since it is loaded by a nested
                        //require in the page*.js files.
                        {
                            //module names are relative to baseUrl/paths config
                            name: '../page-example',
                            include: ['app/example'],
                            exclude: ['../common']
                        }
                    ]
                }
            }
        },

        jshint: {
            options: {
                curly: true,
                eqeqeq: true,
                immed: true,
                latedef: true,
                newcap: true,
                noarg: true,
                sub: true,
                undef: true,
                eqnull: true,
                browser: true,
                nomen: true,
                globals: {
                    define: true,
                    requirejs: true,
                    require: true
                }
            },
            all: ['www/js/app/*.js', 'www/js/common.js', 'www/js/page-example.js']
        }
    });

    // replace this line with
    // grunt.loadNpmTasks("require-js");
    // if you use this example standalone
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('default', ['jshint']);
    grunt.registerTask('build', 'requirejs');
};
