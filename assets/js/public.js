$(".lan-30nama-filter-tab").click(function () {
    var filterValue = $(this).attr('data-filter');

    $('.filter-item').not('.' + filterValue).hide();
    $('.filter-item').filter('.' + filterValue).show();

    $(this).parent().parent().find('.active').removeClass('active')
    $(this).parent().addClass('active');
});

$('.lan-30nama-accordion-item-header').on('click', function () {
    if (!$(this).parent().hasClass('active')) {
        $('.lan-30nama-accordion-item.active .lan-30nama-accordion-item-body').slideUp()
        $('.lan-30nama-accordion-item.active .lan-30nama-accordion-item-header .lan-30nama-accordion-item-icon i').fadeToggle(0)
        $('.lan-30nama-accordion-item.active').removeClass('active')
    }
    $(this).parent().find('.lan-30nama-accordion-item-body').slideToggle()
    $(this).parent().toggleClass('active')
    $(this).find('.lan-30nama-accordion-item-icon i').fadeToggle(0)
})

$('.lan-30nama-play-button').on('click', function () {
    $('.lan-30nama-video-cover').fadeOut(100)
    $('.lan-30nama-video')[0].play()
})

$(".lan-30nama-close-video").on('click', function() {
    $('.lan-30nama-video-cover').fadeIn(100)
    $('.lan-30nama-video')[0].pause()
})