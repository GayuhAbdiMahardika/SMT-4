$(document).ready(() => {
    console.log('object');
}) 

$(function() {
    $('#isi').html('lol')

    $('#klik').click(function (e) { 
        e.preventDefault();
        alert('lol')
    });

    $('#isi').mouseleave(function () { 
        alert('mouse leave');
    });
})

