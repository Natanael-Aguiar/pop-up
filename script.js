$(document).ready(function(){
    $('#modal, .overlay').fadeIn(1000);

    $('.modal-close').on('click', function(e){
        e.preventDefault();
        $('#modal, .overlay').fadeOut(300);
    });
});