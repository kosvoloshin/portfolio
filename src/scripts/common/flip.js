const $ = require('jquery');

const flipInit = (function() {
    return {
        init: function() {
            $('#login').on('click', function(e) {
                e.preventDefault();
                $(this).addClass('visuallyhidden');
                $('.start__page').toggleClass('active');
            });
            $('#toMain').on('click', function(e) {
                e.preventDefault();
                $('#login').removeClass('visuallyhidden');
                $('.start__page').removeClass('active');
            });
        },
    };
}());

module.exports = flipInit;