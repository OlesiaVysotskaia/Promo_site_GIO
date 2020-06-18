if (window.matchMedia("(max-width: 767px)").matches) {
  let mobile_menu = anime.timeline({
  autoplay: false
  })

  mobile_menu
  .add({
    targets: '.nav_mobile',
    begin: function () {
      document.querySelector('.nav_mobile').style.display = 'none'}
  })
  .add({
    targets: '.content',
    duration: 400,
    top: ['110px','265px'],
    easing: 'easeOutBack',
  }, 700)
  .add({
    begin: function () {
      document.querySelector('body').style.backgroundColor = '#63FF49'}
  }, 700)
  .add({
    begin: function () {
      document.querySelector('.navigation').style.backgroundColor = '#63FF49'}
  }, 700)
  .add({
    targets: '.font',
    color: '#000000'
  }, 700)
  .add({
    targets: '.int',
    color: '#000000'
  }, 700)
  .add({
    begin: function () {
      document.querySelector('.nav-back-block').style.display = 'flex'}
  }, 1200)
  .add({
    begin: function () {
      document.querySelector('.nav_mobile-back').style.display = 'flex'}
  }, 1200)
  .add({
    targets: '.nav_mobile-back',
    duration: 300,
    rotate: ['360deg','0deg'],
    easing: 'easeInBack',
  }, 1300)
  .add({
    begin: function () {
      document.querySelector('.nav').style.display = 'flex'}
  }, 1200)
  .add({
    targets: '.nav',
    duration: 300,
    top: ['-100px','75px'],
    easing: 'easeOutBack',
  }, 1300)


  let mobile_menuPlay =
  document.querySelector('.nav_mobile')

  mobile_menuPlay.onclick = mobile_menu.play





  let mobile_menu_back = anime.timeline({
  autoplay: false
  })

  mobile_menu_back
  .add({
    targets: '.nav',
    duration: 300,
    top: ['75px','100px'],
    easing: 'easeInBack',
  }, 200)
  .add({
    begin: function () {
      document.querySelector('.nav').style.display = 'none'}
  }, 600)
  .add({
    targets: '.nav_mobile-back',
    duration: 300,
    rotate: ['0deg','360deg'],
    easing: 'easeInBack',
  }, 200)
  .add({
    begin: function () {
      document.querySelector('.nav_mobile-back').style.display = 'none'}
  }, 600)
  .add({
    begin: function () {
      document.querySelector('.nav-back-block').style.display = 'none'}
  }, 600)
  .add({
    begin: function () {
      document.querySelector('.navigation').style.backgroundColor = 'black'}
  }, 800)
  .add({
    begin: function () {
      document.querySelector('body').style.backgroundColor = 'black'}
  }, 800)
  .add({
    targets: '.font',
    color: '#FFFFFF'
  }, 800)
  .add({
    targets: '.int',
    color: '#63FF49'
  }, 800)
  .add({
    targets: '.content',
    duration: 400,
    top: ['110px'],
    easing: 'easeOutBack',
  }, 900)
  .add({
    targets: '.nav_mobile',
    begin: function () {
      document.querySelector('.nav_mobile').style.display = 'block'}
  }, 900)

  let mobile_menu_backPlay =
  document.querySelector('.nav_mobile-back')

  mobile_menu_backPlay.onclick = mobile_menu_back.play
}

$(document).ready(function() {
$(".poster1").click(function() {
$(".poster1").toggleClass("hide");
});});
$(document).ready(function() {
$(".poster2").click(function() {
$(".poster2").toggleClass("hide");
});});
$(document).ready(function() {
$(".poster3").click(function() {
$(".poster3").toggleClass("hide");
});});
$(document).ready(function() {
$(".poster4").click(function() {
$(".poster4").toggleClass("hide");
});});
$(document).ready(function() {
$(".poster5").click(function() {
$(".poster5").toggleClass("hide");
});});
$(document).ready(function() {
$(".poster6").click(function() {
$(".poster6").toggleClass("hide");
});});
$(document).ready(function() {
$(".poster7").click(function() {
$(".poster7").toggleClass("hide");
});});
$(document).ready(function() {
$(".poster8").click(function() {
$(".poster8").toggleClass("hide");
});});
$(document).ready(function() {
$(".poster9").click(function() {
$(".poster9").toggleClass("hide");
});});
$(document).ready(function() {
$(".poster10").click(function() {
$(".poster10").toggleClass("hide");
});});
$(document).ready(function() {
$(".poster11").click(function() {
$(".poster11").toggleClass("hide");
});});
$(document).ready(function() {
$(".poster12").click(function() {
$(".poster12").toggleClass("hide");
});});

