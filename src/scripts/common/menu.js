const $ = require('jquery');

const menuInit = (function() {
    return {
        init: function() {
            $('#openFull').on('click', function(e) {
                e.preventDefault();
                $('.full-m').toggleClass('active');
                $('.hamburger').toggleClass('active');
            });
            $('#closeFull').on('click', function(e) {
                e.preventDefault();
                $('.full-m').removeClass('active');
                $('.hamburger').removeClass('active');
            });
        },
    };
}());

module.exports = menuInit;