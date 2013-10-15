define(["jquery", "app/base/util"], function($, util) {
    var app = {
        init: function() {
            this.cacheElements();
            this.render();
            this.bindEvents();
        },
        cacheElements: function() {
            this.$content = $('#js-content');
        },
        render: function() {
            this.$content.html('this is a web template with requirejs')
        },


        bindEvents: function() {

        }
    };
    $(function() {
        app.init();
    });
});