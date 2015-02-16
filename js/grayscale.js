jQuery(function($) {
    $(document).ready(function() {
        $(".fancybox").fancybox({
        openEffect  : 'fade',
        closeEffect : 'fade',
        nextEffect  : 'elastic',
        prevEffect  : 'elastic',
        fitToView   : true,
        width       : '60%',
        height      : '60%',
        autoSize    : false,
        closeClick  : false,
        aspectRatio : true,
        padding     : 0,
        margin      : 100,
        helpers : {
        overlay : {
            css : {
                'background' : 'rgba(0, 0, 0, 0.95)'
                }
            }
        }
        });
        $(".fancybox")
        .attr('rel', 'gallery2')
        .fancybox({
            openEffect  : 'fade',
            closeEffect : 'fade',
            aspectRatio : true,
            padding     : 0,
            margin      : [60, 60, 60, 60] // Increase left/right margin

    });
    });
});

