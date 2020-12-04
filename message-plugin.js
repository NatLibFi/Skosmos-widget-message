// declaring a namespace for the plugin
var MSG = MSG || {};

MSG = {
    supportedParams: ['msg', 'cssClasses', 'id'],
    renderWarning: function(params) {
        var supportedParamsLength = this.supportedParams.length;
        var contextDict = {};
        for (var i = 0; i < supportedParamsLength; i++) {
            var key = this.supportedParams[i];
            // assumes that this widget is called "message"
            if (pluginParameters['message'][key + '_' +lang] != null) {
                contextDict[key] = pluginParameters['message'][key + '_' + lang];
                continue;
            }
            if (pluginParameters['message'][key] != null) {
                contextDict[key] = pluginParameters['message'][key];
                continue;
            }
            contextDict[key] = "";
        }

        $('.content').prepend(Handlebars.compile($('#message-template').html())(contextDict));
    },
};

$(function() {
    window.messageWarning = function(params) {
        if (params.page === 'page' && (params.uri  || $('#vocab-info').length)) {
            MSG.renderWarning(params);
        }
    };
});