// let poster_hide1 = anime.timeline({
// autoplay: false
// })
// poster_hide1
// .add({
//   targets: '.poster1',
//   opacity: [100,0],
//   easing: 'easeInSine',
//   duration: 200,
// })
//
// let poster_hide2 = anime.timeline({
// autoplay: false
// })
// poster_hide2
// .add({
//   targets: '.poster2',
//   opacity: [100,0],
//   easing: 'easeInSine',
//   duration: 200,
// })
//
// let poster_hide3 = anime.timeline({
// autoplay: false
// })
// poster_hide3
// .add({
//   targets: '.poster3',
//   opacity: [100,0],
//   easing: 'easeInSine',
//   duration: 200,
// })
//
// let poster_hide4 = anime.timeline({
// autoplay: false
// })
// poster_hide4
// .add({
//   targets: '.poster4',
//   opacity: [100,0],
//   easing: 'easeInSine',
//   duration: 200,
// })
//
// let poster_hide5 = anime.timeline({
// autoplay: false
// })
// poster_hide5
// .add({
//   targets: '.poster5',
//   opacity: [100,0],
//   easing: 'easeInSine',
//   duration: 200,
// })
//
// let poster_hide6 = anime.timeline({
// autoplay: false
// })
// poster_hide6
// .add({
//   targets: '.poster6',
//   opacity: [100,0],
//   easing: 'easeInSine',
//   duration: 200,
// })
//
// let poster_hide7 = anime.timeline({
// autoplay: false
// })
// poster_hide7
// .add({
//   targets: '.poster7',
//   opacity: [100,0],
//   easing: 'easeInSine',
//   duration: 200,
// })
//
// let poster_hide8 = anime.timeline({
// autoplay: false
// })
// poster_hide8
// .add({
//   targets: '.poster8',
//   opacity: [100,0],
//   easing: 'easeInSine',
//   duration: 200,
// })
//
// let poster_hide9 = anime.timeline({
// autoplay: false
// })
// poster_hide9
// .add({
//   targets: '.poster9',
//   opacity: [100,0],
//   easing: 'easeInSine',
//   duration: 200,
// })
//
// let poster_hide10 = anime.timeline({
// autoplay: false
// })
// poster_hide10
// .add({
//   targets: '.poster10',
//   opacity: [100,0],
//   easing: 'easeInSine',
//   duration: 200,
// })
//
// let poster_hide11 = anime.timeline({
// autoplay: false
// })
// poster_hide11
// .add({
//   targets: '.poster11',
//   opacity: [100,0],
//   easing: 'easeInSine',
//   duration: 200,
// })
//
// let poster_hide12 = anime.timeline({
// autoplay: false
// })
// poster_hide12
// .add({
//   targets: '.poster12',
//   opacity: [100,0],
//   easing: 'easeInSine',
//   duration: 200,
// })
//
//
// let poster_hide1Play =
// document.querySelector('.poster1')
//
// poster_hide1Play.onclick = poster_hide1.play
//
// let poster_hide2Play =
// document.querySelector('.poster2')
//
// poster_hide2Play.onclick = poster_hide2.play
//
// let poster_hide3Play =
// document.querySelector('.poster3')
//
// poster_hide3Play.onclick = poster_hide3.play
//
// let poster_hide4Play =
// document.querySelector('.poster4')
//
// poster_hide4Play.onclick = poster_hide4.play
//
// let poster_hide5Play =
// document.querySelector('.poster5')
//
// poster_hide5Play.onclick = poster_hide5.play
//
// let poster_hide6Play =
// document.querySelector('.poster6')
//
// poster_hide6Play.onclick = poster_hide6.play
//
// let poster_hide7Play =
// document.querySelector('.poster7')
//
// poster_hide7Play.onclick = poster_hide7.play
//
// let poster_hide8Play =
// document.querySelector('.poster8')
//
// poster_hide8Play.onclick = poster_hide8.play
//
// let poster_hide9Play =
// document.querySelector('.poster9')
//
// poster_hide9Play.onclick = poster_hide9.play
//
// let poster_hide10Play =
// document.querySelector('.poster10')
//
// poster_hide10Play.onclick = poster_hide10.play
//
// let poster_hide11Play =
// document.querySelector('.poster11')
//
// poster_hide11Play.onclick = poster_hide11.play
//
// let poster_hide12Play =
// document.querySelector('.poster12')
//
// poster_hide12Play.onclick = poster_hide12.play
//
//
//
//
// let poster_show1 = anime.timeline({
// autoplay: false
// })
// poster_show1
// .add({
//   targets: '.poster1',
//   opacity: [0,100],
//   easing: 'easeInSine',
//   duration: 200,
// })
// let poster_show1Play =
// document.querySelector('body')
//
// poster_show1Play.onclick = poster_show1.play
