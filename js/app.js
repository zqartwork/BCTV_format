let selectCustom = () => {
    let cs = $('.custom_select');
    let csMenu = $('.select_menu');
    let csMenuOpt = $('.select_menu li')

    cs.click(function () {
        $(this).attr('tabindex', 1).focus();
        $(this).toggleClass('active');
        $(this).children('.select_menu').slideToggle(300);
    })
    cs.focusout(function () {
        $(this).removeClass('active');
        $(this).children('.select_menu').slideUp(300);
    })
    csMenuOpt.click(function () {
        $(this).parents('.custom_select').find('.selected').text($(this).text());
        $(this).parents('.custom_select').find('#data_input').attr('value', $(this).attr('id'));
    })
}
let activeTag = () => {
    let tagB = $('.filter_tag');

    tagB.click(function () {
        $(this).attr('tabindex', 1).focus();
        $(this).toggleClass('active');
    })
    tagB.focusout(function () {
        $(this).removeClass('active');
    })
}
let stickyNav = () => {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 0) {
            $('.navbar').addClass('sticky');
        }
        else {
            $('.navbar').removeClass('sticky');
        }
    });
}
let slideOpenTrans = () => {
    $('.sidenav-trigger').on('click', function () {
        // $('#ham-ani').toggleClass('open');
    })

}
