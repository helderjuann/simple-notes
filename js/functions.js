$(function() {

    $('.cta-btn').click(function() {

        function bgColors() {
            var algs = '0123456789ABCDEF';
            var color = '#';
            for (var i = 0; i < 6; i++) {
              color += algs[Math.floor(Math.random() * 16)];
            }
            return color;
        }

        var el = '<div class="note-box"><div class="c-delete">x</div><textarea></textarea></div>';
        var randomColor = bgColors();
        

        $('.container').append(el);

        var tDesc = $('.note-box').last().find('textarea');
        const month = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];

        var date = new Date();
        var dd = date.getDate();
        var hh = date.getHours();
        var mm = date.getMinutes();
        var yy = date.getFullYear();
        let exMonth = month[date.getMonth()];

        var lastHour = hh+":"+mm;
        tDesc.html(lastHour+" do dia "+dd+" de "+exMonth+" de "+yy);
    });

    $('body').on('click', '.c-delete', function() {

        $(this).closest('.note-box').remove();
      });

    disableTextS();

    function disableTextS() {
        $('body').css('-webkit-user-select','none');
        $('body').css('-moz-user-select','none');
        $('body').css('-ms-user-select','none');
        $('body').css('-o-user-select','none');
        $('body').css('user-select','none');
    }
});