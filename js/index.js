var swiper = new Swiper('.swiper-container', {
    loop:true,
    autoplay:true,
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
      
    },
  });

  window.addEventListener('load',function(){
    $('.dropdown-toggle').dropdown()
  })