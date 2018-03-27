const open = document.querySelector('#openFull');
const fullMenu = document.querySelector('#fullMenu');


open.addEventListener('click', function () {
    fullMenu.style.display = 'block';
    console.log('here')
    alert("hello")
})

const close = document.querySelector('#closeFull');
const fullMenu2 = document.querySelector('#fullMenu');

close.addEventListener('click', function () {
    fullMenu2.style.display = 'none';
})

module.exports = menuInit;


    