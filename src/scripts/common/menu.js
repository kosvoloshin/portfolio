const $ = require('jquery');

const menuInit = (function() {
    return {
        init: function() {
            $('#openFull').on('click', function(e) {
                e.preventDefault();
                $('.full-m').toggleClass('active');

                if ($('#full-m__nav').hasClass('active')) {
                    $('#full-m__nav').removeClass('active');
                } else {
                    window.setTimeout(function() {
                        $('#full-m__nav').toggleClass('active');
                    }, 500);
                }
                $('.hamburger').toggleClass('active');
            });
        },
    };
}());

module.exports = menuInit;