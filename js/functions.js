$(function() {
    $('.cta-btn').click(function() {
        var el = '<div class="note-box"><div class="c-delete">x</div><textarea></textarea></div>';
        $('.container').append(el);
        $('.note-box').last().hide().fadeIn(700);

        var tDesc = $('.note-box').last().find('textarea');
        const month = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];

        var date = new Date();
        var dd = date.getDate();
        var hh = date.getHours();
        var mm = date.getMinutes();

        if (mm < 10) {
            mm = '0' + mm;
        } else {
            mm = mm + '';
        }

        var yy = date.getFullYear();
        let exMonth = month[date.getMonth()];

        var lastHour = hh+":"+mm;
        tDesc.html(lastHour+" do dia "+dd+" de "+exMonth+" de "+yy+"\n"+"\n");

        var myNotes = JSON.parse(localStorage.getItem('notes')) || [];

        myNotes.push(tDesc.val());

        localStorage.setItem('notes', JSON.stringify(myNotes));
    });

    $('body').on('click', '.c-delete', function() {
        $(this).closest('.note-box').fadeOut(600);
    });

    $('body').find('.c-btn').hide();

    $('body').on('click', '.config-btn', function() {
        $('.c-btn').slideToggle();
    })

    disableTextS();

    function disableTextS() {
        $('body').css('-webkit-user-select','none');
        $('body').css('-moz-user-select','none');
        $('body').css('-ms-user-select','none');
        $('body').css('-o-user-select','none');
        $('body').css('user-select','none');
    }
});
