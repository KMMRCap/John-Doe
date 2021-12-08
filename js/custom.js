$('#works li').click((e) => {
    $('#works li a').removeClass("active");
    $(e.target).addClass('active');
    let filter = $(e.target).attr('data-filter')
    $('.gallery-cont').children().each((e, item) => {
        $(item).hide();
        if ($(item).attr('data-item') === filter || filter === '*') {
            $(item).fadeIn()
        }
    })
})

$(window).scroll(() => {
    if ($(window).scrollTop() > $('.navbar').position().top + ($('.navbar').outerHeight() * 2)) {
        $('.navbar').addClass('fixed')
        $('.mode-cont').addClass('fixed-gear')
    }
    else {
        $('.navbar').removeClass('fixed')
        $('.mode-cont').removeClass('fixed-gear')
    }

    if ($(window).scrollTop() > $('#home').position().top) {
        $('#my-nav a').removeClass('active');
        $('#my-nav a')[0].classList.add('active');
    }

    if ($(window).scrollTop() > $('#about-me').position().top - 200) {
        $('#my-nav a').removeClass('active');
        $('#my-nav a')[1].classList.add('active');
    }

    if ($(window).scrollTop() > $('#skills').position().top - 200) {
        $('#my-nav a').removeClass('active');
        $('#my-nav a')[2].classList.add('active');
    }

    if ($(window).scrollTop() > $('#works').position().top - 100) {
        $('#my-nav a').removeClass('active');
        $('#my-nav a')[3].classList.add('active');
    }

    if ($(window).scrollTop() > $('#contact-me').position().top - 400) {
        $('#my-nav a').removeClass('active');
        $('#my-nav a')[4].classList.add('active');
    }
})

let text = 'An Expert Web Developer ...';
let count = 1;

setInterval(() => {
    let slicer = text.slice(0, count);
    $('.text-writer').text(slicer);
    count = count + 1;
    if (count === text.length) {
        setTimeout(() => {
            count = 0
        }, 2000)
    }
}, 100)

$('.mode-cont').click(() => {
    $('.mode-cont div').toggleClass('active')
})

$('.mode-cont a.text-light').click(() => {
    $('body').css({color:'white',background:'#222'})
    $('.card').css({color:'white',background:'#333'})
    $('#skills .card').removeClass('bg-white')
    $('#works a').addClass('text-white')
    $('#works a').removeClass('text-dark')
})

$('.mode-cont a.text-dark').click(() => {
    $('body').css({color:'black',background:'#fff'})
    $('.card').css({color:'black',background:'#e6e6e6'})
    $('#skills .card').addClass('bg-white')
    $('#works a').removeClass('text-white')
    $('#works a').addClass('text-dark')
})