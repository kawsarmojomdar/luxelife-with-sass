

// const brands = document.querySelector('ul.brands'),
//       total_brand = brands.children.length;
//       // alert(total_brand);
//   document.documentElement.style.setProperty('$total-brand', total_brand);
//   for (let i = 0; i < total_brand; i++) {
//     brands.appendChild(brands.children[i].cloneNode(true))
//   }

$(document).ready(function(){

  // video area
  $('.active-video').magnificPopup({
    type: 'iframe'
    // other options
  });


  // counter active
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });


    // prevArrow: '<span class="slick-prev" style="display: inline-block;"><i class="fas fa-angle-right"></i></span>',
    // nextArrow: '<span class="slick-next" style="display: inline-block;"><i class="fas fa-angle-left"></i></span>',
    // showcase-active
    $('.showcase-active').slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: '<span class="slick-next" style="display: inline-block;"><i class="fas fa-angle-left"></i></span>',
      prevArrow: '<span class="slick-prev" style="display: inline-block;"><i class="fas fa-angle-right"></i></span>',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });                    
    
    // testomonial-active
    $('.testomonial-active').slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: '<span class="slick-next" style="display: inline-block;"><i class="fas fa-angle-left"></i></span>',
      prevArrow: '<span class="slick-prev" style="display: inline-block;"><i class="fas fa-angle-right"></i></span>',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 800,
          settings: {
            
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });                    
    // blog-active
    $('.blog-active').slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: '<span class="slick-next" style="display: inline-block;"><i class="fas fa-angle-left"></i></span>',
      prevArrow: '<span class="slick-prev" style="display: inline-block;"><i class="fas fa-angle-right"></i></span>',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });                    
    
})

// console.log("kawsar");

// console.log(navigation);
//   // for menu bar
// let check = document.getElementById('check');
// check.addEventListener('change', function(){
//   let navigation = document.getElementsByClassName("navigation");``
//   navigation.style.disply = this.checked ? 'block' : 'none';
// })


  
    
  