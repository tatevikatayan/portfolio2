$(document).ready(function(){
    $('.head__slider').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 8000,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
    });
    $('.korlea__slider').slick({
        dots: false,
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 941,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: false,
              }
            },
            {
                breakpoint: 631,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  dots: false,
                }
            },
            {
                breakpoint: 441,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  dots: false,
                }
            }
        ]
    });
    $('.tarvitsetko__slider').slick({
        dots: false,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 769,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false,
            }
          }
        ]
    });

});
const menuList = document.querySelector('.menu__list');
document.querySelector('.menu').addEventListener('click', function(){
     menuList.style.display = 'block';
     document.querySelector('.menu').style.display = 'none';
})
document.querySelector('.cross').addEventListener('click',() => {
     menuList.style.display = 'none';
     document.querySelector('.menu').style.display = 'block';
})