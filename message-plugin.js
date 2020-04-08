// declaring a namespace for the plugin
var MSG = MSG || {};

MSG = {
    notice: {
      'fi': 'HUOM!',
      'sv': 'OBS!',
      'en': 'NB:'
    },
    renderWarning: function(params) {
        var msg = 'msg';
        if (pluginParameters['message']['msg_'+lang] != null) {
            msg = 'msg_'+lang;
        }

        $('.content').prepend(Handlebars.compile($('#message-template').html())({
            'notice': this.notice[lang],
            'message': pluginParameters['message'][msg]
        }));
    },
};

$(function() {
    window.messageWarning = function(params) {
        if (params.page === 'page' && (params.uri  || $('#vocab-info').length)) {
            MSG.renderWarning(params);
        }
    };
});
