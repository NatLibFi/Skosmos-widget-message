// declaring a namespace for the plugin
var MESSAGE = MESSAGE || {};

MESSAGE = {
    notice: {
      'fi': 'HUOM!',
      'sv': 'OBS!',
      'en': 'NB:'
    },
    renderWarning: function(params) {
        if (pluginMessages) {
            $('.content').prepend(Handlebars.compile($('#message-template').html())({
                'notice': this.notice[lang],
                'message': pluginMessages[lang]
            }));
        }
    }
};

$(function() {
    window.displayMessage = function(params) {
        if (params.page === 'page' && (params.uri  || $('#vocab-info').length)) {
            MESSAGE.renderWarning(params);
        }
    };
});

