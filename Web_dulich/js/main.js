let fn = {
  slick: function(){
    $(document).ready(function () {
      $(".slick-track-2").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
        draggable: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 1500
      });
    });
    $(document).ready(function () {
        $(".slick-track-3").slick({
          slidesToShow: 10,
          slidesToScroll: 2,
          infinite: true,
          arrows: true,
          draggable: true,
          dots: true,
          autoplay: true,
          autoplaySpeed: 1500
        });
      });
  },
  headerNavigation: function(){
    let locationNavigation = document.querySelectorAll('a[href="/tour_list.html"]')
    for (let i = 0; i < locationNavigation.length; i++) {
        locationNavigation[i].addEventListener('click', function (e) {
            e.preventDefault()
            let location = e.target.innerText;
            localStorage.removeItem('location');
            localStorage.setItem('location', location.replace("Du lịch " ,""));
            window.location.href = '/tour_list.html';
        })
    }
  }, 
  resizeImage : function(){
    document.querySelector(".current_big_image").style.width = window.innerWidth + "px";
    window.addEventListener('resize', function () {
    document.querySelector(".current_big_image").style.width = window.innerWidth + "px";
    });
  }
}


fn.slick();
fn.headerNavigation();
fn.resizeImage();


