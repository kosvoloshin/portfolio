const $ = require('jquery');

const menuInit = (function() {
    return {
        init: function() {
            $('#openFull').on('click', function(e) {
                e.preventDefault();
                $('.full-m').toggleClass('active');
            });
            $('#closeFull').on('click', function(e) {
                e.preventDefault();
                $('.full-m').removeClass('active');
            });
        },
    };
}());

module.exports = menuInit;